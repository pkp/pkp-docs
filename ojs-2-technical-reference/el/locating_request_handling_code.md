# Locating Request Handling Code

Once the framework responsible for dispatching requests is understood, it is fairly easy to locate the code responsible for performing a certain task in order to modify or extend it. The code that delegates control to the appropriate classes has been written with extensibility in mind; that is, it should rarely need modification.

In order to find the code that handles a specific request, follow these steps:

- Find the name of the Page class in the request URL. This is the second field after `index.php`; for example, in the following URL:
  - http://www.mylibrary.com/index.php/myjournal/user/profile
- the name of the Page class is `UserHandler`. (Page classes always end with `Handler`. Also note the differences in capitalization: in the URL, lowerCamelCase is used; class names are always CamelCase.)
- Find the source code for this `Page` class in the pages directory of the source tree. In the above example, the source code is in `pages/user/UserHandler.inc.php`.
- Determine which function is being called by examining the URL. This is the third field after `index.php`, or, in this case, `profile`.
- Therefore, the handling code for this request is in the file `pages/user/UserHandler.inc.ph`p, in the function `profile`.

