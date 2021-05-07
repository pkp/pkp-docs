# Security

- The validity of user requests is checked both at the User Interface level and in the associated Page class. For example, if a user is not allowed to click on a particular button, it will be disabled in HTML by the Smarty template. If the user attempts to circumvent this and submits the button click anyway, the Page class receiving the form or request will ensure that it is ignored.
- Wherever possible, use the Smarty template engine's string escape features to ensure that HTML exploits and bugs are avoided and special characters are displayed properly. Only the Journal Manager and Site Administrator should be able to input unchecked HTML, and only in certain fields (such as the multiline fields in Journal Settings). For example, when displaying a username, always use the following: `{$user->getUsername()|escape}`
- Limited HTML support can be provided using the Smarty strip_unsafe_html modifier, e.g. `{$myVariable|strip_unsafe_html}`

