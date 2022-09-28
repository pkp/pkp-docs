---
book: dev-documentation
version: 3.4
title: Entities Settings - Technical Documentation - OJS|OMP|OPS
---

# Entities: "Settings"

Settings are additional property values associated with an instance of an entity type.

## The Purpose of Settings

Settings are an important concept in the PKP data model.
They support two of the [overall goals](datamodel):

### Localization

If some logical attribute (say, a User's `familyname`) is to be localizable,
the attribute will be stored in settings.

For example a User from Japan might have one `familyname` in Kanji for the `ja_JP` locale
and another in Latin characters for the `en_US` locale (and the rest of the world).
For the same one User object, two settings objects will be created to represent
the two localized versions of the User `familyname` property.

OJS (etc.) knows about these settings and will create and use them regularly.
See [Entities](architecture-entities.md) for what localization looks like
at the PHP level.


### Extensibility

In order to provide its functionality, a plugin may need to add some information
to entities of existing types.

For example a simple monitoring service plugin may want to add a `processed` flag
to all Submission objects.

OJS (etc.) does not know about these settings and will not touch them.
The plugin has full control over them if it makes sure not to use a setting name
also used somewhere else.

## How Settings Work

Not all entities allow for storing settings, only those that have an associated
settings table do.
For instance, the User entity has two associated tables:
`user` and `user_settings`.

The structure of settings tables is similar, but not entirely uniform.
The minimal case has four columns:
- id: The foreign key to the respective entry in the main table, with a suitable name.
  For instance, `user_settings` has a `user_id` column that references a row
  in the `user` table.
- `locale`: a string that is either a locale name or empty (but not null!).
  The latter indicates a property that is not internationalized.
- `setting_name`: a string indicating the name of the property. 
- `setting_value`: a string containing the value of the property.

See [Database](architecture-database.md) for a technical look at this from the
database table point of view.

What if the property should have a value other than string?
For that, many settings tables contain a fifth column:
- `setting_type`: a string that is one of "string", "int", "bool", "float", "object", or "date"
  and indicates the type into which `setting_value` will be converted upon 
  reading (and from which into string upon writing).

Some settings tables (in particular `user_setting`) contain additional columns
for special purposes.

## Which Entities have Settings?

There is no simple rule for which Entities have an associated settings table
and which do not.
Consult the files `schemas/*.json`, `lib/pkp/schemas/*.json` to see PKP's intentions
and read section [Schema](architecture-entities.md#schema) about the underlying concept.
Plugins can have schemas as well.
Or use your favorite database browser to explore the resulting table structure
and content directly.
