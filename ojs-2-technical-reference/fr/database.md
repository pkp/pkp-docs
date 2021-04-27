# Database

- SQL tables are named in the plural (e.g. `users`, `journals`) and table names are lower case;
- SQL database feature requirements should be kept minimal to promote broad compatibility. For example, since databases handle date arithmetic incompatibly, it is performed in the PHP code rather than at the database level.
- All SQL schema information should be maintained in `dbscripts/xml/ojs_schema.xml` (except plugin schema, described later).

