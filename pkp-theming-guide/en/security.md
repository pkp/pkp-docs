# Security

The OJS or OMP application handles most of the security concerns that arise. However, there are some attacks you must protect yourself against when creating custom templates for your themes.

## Cross-site Scripting (XSS)

A [cross-site-scripting vulnerability](https://en.wikipedia.org/wiki/Cross-site_scripting) occurs when a malicious user is able to inject code into a page that is visited by another user. Whenever content displayed on the page comes from user input it must be escaped.

Consider the following example.

```php
{$user->getGivenName()} made a comment.
```

A malicious user can change their given name to `<script>/* malicious code */<script>`. In the example above, the malicious code would be executed whenever _anyone_ visited the page. If a Journal Manager visits the page, the malicious code can be used to perform actions that only a Journal Manager can do, such as changing the journal's title.

Use the `|escape` filter to prevent this attack. This will cause any HTML "special characters" to be converted into escaped HTML; thus `<script>...</script>` would be displayed literally, rather than interpreted as an HTML script tag. The `escape` modifier is a feature of the Smarty template engine and is detailed in the [Smarty documentation](https://www.smarty.net/docs/en/language.modifier.escape.tpl).

```php
{$user->getGivenName()|escape} made a comment.
```

Attacks can come from any input controlled by a user, whether they are a disgruntled former Section Editor or a malicious user posing as an author. Make sure to escape submission titles, author names, issue titles and any other information controlled by anyone other than a Journal Manager.

```php
{$submission->getLocalizedTitle()|escape}
{$author->getFullName()|escape}
{$issue->getIssueIdentification()|escape}
```

Published submissions and issues can have custom URL paths. You can escape URLs that receive user input of this kind with `{url|escape ...}`.

```php
{url|escape op="view" path=$issue->getBestIssueId($currentJournal)}
```

Some fields allow the user to enter HTML code, such as a submission abstract or issue description. These fields should be escaped with the `strip_unsafe_html` filter. This filter allows only certain "safe" HTML tags, as configured in the `allowed_html` setting in `config.inc.php`.

```php
{$submission->getLocalizedAbstract()|strip_unsafe_html}
{$issue->getLocalizedDescription()|strip_unsafe_html}
```

There are other kinds of escaping you may need to apply, depending on the context in which the content is to be included. For example, `json_encode` can be useful when including a value in Javascript:

```
<script>
	alert({$userMessage|json_encode|default:""});
</script>
```

In the above example, `json_encode` provides the enclosing quotes and ensures that only literal content can be included (as opposed to e.g. function calls). If null content is a possibility, the `default` modifier can handle it as above, by converting it to an empty string.

Using an `escape` modifier here e.g. `alert("{$userMessage|escape}");` might be tempting at a glance -- but it is not correct, as `<`, `>`, `&`, etc. will be garbled.

It is important to understand the appropriate kind of escaping to use, based on the context you are incorporating user-supplied content into. If in doubt, you can always ask, or follow a "safe" example from elsewhere in the OJS codebase. *You should almost always use some kind of escaping when including dynamic content in a Smarty template.*
