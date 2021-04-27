# Security

The OJS or OMP application handles most of the security concerns that arise. However, there are some attacks you must protect yourself against when creating custom templates for your themes.

A [cross-site-scripting vulnerability](https://en.wikipedia.org/wiki/Cross-site_scripting) occurs when a malicious user is able to inject code into a page that is visited by another user. Whenever content displayed on the page comes from user input it must be escaped.

## Escape plain text

Consider the following example.

```php
{$user->getGivenName()} made a comment.
```

A malicious user can change their given name to `<script>/* malicious code */<script>`. In the example above, the malicious code would be executed whenever _anyone_ visited the page. If a Journal Manager visits the page, the malicious code can be used to perform actions that only a Journal Manager can do, such as changing the journal's title.

Use smarty's [escape](https://www.smarty.net/docs/en/language.modifier.escape.tpl) modifier to prevent this attack,

```php
{$user->getGivenName()|escape} made a comment.
```

This will convert special HTML characters into escaped HTML so that the `<script>` tags are displayed instead of executed.

Attacks can come from any input controlled by a user, whether they are a disgruntled former Section Editor or a malicious user posing as an author. Make sure to escape submission titles, author names, issue titles and any other information controlled by anyone other than a Journal Manager.

```php
{$submission->getLocalizedTitle()|escape}
{$author->getFullName()|escape}
{$issue->getIssueIdentification()|escape}
```

## Escape HTML

Some fields allow the user to enter HTML code, such as a submission abstract or issue description. These fields should be escaped with the `strip_unsafe_html` modifier.

```php
{$submission->getLocalizedAbstract()|strip_unsafe_html}
{$issue->getLocalizedDescription()|strip_unsafe_html}
```

You can configure which HTML tags are allowed with the `allowed_html` setting in your application's configuration file.

## Escape JavaScript

When including JavaScript in your theme, do not use the `escape` modifier because it will not remove the appropriate characters. For JavaScript, use the `json_encode` modifier when including user input.

```
<script>
    alert({$userMessage|json_encode|default:""});
</script>
```

This will ensure that only literal content is included and not function calls or other potentially malicious code. The `default` modifier will prevent a JavaScript error if `{$userMessage}` is `null`.

## Be cautious, stay safe

It is important to understand which kind of escaping you must use based on where you are using data supplied by a user. If in doubt, follow a safe example from the core application code or [ask in the forum](https://forum.pkp.sfu.ca/).

You should *almost always* use some kind of escaping when including dynamic content in a Smarty template.
