# Deployment Options

According to our requirements, we need to cover a large range of deployment scenarios, from single journal deployments of OJS \(S1\) all the way up to large system landscapes including integration of OJS search with arbitrary search applications \(S4\). Fortunately the large majority of the configuration described in this document is independent of the deployment scenario. This means that only very few parameters will differ for the recommended configuration of different deployment scenarios. More specifically we recommend two deployment options:

* The single-journal and single-installation scenarios \(S1 and S2\) can be supported with an embedded solr server. The configuration for the embedded server will be part of the default OJS distribution. We call this deployment option the “embedded deployment”.
* The multi-installation and “just-another-app” scenarios \(S3 and S4\) can be supported with a central solr server reachable from all OJS servers over the provider's internal network. We call this deployment option the “network deployment”. We believe that even large OJS providers with one hundred or more journals will not require advanced solr scalability features like replication, see the “Index Architecture” discussion above. There is nothing, however, that keeps providers from replicating their OJS core to several servers if they wish so. Balancing between replicated servers can be done over an HTTP proxy or by configuring part of the OJS installations with one back-end and part with the other. Such configurations are out-of-scope for this document, though.

## Common Deployment Properties

### Installation Requirements

All OJS installation requirements apply unchanged. The following additional installation requirements must be met by the OJS server \(embedded deployment\) or the solr server \(network deployment\):

* Operating System: Any operating system that supports J2SE 1.5 or greater \(this includes all recent versions of Linux and Windows\).
* Disk Space: In the case of embedded deployment the disk the OJS installation resides on should have at least 150 MB of free disk space and the disk where the "files" directory resides on, should have enough free disk space to accommodate the search index created by solr. This should be no more than the double of the space occupied by galleys and supplementary files in that same folder. In the network deployment, disk space requirements for the servlet container and solr binaries depend on the chosen installation details. The space for the index should be at least double the space occupied by all galleys and supplementary files of the journals to be indexed.
* RAM: Memory requirements depend very much on the size of the indexed journals. If the journals have several GB of article galley files then for best performance a few GB of RAM will be required for the solr server and for the operating system's file cache. Smaller installations require less memory. We recommend starting the embedded server with default settings and only get back to it if performance problems occur in practice. In most cases, default settings will work well.

### Code/Binary Distribution

Both deployment options have in common that the solr client and configuration will be integrated into OJS as a generic plug-in. While the plug-in is disabled, the current OJS search function will work unchanged. Enabling the plug-in will switch to solr as a search back-end.

OJS plug-in code will be maintained within PKP's official github repository. The already existing SWORD plug-in creates a precedent for the integration of 3rd-party software libraries through PKP's plug-in mechanism. No Java software has been integrated into OJS by way of plug-ins so far. We therefore expect that a few additional integration techniques need to be developed.

Our proposed integration approach is described in the README.txt provided with the plug-in and will be summarized here.

For several reasons Java binaries for jetty or solr/Lucene should not be part of PKP's default distribution:

* The binaries are large and would inappropriately blow up the OJS distribution as many OJS users will not want to us solr search.
* When distributing binaries, PKP will have to take care to always upgrade binaries to the latest version and even release hot fixes when security updates occur. This adds a lot of unnecessary maintenance cost.

An integration as a git subproject as in the case of SWORD also does not seem appropriate as jetty/solr do not use git for their projects and maintaining our own jetty/solr binary git release server would be relatively costly.

We rather recommend that users download jetty/solr binaries from their original sources unchanged and extract them into well documented destinations within the solr OJS plug-in. A preconfigured installation script can then take care of copying or linking binaries to their required locations.

We cannot define a precise prescription for installing solr in a network deployment as this will largely depend on the provider's installation policy. Most providers will probably already have a preferred servlet container and may want to install and configure container and solr through OS-specific installation mechanisms.

### Security

Solr's example server does not come preconfigured with security in mind. Solr itself does not provide any authentication or authorization mechanisms. Securing solr must mostly be done through the servlet container and by properly protecting the server solr runs on. The following recommendations should be followed:

* Servers that host solr must be properly firewalled. Only search client applications should have \(restricted\) access to the solr search and update interfaces. In the case of the embedded scenario this means that solr should not be exposed to the network at all.
* Administrators should pay special attention to potential CSRF risks when developing their firewall strategy for solr. Clients with access to solr \(e.g. browsers of admin staff\) should be protected from 3rd-party “takeover”.
* Exposing solr to the public is strongly discouraged. If done, an authentication scheme must be implemented in the servlet container or HTTP proxy to limit access to solr's admin interface, the OJS DIH import handler, the default solr update handler and the generic select handler. A sample configuration for jetty using BASIC HTTP authentication is provided in the default configuration. This is not a recommended protection mechanism, though!
* We have chosen to provide custom search handlers rather than making search available through the generic select handler. The generic select handler allows unsecured access to update and admin handlers and may therefore NOT be exposed to the public.
* We recommend disabling remote streaming in solrconfig.xml: enableRemoteStreaming = false. Otherwise content of arbitrary files the solr process has access to locally or over the network will be exposed to whoever can access solr!
* We recommend disabling JMX unless actually used.
* We recommend never to use solr's example configuration unchanged as it is not secure.

As most providers operate in an Open Access scenario, we do not recommend access limitations to the search handler by default \(except for the firewalling as described above\). The default recommended configuration will expose the query interface to all users on the provider's network who have HTTP access to the solr endpoint.

In order to limit access in a subscription based environment and reduce the amount of data to be transferred over the network, our custom search handler was configured with mandatory \(“invariant”\) query parameters limiting – among other things – the returned fields to the article ID field and search score. Further recommendations for subscription-based journals have been given in this document where appropriate.

### Deployment Descriptors

The default solr deployment descriptor has been provided in plugins/generic/solr/embedded/solr/conf/solrconfig.xml. This descriptor is recommended for both, embedded and network deployments.

A default jetty configuration has been developed for the embedded scenario, see plugins/generic/solr/embedded/etc/\*.\*

Details of recommended solr and servlet container configurations for both scenarios will be given in the following sections.

## Embedded Deployment

The embedded deployment option will work for the large majority of OJS users. With a few easy and well-documented additional installation steps it is possible to transform every OJS server into a solr server that should be reasonably secure for the majority OJS users. We have laid out these steps in the README.txt that comes with the plug-in and will be displayed on the plug-in home page as long as no working solr server has been configured for the plug-in.

The embedded deployment works with a preconfigured Jetty server and solr binaries directly deployed to the special plug-in directory “plugins/generic/solr/lib”. It is sufficient to download and extract the binaries and execute an installation script to get up and running, both on Linux and Windows operating systems. We pre-package all solr configuration required for embedded deployment inside the plug-in. No additional manual configuration is usually required. Transitive data, i.e. the index and the spellchecking dictionary, will by default be saved to the files\_dir configured in config.inc.php. We'll create a “solr” sub-directory there for our purposes.

See plugins/generic/solr/embedded/bin/start.sh for further details of the configuration of the embedded scenario.

### Security

The configuration of the embedded scenario follows a "secure by default" approach. While we do recommend proper firewalling of the OJS server even in the embedded scenario, the default configuration will provide basic protection even with no firewall in place. We do this by binding the embedded Jetty server to the loopback device \(127.0.0.1\) which should prohibit external access to the server on most operating systems. The above comments about CSRF vulnerability of solr apply to the embedded deployment if users log into the OJS server and open a browser \(or other client software with network access\) there.

### Jetty/solr Upgrade

Even in the embedded scenario, jetty and solr will need to be upgraded from time to time, e.g. in case of security or performance updates. In this case the new versions can simply be extracted into “plugins/generic/solr/lib” following the instructions in README.txt.

### Starting/Stopping Solr

In the embedded scenario, solr can be started from within OJS with a background exec\(\) call of a start script running a daemonized version of jetty with proper start parameters. On Windows this will probably not work without additional installation steps to create a system service. We may alternatively try to work around this restriction by running Jetty within a “permanent” PHP background process \(e.g.[http://stackoverflow.com/questions/45953/php-execute-a-background-process](http://stackoverflow.com/questions/45953/php-execute-a-background-process)\). Whether this works has to be tested in practice. It doesn't seem to be a very scalable and reliable option, though.

Alternatively the Linux or Windows shell solr start script provided in plugins/generic/solr/embedded/bin can always be executed directly on the OJS server.

In the embedded scenario, the privileges of the web server / PHP user are probably appropriate for the solr server too. This will be the default case when starting solr from within OJS. Users are free, though, to execute the start script manually with any other user as long as they make sure that that user has write permissions to the solr index files.

### Logging

Analyzing search query logs is a great tool to optimize search. We do not recommend enabling query logging by default in the embedded scenario, though. Most users opting for the embedded scenario will not be able to interpret query logs, so these logs will just unnecessarily occupy disk space. The default configuration sets logging levels to obtain enough information on the console when users need support through the forum or other remote communication means.

## Network Deployment

The network deployment option enables large service providers to connect any OJS installation to a solr server running in an arbitrary servlet container \(e.g. Jetty or Tomcat\) deployed somewhere on the local network. We do not give specific installation instructions for solr servers deployed like this as these instructions depend on the provider's individual OS and \(in the case of Linux\) OS distribution. We make sure, though, that providers can copy the solr configuration directory provided with the solr plug-in unchanged and plug it into their servlet container. This enables providers to get up-and-running with an OJS-compatible solr installation in very little time.

We'll also recommend providing full step-by-step installation instructions for a well-known Linux distribution e.g. Debian/Ubuntu. This can then usually easily be adapted to other distributions as well.
