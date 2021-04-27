# Action Classes

Action Classes are used by the Page classes to perform non-trivial processing of user requests. For example, the `SectionEditorAction` class is invoked by the `SectionEditorHandler` class or its subclasses (see Page Classes) to perform as much of the work as can be offloaded easily. This leaves the Page class to do its job – validation of user requests, authentication, and template setup – and keeps the actual processing separate.

The Action classes can be found in `classes/submission/[actionName]/[ActionName]Action.inc.php`; for example, the Section Editor action class is `classes/submission/sectionEditor/SectionEditorAction.inc.php`.

The most common sorts of tasks an Action class will perform are sending emails, modifying database records (via the Model and DAO classes), and handling uploaded files (once again via the appropriate classes). Returning to the Model/View/Controller (MVC) architecture, Action classes perform the more interface-agnostic functions of the Controller component.

Each of the more complex roles, such as Author, Section Editor, and Proofreader, has its own Action class. Another way to consider the function of an Action class is to look at it from a role-based perspective, ignoring the user interface: any major processing that an Author should be able to perform should be implemented in the `AuthorAction` class. The user interface then calls these functions as necessary.

