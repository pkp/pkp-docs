# Hook Registration and Callback

The above example serves as a clear illustration of hook registration and callback; along with the list of hooks below, this should provide all the required information for extending OJS using hooks. However, there are a few important details that need further examination.

The process by which a plugin registers against a hook is as follows:

**Example 5.3. Hook Registration Process**

````
HookRegistry::register(
    'Templates::Manager::Index::ManagementPages',
    array(&$this, 'callback')
);
````

In the example above, the parameters to `HookRegistry::register` are:

1. The name of the hook. See the complete list of hooks below.
2. The callback function to which control should be passed when the hook is encountered. This is the same callback format used by PHP's `call_user_func` function; see the documentation at http://php.net for more information. It is important that `$this` be included in the array by reference, or you may encounter problems with multiple instances of the plugin object.

The definition of the callback function (named and located in the above registration call) is:

**Example 5.4. Hook Registration Definition**

````
function callback($hookName, $args) { 
    $params =& $args[0]; 
    $smarty =& $args[1]; 
    $output =& $args[2]; 
    ... 
} 
````

The parameter list for the callback function is always the same:

1. The name of the hook that resulted in the callback receiving control (which can be useful when several hook registrations are made with the same callback function), and
2. An array of additional parameters passed to the callback. The contents of this array depend on the hook being registered against. Since this is a template hook, the callback can expect the three parameters named above.

The array-based passing of parameters is slightly cumbersome, but it allows hook calls to compatibly pass references to parameters if desired. Otherwise, for example, the above code would receive a duplicated Smarty object rather than the actual Smarty object and any changes to attributes of the `$smarty` object would disappear upon returning.

Finally, the return value from a hook callback is very important. If a hook callback returns `true`, the hook registry considers this callback to have definitively “handled" the hook and will not call further registered callbacks on the same hook. If the callback returns `false`, other callbacks registered on the same hook after the current one will have a chance to handle the hook call.

The above example adds a link to the Journal Manager's list of management functions. If another plugin (or even the same plugin) was registered to add another link to the same list, and this plugin returned `true`, the other plugin's hook registration would not be called.