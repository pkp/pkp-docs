---
book: crossref-ojs-manual
version: 3.2
---

# Troubleshooting Deposits from XML Export

When you submit your DOIs via [Crossref's interface](http://doi.crossref.org), a report on the success of your submissions will be emailed to the address labeled under Technical Support Contact for your journal.  You can change the email of the depositor within the `<head>` parent element in your XML.

```XML
<?xml version="1.0" encoding="UTF-8"?>
<doi_batch xmlns="http://www.crossref.org/schema/4.3.6" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="4.3.6" xmlns:jats="http://www.ncbi.nlm.nih.gov/JATS1" xmlns:ai="http://www.crossref.org/AccessIndicators.xsd" xsi:schemaLocation="http://www.crossref.org/schema/4.3.6 http://www.crossref.org/schema/deposit/crossref4.3.6.xsd">
  <head>
    <doi_batch_id/></doi_batch_id>
    <timestamp/></timestamp>
    <depositor>
      <depositor_name>User Name</depositor_name>
      <email_address>Email for User</email_address>
    </depositor>
    <registrant/></registrant>
  </head>
```

Emailed resolution reports will contain a full JSON metadata record for each file submitted. Here's a sample of a successful submission:

```JSON
{"status":"ok","message-type":"deposit","message-version":"1.0.0","message":{"handoff":{"try-count":1,"delay-millis":2718.2818284590453,"status":"completed","timestamp":1462884657918},"dois":["10.4138\/atlgeol.2015.017"],"parent":null,"filename":null,"submitted-at":"Tue May 10 08:50:57 EDT 2016","status":"completed","length":4368,"content-type":"application\/vnd.crossref.deposit+xml","pingback-url":null,"submission":{"submission-id":"1392711272","batch-id":"79bb76da-e0db-4bfb-9586-5f90ed6a9230","record-count":1,"success-count":1,"warning-count":0,"failure-count":0,"messages":[{"status":"success","related-doi":"10.4138\/atlgeol.2015.017","message":"Successfully updated","message-types":[]}]},"test":false,"owner":"atgeo","batch-id":"79bb76da-e0db-4bfb-9586-5f90ed6a9230"}}
```

These reports aren't particularly user friendly, but you should be able to read through the file to see any of the following displayed:

- "success-count":1
- "failure-count":1

The number next to the count represents the number of errors in the submission. Below that, if the item failed, you'll be given the reason why a submission failed. For example:

```JSON
{"status":"failure","related-doi":null,"message":"Error: cvc-complex-type.2.4.b: The content of element 'pages' is not complete. One of '{\"http:\/\/www.crossref.org\/schema\/4.3.6\":first_page}' is expected. Error: cvc-complex-type.2.4.b: The content of element 'pages' is not complete. One of '{\"http:\/\/www.crossref.org\/schema\/4.3.6\":first_page}' is expected.","message-types":[]}]},"test":false,"owner":"tesl","batch-id":"abd48f64-c670-4569-b3d7-e6249927f917"}
```

In this particular case you can see that the error says, "the content of element 'pages' is not complete", and there's a link to the Crossref Schema to explain what sort of page reference is necessary. This sort of error very likely means that the page range for a submission is missing (fixable by going to the table of contents for that page and entering the page range for that article)

These errors should be relatively self-explanatory, and should at least point to the specific element missing from your article's metadata. Most deposit errors will come down to elements missing or misconfigured in your deposit XML. If you are seeing any XML validation errors when checking the status of a deposit, see if you can track the error back to eg. a missing component in your journal or plugin configurations, for example a missing ISSN.

## Checking Before You Submit

Crossref offer an XML validation tool that can let you know errors before you submit your XML. Their [metadata quality check](http://www.crossref.org/02publishers/parser.html) service allows a user to upload their XML file and receive notification of any potential errors before they officially send in their DOIs. This can be handy for more immediately checking a DOI's status without having to wait for potential errors in feedback.
