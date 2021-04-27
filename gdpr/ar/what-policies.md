# What Policies Should Publishers Provide and Where?

The following policies should be provided in clear and plain language. Most policies can - and should - be added to the journal’s About page. In the case where there is a dedicated field to do this (eg. the journal’s Privacy Statement in OJS 2, and OJS/OMP 3), do so there. If there isn’t a dedicated field, these policies can be added like so:

  * OJS 2: Journal Management > Setup > Step 2.5: Add Item to Appear in “About the Journal”
  * OJS/OMP 3: Settings > Journal > Masthead > About the Journal.

It is also worth adding a link to these policies in email footers/signature fields. A simple statement like “Journal Data Policies: &lt;url to About page&gt;” would suffice, but each individual policy could also be linked separately. Email footers can be edited in the following location:

  * OJS 2: Journal Management > Setup > Step 1.4: Email Identification, in the Signature field.
  * OJS/OMP 3: Settings > Workflow > Emails, in the Signature field.

## 1. Consent policy for registration and contributor data collection

Users registering an account should be provided with access to the publisher’s data management and privacy policies, and should provide explicit and unambiguous consent that they understand these policies and that their data is being processed. Similarly, authors should consent to having their personal information processed by the system. They should have a means to remove their consent.

### OJS 2

OJS 2 does not provide a means to add a dedicated consent statement to user registration or author submission. One possible workaround for this would be to adapt the Privacy Statement (Journal Management > Setup > Step 2.3) to a more general Privacy and Consent Policy, in which the journal’s privacy approach is outlined and usage of the website (including registration and author submission) is acknowledged. This Privacy Statement is included as part of the user registration and author submission pages, and is also made available under About the Journal.

A consent policy can be added to Journal Management > Setup > Step 2.5: Add Item to Appear in About the Journal. This will be made available in About the Journal.

You may also want to add a consent statement to your Author Submission Checklist, in Journal Management > Setup > Step 3.1 Author Guidelines.

### OJS/OMP 3

These applications do not currently provide a means to add a consent checkbox item to user registration, but this [has been filed in GitHub](https://github.com/pkp/pkp-lib/issues/3575)  and will be available in OJS/OMP 3.1.1-1, on or before May 25.

You may also want to add a consent statement to your Author Submission Checklist, in Settings > Workflow > Submission > Submission Preparation Checklist.

## 2. Privacy Policy

The Privacy Policy, which can be edited in application settings and subsequently made available on the publisher’s About page and at various specific stages of the registration or data submission process, sets out the publisher’s commitment to protecting the privacy of its users while adhering to best publisher practices. Note that this statement should include reference to (a) the privacy protection afforded by the software, which can only be maintained if those responsible for the software ensure that the hosting service is using the latest application version available for the software; and (b) the Privacy Policy of the publisher’s online hosting service for the publication, which needs to be referenced explicitly. The privacy policy should provide a means by which data subjects can contact the data controller to exercise their Rights of the Individual as defined above.

This setting can be configured in the following locations:

  * OJS 2: Journal Management > Setup > Step 2.3: Privacy Statement.
  * OJS/OMP 3: Settings > Workflow > Submission > Privacy Statement.

### Sample Data Privacy Policy

The data collected from registered and non-registered users of this journal falls within the scope of the standard functioning of peer-reviewed journals. It includes information that makes communication possible for the editorial process; it is used to informs readers about the authorship and editing of content; it enables collecting aggregated data on readership behaviors, as well as tracking geopolitical and social elements of scholarly communication.

This journal’s editorial team uses this data to guide its work in publishing and improving this journal. Data that will assist in developing this publishing platform may be shared with its developer [Public Knowledge Project](https://pkp.sfu.ca/) in an anonymized and aggregated form, with appropriate exceptions such as article metrics. The data will not be sold by this journal or PKP nor will it be used for purposes other than those stated here. The authors published in this journal are responsible for the human subject data that figures in the research reported here.

Those involved in editing this journal seek to be compliant with industry standards for data privacy, including the European Union’s General Data Protection Regulation ([GDPR](https://www.eugdpr.org/eugdpr.org.html)) provision for “[data subject rights](https://www.eugdpr.org/key-changes.html)” that include (a) breach notification; (b) right of access; (c) the right to be forgotten; (d) data portability; and (e) privacy by design. The GDPR also allows for the recognition of “the public interest in the availability of the data,” which has a particular saliency for those involved in maintaining, with the greatest integrity possible, the public record of scholarly publishing.

## 3. Cookie policy

OJS uses cookies to manage user sessions (for which they are required). Cookies aren’t required to simply visit the site and read content. A cookie policy should be available from the About page in clear, precise language, and you may also want to provide a common “pop-up” cookie alert. Sample cookie policy language can be found online, for example [here](https://cookie-script.com/cookie-policy-templates/en.html). A cookie policy and alert can be added to PKP applications in a few different ways:

### OJS 2

1. Add a cookie policy in Journal Management > Setup > Step 2.5: Add Item to Appear in “About the Journal”. This will be made available in About the Journal.
2. Install the Cookie Alert plugin at https://github.com/ictineo/ojs-cookiesAlert and configure it with an appropriate consent notice. Make sure to provide a link to the larger cookie policy

### OJS 3

1. Add a cookie policy to the About section in Settings > Journal > Masthead > About the Journal.
2. Use the [Custom Header plugin](https://pkp.sfu.ca/2018/03/01/enriching-ojs-omp-with-javascript-no-coding-required/) (available in OJS and OMP 3.1+) to add cookie alert popup code. This code can be found at various websites online. See https://cookie-script.com/ for one example. (Note: a future version of OJS will have an explicit cookie consent option. See [this feature request](https://github.com/pkp/pkp-lib/issues/3624) for more information.)

### OMP 3

1. Add a cookie policy to the About section in Settings > Press > Masthead > About the Press.
2. Use the [Custom Header plugin](https://pkp.sfu.ca/2018/03/01/enriching-ojs-omp-with-javascript-no-coding-required/) (available in OJS and OMP 3.1+) to add cookie alert popup code. This code can be found at various websites online. See https://cookie-script.com/ for one example. (Note: a future version of OMP will have an explicit cookie consent option. See [this feature request](https://github.com/pkp/pkp-lib/issues/3624) for more information.)
