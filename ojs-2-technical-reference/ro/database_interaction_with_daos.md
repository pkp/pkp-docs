# Database Interaction with DAOs

The following code snippet retrieves an article object using the article ID supplied in the `$articleId` variable, changes the title, and updates the database with the new values.

**Example 3.2. Retrieving an Article Object**

````
// Fetch the article object using the article DAO.
$articleDao = &DAORegistry::getDAO('ArticleDAO');
$article = &$articleDao->getArticle($articleId);

$article->setTitle('This is the new article title.');

// Update the database with the modified information.
$articleDao->updateArticle($article);
````

Similarly, the following snippet deletes an article from the database.

**Example 3.3. Deleting an Article Object**

````
// Fetch the article object using the article DAO.
$articleDao = &DAORegistry::getDAO('ArticleDAO');
$article = &$articleDao->getArticle($articleId);

// Delete the article from the database.
$articleDao->deleteArticle($article);
````

The previous task could be accomplished much more efficiently with the following:

**Example 3.4. Deleting an Article Object More Efficiently**

````
// Delete the article using the article DAO.
$articleDao = &DAORegistry::getDAO('ArticleDAO');
$articleDao->deleteArticleById($articleId);
````

Generally speaking, the DAOs are responsible for deleting dependent database entries. For example, deleting an article will delete that article's authors from the database. Note that this is accomplished in PHP code rather than database triggers or other database-level integrity functionality in order to keep database requirements as low as possible.

