# Registration Function

Whenever OJS loads and registers a plugin, the plugin's `register(...)` function will be called. This is an opportunity for the plugin to register against any hooks it needs, load configuration, initialize data structures, etc. In the above example, all the plugin needs to do (aside from calling the parent class's `register` function) is register against the `Templates::Manager::Index::ManagementPages` hook.

Another common task to perform in the registration function is loading locale data. Locale data should be included in subdirectories of the plugin's directory called `locale/[localeName]/locale.xml`, where [`localeName`] is the standard symbolic name of the locale, such as en_US for US English. In order for these data files to be loaded, plugins should call `$this->addLocaleData();` in the registration function after calling the parent registration function.

