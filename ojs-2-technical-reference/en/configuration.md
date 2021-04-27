# Configuration

Most of OJS 2.x's settings are stored in the database, particularly journal settings in the `journal_settings` table, and are accessed via the appropriate DAOs and Model classes. However, certain system-wide settings are stored in a flat file called `config.inc.php` (which is not actually a PHP script, but is so named to ensure that it is not exposed to remote browsers).

This configuration file is parsed by the ConfigParser class (`classes/config/ConfigParser.inc.php`) and stored in an instance of the Config class (`classes/config/Config.inc.php`).

