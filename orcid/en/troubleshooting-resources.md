# Troubleshooting and Resources

## Troubleshooting

### Can multiple journals use the same API credentials?

Yes, but make sure to keep account name general since it will be in the metadata (under data source name on the ORCID record).

### An author received a request to register their ORCID iD but when they try to enter their iD they get an error.

This can happen when the Journal Manager has enabled the ORCID Profile Plugin but did not configure it with the journal’s ORCID API information. Go to Website Settings > Plugins, find the ORCID Profile Plugin, and open the Settings link below it. If required fields are blank, you need to follow the steps in [Enable and Configure the ORCID Profile Plugin in OJS](./installation-setup#enable-and-configure-the-orcid-profile-plugin-in-ojs).

### When the author’s ORCID iD link is added to the ORCID field, the last number gets cut off.

If you are using a version of OJS earlier than 3.1.1 and the link starts with “https” instead of “http” the last number in the link will get cut off. ORCiD previously explicitly required the use of http, but now they permit (and recommend) https. Support for this was added in OJS 3.1.1.

You can resolve this issue by upgrading your OJS install to 3.1.1 or later, or by removing the “s” from “https” in the ORCID link.

### I am getting an error “Redirect URI doesn’t match your registered redirect URIs”.

You will need to register a redirect_uri in your ORCID account developer tools. The ORCID redirect URI should be your public OJS URL.

For more information, see: [https://support.orcid.org/hc/en-us/articles/360006972513-How-do-redirect-URIs-work](https://support.orcid.org/hc/en-us/articles/360006972513-How-do-redirect-URIs-work)

### I tried to set up the ORCID plugin in OJS but encountered the error message “Please check your client id, scopes and redirect URIs” when testing the public sandbox.

This error is usually caused by entering a production API client and not a Sandbox API client. To fix this, update the settings in your ORCID Plugin to the non-Sandbox option [link to section above].

## Additional Resources

- [OJS-ORCID Plugin announcement](https://orcid.org/blog/2019/03/12/introducing-new-ojs-orcid-plugin)
- [ORCID Plugin in GitHub](https://github.com/pkp/orcidProfile/)
- [This video tutorial](https://www.youtube.com/watch?v=VdQwnbfVhtk) offers instructions on adding your API key to OJS (in Indonesian)
- [Open issues related to ORCID](https://github.com/pkp/pkp-lib/search?q=orcid+is%3Aissue&type=Issues)
- Current issues and development projects are outlined in the following ticket: [https://github.com/pkp/pkp-lib/issues/4935](https://github.com/pkp/pkp-lib/issues/4935)

Search for answers to your technical questions or post questions on [the PKP Community Support Forum](https://forum.pkp.sfu.ca/)
