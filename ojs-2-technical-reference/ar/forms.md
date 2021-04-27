# Forms

The Forms class (`classes/form/Form.inc.php`) and its various subclasses, such as `classes/manager/form/SectionForm.inc.php`, which is used by a Journal Manager to modify a Section, centralize the implementation of common tasks related to form processing such as validation and error handling.

Subclasses of the `Form` class override the constructor, `initData`, `display`, `readInputData`, and `execute` methods to define the specific form being implemented. The role of each function is described below:

- Class constructor: Initialize any variables specific to this form. This is useful, for example, if a form is related to a specific Article; an Article object or article ID can be required as a parameter to the constructor and kept as a member variable.
- `initData`: Before the form is displayed, current or default values (if any) must be loaded into the _data array (a member variable) so the form class can display them.
- `display`: Just before a form is displayed, it may be useful to assign additional parameters to the form's Smarty template in order to display additional information. This method is overridden in order to perform such assignments.
- `readInputData`: This method is overridden to instruct the parent class which form parameters must be used by this form. Additionally, tasks like validation can be performed here.
- `execute`: This method is called when a form's data is to be “committed." This method is responsible, for example, for updating an existing database record or inserting a new one(via the appropriate Model and DAO classes).

The best way to gain understanding of the various Form classes is to view a typical example such as the `SectionForm` class from the example above (implemented in `classes/manager/form/SectionForm.inc.php`). For a more complex set of examples, see the various Journal Manager's Setup forms (in the `classes/manager/form/setup directory`).

It is not convenient or logical for all form interaction between the browser and the system to be performed using the `For`m class and its subclasses; generally speaking, this approach is only useful when a page closely corresponds to a database record. For example, the page defined by the `SectionForm` class closely corresponds to the layout of the `sections` database table.



