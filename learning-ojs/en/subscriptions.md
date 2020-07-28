---
book: learning-ojs
version: 3.2
---
# Subscriptions

OJS allows you to restrict some or all of your content to subscribers. To enable Subscriptions, first go to [Settings &gt; Distribution &gt; Access](./distribution_settings.md).

## Subscription Policies

Fill in details about your subscription policies on this page.

![](./assets/learning-ojs3.1-jm-subscriptions-policies.png)

- **Subscription Manager**: Add personal details for the responsible person.
- **Subscription Information**: Add policy details to display on the journal website.
- **Subscription Expiry**: Determine whether past subscribers should continue to have access to older content.
- **Subscription Expiry Reminder**: Configure automated renewal reminders.
- **Online Payment Notifications**: Keep the Subscription Manager informed of payment activities.
- **Open Access Options for Subscription Journals**: If appropriate select the number of current months for restricting access. Older content will be automatically made open.

## Subscription Types

The next step in setting up subscription management is to designate the types of subscriptions the journal offers.

![](./assets/learning-ojs3.1-jm-subscriptions-types.png)

Journals typically offer individual subscription and institutional subscription rates. Some journals may have special offers for members of an organization or students. OJS will support the management of print and/or online subscriptions. More than one type of subscription can be created to cover longer periods of time (12 months, 36 months).

Select **Create New Subscription Type** to add a new one.

![](./assets/learning-ojs3.1-jm-subscriptions-types-create.png)

- **Name of Type**: Give this new subscription type a unique name (e.g., Student).
- **Description**: Provide a brief description that will appear on the website.
- **Cost**: Select the currency type and amount.
- **Format**: Choose the appropriate format (e.g., Online).
- **Duration**: Enter the number of months this type of subscription will cover (e.g., 12).
- **Subscriptions**: Indicate whether this type covers individuals or institutions.
- **Options**: Select the appropriate options (if any).

## Payment Types

If you haven't already done so, go to [Settings &gt; Distribution &gt; Payments](./distribution_settings.md) and set the appropriate currency and payment method (e.g., PayPal).

Use this page to set the amounts charged for various types of fees.

![](./assets/learning-ojs3.1-jm-subscriptions-paytypes.png)

### Author Fees

If you want to charge an article processing charge (APC) to authors, enter the amount here. Enable Author Fees will allow you to request an article processing charge after the review process has been completed. When the article is accepted by the editor, the editor will have the option to require payment. This will result in the author receiving a notification in OJS and an email, which will direct them through the payment process.

![](./assets/learning-ojs3.1-jm-subscriptions-authorfees.png)

### Reader Fees

If you want to charge fees to access individual articles and issues, you can enter the prices for articles and issues here.

You can apply the fees to PDF files only by checking off "Only Restrict Access to PDF version of issues and articles".

Note that in order to sell access to an issue, you will need to upload an issue galley.

### General Fees

Use this to charge other fees, such as memberships.

## Payments

As various payments are received, they will be listed under this tab.

<hr />

## Individual Subscriptions

All types of individual subscriptions will appear here.

![](./assets/learning-ojs3.1-jm-subscriptions-indiv.png)

You can create a new individual subscription by using the Create New Subscription link. First, however, you will need to create a new account for that person under Users & Roles (see [the User Accounts chapter](/learning-ojs/en/user-accounts)). Once that is done, you can search for the account here, and apply the different configurations.

![](./assets/learning-ojs3.1-jm-subscriptions-indiv-create.png)

**Subscription Type**: Select the appropriate type for this new subscriber (e.g., Student) and its status (e.g., Active).

> Subscription Types were configured earlier in this chapter.

**Date**: Set the start and end dates for this subscription.

**Membership**: If the subscriber is associated with any relevant memberships, add that information here (optional).

**Reference Number**: If the subscribe is associated with any relevant reference number (such as an invoice number for payment), add that information here (optional).

**Notes**: If you have any relevant notes to add, record that information here (optional).

<hr />

## Institutional Subscriptions

All types of institutional subscriptions will appear here.

![](./assets/learning-ojs3.1-jm-subscriptions-instit.png)

Institutional subscriptions are managed similarly to individual subscriptions, but are used for libraries, research institutes, and other organizes that subscribe to your journal.

You can create a new individual subscription by using the Create New Subscription link. First, however, you will need to create a new account for the institution's contact person under Users & Roles (see [the User Accounts chapter](/learning-ojs/en/user-accounts)). Once that is done, you can search for the account here, and apply the different configurations.

![](./assets/learning-ojs3.1-jm-subscriptions-instit-create.png)

- **Subscription Type**: Select the appropriate type for this new subscriber (e.g., Library) and its status (e.g., Active). (Subscription Types were configured earlier in this chapter.)
- **Date**: Set the start and end dates for this subscription.
-  **Institution**: Add the name of the institution for this subscription (e.g., Simon Fraser University Library).
- **Mailing Address**: Add the address of the institution.
- **Domain**: Readers coming from a computer with this domain will automatically receive access (e.g., sfu.ca). This will apply to on-campus users.
- **IP Ranges**: The institution may provide you with IP ranges. Readers using a computer in this IP range will automatically receive access. Each IP range should be entered as a new line.

![](./assets/learning-ojs3.2-jm-subscriptions-instit-IP.png)

- **Notes**: If you have any relevant notes to add, record that information here (optional).

## Subscription Block

When a user is being provided access to a site or its content via a subscription, the information of the subscriber providing access can be displayed in the sidebar. The Subscription Block feature must be selected for display in Website Settings > Appearance > Sidebar Management.

## Setting Articles as Open Access

If you would like to set certain articles as Open Access, this can be done by going to **Issues** on the left menu. If you would like to set it before publishing the issue, click the Future tab followed by the blue arrow beside the Issue.

Under the Table of Contents, check off the articles that will be set as Open Access.

![](./assets/learning-ojs3.2-jm-subscriptions-single-article.png)
