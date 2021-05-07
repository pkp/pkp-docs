# PHP Code

- Wherever possible, global variables and functions outside of classes should be avoided;
- Symbolic constants, mapped to integers using the PHP `define` function, are preferred to numeric or string constants;

- Filenames should match class names; for example, the `SectionEditorAction` class is in the file `SectionEditorAction.inc.php`;

- Class names and variables should be capitalized as follows: Class names use CamelCase, and instances use lowerCamelCase. For example, instances of a class `MyClass` could be called `$myClass`;

- Whenever possible and logical, the variable name should match the class name: For example, `$myClass` is preferred to an arbitrary name like `$x`;

- Class names and source code filenames should be descriptive and unique;

- Output should be restricted as much as possible to Smarty templates. A valid situation in which PHP code should output a response is when HTTP headers are necessary;

- To increase performance and decrease server load, `import(...)` calls should be kept as localized as possible;