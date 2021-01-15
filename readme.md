# PKP Documentation Hub

The repository for generating PKP's documentation hub.

Interested in contributing documentation? Check out [our guidelines for contributing to PKP documentation](https://docs.pkp.sfu.ca/contributing/) to get started.

## Usage

[Install Ruby 2.1.0 or higher](https://www.ruby-lang.org/en/documentation/installation/) and install the bundler gem.

```
gem install bundler
```

Install Jekyll to build or serve the site.

```
bundle install
```

Serve the site locally.

```
bundle exec jekyll serve
```

## Orientation to file structure

The index page's data is specified in `_data/index.yml`. Each app covered is specified under the `apps` property. OJS 3 looks like this:

```
- path: ojs3
	title: Open Journal Systems 3
	titleShort: OJS
	includeInHero: true
	description: Our flagship software for open access journal publishing, used by more than 10,000 journals worldwide.
	cards:
		- path: learning-ojs-3
		- path: looking-for-ojs-2
			isHighlighted: true
		- path: developer
			isDeveloper: true
		- path: starting-a-journal
```

- `path` should be a unique ID made up of numbers and letters with no spaces.
- `title` is the main title of the app's section
- `titleShort` is used in the buttons in the hero element at the top
- `includeInHero` can be set to false if you want to create an app section but don't want it to be listed in the buttons in the hero element at the top
- `description` is a short description that will be placed below the title in the app's section
- `cards` see below

Each of the `cards` provides a `path` which points to markdown files in the `_includes/cards` directory. Each of these cards represents a resource card that will be added under that app, and you can use markdown to add links. See the next section.

### Add a new resource

Create a card under `_includes/cards/<app>/<your-new-resource-name>.md`. Give your card a title with three `###`:

```
### [Your resource title](http://link-to-resource.com)
```

Add a short description below it, and link to the resource.

```
This resource will help you accomplish X. [View Now](http://link-to-resource.com)
```

### Create multiple sections in your resource card

If you want to add a section to the card, use three dashes before the section:

```
---
- [Table](/url)
- [Of](/url)
- [Contents](/url)
---
Available in [Deutsch](/url).
```

## Versions of documents

You can link between different versions of the same document. Below is an example using the `importing-exporting` document. First, prepare all versions of the document in directories like below. (Notice the latest version has no version number.)

```
/importing-exporting/en
/importing-exporting/2.0/en
/importing-exporting/1.0/en
```

Then add an entry for the version in `/data/versions.yaml`:

```
importing-exporting:
	3.0: /importing-exporting/en
	2.0: /importing-exporting/2.0/en
	1.0: /importing-exporting/1.0/en
```

Then add the following to the frontmatter of each `.md` file in the document, adjusting the `version` entry as appropriate:

```
---
book: importing-exporting
version: 2.0
---
```

This should display a link to each version in the header of each `.md` file you've modified.

### Creating a new version

To create a new version of the document:

1. Move the existing `/importing-exporting/en` to `/importing-exporting/<version>/en`.
2. Move the new version into `/importing-exporting/en`.
3. Update `/_data/versions.yaml` appropriately.

The base URL, `/<any-book>/en`, should always be the current version so that any internal or external links always point to the most up-to-date resource.

### Multiple languages

This structure doesn't yet support versioning separate language editions of documents. We can work on that when we need it.

## Generate REST API References

The REST API references use [SwaggerUI](https://swagger.io/tools/swagger-ui/) to generate the human-readable documentation from a `.json` specification file. To generate this file, you'll need a checkout of the OJS/OMP application repository.

```
php lib/pkp/tools/buildSwagger.php <path-to-docs/dev/api/<app>/<version>.json
```

Then create a `.md` file in the documentation repository at `/dev/api/<app>/<version>.md`. Use the following front-matter:

```
---
layout: api
title: REST API Reference, <version> - Open Journal Systems
description: This guide documents the REST API endpoints which will be accessible for Open Journal Systems <version>. It is a technical reference for software developers who wish to build custom interactions with the platform.
swagger: /dev/api/ojs/<version>.json
app: <app>
version: <version>
---
```

Then create an entry for the version you just added under `/_data/versions.yml`.

Then add a link to this version in the References section of `/dev/api/index.md`.

### Version Pattern

REST API references should be created for every minor version of an application. Examples: 3.1.x, 3.2.x, 3.3.x.

We also have one version, `dev`, which is used for the current in-development version of the API docs. This may not be updated very regularly but can be used to give advanced warning of new endpoints or significant changes.

### Changelog

Every version can include a changelog detailing breaking changes from previous versions of the API. This has to be done in the description of the `.json` file for now.
