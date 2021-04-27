# Configuration Recommendations for GDPR Compliance

The following practices will provide a higher level of data privacy support, and are recommended as part of a reasonable attempt to fulfil GDPR requirements.

**Use SSL/HTTPS for all web traffic.** OJS and OMP can be used in conjunction with an SSL certificate so that all traffic between the user and the server is encrypted and transferred via [HTTPS](https://en.wikipedia.org/wiki/HTTPS). In order to enable this, install an SSL certificate for your domain (or ask your service provider to do so) and set “force_ssl” to “on” in your config.inc.php file.

**Disable CDN usage.** [Content Delivery Networks](https://en.wikipedia.org/wiki/Content_delivery_network) (CDNs) are used by OJS and OMP to deliver some content, including javascript and fonts. Any CDN can record and track detailed visitor information whenever they are loaded by the web browser, including time; user IP address; web browser; and page loaded. CDNs can be disabled in config.inc.php by setting the “enable_cdn” to “off”. (Note: this will not necessarily disable CDNs are added to the system in other ways, such as via code customizations, via third-party plugins, or in form fields.)

**Restrict usage of other third party scripts.** Third-party scripts, such as Google Analytics, should only be used if the application is required and the implications are understood. The use of these scripts should be properly identified in the Privacy Statement.

**Anonymize usage data.** OJS and OMP both have a Usage Statistic plugin that provides detailed metrics on page views and galley file downloads. It also creates and stores log files containing detailed information including IP address, date/time visited, page views, and browser information. This plugin does have a “Respect data privacy” option that will hash IP addresses, and inform visitors that this data is being tracked (with an option to opt-out). More information is available in the following locations:

* OJS 2: Journal Management > System Plugins > Generic Plugins > Usage Statistics Plugin > Settings.
* OJS/OMP 3: Settings > Website > Plugins > Generic Plugins > Usage Statistics Plugin > Settings.

Enabling the “Respect data privacy” option will require direct system administrator assistance.

**Use the Sharrif Plugin for sharing/social media.** Social media platforms like Twitter and Facebook all provide ways to embed sharing options and other social features into your sites, but similar to CDNs and other third party script options, these embeddable scripts typically allow the social media platform to track usage of your website. [OJS-de](http://www.ojs-de.net), the German OJS user network, has developed [a plugin](https://github.com/ojsde/shariff) to provide social media and sharing functions using the privacy-respecting [Sharrif solution](https://github.com/heiseonline/shariff). It is available here, for OJS 2 and 3, and OMP 3: [https://github.com/ojsde/shariff/releases](https://github.com/ojsde/shariff/releases).
