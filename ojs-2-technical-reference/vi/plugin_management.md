# Plugin Management

In the example plugin, there are three functions that provide metadata about the plugin: `getName()`, `getDisplayName()`, and `getDescription()`. These are part of a management interface that is available to the Journal Manager under “System Plugins".

The result of the `getName()` call is used to refer to the plugin symbolically and need not be human-readable; however, the `getDisplayName()` and `getDescription()` functions should return localized values. This was not done in the above example for brevity.

The management interface allows plugins to specify various management functions the Journal Manager can perform on the plugin using the `getManagementVerbs()` and manage(`$verb`, `$args`) functions. `getManagementVerbs()` should return an array of two-element arrays as follows:

**Example 5.5. Specifying Management Verbs**

````
$verbs = parent::getManagementVerbs(); 
$verbs[] =  array('func1', Locale::translate('my.localization.key.for.func1')); 
$verbs[] =  array('func2', Locale::translate('my.localization.key.for.func2')); 
````

Note that the parent call should be respected as above, as some plugin categories provide management verbs automatically.

Using the above sample code, the plugin should be ready to receive the management verbs `func1` and `func2` as follows (once again respecting any management verbs provided by the parent class):

**Example 5.6. Receiving Management Verbs**

````
function manage($verb, $args) { 
    if (!parent::manage($verb, $args)) switch ($verb) { 
        case 'func1': 
            // Handle func1 here. 
            break; 
        case 'func2': 
            // Handle func2 here. 
            break; 
        default: 
            return false; 
        } 
    return true; 
    } 
````

