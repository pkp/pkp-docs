# Security

The OJS 2.x security model is based on the concept of roles. The system's roles are predefined (e.g. author, reader, section editor, proofreader, etc) and users are assigned to roles on a per-journal basis. A user can have multiple roles within the same journal.

Roles are managed via the `Role` model class and associated `RoleDAO`, which manage the roles database table and provide security checking.

The Validation class (`classes/security/Validation.inc.php`) is responsible for ensuring security in interactions between the client browser and the web server. It handles login and logout requests, generates password hashes, and provides many useful shortcut functions for security- and validation-related issues. The `Validation` class is the preferred means of access for these features.

