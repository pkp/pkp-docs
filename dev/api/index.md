---
generateHeadingToc: true
---

# REST API Usage Guide

This document describes how to interact with the REST API provided by PKP applications. It is a technical document intended for software developers who wish to build applications to interact with OJS or OMP.

## About the API

The REST API will respond to HTTP requests with the requested data in JSON format. When receiving `POST` or `PUT` requests, it expects to receive a payload formatted in JSON.

_The REST API is in early stages of development. The [Compatibility and Maintenance](#compatibility-and-maintenance) section provides some guidance for long-term maintenance of third-party applications built using the API._

## Access the API

Use the following to access the `/submissions` endpoint when an application is hosted at `https://example.com/`.

```
https://example.com/api/v1/submissions
```

A multi-journal OJS installation must access endpoints from each journal's URL.

```
https://example.com/journalpath/api/v1/submissions
```

Installations that do not use `mod_rewrite` must include `index.php`.

```
https://example.com/index.php/journalpath/api/v1/submissions
```

Installations which have set `disable_path_info` to `On` in the configuration file must use query parameters. **Use of this method is discouraged**.

```
https://example.com/index.php?journal=journalpath&endpoint=/api/v1/submission
```

Administrators can access _some_ endpoints, such as `/contexts`, at a site-wide endpoint that spans all journals.

```
https://example.com/*/api/v1/contexts
```

## Authentication

Only authenticated users can access the REST API endpoints. Authentication can be done with cookies or an API key.

### Cookies

Cookie-based authentication can be used when you are making a request from the same domain name as the application. No special authentication is required. When a request is made from the user's browser, the browser will send the cookies to the server.

### API Key

Your API key can be found by going to **User Profile > API Key** in the application. Add a query parameter, `apiKey`, to any request to the API.

```
https://example.com/api/v1/submissions?apiKey=eyJ0e...6vJU
```

## Query Parameters

The base endpoint for an entity will return a list of those entities. Typically, you can use query parameters in the request to filter, sort and paginate the requests.

### Filtering

The following will return only submissions that have been submitted to sections with an ID of `1` or `2`.

```
https://example.com/api/v1/submissions?sectionIds=1,2
```

### Sorting

The following will return submissions in alphabetical order.

```
https://example.com/api/v1/submissions?orderBy=title&orderDirection=ASC
```

### Pagination

The following will return the second "page" of results, if each page contained 30 results.

```
https://example.com/api/v1/submissions?count=30offset=30
```

Consult the [API Reference](#references) for full specifiation of supported query parameters.

## Multiple Languages

All PKP applications are multilingual. Multilingual fields will be provided as a JSON object with keys specifying the locale codes. The following response shows the `title` property of a submission in English and Canadian French.

```
{
	"title": {
		"en_US": "Young people from an immigrant background and their choice of post-secondary orientation in Montreal",
		"fr_CA": "Jeunes issus de l’immigration et choix d’orientation au postsecondaire à Montréal"
	},
	...
}
```

This is the same even when an installation only uses a single language:

```
{
	"title": {
		"fr_CA": "Jeunes issus de l’immigration et choix d’orientation au postsecondaire à Montréal"
	},
	...
}
```

When sending `POST` or `PUT` requests, the REST API will expect the data it receives to be broken down by locale.

## API Links

Some responses will include a `_href` property. The value of this property will be a URL to the full version of this object in the REST API.

```
{
	"_href": "http://example.com/api/v1/submissions/219"
}
```

## Compatibility and Maintenance

The REST API is still under active development. The development path will follow our own needs as we refactor our UI to work with the API. Our goal is to eventually run the entire application through the API, so that all functionality is exposed to third-party applications.

To make it easier to maintain third-party plugins and applications, we will maintain a changelog in the [reference](#references) for each version of the API.

However, changes to the endpoints under the **Backend** category in the reference may not be documented. Use them at your own peril.

We plan to add endpoints as quickly as possible. If you need an endpoint that is not available, and are willing to contribute code to put it into place, please open an issue on the [pkp-lib GitHub repository](https://github.com/pkp/pkp-lib). We welcome community contributions and will work with you to ensure the specification is one that we can stand by over time with minimal disruption.

## References

The following technical references are available for different versions of the API.

- [OJS 3.1.x](ojs/3.1)
- [OJS development](ojs/dev)

_Sorry, OMP's API documentation is not yet available. Many of the OJS endpoints are available but we haven't yet documented this._
