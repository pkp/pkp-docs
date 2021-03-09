---
generateHeadingToc: true
---

# REST API Usage Guide

This document describes how to interact with the REST API provided by PKP applications. It is a technical document intended for software developers who wish to build applications to interact with OJS or OMP.

Skip to the [technical references](#references).

## About the API

The REST API will respond to HTTP requests with the requested data in JSON format. When receiving `POST` or `PUT` requests, it expects to receive a payload formatted in JSON.

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
https://example.com/_/api/v1/contexts
```

## Authentication

Only authenticated users can access the REST API endpoints. Authentication can be done with cookies or an API token.

### Cookies

Cookie-based authentication can be used when you are making a request from the same domain name as the application. When a request is made from the user's browser, the browser will send the cookies to the server.

A CSRF token must be sent with every `POST`, `PUT` or `DELETE` request when using cookie-based authentication. Read more about the [CSRF Token](http://localhost:4000/dev/ui-library/dev/#/pages/csrf).

### API Token

Your API token can be found by going to **User Profile > API Key** in the application. Add a query parameter, `apiToken`, to any request to the API.

```
https://example.com/api/v1/submissions?apiToken=eyJ0e...6vJU
```

> The `apiToken` will not validate if the `api_secret_key` setting has not been set in the application's `config.inc.php` file.
{:.tip}

## Query Parameters

The base endpoint for an entity will return a list of those entities. Typically, you can use query parameters in the request to filter, sort and paginate the requests.

### Filtering

The following will return only submissions that have been submitted to sections with an ID of `1` or `2`.

```
https://example.com/api/v1/submissions?sectionIds[]=1&sectionIds[]=2
```

When a query parameter is accepted as an array, it will often accept the parameter as a comma-separated string.

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

Consult the [API Reference](#references) for a full list of supported query parameters.

## Multiple Languages

All PKP applications are multilingual. Multilingual fields will be provided as a JSON object with keys specifying the locale codes. The following response shows the `title` property of a publication in English and Canadian French.

```
{
	"title": {
		"en_US": "Young people from an immigrant background and their choice of post-secondary orientation in Montreal",
		"fr_CA": "Jeunes issus de l’immigration et choix d’orientation au postsecondaire à Montréal"
	},
	...
}
```

This is the same even when an installation only uses a single language.

```
{
	"title": {
		"fr_CA": "Jeunes issus de l’immigration et choix d’orientation au postsecondaire à Montréal"
	},
	...
}
```

When sending `POST` or `PUT` requests, the REST API will expect the data it receives to be passed in the same format.

## API Links

Some responses will include a `_href` property. The value of this property will be a URL to the full version of this object in the REST API.

```
{
	"_href": "http://example.com/api/v1/submissions/219"
	...
}
```

## Temporary Files

Files can be uploaded by sending a `POST` request to the `/temporaryFiles` endpoint. It will return a file ID which can be used in subsequent requests. Let's look at an example.

To upload a logo for a context (journal, press, or preprint server),  upload the image by sending a `POST` request to `/temporaryFiles`. A successful upload will generate the following response:

```
{
	id: 123
}
```

To save the logo to the context, send a `PUT` request to `/contexts/1`:

```
{
	pageHeaderLogoImage: {
		temporaryFileId: 123,
		altText: "Logo for the Journal of Public Knowledge"
	}
}
```

The file will be moved from the temporary directory to its public location, overwriting any existing logo.

Temporary files can only be managed by the **the user who uploaded the file**. If a user passes a `temporaryFileId` for a file they did not upload themselves, they will receive an authorization error.

## Unstable Endpoints

A few of the REST API endpoints are for internal use only and may be changed without notice. These endpoints are grouped in the **Backend** section of the references. Developers should expect that any integrations which make use of these endpoints could break from one version to the next.

## Updating the API documentation

Developers should update the API documentation whenever their code modifies a request or response. The API endpoints and query parameters are defined in an [OpenAPI v3 specification](https://github.com/pkp/ojs/blob/main/docs/dev/swagger-source.json)


Several `definitions` are left undefined in the specification file.

```
"definitions": {
	"Author": "author",
	...
}
```

These definitions are drawn from the [entity schemas](https://docs.pkp.sfu.ca/dev/documentation/en/architecture-entities#schemas), and will be [merged with the source file](https://github.com/pkp/pkp-docs#generate-rest-api-references) when the API docs are built.

## References

Technical references are available for the following software packages.

- [OJS 3.3](ojs/3.3)
- [OJS 3.2](ojs/3.2)
- [OJS 3.1](ojs/3.1)

> Documentation for the REST APIs in OMP and OPS is not yet available. These applications share many of the same endpoints as OJS, but the documentation has not yet been prepared.
{:.notice}

We use [Postman](https://www.getpostman.com/) to test our APIs. You can [import our OJS collection](/dev/api/OJS-api-postman-collection.json) (last updated 2020-12-21).
