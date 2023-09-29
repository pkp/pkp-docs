---
noindex: true
---
# Subscriptions and Non-Publishing Use of OJS

If you are using OJS to publish content that requires subscription, or if you are using OJS for workflow but not publishing, some additional configuration is required to allow Érudit to access your content. **These steps are not required if you are using OJS to publish an open access journal.**

You will need to be running **Open Journal Systems [Long-Term Support](https://pkp.sfu.ca/software/ojs/download/) version or newer**.

## Site Administrator Steps

The following steps can be performed within OJS by users with the Site Administrator or the Journal Manager role **after** a System Administrator has followed Step 3. Ensure that you have entered an API key secret in the System Administrator Steps section of this document.

### Step 1. Create a Subscription Manager

In this step, you will create a new user with a Subscription Manager role. If you already have a Subscription Manager, you may skip this step and use that account instead. However, for security reasons, it is not recommended to use an account with any roles aside from Subscription Manager (it’s better to have a single role for this account, the Subscription Manager role). Later you will grant Érudit permission to act as this user when collecting content from your installation by providing the API key secret associated with this user account.

As a Journal Manager or Site Administrator, go to Users & Roles > Users. Use the “Add User” link to create a new user account.

Fill in the form and press “Save”. While we recommend using legitimate contact credentials for your journal, it does not matter what user details you use, as long as the required form fields are complete and you are able to remember the username and password for the next step.

Next, you will be presented with a list of User Roles. Make sure you check “Subscription Manager”. Press “Save” to complete  the user creation process.

This will complete the user creation process. Make sure to remember the username and password you entered when creating the account.

### Step 2. Generate an API Key

Log out of your OJS installation, and log in again using the credentials for the Subscription Manager account you created in Step 1.

Navigate to your user Profile (typically available in the top-right corner).

Open the “API Key” tab:

![Profile menu with API Key tab selected that has options to enable API access or generate a new API key.](./assets/apiKey.png)

There may already be content in the “API Key” box. If so, ignore it.

Use this form to perform the following:

1. Check the “Enable external applications with the API key to access this account” checkbox.
2. Check the “Generate new API key” checkbox.
3. Press the “Save” button.
4. Uncheck the “Generate new API key” checkbox.
5. Press the “Save” button.

With this, the “API Key” box should contain a long string of numbers and letters. This key will allow Érudit to perform actions as this newly-created user and download embargoed or unpublished content. Copy this to your clipboard, and provide it via email to your Coalition Publica contact. **Please be sure to uncheck the “Generate new API key” checkbox to prevent the key you share with Coalition Publica from inadvertently being overwritten.**
