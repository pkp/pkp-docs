# Sending Emails

Emails templates for each locale are stored in an XML file called `dbscripts/xml/data/locale/[localeName]/email_templates_data.xml`. Each email has an identifier (called email_key in the XML file) such as `SUBMISSION_ACK`. This identifier is used in the PHP code to retrieve a particular email template, including body text and subject.

The following code retrieves and sends the `SUBMISSION_ACK` email, which is sent to authors as an acknowledgment when they complete a submission. (This snippet assumes that the current article ID is stored in `$articleId`.)

**Example 3.1. Example Code to Send a `SUBMISSION_ACK` Email**

````
// Fetch the article object using the article DAO.
$articleDao = &DAORegistry::getDAO('ArticleDAO');
$article = &$articleDao->getArticle($articleId);

// Load the required ArticleMailTemplate class
import('mail.ArticleMailTemplate');

// Retrieve the mail template by name.
$mail = &new ArticleMailTemplate($article, 'SUBMISSION_ACK');

if ($mail->isEnabled()) {
// Get the current user object and assign them as the recipient of this message.
$user = &Request::getUser();
$mail->addRecipient($user->getEmail(),
    $user->getFullName());

// Get the current journal object.
$journal = &Request::getJournal();

// This template contains variable names of the form {$variableName} that need to
// be replaced with the appropriate values. Note that while the syntax is similar
// to that used by Smarty templates, email templates are not Smarty templates. Only
// direct variable replacement is supported.
$mail->assignParams(array(
    'authorName' => $user->getFullName(),
    'authorUsername' => $user->getUsername(),
    'editorialContactSignature' => $journal->getSetting('contactName') .
        "\n" . $journal->getTitle(),
    'submissionUrl' => Request::getPageUrl() . 
        '/author/submission/' . $article->getArticleId()
));

$mail->send();
}

````

