# PKP Documentation Hub

The repository for generating PKP's documentation hub.

## Usage

[Install Ruby 2.1.0 or higher](bundle install) and install the bundler gem.

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

The index page's data is specified in `_data/index.yml`. Each app covered is specified under the `apps` propert. OJS 3 looks like this:

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

Each of the `cards` provides a `path` which points to markdown files in the `_includes/cards` directory. Each of these cards represents a resource card that will be added under that app, and you can use markdown to add links.

### Add a new resource

Create a card under `_includes/cards/<app>/<your-new-resource-name>.md`. Give your card a title with three `###`:

```
### [Your resource title](http://link-to-resource.com)
```

Add a short description below it.

```
This resource will help you accomplish X.
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
