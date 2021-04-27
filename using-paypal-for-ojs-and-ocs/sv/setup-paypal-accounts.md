# Set up PayPal Accounts

To use the PayPal plugin you will need to have a PayPal Website Payments Standard Account and a Sandbox Developer Account. This chapter explains how to set up these accounts.

## Set up a PayPal Website Payments Standard Account

Go to https://www.paypal.com

![The PayPal.com homepage.](./assets/Paypal-1.png)

Hit the Sign Up button on the top-right corner of the page. You will need to register for a Paypal Business Account and determine the type of Business Account you need for your journal - Standard or Pro.

![The two business account options available on PayPal: Standard (Free) or Pro (includes customizable site integration for $35/month).](./assets/Paypal-2.png)

Start by entering the email address you will use for login.

![The PayPal business account email registration field.](./assets/Paypal-3.png)

Fill in the fields and save to create your business account.

![The PayPal business account registration screen filled in with sample login and business contact information.](./assets/Paypal-4.png)

You will need to enter the type of business from the list provided in the dropbox. This will prompt you to add additional information about your business including Product or Service keyword, estimated total sale, date business was established, and website information.

![PayPal's dropdown list of business types.](./assets/Paypal-5.png)

It will then ask you to complete the Account Holder Info.

![The personal details fields from the PayPal business account registration process.](./assets/Paypal-6.png)

You should receive an email from Paypal requesting to verify your Paypal account.

![A verification email from PayPal including a link to confirm the registered email account.](./assets/Paypal-7.png)

Once you have verified your account, you can then set up your payment information in your Account Settings > Business Profile.

![The Settings menu dropdown from the PayPal homepage.](./assets/Paypal-8.png)

Next, you will want to set up your Instant Payment Notification Preference from your Account Settings > Product & Services > Website Payments > Instant payment notifications > Update.

![The "Edit Instant Payment Notification Settings" screen from PayPal, with a sample journal URL pasted into the URL field.](./assets/Paypal-9.png)

Enter your journal's homepage URL and enable Instant Payment Notification (IPN).

## Set up a PayPal sandbox account

We recommend that you set up a PayPal sandbox account in order to test receiving payments by PayPal before using a real account. You can switch to the real PayPal website only after the sandbox account interactions with your journal are working well. This section describes the sandbox-related setup process.

Before we start, let’s clarify the types of accounts, as PayPal's names are a bit confusing. Paypal has two types of accounts that live on the sandbox website. You should distinguish between the developer account and pretend accounts. You first create one and only one developer account. This developer account, in turn, allows you to create pretend accounts with monopoly money. When logging into the [sandbox website](https://www.sandbox.paypal.com/), you may log in either to your real developer account or to one of the many pretend accounts that you have created.

1. Go to https://developer.paypal.com/developer/accounts/create
2. **Create a New Account**. This account has nothing to do with your real PayPal account. It is also not even the test account that you will be using to test Paypal with your site. Instead, it is the PayPal developer account that will allow you, in turn, to create pretend accounts. It is these pretend accounts that you will use to test PayPal interaction with your journal.
3. In the sandbox sign up, you should give your real information. It is a real account, used to develop the interaction. You will have the option of creating a merchant and personal account.
4. You will want to create one seller pretend account for your journal and a few pretend accounts for different buyers (journal subscribers, donors, etc). You can also give these accounts bank balances, log-in accounts, etc.

![The "Create Sandbox Account" settings screen from PayPal.](./assets/Paypal-10.png)

5. After you have created each PayPal account, you can easily log in to any one of these PayPal accounts via a menu choice from your sandbox developer accounts, which makes this easy. After you are logged in to your pretend PayPal account, you can do everything a real PayPal user can do. For example, you can verify your PayPal account. (If the site asks for verification, which the real PayPal does by depositing two small transactions into your account, you can provide any dollar amount you wish.)

