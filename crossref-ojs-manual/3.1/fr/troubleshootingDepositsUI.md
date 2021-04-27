---
book: crossref-ojs-manual
version: 3.1
---

# Troubleshooting Deposits from UI/Plugin-based Registration

In order to check on the status of a registration attempt, you can click on any displayed "status". Potential "status" options include:

- submitted
- complete
- found
- failed

Clicking on one of these submission headers will then open a pop-up where you'll be asked for your Crossref login credentials before you can see the report. These reports are currently displayed in the default JSON metadata display provided by Crossref. Here's an example of a successful deposit:

```JSON
{"status":"ok","message-type":"deposit","message-version":"1.0.0","message":{"handoff":{"try-count":1,"delay-millis":2718.2818284590453,"status":"completed","timestamp":1462884657918},"dois":["10.4138\/atlgeol.2015.017"],"parent":null,"filename":null,"submitted-at":"Tue May 10 08:50:57 EDT 2016","status":"completed","length":4368,"content-type":"application\/vnd.crossref.deposit+xml","pingback-url":null,"submission":{"submission-id":"1392711272","batch-id":"79bb76da-e0db-4bfb-9586-5f90ed6a9230","record-count":1,"success-count":1,"warning-count":0,"failure-count":0,"messages":[{"status":"success","related-doi":"10.4138\/atlgeol.2015.017","message":"Successfully updated","message-types":[]}]},"test":false,"owner":"atgeo","batch-id":"79bb76da-e0db-4bfb-9586-5f90ed6a9230"}}
```

They aren't particularly user friendly, but you should be able to read through the file to see any of the following displayed:

- "success-count":1
- "failure-count":1

The number next to the count represents the number of errors in the submission. Below that, if the item failed, you'll be given the reason why a submission failed. For example:

```JSON
{"status":"failure","related-doi":null,"message":"Error: cvc-complex-type.2.4.b: The content of element 'pages' is not complete. One of '{\"http:\/\/www.crossref.org\/schema\/4.3.6\":first_page}' is expected. Error: cvc-complex-type.2.4.b: The content of element 'pages' is not complete. One of '{\"http:\/\/www.crossref.org\/schema\/4.3.6\":first_page}' is expected.","message-types":[]}]},"test":false,"owner":"tesl","batch-id":"abd48f64-c670-4569-b3d7-e6249927f917"}
```

In this particular case you can see that the error says, "the content of element 'pages' is not complete", and there's a link to the Crossref Schema to explain what sort of page reference is necessary. This sort of error could mean one of the following issues is happening:

- the page range for a submission is missing (fixable by going to the table of contents for that page and entering the page range for that article)
- the page range for a submission is written in a way that the plugin cannot properly parse to send to crossref. (the best way to write a page range is `first_page - last-page`, with particular emphasis here on the spacing before and after the dash)

These errors should be relatively self-explanatory, and should at least point to the specific element missing from your article's metadata. Most deposit errors will come down to elements missing or misconfigured in your deposit XML. If you are seeing any XML validation errors when checking the status of a deposit, see if you can track the error back to eg. a missing component in your journal or plugin configurations, for example a missing ISSN.

**It is vital to note** that a status indication of "submitted" or "complete" does not necessarily indicate that a DOI has been successfully registered and is now available via Crossref - these statuses simply refer to the state of the DOI within the Crossref workflow. For complete status information, click on the status text. Often, a deposited DOI is entered in a queue along with thousands of other DOIs from different publishers. The information you receive via a status may take some time to accurately report.

## Some Known Issues

### DOI Links Auto-direct to Journal Homepage

This can happen if your old DOI links were prepended with `http:` but you have since moved to SSL with `https:`. Updating your DOIs via the plugin or XML Export will solve this issue.
