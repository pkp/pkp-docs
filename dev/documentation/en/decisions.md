---
title: Decisions - Technical Documentation - OJS|OMP|OPS
---

# Decisions

Decisions determine how a submission moves through each stage of the editorial workflow. There are separate decision types for every action taken by an editor during the course of reviewing, copyediting and preparing an author's work for publication.

For example, when an editor records an `Accept` decision, several actions may occur:

- the submission will be moved from the review stage to the copyediting stage
- revision files will be promoted to the copyediting [file stage](submission-files)
- the authors and reviewers will be informed of the decision

## Record a Decision

Decisions can only be added. They can not be edited or deleted like other entities. This ensures that the editorial record is complete.

If a decision needs to be reversed, another decision should be recorded that changes the submission status appropriately. Decisions should only be deleted when the whole submission is deleted.

Create a decision, validate it against the decision type, and record it.

```php
use APP\decision\Decision;
use APP\facades\Repo;
use PKP\core\Core;

$decisionData = [
    'decision' => Decision::INITIAL_DECLINE,
    'dateDecided' => Core::getCurrentDate(),
    'submissionId' => $submission->getId(),
    'editorId' => $user->getId(),
    'stageId' => $submission->getData('stageId'),
];

$errors = Repo::decision()->validate(
    $decisionData,
    Repo::decision()->getDecisionType(Decision::INITIAL_DECLINE),
    $submission,
    $context
);

if (!empty($errors)) {
    // Invalid decision
} else {
    $decision = Repo::decision()->newDataObject($decisionData);
    Repo::decision()->add($decision);
}
```

## Decision Types

Each decision type extends the `DecisionType` [[source](https://github.com/pkp/pkp-lib/blob/main/classes%2Fdecision%2FDecisionType.inc.php)] class. Every decision type must specify the decision identifier, such as `Decision::DECLINE` or `Decision::ACCEPT`, and the stage of the workflow that this decision may be taken in.

```php
namespace PKP\decision\types;

class ExampleAccept extends DecisionType
{
    public function getDecision(): int
    {
        return Decision::ACCEPT;
    }

    public function getStageId(): int
    {
        return WORKFLOW_STAGE_ID_EXTERNAL_REVIEW;
    }
}
```

Several abstract methods must be defined to configure the decision type. When the following example decision type is recorded, the submission will be moved to the copyediting stage.

```php
namespace PKP\decision\types;

class ExampleAccept extends DecisionType
{
    public function getDecision(): int
    {
        return Decision::ACCEPT;
    }

    public function getStageId(): int
    {
        return WORKFLOW_STAGE_ID_EXTERNAL_REVIEW;
    }

    public function getNewStageId(): ?int
    {
        // Change the submission's stage
        return WORKFLOW_STAGE_ID_EDITING;
    }

    public function getNewStatus(): ?int
    {
        // Do not change the submission's status
        return null;
    }

    public function getNewReviewRoundStatus(): ?int
    {
        // Do not change the status of the review round this decision was recorded in
        return null;
    }
}
```

Read the code to understand all of the methods that must be defined to configure a `DecisionType` ([sour[e](https://github.com/pkp/pkp-lib/blob/main/classes%2Fdecision%2FDecisionType.inc.php).
]
## Actions

When a decision is added, the `actions` prop may be used to pass information about additional actions that are not supported by the configuration methods.

```php
$actions = $decision->getData('actions'));
Repo::decision()->add($decision);

print_r($actions);

// [
//     [
//         'id' => 'convertDocToXml',
//         'fileIds' => [123]
//     ]
// ]
```

This will be passed to the `$actions` argument of a callback function.

```php
namespace PKP\decision\types;

use APP\decision\Decision;
use APP\submission\Submission;
use PKP\context\Context;
use PKP\decision\DecisionType;
use PKP\user\User;

class SendToProduction extends DecisionType
{
    public function runAdditionalActions(Decision $decision, Submission $submission, User $editor, Context $context, array $actions)
    {
        parent::runAdditionalActions($decision, $submission, $editor, $context, $actions);

        print_r($actions);

        // [
        //     [
        //         'id' => 'convertDocToXml',
        //         'fileIds' => [123]
        //     ]
        // ]
    }
}
```

Use the `actions` prop to do anything, such as send a notification, assign a new editor, transfer files to a remote service, or convert a file from one format to another.

```php
namespace PKP\decision\types;

use APP\decision\Decision;
use APP\submission\Submission;
use PKP\context\Context;
use PKP\decision\DecisionType;
use PKP\user\User;

class SendToProduction extends DecisionType
{
    protected string $ACTION_CONVERT_DOC_TO_XML = 'convertDocToXml';

    public function runAdditionalActions(Decision $decision, Submission $submission, User $editor, Context $context, array $actions)
    {
        parent::runAdditionalActions($decision, $submission, $editor, $context, $actions);

        foreach ($actions as $action) {
            if ($action['id'] === $this->ACTION_CONVERT_DOC_TO_XML) {
                $this->convertFiles($actions['fileIds']);
            }
        }
    }
}
```

Usually, data in the `actions` prop will come from user input. Validate the data in the `actions` prop before the decision is added.

```php
namespace PKP\decision\types;

use APP\decision\Decision;
use APP\submission\Submission;
use Illuminate\Validation\Validator;
use PKP\context\Context;
use PKP\decision\DecisionType;

class SendToProduction extends DecisionType
{
    protected string $ACTION_CONVERT_DOC_TO_XML = 'convertDocToXml';

    public function validate(array $props, Submission $submission, Context $context, Validator $validator, ?int $reviewRoundId = null)
    {
        parent::validate($props, $submission, $context, $validator, $reviewRoundId);

        if (!isset($props['actions'])) {
            return;
        }

        foreach ((array) $props['actions'] as $index => $action) {
            if ($action['id'] === $this->ACTION_CONVERT_DOC_TO_XML) {
                if (empty($action['fileIds'])) {
                    $validator->errors()->add('actions.' . $index, __('missing.file.ids'));
                }
            }
        }
    }
}
```

Every decision type defines its own actions. An action supported by one decision type won't work on a different decision type. If you want to perform the same action in two or more decision types, use a [trait](https://www.php.net/manual/en/language.oop5.traits.php).

## Workflow

The user can be shown a step-by-step workflow to record a decision. This is useful when the decision type includes one or more custom actions that require user input. For example, an editor may want to customize an email before it is sent to the author.

The following example adds a two-step workflow to a decision type: one step to ask if the editor wants to request authentication from all authors and one step to send an email to other editors.

```php
namespace PKP\decision\types;

use APP\components\forms\decision\RequestContributorAuthentication;
use APP\submission\Submission;
use PKP\context\Context;
use PKP\decision\steps\Email;
use PKP\decision\steps\Form;
use PKP\decision\Steps;
use PKP\mail\mailables\DecisionAcceptNotifyEditors;
use PKP\user\User;
use PKP\security\Role;
use PKP\submission\reviewRound\ReviewRound;

class ExampleAccept extends DecisionType
{
    protected string $ACTION_NOTIFY_EDITORS = 'notifyEditors';
    protected string $ACTION_CONTRIBUTOR_AUTHENTICATION = 'contributorAuthentication';

    public function getSteps(Submission $submission, Context $context, User $editor, ?ReviewRound $reviewRound): Steps
    {
        $steps = new Steps($this, $submission, $context, $reviewRound);

        $steps->addStep(new Form(
            $this->ACTION_CONTRIBUTOR_AUTHENTICATION,
            '',
            'Request Authentication',
            new RequestContributorAuthentication($context, $submission)
        ));

        $mailable = new DecisionAcceptNotifyEditors($context, $submission);
        $editors = $steps->getStageParticipants(Role::ROLE_ID_SUB_EDITOR);

        $steps->addStep(new Email(
            $this->ACTION_NOTIFY_REVIEWERS,
            'Notify Editors',
            'Send an email notification to all editors assigned to the review stage.',
            $editors,
            $mailable
                ->sender($editor)
                ->recipients($editors),
            $context->getSupportedFormLocales()
        ));

        return $steps;
    }
}
```

Each step added to the workflow will create an `action` that must be validated and then processed in the `runAdditionalActions` callback.

```php
namespace PKP\decision\types;

use APP\components\forms\decision\RequestContributorAuthentication;
use APP\submission\Submission;
use PKP\context\Context;
use PKP\decision\steps\Email;
use PKP\decision\steps\Form;
use PKP\decision\Steps;
use PKP\mail\mailables\DecisionAcceptNotifyEditors;
use PKP\user\User;
use PKP\security\Role;
use PKP\submission\reviewRound\ReviewRound;

class ExampleAccept extends DecisionType
{
    protected string $ACTION_CONTRIBUTOR_AUTHENTICATION = 'contributorAuthentication';
    protected string $ACTION_NOTIFY_EDITORS = 'notifyEditors';

    public function getSteps(Submission $submission, Context $context, User $editor, ?ReviewRound $reviewRound): Steps
    {
        $steps = new Steps($this, $submission, $context, $reviewRound);

        $steps->addStep(new Form(
            $this->ACTION_CONTRIBUTOR_AUTHENTICATION,
            '',
            'Request Authentication',
            new RequestContributorAuthentication($context, $submission)
        ));

        $mailable = new DecisionAcceptNotifyEditors($context, $submission);
        $editors = $steps->getStageParticipants(Role::ROLE_ID_SUB_EDITOR);

        $steps->addStep(new Email(
            $this->ACTION_NOTIFY_REVIEWERS,
            'Notify Editors',
            'Send an email notification to all editors assigned to the review stage.',
            $editors,
            $mailable
                ->sender($editor)
                ->recipients($editors),
            $context->getSupportedFormLocales()
        ));

        return $steps;
    }

    public function validate(array $props, Submission $submission, Context $context, Validator $validator, ?int $reviewRoundId = null)
    {
        parent::validate($props, $submission, $context, $validator, $reviewRoundId);

        if (!isset($props['actions'])) {
            return;
        }

        foreach ((array) $props['actions'] as $index => $action) {
            switch ($action['id']) {
                case $this->ACTION_CONTRIBUTOR_AUTHENTICATION:
                    // Validate the contributor authentication form
                    break;
                case $this->ACTION_NOTIFY_EDITORS:
                    // Validate the notify editors email
                    break;
            }
        }
    }

    public function runAdditionalActions(Decision $decision, Submission $submission, User $editor, Context $context, array $actions)
    {
        parent::runAdditionalActions($decision, $submission, $editor, $context, $actions);

        foreach ((array) $props['actions'] as $index => $action) {
            switch ($action['id']) {
                case $this->ACTION_CONTRIBUTOR_AUTHENTICATION:
                    // Send authentication request to all contributors
                    break;
                case $this->ACTION_NOTIFY_EDITORS:
                    // Send email notification to editors
                    break;
            }
        }
    }
}
```

There is also a workflow step to promote [submission files](./submission-files) from one file stage to another. The example below allows editors to promote files from the revisions file stage to the copyediting file stage.


```php
namespace PKP\decision\types;

use APP\submission\Submission;
use PKP\context\Context;
use PKP\decision\steps\PromoteFiles;
use PKP\decision\Steps;
use PKP\user\User;
use PKP\submission\reviewRound\ReviewRound;
use PKP\submissionFile\SubmissionFile;

class ExampleAccept extends DecisionType
{
    public function getSteps(Submission $submission, Context $context, User $editor, ?ReviewRound $reviewRound): Steps
    {
        $steps = new Steps($this, $submission, $context, $reviewRound);

        $steps->addStep((new PromoteFiles(
            'promoteFilesToCopyediting',
            'Select Files',
            'Select files to send to the copyediting stage.',
            SubmissionFile::SUBMISSION_FILE_FINAL,
            $submission,
            $this->getFileGenres($context->getId())
        ))->addFileList(
            'Revisions',
            Repo::submissionFile()
                ->getCollector()
                ->filterBySubmissionIds([$submission->getId()])
                ->filterByFileStages([SubmissionFile::SUBMISSION_FILE_REVIEW_REVISION])
                ->filterByReviewRoundIds([$reviewRound->getId()])
        ));

        return $steps;
    }
}
```

This step will promote the files selected by the editor automatically. No more code is required in the `DecisionType` class to promote the files. Learn more about [submission files and file stages](./submission-files).

## Add a Button

Each stage of the submission workflow displays buttons to record an editorial decision. To add or remove these buttons from the submission's workflow page, modify the `WorkflowHandler`.

```php
use APP\core\Application;
use APP\decision\types\SkipExternalReview;
use PKP\decision\types\InitialDecline;
use PKP\decision\types\RevertInitialDecline;
use PKP\decision\types\SendExternalReview;
use PKP\plugins\HookRegistry;

class WorkflowHandler extends PKPWorkflowHandler
{
    protected function getStageDecisionTypes(int $stageId): array
    {
        $submission = $this->getAuthorizedContextObject(Application::ASSOC_TYPE_SUBMISSION);
        switch ($stageId) {
            case WORKFLOW_STAGE_ID_SUBMISSION:
                $decisionTypes = [
                    new SendExternalReview(),
                    new SkipExternalReview(),
                ];
                if ($submission->getData('status') === Submission::STATUS_DECLINED) {
                    $decisionTypes[] = new RevertInitialDecline();
                } elseif ($submission->getData('status') === Submission::STATUS_QUEUED) {
                    $decisionTypes[] = new InitialDecline();
                }
                break;
            case WORKFLOW_STAGE_ID_...: // All other workflows
                break;
        }

        HookRegistry::call('Workflow::Decisions', [&$decisionTypes, $stageId]);

        return $decisionTypes;
    }
}
```

Add recommendations with a separate method.

```php
use PKP\decision\types\RecommendAccept;
use PKP\decision\types\RecommendDecline;
use PKP\decision\types\RecommendRevisions;
use PKP\plugins\HookRegistry;

class WorkflowHandler extends PKPWorkflowHandler
{
    protected function getStageRecommendationTypes(int $stageId): array
    {
        switch ($stageId) {
            case WORKFLOW_STAGE_ID_EXTERNAL_REVIEW:
                $decisionTypes = [
                    new RecommendRevisions(),
                    new RecommendAccept(),
                    new RecommendDecline(),
                ];
                break;
            default:
                $decisionTypes = [];
        }


        HookRegistry::call('Workflow::Recommendations', [$decisionTypes, $stageId]);

        return $decisionTypes;
    }
}
```
