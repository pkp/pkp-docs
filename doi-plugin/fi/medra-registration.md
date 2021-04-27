# mEDRA Configuration

If you want to register DOIs with mEDRA then you'll have to do some basic configuration independent of the chosen export mode (see previous chapter). As a Journal Manager you find the configuration page by navigating from your home page to Import/Export Data &gt; mEDRA Export/Registration Plugin and then click the "configure" link.

You should see the following form fields:

![OJS 2 mEDRA export plugin settings screen.](assets/MEDRA-basic-config.png)

Please enter the institution that registered the DOI prefix you are using. This is your own institution if you have an account with the registration agency yourself (automatic registration mode) or the institution of the registration account owner you are sending your XML files to (manual export mode).

The three technical contact fields should contain your own contact information. If you are the registration agency account holder then you'll repeat your institution's name here.

The email field is of special importance: mEDRA will send registration reports to the email address you enter here. These emails are important because they are the most convenient way for you to be informed whether your registration was successful or not. Every file uploaded to mEDRA (manually or via OJS automatic registration) will result in a corresponding email. The email you enter here should belong to a person with Journal Manager rights so that the person is able to correct export errors and re-export corrected registration data.

The mEDRA format requires a "country of publication" which cannot be unambiguously deduced from the OJS configuration. According to the O4DOI specification this is "the country where the serial work is published".

If you assign DOIs to journal issues then you'll have to decide whether you want to export issues as "work" or "manifestation". Please follow the links on the configuration page for an explanation of the distinction. If you do not assign DOIs to journal issues then you can leave the default configuration untouched.
