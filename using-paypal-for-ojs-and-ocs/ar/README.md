- - -
title: Using the PayPal Plugin for OJS and OMP description: A user guide to setting up the Paypal plugin Open Journal Systems and Open Monograph Press.
- - -

# Introduction: Using the PayPal Plugin for OJS and OMP

إن النسخة الأخيرة من نظام المؤتمرات المفتوحة ونظام المجلات المفتوحة 2.4.8 و 3.1 تدعم جميعها استعمال [ نظام الدفع بالإنترنت عبر PayPal ](http://www.paypal.com) من أجل تحويلات مالية آمنة عبر الشبكة العنكبوتية. The plugin can be used to collect subscription fees, article purchase fees, and author submission fees.

هذه الوثيقة لتوضح الخطوات الأساسية التي من شأنها تفعيل هذه الميزة وتشغيلها. مع ذلك، عليك أيضاً الرجوع إلى [أدبيات PayPal](https://www.paypal.com/us/selfhelp/home) لتضمن قيامك بتهيئة ملفك الخاص في PayPal وفقاً لمتطلباتك الخاصة.

## PayPal alternatives
The only payment tool that OJS currently has a plugin for is PayPal. If you are not able to use PayPal and would like to use a different tool to accept payments, we recommend writing a plugin for the other payment tool. The PayPal plugin uses the [Omnipay library](https://omnipay.thephpleague.com/), which provides support for a lot of different payment tools. A developer should be able to copy the PayPal plugin and adapt it to a different payment tool.

## Contributors
Patricia Mangahis
