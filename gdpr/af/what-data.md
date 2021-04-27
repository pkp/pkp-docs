# What Data Do PKP Applications Process?


PKP applications process personal data as a fundamental part of their operations. Most data is only provided by consent, ie. through manual user registration, though some visitation data (eg. cookies, usage logs) may also be recorded.

## User Registration Data
When a visitor creates a user account in a PKP application, the following personal information is processed and stored (with some minor variation between OMP and OJS, and from version to version):

- Salutation
- First name*
- Middle name
- Last name*
- Suffix
- Username
- Gender
- Password (encrypted)
- Email address*
- ORCiD ID
- Website
- Mailing Address
- Country
- Phone
- Fax
- Affiliation
- Biography
- Registration date
- Last login date
- Locales
- Reviewing interests
- Role registrations (author, reader, and/or reviewer)

Only the username, first name, last name, email and password fields are required.

### Storage

This information is stored in the application database. Only the user password is encrypted.

### Availability and Access
This information is available to the user via their User Profile (and, with the exception of the username and dates, can be edited). System administrators, journal managers, and editors can also access and edit this data (except the username and dates) via the application back end. The data can be downloaded by journal managers in XML format. The data is not otherwise publicly available.

### Erasure
This data can be erased by the journal manager using the Merge Users tool, without affecting any editorial records. The erasure is subject to the considerations raised in the section “Scholarly Publishing, Data Privacy, and the Public Interest”, above.

## Contributor Metadata

When a manuscript is submitted to a PKP application, contributor information is included. Contributors can be authors, translators, volume editors, and so on. This information is stored as submission metadata, and is provided as part of any published manuscript record. The following contributor information is collected:

- Salutation
- First name*
- Middle name
- Last name*
- Email address*
- Suffix
- ORCiD ID
- Website
- Country*
- Affiliation
- Biography

Only the first name, last name, email address and country fields are required.

### Storage

This information is stored in the application database.

### Availability and Access

This information is available to almost any submission participant, with some restrictions to preserve the anonymous peer review process. In short: contributing authors, editors and editorial assistants can all see this data; in most cases, only editorial staff can edit this data after submission.

Editors can download this data via author and submission reports.

Most importantly: once a submission has been published, this data is made publicly available online in a variety of ways. It is available on the submission home page to readers, is available to indexing services in underlying metadata tags, is available via an OAI-PMH endpoint for harvesting, and may be made available in any number of ways via other system plugins.

### Erasure

This data can be erased by any editor by editing a submission’s metadata. This can be done at any point of the submission process, including after publication. Erasure is subject to the considerations raised in the section “Scholarly Publishing, Data Privacy, and the Public Interest” above.

## Workflow Data

All PKP applications track workflow information, mostly as submission-specific editorial history. The system tracks:

- All actions taken on a submission, and by whom;
- All notifications sent regarding a submission (including who sent and received the notification);
- All reviewer recommendations;
- All editorial decisions;
- All files uploaded as part of the submission process, including files that may have personally identifying information in the form of file metadata or in the files themselves.

### Storage

This information is stored in the application database, with the exception of any uploaded submission files, which are stored in the application’s submission files directory on the web server.

### Availability and Access

Submission participants have access to different amounts of workflow data depending on their role. Journal managers and editors can access all submission data; section editors and editorial assistants can access all submission data only for those submissions to which they have been assigned; authors have limited access to their own submissions, and are only able to see the data they have supplied, or that editorial staff have explicitly made available to them.

### Erasure

This data can only be erased by the editor, by rejecting and deleting the submission outright; or by a systems administrator via direct intervention into the underlying database or submission files directory. Erasure is subject to the considerations raised in the section “Scholarly Publishing, Data Privacy, and the Public Interest” above.

## General Visitor Information

PKP applications also collect general visitor usage data, including:

- Cookie information, to manage session history. Cookies are required to maintain a login session in PKP applications.
- Optionally, detailed usage log data, including: IP address; pages visited; date visited; and browser information, in application log files, as part of the Usage Statistics plugin. An anonymization option is available to privatize this information.
- Optionally, country, region and city information, in the metrics database. This data collection requires additional setup and is not enabled by default.

Other data may be tracked, either on the server or via third parties:

- Script loads from CDN servers;
- IP address information (including date, browser, etc.) in web server logs (separate from application log files as part of the Usage Statistics plugin).

Detailed instructions in limiting the amount of data you collect, and providing consent for the data you collect, can be found below.

### Storage

- Cookies: A cookie (usually titled “OJSSID” or “OMPSID”) is created when first visiting a PKP application, and is stored on the visitor’s computer. It is only used to store a session ID, and to facilitate logins. (If the visitor blocks cookies, OJS will still work properly, though they will not be able to log in.)
- Usage Statistics log files: As part of the usage statistics framework and plugin, OJS may store detailed application log files in the submission files directory (configured as the files_dir parameter in the OJS config.inc.php file), in a “usageStats” directory.
- Geographical data: Filtered usage data, including possibly geographic data, is also stored in the OJS database, in a “metrics” table.

### Availability and Access

- Cookies: These are available via the visitor’s browser settings.
- Usage Statistics log files: Only individuals with server file access can access application log files.
- Geographical data: Journal Managers can access filtered usage data by using the OJS usage report plugins.

### Erasure

- Cookies: These can be deleted via the visitor browser.
- Usage Statistics log files: These can be erased by system administrators with file access.
- Geographical data: This can only be erased by deleting records from the database directly, which also typically requires system administrator access.
