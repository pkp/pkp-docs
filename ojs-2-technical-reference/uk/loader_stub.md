# Loader Stub

The plugin is loaded by OJS by loading a file in the plugin directory called `index.php`. This is a loader stub responsible for instantiating and returning the plugin object:

**Example 5.1. Plugin Loader Stub**

````
<?php
require_once('ExamplePlugin.inc.php');
return new ExamplePlugin();
?>
````
