# Database Support

The basic database functionality is provided by the ADODB library (http://adodb.sourceforge.net); atop the ADODB library is an additional layer of abstraction provided by the Data Access Objects (DAOs). These make use of a few base classes in the `classes/db` directory that are extended to provide specific functionality.

- `DAORegistry.inc.php`: This implements a central registry of Data Access Objects; when a DAO is desired, it is fetched through the DAO registry.
- `DBConnection.inc.php`: All database connections are established via this class.
- `DAO.inc.php`: This provides a base class for all DAOs to extend. It provides functions for accessing the database via the `DBConnection` class.

In addition, there are several classes that assist with XML parsing and loading into the database:

- `XMLDAO.inc.php`: Provides operations for retrieving and modifying objects from an XML data source
- `DBDataXMLParser.inc.php`: Parses an XML schema into SQL statements

