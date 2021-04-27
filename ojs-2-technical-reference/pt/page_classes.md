# Page Classes

Pages classes receive requests from users' web browsers, delegate any required processing to various other classes, and call up the appropriate Smarty template to generate a response (if necessary). All page classes are located in the `pages` directory, and each of them must extend the `Handler` class (see `classes/core/Handler.inc.php`).

Additionally, page classes are responsible for ensuring that user requests are valid and any authentication requirements are met. As much as possible, user-submitted form parameters and URL parameters should be handled in Page classes and not elsewhere, unless a Form class is being used to handle parameters.

An easy way to become acquainted with the tasks a Page class must fulfill is to examine a typical one. The file `pages/about/AboutHandler.inc.php` contains the code implementing the class `AboutHandler`, which handles requests such as `http://www.mylibrary.com/ojs2/myjournal/about/siteMap`. This is a fairly simple Page class responsible for fetching and displaying various metadata about the journal and site being viewed.

Each Page class implements a number of functions that can be called by the user by addressing the appropriate Page class and function in the request URL. (See the section titled “Request Handling" for more information on the mapping between URLs and page classes.)

Often, Page classes handle requests based on the role the user is playing. For example, there is a Page class called `AuthorHandler` (in the directory `pages/author/AuthorHandler.inc.php`) that delegates processing of the various tasks an author might perform. Similarly, there are classes called `LayoutEditorHandler`, `ManagerHandler`, and so forth.

The number of tasks a Page handler must perform can frequently be considerable. For example, if all requests for Section Editor functions were handled directly by the `SectionEditorHandler` class, it would be extremely large and difficult to maintain. Instead, functions are further subdivided into several other classes (such as `SubmissionEditHandler` and `SubmissionCommentsHandler`), with `SectionEditorHandler` itself remaining just to invoke the specific subclass.

