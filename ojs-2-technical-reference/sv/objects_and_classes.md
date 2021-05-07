# Objects & Classes

Plugins in OJS 2.x are object-oriented. Each plugin extends a class defining its category's functions and is responsible for implementing them.

**Table 5.1. Plugins**

| Category       | Base Class                                                        |
| -------------- | ----------------------------------------------------------------- |
| `generic`      | `GenericPlugin (classes/plugins/GenericPlugin.inc.php)`           |
| `importexport` | `ImportExportPlugin (classes/plugins/ImportExportPlugin.inc.php`) |
| `auth`         | `AuthPlugin (classes/plugins/AuthPlugin.inc.php)`                 |
| `gateways`     | `GatewayPlugin (classes/plugins/GatewayPlugin.inc.php)`           |

Each base class contains a description of the functions that must be implemented by plugins in that category.

Plugins are managed by the `PluginRegistry` class (implemented in `classes/plugins/PluginRegistry.inc.php`). They can register hooks by using the `HookRegistry` class (implemented in `classes/plugins/HookRegistry.inc.php`).

