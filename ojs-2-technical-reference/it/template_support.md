# Template Support

Smarty templates (http://smarty.net) are accessed and managed via the `TemplateManager` class (`classes/template/TemplateManager.inc.php`), which performs numerous common tasks such as registering additional Smarty functions such as {translate ...}, which is used for localization, and setting up commonly-used template variables such as URLs and date formats.
