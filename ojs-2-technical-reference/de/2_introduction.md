# Introduction

The design of Open Journal Systems 2.x is heavily structured for maintainability, flexibility and robustness. For this reason it may seem complex when first approached. Those familiar with Sun's Enterprise Java Beans technology or the Model-View-Controller (MVC) pattern will note many similarities.

As in a MVC structure, data storage and representation, user interface presentation, and control are separated into different layers. The major categories, roughly ordered from “front-end" to “back-end," follow:

- Smarty templates , which are responsible for assembling HTML pages to display to users;
- Page classes , which receive requests from users' web browsers, delegate any required processing to various other classes, and call up the appropriate Smarty template to generate a response;
- Action classes , which are used by the Page classes to perform non-trivial processing of user requests;
- Model classes , which implement PHP objects representing the system's various entities, such as Users, Articles, and Journals;
- Data Access Objects (DAOs) , which generally provide (amongst others) update, create, and delete functions for their associated Model classes, are responsible for all database interaction;
- Support classes , which provide core functionalities, miscellaneous common classes and functions, etc.

As the system makes use of inheritance and has consistent class naming conventions, it is generally easy to tell what category a particular class falls into. For example, a Data Access Object class always inherits from the DAO class, has a class name of the form `[Something]DAO`, and has a filename of the form `[Something]DAO.inc.php`.

The following diagram illustrates the various components and their interactions.

**Figure 1.1. Open Journal Systems MVC Diagram**

![Fig 1.1 Open JOurnal Systems MVC Diagram](/fig1.png)

The following files are in the root directory of a typical OJS 2.x installation:

**Table 1.1. Open Journal Systems File Structure**

| File/Directory            | Description                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cache`                   | Directory containing cached information                                                                                                                                |
| `classes`                 | Directory containing most of the OJS 2.x PHP code: Model classes, Data Access Objects (DAOs), core classes, etc                                                        |
| `config.TEMPLATE.inc.php` | Sample configuration file                                                                                                                                              |
| `config.inc.php`          | System-wide configuration file                                                                                                                                         |
| `dbscripts`               | Directory containing XML database schemas and data such as email templates                                                                                             |
| `docs`                    | Directory containing system documentation                                                                                                                              |
| `help`                    | Directory containing system help XML documents                                                                                                                         |
| `includes`                | Directory containing system bootstrapping PHP code: class loading, miscellaneous global functions                                                                      |
| `index.php`               | All requests are processed through this PHP script, whose task it is to invoke the appropriate code elsewhere in the system                                            |
| `js`                      | Directory containing client-side javascript files                                                                                                                      |
| `lib`                     | Directory containing ADODB (database abstraction) and Smarty (template system) classes                                                                                 |
| `locale`                  | Directory containing locale data and caches                                                                                                                            |
| `pages`                   | Directory containing Page classes                                                                                                                                      |
| `plugins`                 | Directory containing additional plugins                                                                                                                                |
| `public`                  | Directory containing files to be made available to remote browsers; for example, journal logos are placed here by the system                                           |
| `registry`                | Directory containing various XML data required by the system: scheduled tasks, available locale names, default journal settings, words to avoid when indexing content. |
| `rt`                      | Directory containing XML data used by the Reading Tools                                                                                                                |
| `styles`                  | Directory containing CSS stylesheets used by the system                                                                                                                |
| `templates`               | Directory containing all Smarty templates                                                                                                                              |
| `tools`                   | Directory containing tools to help maintain the system: unused locale key finder, scheduled task wrapper, SQL generator, etc.                                          |
