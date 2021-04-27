# Theming the Editorial Backend

Modifying the appearance of the editorial backend in OJS 3.0+ or OMP 1.2+ is significantly more difficult, and carries with it greater risk of breaking the application. Theming the editorial backend should not be undertaken unless you're an experienced developer and you understand clearly the other concepts described in this guide.

Although it is not well documented, Themes can inject their own templates and styles into the backend as easily as the frontend. Any templates under the `templates` directory can be overwritten. And you can add stylesheets to the backend by passing a `contexts` argument to the `addStyle` method.

```php
    public function init() {
        $this->addStyle('my-custom-style', 'styles/index.less', array( 'contexts' => 'backend' );
    }
```

The main stylesheet of the editorial backend is named `pkpLib`. You can modify these styles by passing in your own variables.

```php
    public function init() {
        $this->modifyStyle('pkpLib', array('addLess' => array('styles/index.less')));
    }
```

We advise you to thoroughly test any changes that you make. The editorial backend is a large, complex application. Style or script changes can have unintended effects which are difficult to track down without a thorough knowledge of the system.

A theme is not the best place to extend the functionality of the system. There is a broader Plugins API which is appropriate for extending the application.

We recommend that you stick to simple color adjustments to adapt the editorial backend to your brand in all but the most exceptional of circumstances.

