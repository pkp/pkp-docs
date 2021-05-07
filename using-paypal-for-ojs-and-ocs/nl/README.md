# Using the PayPal Plugin for OJS and OMP

## Introduction
OJS and OMP 3.x support the use of the [PayPal online payment system](https://www.paypal.com/) for secure online financial transactions with the PayPal plugin. The plugin can be used to collect subscription fees, article purchase fees, and author submission fees.

This document will outline how to use the PayPal plugin. You should, however, review the [PayPal documentation](https://www.paypal.com/us/selfhelp/home) to ensure that you have set up your PayPal profile to meet your specific requirements.

## PayPal alternatives
The only payment tool that OJS currently has a plugin for is PayPal. If you are not able to use PayPal and would like to use a different tool to accept payments, we recommend writing a plugin for the other payment tool. The PayPal plugin uses the [Omnipay library](https://omnipay.thephpleague.com/), which provides support for a lot of different payment tools. A developer should be able to copy the PayPal plugin and adapt it to a different payment tool.

## Contributors

Patricia Mangahis
