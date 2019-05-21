---
title: Release a Plugin - Plugin Guide for OJS and OMP
---

# Release a Plugin

Plugins that you write can be made available through the Plugin Gallery in the application. We encourage our community to release their plugins under a GPL-compatible license so that they can be used for everyone's benefit.

By releasing a plugin, you will get community support to identify bugs and translate the plugin. In some cases you may receive code contributions.

Plugin releases are one way that the Public Knowledge Project recognizes the contributions of community partners. We are more likely to take the time to assist you in maintaining your plugins if they are used widely in our community.

## Requirements

We ask that you abide by the following conditions if you want a plugin to be included in the Plugin Gallery.

1. The plugin must be released under a GPL-compatible license so that our community can retain ownership over their publishing software.
2. Each plugin must pass a code review. Your plugin will be given a `reviewed` or `partner` certification. We may not include your plugin in the gallery if it does not pass review.
3. We ask that you express a non-binding committment to maintain the plugin over time. Before inviting our community to adopt a plugin, we want to make sure that they will be able to use it in the future.
4. Each release of your plugin must be made available for download publicly. We prefer that your code is available from a public release repository such as GitHub or GitLab.

## Plugin Release XML

Each plugin must be defined in the [plugin gallery XML file](https://pkp.sfu.ca/ojs/xml/plugins.xml). This file provides a title, description, contact details, and information on each release package.

```xml
<!-- The product should match the directory name of the plugin. -->
<plugin category="generic" product="tutorialExample">
  <name locale="en_US">Tutorial Example</name>
  <homepage>https://github.com/pkp/tutorialExample</homepage>

  <!-- Summarize what the plugin does in a short sentence. -->
  <summary locale="en_US">This plugin is an example created for a tutorial on how to create a plugin.</summary>

  <!-- Describe what the plugin does and how someone can expect to use it when they install it. -->
  <description locale="en_US"><![CDATA[<p>This plugin is an example created for a tutorial on how to create a plugin. It is intended for learning purposes and should not be used on a live journal website.</p><p>You can learn more about how to create a plugin at the <a href="https://docs.pkp.sfu.ca/dev/plugin-guide/en">plugin guide</a>.</p>]]></description>

  <!-- Identify the person and institution maintaining the plugin. -->
  <maintainer>
    <name>Alec Smecher</name>
    <institution>Public Knowledge Project</institution>
    <email>pkp.contact@sfu.ca</email>
  </maintainer>

  <!-- For each release version, link to the release package
    and the md5sum of the release package. The version must
    always consist of four numbers separated by a ".". -->
  <release date="2019-05-18" version="1.1.0.0" md5="aebc731dedcc959db042f969a54fdc3a">
    <package>https://github.com/pkp/tutorialExample/releases/download/1.1.0.0/tutorialexample-1.1.0.0.tar.gz</package>

    <!-- Identify which versions of OJS or OMP are supported by this release -->
    <compatibility application="ojs2">
        <version>3.1.2.0</version>
    </compatibility>

    <!-- PKP will assign the certification type -->
    <certification type="official"/>

    <!-- Describe what changes can be expected in this release -->
    <description>Update to be compatible with OJS 3.1.2.</description>
  </release>

  <!-- Each plugin can have more than one release. -->
  <release date="2019-03-07" version="1.0.0.0" md5="13bc221dedcc959db042f969a543eab0">
    <package>https://github.com/pkp/tutorialExample/releases/download/1.0.0.0/tutorialexample-1.0.0.0.tar.gz</package>
    <compatibility application="ojs2">
        <version>3.1.1.4</version>
    </compatibility>
    <compatibility application="ojs2">
        <version>3.1.1.3</version>
    </compatibility>
    <certification type="official"/>
    <description>Initial release.</description>
  </release>
</plugin>
```

## Plugin Release Package

Your release package should be a `.tar.gz` file that contains a single directory with all of the files necessary to run the plugin. The directory name should match the `product` name in the release XML.

If your plugin is hosted at GitHub, you can [create a release](https://help.github.com/en/articles/creating-releases) and use our [bash script](../buildplugin.sh) to compile the release package. Use the following to run the script from the command line.

```
buildplugin.sh <repository_url> <release_tag>
```

If you use composer, npm or another tool to manage dependencies, you will need to extend the bash script to perform your build step.

> Any non-essential files provided by your dependency manager (eg - composer, npm) should not be included with the package. These often include demos and examples that can be security risks when uploaded to the plugins directory.
{:.warning}

## Request a Review

When you have prepared your release package and made it publicly available, please send your Plugin Release XML by email to Alec Smecher at pkp.contact@sfu.ca.

## Update Releases

Once your plugin has been added to the Plugin Gallery, you can not remove or modify the release package. If you modify the release package, the md5sum will change and the plugin will no longer be downloaded from the Plugin Gallery.

Whenever you make a change, even a small change to a readme file, you must release a new version and provide us with the new release XML snippet.

---

When you're ready, explore our [plugin examples](./examples) to learn more about what you can do with plugins.