# A Note on URLs

Generally, URLs into OJS make use of the `PATH_INFO` variable. For example, examine the following (fictional) URL:

http://www.mylibrary.com/ojs2/index.php/myjournal/user/profile

The PHP script invoked to handle this request, `index.php`, appears halfway through the URL. The portion of the URL appearing after this is passed to `index.php` via a CGI variable called `PATH_INFO`.

Some server configurations do not properly handle requests like this, which most often results in a 404 error when processing this sort of URL. If the server cannot be re-configured to properly handle these requests, OJS can be configured to use an alternate method of generating URLs. See the `disable_path_info` option in `config.inc.php`. When this method is used, OJS will generate URLs unlike those used as examples in this document. For example, the URL above would appear as:

http://www.mylibrary.com/ojs2/index.php?journal=myjournal&page=user&op=profile

