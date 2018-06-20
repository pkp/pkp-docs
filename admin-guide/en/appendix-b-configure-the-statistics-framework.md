# Configure the Statistics Framework

This section is only relevant to those using OJS 2.4.3+ and OJS 3.0+. Older versions of OJS do not have this framework, and need no configuration.

In most cases, the Statistics Framework should “just work”, in particular with fresh installs. Just the same, there are a number of configuration options available to you, and should be reviewed after installation or upgrade. You also need to put in place some sort of mechanism to run scheduled tasks so that usage stats are processed regularly.

**Note for Journal Managers and Editors:** Most of the following steps would be considered expert-level, and should only be undertaken by Site Administrators and systems administrators. If you have questions about the more advanced issues presented here, consult with your service provider. The main exception to this is the Statistics Display option described in the next section. If you want to publicly display article usage statistics on article abstract pages, you can enable this option.

There are three configuration steps that you will have to consider: configuring the usage statistics plugin, configuring scheduled tasks, and configuring regional data tracking, if you want to track regional data. \(OJS can track country, region and city data.\)

## Configure the Usage Statistics Plugin

OJS 2.4.3+ and 3+ include a generic Usage Statistics Plugin that is responsible for how these statistics are logged and recorded in the system. The plugin’s default configurations are reasonable, and work for most use cases, though you will want to review them after you install or upgrade OJS.  In order to enable the collection of usage data, make sure that this plugin is enabled.

The plugin settings can be found in OJS 2 by going to User Home &gt; Journal Manager &gt; System Plugins &gt; Generic Plugins &gt; Usage Statistics Plugin &gt; Settings

The plugin settings can be found in OJS 3 by going to Dashboard &gt; Settings &gt; Website &gt; Plugins &gt; Generic Plugins &gt; Usage Statistics Plugin &gt; Settings

We won’t go into detail for every single configuration option for the plugin, but we do suggest the following as a reasonable setup:

* If it is not already enabled, check the box to the right of the plugin name
* Click the blue arrow next to the plugin and then click **Settings**
* Enable “Create Log Files” if it isn’t enabled already
* Leave the “Parse Log File Regex” option alone unless you know what you are doing
* Leave the “Compress Archives” option disabled, unless server space is a consideration \(see the Troubleshooting section below\)
* Leave the “Data Privacy Option disabled, unless you can follow the instructions provided
* Enable the “City” and “Region” options, and follow the section on Configuring Regional Data Tracking below
* If available in your OJS install, consider enabling the Statistics Display Options if you want basic abstract and galley views to be available on article landing pages. See the above section Display Usage Statistics for more information.

## **Configure Scheduled Tasks**

Once the Usage Statistics plugin has been enabled, you need to ensure that statistics are logged and processed as part of OJS’ “scheduled tasks." There are two ways to do this:

#### **1. Enable the OJS Acron plugin**

The plugin can be found in OJS 2 by going to User Home &gt; Journal Manager &gt; System Plugins &gt; Generic Plugins &gt; Acron Plugin

The plugin can be found in OJS 3 by going to Dashboard &gt; Settings &gt; Website &gt; Plugins &gt; Generic Plugins &gt; Acron Plugin

Once enabled, this plugin should result in the processing of log files \(along with other scheduled tasks, such as review and subscription reminders\).

#### 2. Configure a server-side cron job

This is a more advanced option, requiring command-line access to the server, and should only be configured by an experienced systems administrator. You will need to create a cron job that will trigger the following script in your OJS system directory:

```text
tools/runScheduledTasks.php
```

This script expects an accompanying parameter in the form of a pointer to an XML file describing the scheduled task. This file will differ depending on whether you are using OJS log files, external log files \(eg. Apache log files\), or OJS log files with an automated staging process. Most journals will be using the simple “OJS log file” option \(option 1 below\). The location of these XML files are slightly different depending on whether you are using OJS 2 or 3. The full commands are as follows, and will have to be added to the server cron job, ideally so that they run daily.

**Commands to be run \(OJS 2\)**

| **Process** | **Command** |
| --- | --- | --- | --- |
| OJS log files | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasks.xml |
| OJS log files with automated staging process | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksAutoStage.xml |
| External log files | php tools/runScheduledTasks.php plugins/generic/usageStats/scheduledTasksExternalLogFiles.xml |

**Commands to be run \(OJS 3\)**

| **Process** | **Command** |
| --- | --- | --- | --- |
| OJS log files | php tools/runScheduledTasks.php lib/pkp/plugins/generic/usageStats/scheduledTasks.xml |
| OJS log files with automated staging process | php tools/runScheduledTasks.php lib/pkp/plugins/generic/usageStats/scheduledTasksAutoStage.xml |
| External log files | php tools/runScheduledTasks.php lib/pkp/plugins/generic/usageStats/scheduledTasksExternalLogFiles.xml |

After you configure either the Acron plugin or a cron job, your statistics should start processing. They only process at set times: once every 24 hours if using the Acron plugin, and at whatever frequency set in the cron job, if that is being used. Wait for that amount of time, and then check to see if stats are now available. If they aren’t proceed to the Troubleshooting section.

## **Configure Regional Data Tracking**

The Usage Statistics plugin can also track regional data, including visitor country, region and city information.

**Note 1**: This is an entirely optional step.

**Note 2:** Storing geographical data can take up a lot of space, and can also increase processing time when generating reports. If you are running into space issues, or are running into timeouts when attempting to generate reports, you may have to either increase disc or memory resources, or disable geographic logging.

**Note 3:** If you don’t enable and configure geographic tracking immediately, and decide to enable it at a later date, you will have to reprocess your old log files in order for this data to be available in older usage statistics.

In order to track this information:

1. The Usage Statistics Plugin must have the Region and City options enabled as described above.
2. The following server-side configuration must also be in place. This step requires command-line access to the server, and country and region information will not work unless this has been done.
   1. Open a shell prompt on the server
   2. Go into the OJS installation base directory
   3. Execute the following commands:

```text
$ wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz
$ gunzip GeoLiteCity.dat.gz
$ mv GeoLiteCity.dat plugins/generic/usageStats
```

  


  


  


  
  
  


