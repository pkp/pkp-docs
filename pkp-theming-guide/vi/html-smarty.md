# HTML/Smarty Templates

OJS and OMP use the [Smarty](http://www.smarty.net/) templating system to compile HTML templates. Smarty is a lightweight syntax which allows you to use simple PHP-like logic within HTML templates.

## Locating the Frontend Templates

Every template file used for the frontend, public-facing journal or press website will be found in a special directory that is kept separate from the template files used to power the application's backend, editorial interface. This allows you to more safely customize the frontend without effecting the backend, and significantly reduces the amount of work you must do to build a custom theme.

Every frontend template can be found at one of a few places.

1. Any templates specific to your OJS or OMP application will be found under `templates/frontend/` in the application directory.
2. Any templates common to both applications, such as user registration and announcements, will be found under `lib/pkp/templates/frontend`.
3. Any templates that your theme has overridden will be found under `plugins/themes/<your-theme-name>/templates/frontend`.


### The Frontend Template Structure
Each of these directories is split into three subdirectories, which store specific types of templates.

`/templates/frontend/pages`

This directory contains all of the top-level template files that are called by the application. Each of these template files represents an entire page request.

For instance, a request to the homepage loads `/pages/index.tpl`. A request to an announcement loads `/pages/announcement.tpl`.

`/templates/frontend/objects`

This directory contains template files which map to a particular data object. In OJS, you’ll find templates for an Issue and Article object. In OMP, you’ll find templates for a Monograph object.

Each of these template files represents a particular view of the data object. You will find `article_summary.tpl` for displaying a summary of an Article in an Issue's table of contents. And you will find `article_details.tpl` for displaying a complete view of an Article.

`/templates/frontend/components`

This directory contains template files which handle specific UI components or templates that don’t fit into other places, such as breadcrumb navigation and search forms.

### Understanding Template Overrides

The **Default Theme** uses all of the templates from the core application. But you can override any template in the system by including a file with the same name in your theme.

For example, if you wanted to override the `/templates/frontend/pages/article.tpl` template in your theme, you would add a file to `/plugins/themes/<your-theme>/templates/frontend/pages/article.tpl`.

Using this technique, you can override only the specific templates you want to override. Or you can replace every single template in the system with your own.

When OJS or OMP loads a template, it searches in the following order.

1. The current theme template directory.
2. The OJS or OMP template directory.
3. The `lib/pkp/templates/` directory within the application.

If it fails to find a template at (1), it searches in (2), and so-on.

*This section describes editing the frontend templates. We recommend you **never modify the backend templates**, but if you wish to do so, you can learn more about [theming the editorial backend](theme-backend.md).*

## Using Smarty Data in Templates

Each application delivers data to a template file before loading it. Every template file receives a `$siteTitle` variable which includes the name of the site being visited.

```html
<p>Welcome to {$siteTitle}!</p>
```

Some of the data passed to templates allow you to access object settings. You will find the current journal or press under the `$currentContext` variable.

```html
<p>Welcome to {$currentContext->getLocalizedName()}</p>
```

Some of the data is specific to certain templates. The `/frontend/pages/article.tpl` template receives an `$article` variable which can be used to access data about that article.

```html
<h1 class="article-title">{$article->getLocalizedTitle()}</h1>
```

All of the frontend templates include information about which variables it makes use of in the header of the template. You'll find this information under the `@uses` prefix.

```smarty
{**
 * templates/frontend/pages/article.tpl
 *
 * Copyright (c) 2014-2016 Simon Fraser University Library
 * Copyright (c) 2003-2016 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @brief Display the page to view an article with all of it's details.
 *
 * @uses $article Article This article
 * @uses $issue Issue The issue this article is assigned to
 * @uses $section Section The journal section this article is assigned to
 * @uses $journal Journal The journal currently being viewed.
 *}
```

*Please note that not every variable is listed here. Only those variables used by this template are listed. But there are many [common template variables](template-variables.md) available to you. You can also load [custom data](advanced-custom-data.md).*
