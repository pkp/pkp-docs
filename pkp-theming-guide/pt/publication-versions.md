# Publication Versions

Multiple versions of an article or monograph may be published. A theme should be built to ensure that the correct version is being displayed at all times.

Use the `getCurrentPublication()` method to get the most recently published version of an article or monograph.

```html
<h1>
    {$submission->getCurrentPublication()->getLocalizedFullTitle()|escape}
</h1>
<div>
    Published on
    <time>
        {$submission->getCurrentPublication()->getData('datePublished')|date_format:$dateFormatLong}
    </time>
</div>
```

The most recently published version should always be displayed in lists such as issue tables of content, catalog pages and search results.

```html
<h1>Articles</h1>
{foreach from=$submissions item=$submission}
    <article>
        <h2>
            {$submission->getCurrentPublication()->getLocalizedFullTitle()|escape}
        </h2>
        ...
    </article>
{/foreach}
```

The user may view older versions of an article or monograph. This request is passed to the same `article.tpl` template that displays the latest version. When writing this template for your theme, the `publication` variable will contain the requested version.

```html
<h1>
    {$publication->getLocalizedTitle|escape}
</h1>
```

Compare the `publication` to the `currentPublication` to determine if the reader is viewing an out-of-date version and display a warning.

```html
{if $currentPublication->getId() !== $publication->getId()}
    <div role="alert">
        You are viewing an old version of this article.
        View the <a href="...">most recent version</a>.
    </div>
{/if}
```

Get a link to the most recent version.

```html
{url page="article" op="view" path=$article->getBestId()}
```

Or get links to each version that has been published.

```html
{foreach from=$article->getData('publications') item=$iPublication}
    {url page="article" op="view" path=$article->getBestId()|to_array:"version":$iPublication->getId()}
{/foreach}
```