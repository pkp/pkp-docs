# Plugins

**Table of Contents**

1. Objects & Classes
2. Sample Plugin
  1. Loader Stub
  2. Plugin Object
  3. Registration Function
  4. Hook Registration and Callback
  5. Plugin Management
3. Additional Plugin Functionality
4. Hook List

OJS 2.1 contains a full-fledged plugin infrastructure that provides developers with several mechanisms to extend and modify the system's behavior without modifying the codebase. The key concepts involved in this infrastructure are **categories**, **plugins**, and **hooks**.

A **plugin** is a self-contained collection of code and resources that implements an extension of or modification to OJS. When placed in the appropriate directory within the OJS codebase, it is loaded and called automatically depending on the **category** it is part of.

Each plugin belongs to a single **category**, which defines its behavior. For example, plugins in the `importexport` category (which are used to import or export OJS data) are loaded when the Journal Manager uses the “Import/Export Data" interface or when the command-line tool is launched. Import/export plugins must implement certain methods which are used for delegation of control between the plugin and OJS.

Plugins are loaded when the category they reside in is requested; for example, `importexport` plugins are loaded by the Page class `ImportExportHandler` (implemented in the file `pages/manager/ImportExportHandler.inc.php`). Requests are delegated to these plugins via the methods defined in the `ImportExportPlugin` class, which each plugin in this category extends.

Hooks are used by plugins as a notification tool and to override behaviors built into OJS. At many points in the execution of OJS code, a hook will be called by name – for example, `LoadHandler` in `index.php`. Any plugins that have been loaded and registered against that hook will have a chance to execute code to alter the default behavior of OJS around the point at which that hook was called.

While most of the plugin categories built into OJS define specific tasks like authorization and harvesting tasks, there is a `generic` category for plugins that do not suit any of the other categories. These are more complicated to write but offer much more flexibility in the types of alterations they can make to OJS. Hooks are generally intended for use with plugins in this category.

