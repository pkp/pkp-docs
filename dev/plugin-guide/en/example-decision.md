---
title: Example - Add an Editorial Decision - Plugin Guide for OJS, OMP and OPS
description: How to add a custom editorial decision in a plugin for OJS, OMP or OPS.
book: dev-plugin-guide
version: 3.5
---

# Add an Editorial Decision

> Learn more about [decisions](/dev/documentation/en/decisions) in our developer documentation.
{:.notice}

Plugins can add, edit and remove editorial decisions in each stage of the workflow. In the core application, decisions are used to accept and decline submissions, and send them from one stage of the workflow to another. However, decisions can be used to perform any routine editorial action.

A plugin can modify the editorial decisions in the system to:

- Remove an undesired decision, like the decision to skip review.
- Prevent an editorial decision from being recorded unless certain conditions are met.
- Add a decision to perform an action, like sending files to a third-party service provider.

## Remove the skip review decision

A journal, press or preprint server may want to remove the editorial decision to skip the review stage, to ensure an editor does not bypass peer review. First, add a hook to remove the decision from the list of valid decisions.

```php
use APP\decision\types\SkipExternalReview;
use Illuminate\Database\Eloquent\Collection;
use PKP\plugins\Hook;
use PKP\decision\DecisionType;

Hook:add('Decision::types', function(string $hookName, array $args) {
    $decisionTypes &= $args[0]; /** @var Collection */

    $decisionTypes = $decisionTypes->filter(
        function(DecisionType $type, int $i) {
            return !is_a($type, SkipExternalReview::class);
        }
    );

    return false;
});
```

Then add a hook to remove the decision from the list of decisions in the submission stage.

```php
use APP\decision\types\SkipExternalReview;
use PKP\plugins\Hook;
use PKP\decision\DecisionType;

Hook:add('Workflow::Decisions', function(string $hookName, array $args) {
    $decisionTypes &= $args[0]; /** @var array */
    $stageId = $args[1]; /** @var int */

    if ($stageId === WORKFLOW_STAGE_ID_SUBMISSION) {
        $decisionTypes = array_filter(
            $decisionTypes,
            function(DecisionType $type) {
                return !is_a($type, SkipExternalReview::class);
            }
        );
    }

    return false;
}
```

## Require completed reviews before accepting a submission

A journal or press may want to require at least 3 review assignments to be completed before a submission can be accepted, to ensure all submissions receive an appropriate level of peer review. First, create a new decision that extends the `Accept` decision.

```php
namespace APP\plugins\generic\example;

use APP\submission\Submission;
use Illuminate\Validation\Validator;
use PKP\context\Context;
use APP\decision\types\Accept;
use PKP\db\DAORegistry;
use PKP\submission\reviewAssignment\ReviewAssignmentDAO;

class AcceptReviewed extends Accept
{
    public function validate(array $props, Submission $submission, Context $context, Validator $validator, ?int $reviewRoundId = null)
    {
        parent::validate($props, $submission, $context, $validator, $reviewRoundId);

        /** @var ReviewAssignmentDAO $reviewRoundDao */
        $reviewAssignmentDao = DAORegistry::getDAO('ReviewAssignmentDAO');
        $reviewAssignments = $reviewAssignmentDao->getByReviewRoundId($reviewRoundId);

        $completed = 0;
        foreach($reviewAssignments as $reviewAssignment) {
            if ($reviewAssignment->getDateCompleted()) {
                $completed++;
            }
        }

        if ($completed < 3) {
            $validator->errors()->add('reviews', 'There must be at least 3 completed review assignments before a submission can be accepted.');
        }
    }
}
```

Then replace this decision in the list of valid decisions and the list of decisions in the review stage.

```php
use APP\decision\types\Accept;
use Illuminate\Database\Eloquent\Collection;
use PKP\plugins\Hook;
use PKP\decision\DecisionType;

Hook:add('Decision::types', function(string $hookName, array $args) {
    $decisionTypes &= $args[0]; /** @var Collection */

    $decisionTypes = $decisionTypes->map(
        function(DecisionType $type, int $i) {
            return is_a($type, Accept::class)
                ? new AcceptReviewed()
                : $type;
        }
    );

    return false;
});

Hook:add('Workflow::Decisions', function(string $hookName, array $args) {
    $decisionTypes &= $args[0]; /** @var array */
    $stageId = $args[1]; /** @var int */

    if ($stageId === WORKFLOW_STAGE_ID_EXTERNAL_REVIEW) {
        $decisionTypes = array_map(
            function(DecisionType $type) {
                return is_a($type, Accept::class)
                    ? new AcceptReviewed()
                    : $type;
            },
            $decisionTypes
        );
    }

    return false;
}
```

## Select and send files

A plugin may want to add an editorial decision to the production stage that allows an editor to select production-ready files to be sent to a third-party service. First, create a new  decision type.

```php
namespace PKP\plugins\generic\example;

use APP\decision\Decision;
use APP\facades\Repo;
use APP\submission\Submission;
use Illuminate\Validation\Validator;
use PKP\context\Context;
use PKP\decision\DecisionType;
use PKP\decision\Steps;
use PKP\decision\steps\Form;
use PKP\submission\reviewRound\ReviewRound;
use PKP\submissionFile\SubmissionFile;
use PKP\user\User;

class SendFilesToService extends DecisionType
{
    /**
     * Create a unique constant for your decision type.
     *
     * To avoid clashes with the core application, use
     * a number in the 900 range.
     *
     * @see Decision
     */
    public const SEND_FILES_TO_SERVICE = 900;

    /**
     * @see self::SEND_FILES_TO_SERVICE
     */
    public function getDecision(): int
    {
        return self::SEND_FILES_TO_SERVICE;
    }

    /**
     * This decision can be recorded when the submission
     * is in the production stage
     */
    public function getStageId(): int
    {
        return WORKFLOW_STAGE_ID_PRODUCTION;
    }

    /**
     * Add a step to the record decision UI to select
     * the files to be sent to the third-party service
     *
     * See the dev documentation about forms to learn
     * how to create the SelectFilesForm.
     *
     * @see https://docs.pkp.sfu.ca/dev/documentation/en/frontend-forms
     */
    public function getSteps(Submission $submission, Context $context, User $editor, ?ReviewRound $reviewRound): Steps
    {
        $steps = new Steps($this, $submission, $context);

        $steps->addStep(
            new Form(
                'select-files',
                'Select Files',
                'Select the files that should be sent to the third-party service.',
                new SelectFilesForm($submission)
            )
        );

        return $steps;
    }

    /**
     * Check that the files selected by the user match
     * a valid production-ready submission file
     */
    public function validate(array $props, Submission $submission, Context $context, Validator $validator, ?int $reviewRoundId = null)
    {
        parent::validate($props, $submission, $context, $validator, $reviewRoundId);

        if (!isset($props['actions'])) {
            return;
        }

        foreach ((array) $props['actions'] as $index => $action) {

            switch ($action['id']) {

                case 'select-files':
                    if (!is_array($action['selected-files']) || empty($action['selected-files'])) {
                        $validator->errors()->add('actions.' . $index . '.selected-files', 'You must select at least one file.');

                    } else {
                        $ids = Repo::submissionFile()
                            ->getCollector()
                            ->filterBySubmissionIds([$submission->getId()])
                            ->filterByFilestages([
                                SubmissionFile::SUBMISSION_FILE_PRODUCTION_READY,
                            ])
                            ->getIds();

                        foreach ($action['selected-files'] as $selectedFile) {
                            if (!$ids->contains($selectedFile)) {
                                $validator->errors()->add('actions.' . $index . '.selected-files', 'One or more of the selected files is not valid.');
                                break;
                            }
                        }
                    }
                    break;
            }
        }
    }

    /**
     * Send the selected files to a third-party service
     *
     * This method is only run after validating and recording
     * the decision.
     */
    public function runAdditionalActions(Decision $decision, Submission $submission, User $editor, Context $context, array $actions)
    {
        parent::runAdditionalActions($decision, $submission, $editor, $context, $actions);

        foreach ($actions as $action) {
            switch ($action['id']) {
                case 'select-files':

                    // Send the files

                    break;
            }
        }
    }
}
```

Then add this decision to the list of valid decisions and the list of decisions in the production stage.

```php
use Illuminate\Database\Eloquent\Collection;
use PKP\plugins\Hook;

Hook:add('Decision::types', function(string $hookName, array $args) {
    $decisionTypes &= $args[0]; /** @var Collection */

    $decisionTypes = $decisionTypes->push(new SendFilesToService());

    return false;
});

Hook:add('Workflow::Decisions', function(string $hookName, array $args) {
    $decisionTypes &= $args[0]; /** @var array */
    $stageId = $args[1]; /** @var int */

    if ($stageId === WORKFLOW_STAGE_ID_PRODUCTION) {
        $decisionTypes[] = new SendFilesToService();
    }

    return false;
}
```

---

View more [examples](./examples).
