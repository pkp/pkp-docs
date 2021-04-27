# Data Access Objects (DAOs)

Data Access Objects are used to retrieve data from the database in the form of Model classes, to update the database given a modified Model class, or to delete rows from the database.

Each Model class has an associated Data Access Object. For example, the `Article` class (`classes/article/Article.inc.ph`p) has an associated DAO called `ArticleDAO` (`classes/article/ArticleDAO.inc.php`) that is responsible for implementing interactions between the Model class and its database entries.

All DAOs extend the `DAO` class (`classes/db/DAO.inc.php`). All communication between PHP and the database back-end is implemented in DAO classes. As much as is logical and efficient, a given DAO should limit its interaction to the table or tables with which it is primarily concerned.

DAOs, when used, are never instantiated directly. Instead, they are retrieved by name using the `DAORegistry` class, which maintains instances of the system's DAOs. For example, to retrieve an article DAO:

`$articleDao = &DAORegistry::getDAO('ArticleDAO');`

Then, to use it to retrieve an article with the ID stored in `$articleId`:

`$article = &$articleDao->getArticle($articleId);`

Note that many of the DAO methods that fetch a set of results will return subclasses of the `ItemIterator` class rather than the usual PHP array. This facilitates paging of lists containing many items, and can be more efficient than preloading all results into an array. See the discussion of Paging Classes in the Support Classes section.

