# CSS/LESS

OJS and OMP use the [LESS](http://lesscss.org/) syntax to write code which is then compiled into CSS. LESS is an easy-to-use CSS-like syntax which allows you to write CSS code with some useful abstractions, such as [variables](http://lesscss.org/features/#variables-feature), [file importing](http://lesscss.org/features/#variables-feature-import-statements) and [mix-ins](http://lesscss.org/features/#mixins-feature).

Here is an example of a LESS file which uses a variable for the background color of the header and footer.

```
@background: red;

.pkp_structure_head,
.pkp_structure_footer {
  background: @background;
}
```

This becomes more useful when we want to use the same background color as a border for `<button>` elements.

```
@background: red;

.pkp_structure_head,
.pkp_structure_footer {
  background: @background;
}

button {
  border-color: @background;
}
```

As your stylesheet grows, you will want to split your styles up into different files so that they are easier to manage. LESS allows you to import separate files and share variables across them.

```
// styles/variable.less
@background: red;
```

```
// styles/structure.less
.pkp_structure_head,
.pkp_structure_footer {
  background: @background;
}
```

```
// styles/forms.less
button {
  border-color: @background;
}
```

```
// styles/index.less
// Now we can combine all of these files into one.
@import "variables"
@import "structure"
@import "forms"
```

So if we were following this format, our custom theme plugin would have the following files in it.

```
styles/index.less
styles/variables.less
styles/structure.less
styles/forms.less
```

If your journal decides to change it's branding from red to blue, you only need to update one line in your theme's code:

```
// styles/variable.less
@background: blue;
```

Before your styles will appear, you need to make sure that they are compiled and loaded with your custom theme. This can be accomplished using the `addStyle` method of the [Theme API](theme-api.md).

```php
class DefaultThemePlugin extends ThemePlugin {
  public function init() {
    // The second parameter, 'styles/index.less',
    // must point to a LESS file in your theme.
    $this->addStyle('stylesheet', 'styles/index.less');
  }
}
```

The [Theme API](theme-api.md) will be discussed in more detail in subsequent sections of this guide.

_If LESS seems too complicated, you can still write plain CSS code and it will work the same. You just need to save the file as a _`.less`_ file._ The power of using LESS instead of CSS becomes more clear when you explore extending existing themes with [Child Themes](child-themes.md).

