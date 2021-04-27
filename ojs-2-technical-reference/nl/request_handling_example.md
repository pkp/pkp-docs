# Request Handling Example

Predictably, delegation of request handling occurs based on the request URL. A typical URL for a journal is:

http://www.mylibrary.com/ojs2/index.php/myjournal/user/profile

The following paragraphs describe in a basic fashion how the system handles a request for the above URL. It may be useful to follow the source code at each step for a more comprehensive understanding of the process.

In this example, http://www.mylibrary.com/ojs2/index.php is the path to and filename of the root `index.php` file in the source tree. All requests pass through this PHP script, whose task is to ensure that the system is properly configured and to pass control to the appropriate place.

After `index.php`, there are several more components to the URL. The function of the first two (in this case, `myjournal` and `user`) is predefined; if others follow, they serve as parameters to the appropriate handler function.

An Open Journal Systems 2.x installation can host multiple journals; `myjournal` identifies the particular journal this request refers to. There are several situations in which no particular journal is being referred to, such as when a user is viewing the Site Administration pages. In this case, this field takes a value of `index`.

The next field in this example URL identifies the particular Page class that will be used to process this request. In this example, the system would handle a request for the above URL by attempting to load the file `pages/user/index.php`; a brief glance at that file indicates that it simply defines a constant identifying the Page class name (in this case, `UserHandler`) and loads the PHP file defining that class.

The last field, `profile` in this case, now comes into play. It identifies the particular function of the Page class that will be called to handle the request. In the above example, this is the `profile` method of the `UserHandler` class (defined in the `pages/user/UserHandler.inc.php` file).