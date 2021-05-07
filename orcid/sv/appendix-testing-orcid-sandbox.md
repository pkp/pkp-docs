# Appendix:  Testing the ORCID Sandbox

Once your Sandbox Client ID and Client Secret have been added to the configuration, you can to test the plugin in the ORCID sandbox environment. The sandbox allows the creation of test user ORCID iD accounts and use of the plugin without having to worry about affecting data on the live (production) ORCID Registry. Once the plugin works as expected in the ORCID sandbox environment, you can obtain credentials and move to the ORCID production environment and go live with the plugin.

To test that the plugin is working correctly in the sandbox:

## Create a Sandbox ORCID iD

For testing purposes, you will need to create a fake “sandbox” ORCID iD. To do this:

1. Go to [https://sandbox.orcid.org/register](https://sandbox.orcid.org/register) and fill in the form. Make sure to use a made-up email address using `@mailinator.com` - for example: `test123@mailinator.com` Please note the sandbox only allows `@mailinator.com` addresses.
2. Write down the email address and password that you used to create the sandbox ORCID iD
3. Go to [https://www.mailinator.com/](https://www.mailinator.com/) and in the “Enter Public Mailinator Inbox” box, type in your made-up email address and click “Go”
4. You should be taken to the inbox where a confirmation email from ORCID should appear. Follow the prompts in the email to verify your sandbox ORCID iD account. You can now add information and make changes to your sandbox ORCID record. If your email does not appear in the mailinator.com mailbox, there can be several reasons for it. For example, your OJS/OPS  is not properly configured for sending emails, you have misspelled the credentials. Or you may have swapped the client id and secret.

### Connect your Sandbox ORCID iD with OJS/OPS & Submit a Test Publication

There are multiple different ways that an author can connect their ORCID iD with their works in OJS/OPS. The method by which an author’s ORCID iD is connected to their publication in OJS will depend on the number of authors and who is submitting the article. For testing, you will want to follow the instructions below depending on the scenarios that apply to your journal(s) or preprint server(s). If you plan to test more than one scenario, it is recommended to register for multiple sandbox ORCID iD accounts following the instructions above, and use a different sandbox ORCID iD to test the different scenarios below:

#### Scenario 1: Any author can connect their authenticated ORCID iD to their OJS profile during their OJS account creation

1. If an author does not yet have an OJS/OPS user account, they can connect their ORCID iD at the registration step.
2. When on the OJS/OPS register page, click the button to “Create or Connect your ORCID iD” - you will be prompted to sign in to your ORCID record (make sure to use your sandbox ORCID email address and password) and “authorize” OJS/OPS to access your ORCID iD and ORCID record.
3. Some of the information in the registration form (e.g., name) will be automatically populated based on the information set to public visibility in the user’s ORCID Record.
4. Once registered and logged in, the user can go to their Profile and click on the Public tab to see their authenticated ORCID iD. **Please Note:** There is currently [a bug associated with this feature](https://github.com/pkp/orcidProfile/issues/158). Once you submit a publication and the publication gets published, the ORCID iD should appear on the publication in OJS/OPS. If you are using the Member API, the publication should also appear on the ORCID Record in the works section once your article is published (please note: this does not currently work with OPS).

#### Scenario 2: An article with one author is submitted by the author while logged in to their OJS/OPS author account

1. If an author has an OJS/OPS user account where they are identified as an author, and can sign in to OJS/OPS, their ORCID iD can be connected to OJS/OPS via their OJS/OPS user profile:
2. When logged in to OJS/OPS, go to your Profile and click on the Public tab
3. Click the button to “Create or Connect your ORCID iD” - you will be prompted to sign in to your ORCID record (make sure to use your sandbox ORCID email address and password) and “authorize” OJS/OPS to access your ORCID iD and ORCID record.
4. Your authenticated ORCID iD should then appear.
5. Once you submit a publication and the publication gets published, the ORCID iD should appear on the publication in OJS/OPS. If you are using the Member API, the publication should also appear on the ORCID record in the works section once your article is published (please note: this does not currently work with OPS).

#### Scenario 3: An article with multiple authors is submitted by one author while logged in to their OJS/OPS author account

1. The author who is submitting the article can connect their own ORCID iD in their OJS/OPS profile by following the instructions listed in Scenario 1.
2. To request authenticated ORCID iDs for the other authors/contributors, follow the steps in Scenario 4.

#### Scenario 4: An article with one or more authors is submitted by an administrator or other individual who is not one of the authors

1. During the article submission process, when you get to step 3 “Enter Metadata,” there is a section to add contributors.
2. For each contributor, click “Add Contributor” and enter the information for each author. For the purposes of testing in the sandbox, you will want to make sure to use the `@mailinator.com` email address that you used to create your sandbox ORCID iD.
3. Towards the bottom of the “Add Contributor” form, in the “ORCID” section, you will need to check the box to Send e-mail to request ORCID authorization from contributor. Then click Save. ![Image of ORCID contributor authorization](./assets/orcid-contributor-authorization.png)
4. Then, go back to [mailinator.com](https://www.mailinator.com) and go to your email inbox. You should see an email from OJS asking you to connect your ORCID iD. Follow the prompts in the email to connect your ORCID iD.
5. Once the article is published, the ORCID iD should appear on the article if the ORCID iD for each contributor has been connected.
6. If you are using the Member API, once the article is published, the work should then appear on your sandbox ORCID record in the works section.

The result for all scenarios should be that when the article is published, the ORCID iD icon should appear next to the author name(s) on the publication. If you are using the Member API, you should also look at your Sandbox ORCID iD record to verify that the publication information was added to the “Works” section of your ORCID record for you. Currently OJS/OPS article metadata is sent to ORCID only when the article is published. Therefore, if an author’s ORCID iD is added to an article after it has been published, the author’s ORCID profile will not contain the article information. To trigger this manually, the article has to be unpublished and re-published in order for the article to appear on the author’s ORCID profile.
