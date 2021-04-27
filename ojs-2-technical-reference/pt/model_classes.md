# Model Classes

The Model classes are PHP classes responsible only for representing database entities in memory. For example, the `articles` table stores article information in the database; there is a corresponding Model class called `Article` (see `classes/article/Article.inc.php`) and DAO class called `ArticleDAO` (see the section called [Data Access Objects](http://pkp.sfu.ca/ojs/docs/technicalreference/2.1/classReferenceDataAccessObjects.html) [DAOs]).

Methods provided by Model classes are almost exclusively get/set methods to retrieve and store information, such as the `getTitle()` and `setTitle($title)` methods of the `Article` class. Model classes are not responsible for database storage or updates; this is accomplished by the associated DAO class.

All Model classes extend the `DataObject` class.

