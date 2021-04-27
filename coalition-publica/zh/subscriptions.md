# Subscriptions and Non-Publishing Use of OJS

If you are using OJS to publish content that requires subscription, or if you are using OJS for workflow but not publishing, some additional configuration is required to allow Érudit to access your content. You will also need to be running **OJS 3.1.2.1 or newer**.

**These steps are not required if you are using OJS to publish an open access journal.**

## Step 1. Create a Subscription Manager

In this step, you will create a new user with a Subscription Manager role. If you already have a Subscription Manager, you may skip this step and use that account instead. However, for security reasons, it is not recommended to use an account with any roles aside from Subscription Manager (it’s better to have a single role for this account, the Subscription Manager role). Later you will grant Érudit permission to act as this user when collecting content from your installation by providing the API key secret associated with this user account.

As a Journal Manager or Site Administrator, go to Users & Roles > Users. Use the “Add User” link to create a new user account.

Fill in the form and press “Save”. While we recommend using legitimate contact credentials for your journal, it does not matter what user details you use, as long as the required form fields are complete and you will remember the username and password for the next step. This will complete Step #1 of the user creation process.

In Step #2, you will be presented with a list of User Roles. Make sure you check “Subscription Manager”. Press “Save” to complete Step #2 of the user creation process.

This will complete the user creation process. Make sure to remember the username and password you entered when creating the account.

## Step 2. Ensure that you have entered an API key secret

This step may require the help of your system administrator, as it requires access to a file on the server on which OJS is installed.

In your OJS configuration file (`config.inc.php` in your OJS installation directory) you will find a directive called “`api_key_secret`”. By default this setting is empty. If so, change it to contain a sequence of 32 characters or more (any letters and symbols). This will help make your installation more secure when using API keys.

You will not need to remember this setting, but if you lose it, anyone using API keys (such as the one we will generate in the next step) will need to get a new one.

Once the setting is no longer empty, save the file.

## Step 3. Generate an API Key

Log out of your OJS installation, and log in again using the credentials for the Subscription Manager account you created in Step 2.

Navigate to your user’s Profile (typically available in the top-right corner).

Open the “API Key” tab:

![](./assets/apiKey.png)

There may already be content in the “API Key” box. If so, ignore it.

Use this form to perform the following:

1. Check the “Enable external applications with the API key to access this account” checkbox.
2. Check the “Generate new API key” checkbox.
3. Press the “Save” button.

With this done, the “API Key” box should contain a long string of numbers and letters. Copy this to your clipboard, and provide it via email to your Coalition Publica contact.

That is all that is required! These steps will allow Érudit the right to perform actions with this newly-created user -- in particular, since the user has a Subscription Manager role, to download subscription-based or unpublished from the website that are not exposed to the public.
