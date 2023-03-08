---
book: admin-guide
version: 3.3
---
# User Authentication and Single Sign-on

For synchronizing user accounts across multiple applications, OJS and OCS support LDAP and Shibboleth, both of which have varying degrees of support in other applications including PhpBB, Drupal, WordPress, and other content management systems.

*LDAP* (the Lightweight Directory Access Protocol), while not as powerful as Shibboleth (e.g. LDAP does not support single sign-on, where logging into one service automatically logs into all others), is a common choice for centralizing authentication on a server. A popular LDAP implementation is [OpenLDAP](https://www.openldap.org/) an open source implementation of the protocol.

*Shibboleth* is a powerful alternative to LDAP for user management and authentication, and has grown in popularity. Shibboleth offers the account synchronization capabilities of LDAP as well as single-sign-on functionality (where logging into one service automatically logs into all others), providing a more seamless integration between your web applications. However, Shibboleth can be much more complex to install and configure than LDAP.


## Setting up Shibboleth

*Note*: Please note that Shibboleth support has not yet been ported to OCS.

Shibboleth is maintained by the [Internet2 Middleware Initiative](http://shibboleth.internet2.edu/), and as such their website provides a central location for downloads and documentation. Currently, they provide Shibboleth Service Provider 2.1 in binary form for all major operating systems, as well as providing source code. For further information on installing and setting up the Shibboleth Service Provider, please consult Internet2's support documentation.

Once Shibboleth is set up on your system, integration with your PKP application requires the use of the [Shibboleth plugin](https://github.com/pkp/shibboleth) from the Plugin Gallery.  After enabling this plugin, visit the plugin's Settings page for instructions on configuration.

## Resources

* [Cyrus SASL for System Administrators](http://www.sendmail.org/~ca/email/cyrus/sysadmin.html)
* [Shibboleth Documentation](https://wiki.shibboleth.net/confluence/display/SP3)
