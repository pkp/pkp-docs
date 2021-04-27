# File Management

As files (e.g. galleys and journal logos) are stored on the server filesystem, rather than in the database, several classes are needed to manage this filesystem and interactions between the filesystem and the rest of the OJS. These classes can be found in the `classes/file directory`.

- `FileManager.inc.php`: The three subsequent file management classes extend this class. It provides the necessary basic functionality for interactions between the web server and the file system.
- `FileWrapper.inc.php`: This implements a wrapper around file access functions that is more broadly compatible than the built-in access methods.
- `ArticleFileManager.inc.php`: This extends `FileManager` by adding features required to manage files associated with a particular article. For example, it is responsible for managing the directory structure associated with article files. See also `ArticleFile` and `ArticleFileDAO`.
- `PublicFileManager.inc.php`: Many files, such as journal logos, are “public" in that they can be accessed by anyone without need for authentication. These files are managed by this class, which extends the `FileManager` class.
- `TemporaryFileManager.inc.php`: This class allows the system to store temporary files associated with a particular user so that they can be maintained across requests. For example, if a user is composing an email with an attachment, the attachment must be stored on the server until the user is finished composing; this may involve multiple requests. `TemporaryFileManager` also extends `FileManager`. See also `TemporaryFile` and `TemporaryFileDAO`.

