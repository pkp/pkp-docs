- - -
title: Test PayPal plugin in OJS - Using the PayPal Plugin for OJS and OMP
- - -

# تهيئة نظام المجلات المفتوحة

الآن وقد أنشأت حسابك في PayPal، عليك تفعيل طريق الدفع لديك في نظام المجلات المفتوحة.

## OJS 3.x

Under Settings > Website > Plugins, enable the Paypal Fee Payment plugin in the Plugin Gallery.

![The Paypal Fee Payment plugin enabled in the OJS Plugin Gallery.](assets/Paypal-ojs3-1.png)

Under Settings > Distribution > Payments, check the box to enable payments, select your preferred currency, and choose "PayPal Fee Payment" as the Payment Method.

Enter your credentials under the Paypal Payment Settings. Check the box for Test Mode if you are only testing the plugin.

![The Payments tab under Distribution Settings in OJS, with "Paypal Fee Payment" selected under payment method.](assets/Paypal-ojs3-2.png)

عندما يعمد القراء إلى النقر على رابط الهبات، سيذهب بهم الموقع إلى صفحة رسوم الدفع عبر PayPal:

## OJS 2.x

Login as the Journal Manager, and select Payments. ضمن الخيارات العامة، إختر العملة:

## Enable the PayPal plugin
Go to Website Settings > Plugins > Installed Plugins and find the PayPal Fee Payment plugin. Check the box next to the plugin to enable it. If you also plan to collect manual fees you can enable the Manual Fee Payment plugin as well.

![The Paypal Fee Payment plugin enabled in the OJS Plugin Gallery.](./assets/Paypal-11.png)

## Set up payments
Please see [Learning OJS](https://docs.pkp.sfu.ca/learning-ojs/en/settings-distribution#payments) for how to enable payments. Ensure that you select **Paypal Fee Payment** as a **Payment Method**. After you select Paypal Fee Payment, fields will appear below for _*Account Name**, **Client ID**, and **Secret**_. Follow the instructions in the [PayPal documentation](https://developer.paypal.com/docs/integration/admin/manage-apps/#create-or-edit-sandbox-and-live-apps) to generate the credentials to enter into the OJS fields. Make sure to check off the box for Test Mode before saving.

![The Payments tab under Distribution Settings in OJS, with "Paypal Fee Payment" selected under payment method.](./assets/Paypal-12.png)

Next, go to the [Subscriptions chapter](https://docs.pkp.sfu.ca/learning-ojs/en/subscriptions.html) in Learning OJS 3 and follow the instructions to set up your payment types and subscription types, if applicable.

## Test Transactions
On OJS set up a test transaction that you can use to test whether payments are being successfully processed. For this example, we will be using an Article Processing Fee. You as the author will get a link to pay your Article Processing Fee. The link will first direct you to login to your OJS account followed by the [PayPal Sandbox website](https://www.sandbox.paypal.com/mep/dashboard).

![An email notification to make Paypal payment](./assets/Paypal-14.png)

Using one of the fake PayPal accounts, make test payments to the site. سجل الدفع سيظهر لك عند معاينة مدفوعات حسابك في PayPal:

![The PayPal sandbox activity page.](./assets/Paypal-13.png)

The test transaction will also appear on the Payments page of your journal.

### Troubleshooting Test Transactions
If your test transactions are not successful, please check the following:
* API app is set on sandbox.
* OJS plugin is set to Test Mode.
* API credentials from the sandbox has been copied correctly to OJS.



