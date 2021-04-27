# Functions & Modifiers

A number of functions have been added to Smarty's built-in template functions to assist in common tasks such as localization.

- `translate` (e.g. `{translate key="my.locale.key" myVar="value"}`): This function provides a locale-specific translation. (See the Internationalization section.) Variable replacement is possible using Smarty-style syntax; using the above example, if the `locale.xml` file contains:

````
<message key="my.locale.key">myVar equals “{$myVar}".</message>
````

The resulting output will be:

````
myVar equals “value".
````

(Note that only direct variable replacements are allowed in locale files. You cannot call methods on objects or Smarty functions.)

- `assign` (e.g. `{translate|assign:"myVar" key="my.locale.key"}`): Assign a value to a template variable. This example is similar to `{translate ...}`, except that the result is assigned to the specified Smarty variable rather than being displayed to the browser.

- `html_options_translate` (e.g. `{html_options_translate values=$myValuesArray selected=$selectedOption}`): Convert an array of the form

````
array('optionVal1' => 'locale.key.option1', 'optionVal2' => 'locale.key.option2')
````

to a set of HTML `<option>...</option>` tags of the form

````
<option value="optionVal1">Translation of “locale.key.option1" here</option>
<option value="optionVal2">Translation of “locale.key.option2" here</option>
````

for use in a Select menu.

- `get_help_id` (e.g. `{get_help_id key="myHelpTopic" url="true"}`): Displays the topic ID or a full URL (depending on the value of the url parameter) to the specific help page named.

- `icon` (e.g. `{icon name="mail" alt="..." url="http://link.url.com" disabled="true"}`): Displays an icon with the specified link URL, disabled or enabled as specified. The name parameter can take on the values `comment`, `delete`, `edit`, `letter`, `mail`, or `view`.

- `help_topic` (e.g. `{help_topic key="(dir)*.page.topic" text="foo"}`): Displays a link to the specified help topic, with the text parameter defining the link contents.

- `page_links`: (e.g. `{page_links iterator=$submissions}`): Displays the page links for the paged list associated with the `ItemIterator` subclass (in this example, `$submissions`).

- `page_info`: (e.g. `{$page_info name="submissions" iterator=$submissions}`): Displays the page information (e.g. page number and total page count) for the paged list associated with the `ItemIterator` subclass (in this case, `$submissions`).

- `iterate`: (e.g. `{$iterate from=submissions item=submission}`): Iterate through items in the specified `ItemIterator` subclass, with each item stored as a smarty variable with the supplied name. (This example iterates through items in the `$submissions` iterator, which each item stored as a template variable named `$submission`.) Note that there are no dollar-signs preceding the variable names -- the specified parameters are variable names, not variables themselves.

- `strip_unsafe_html`: (e.g. `{$myVar|strip_unsafe_html}`): Remove HTML tags and attributes deemed as “unsafe" for general use. This modifier allows certain simple HTML tags to be passed through to the remote browser, but cleans anything advanced that may be used for XSS-based attacks.

- `call_hook`: (e.g. `{call_hook name="Templates::Manager::Index::ManagementPages"}`) Call a plugin hook by name. Any plugins registered against the named hook will be called.

There are many examples of use of each of these functions in the templates provided with OJS 2.x.

