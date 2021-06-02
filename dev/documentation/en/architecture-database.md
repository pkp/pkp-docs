---
title: Database - Technical Documentation - OJS|OMP|OPS
---

# Database

A MySQL or Postgres database is the most common data store in the application. Most entities read and write records to the database with a [DAO](./architecture-daos) class. This section describes some of the common conventions used in the database.

Most [entities](./architecture-entities) in the application are represented in the database by two tables. For example, the `journals` table contains a row for each journal.

```
mysql> describe journals;
+----------------+-------------+------+-----+---------+----------------+
| Field          | Type        | Null | Key | Default | Extra          |
+----------------+-------------+------+-----+---------+----------------+
| journal_id     | bigint(20)  | NO   | PRI | NULL    | auto_increment |
| path           | varchar(32) | NO   | UNI | NULL    |                |
| seq            | double      | NO   |     | 0       |                |
| primary_locale | varchar(14) | NO   |     | NULL    |                |
| enabled        | tinyint(4)  | NO   |     | 1       |                |
+----------------+-------------+------+-----+---------+----------------+
```

All additional data, such as configuration settings, journal descriptions and submission requirements, are stored in the `journal_settings` table.

```
mysql> describe journal_settings;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| journal_id    | bigint(20)   | NO   | PRI | NULL    |       |
| locale        | varchar(14)  | NO   | PRI |         |       |
| setting_name  | varchar(255) | NO   | PRI | NULL    |       |
| setting_value | text         | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
```

For example, a journal's configuration setting which determines whether keywords metadata is enabled is stored in a row in the `journal_settings` table.

```
mysql> select * from journal_settings where journal_id=1 and setting_name='keywords';
+------------+--------+--------------+---------------+--------------+
| journal_id | locale | setting_name | setting_value | setting_type |
+------------+--------+--------------+---------------+--------------+
|          1 |        | keywords     | request       | NULL         |
+------------+--------+--------------+---------------+--------------+
```

Properties in an entity's [schema](./architecture-entities#schemas) that are an array or object are serialized to JSON when they are stored in the settings table.

```
mysql> select * from journal_settings where journal_id=1 and setting_name='supportedLocales';
+------------+--------+----------------------------+-------------------+--------------+
| journal_id | locale | setting_name               | setting_value     | setting_type |
+------------+--------+----------------------------+-------------------+--------------+
|          1 |        | supportedLocales           | ["en_US","fr_CA"] | NULL         |
+------------+--------+----------------------------+-------------------+--------------+
```

Serialized data can not be efficiently searched, so it should never include data that you want to query against.

Multilingual data is stored in an entity's settings table. For example, a journal's name that appears in English and French Canadian is stored in two rows in the `journal_settings` table.

```
mysql> select * from journal_settings where setting_name="name";
+------------+--------+--------------+--------------------------------------+
| journal_id | locale | setting_name | setting_value                        |
+------------+--------+--------------+--------------------------------------+
|          1 | en_US  | name         | Journal of Public Knowledge          |
|          1 | fr_CA  | name         | Journal de la connaissance du public |
+------------+--------+--------------+--------------------------------------+
```

---

Learn more about the [plugin system](./architecture-plugins).
