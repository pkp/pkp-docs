# Plugin Object

The plugin object encapsulates the plugin and generally will do most of the work. In this case, since this plugin will be in the generic category, the object must extend the `GenericPlugin` class:

**Example 5.2. Plugin Object**

````
<?php 
import('classes.plugins.GenericPlugin'); 
class ExamplePlugin extends GenericPlugin { 
    function register($category, $path) { 
        if (parent::register($category, $path)) { 
            HookRegistry::register( 
                'Templates::Manager::Index::ManagementPages', 
                array(&$this, 'callback') 
            ); 
            return true; 
        } 
        return false; 
    } 
    function getName() { 
        return 'ExamplePlugin'; 
    } 
    function getDisplayName() { 
        return 'Example Plugin'; 
    } 
    function getDescription() { 
        return 'A description of this plugin'; 
    } 
    function callback($hookName, $args) { 
        $params =& $args[0]; 
        $smarty =& $args[1]; 
        $output =& $args[2]; 
        $output = '<li>&#187; <a href=”http://pkp.sfu.ca”>My New Link</a></li>'; 
        return false; 
    } 
} 
?>
````

The above code illustrates a few of the most important parts of plugins: the `register` function, hook registration and callback, and plugin management.

