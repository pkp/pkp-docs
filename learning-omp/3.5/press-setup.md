---
book: learning-omp
version: 3.5
title: Learning OMP (Open Monograph Press) - Press Setup
description: A guide to configuring the settings for the website, workflow, display, and distribution (including payment) of an OMP press.
---
# Setting up and Maintaining Your Press

There are a number of components to your press found in the Settings menu on the left navigation bar. All of the site configuration options are under Settings > Press. The options you find here control every aspect of the press, including press information, how your press looks, workflow settings, and how the publication and distribution processes work. This section will go in-depth on your Press and Workflow Settings. Please refer to the [Learning OJS guide](/learning-ojs/en/) for information regarding the Website and Distribution that will be applicable in your OMP installation.

## Press Settings

In the Press Settings section, you can configure information about your press that will be displayed for readers, such as your press name, editorial team, and contact information. You can also set up and configure series and categories, which are used to display and organize your published monographs.

You can find the Settings in the left menu panel when you are logged in as a user with Press Manager permissions. This section contains most of the information that you provided when originally creating your press (and which can be modified at any time).

In OMP 3.2, the Publisher information is now stored under the Press setting. You will need to enter all the information required to generate your ONIX metadata.

![The Press settings screen.](./assets/learning-omp3.3-press-setting-1.png)

![The Press settings main panel.](./assets/learning-omp3.2-press-setting-2.png)

### Masthead

Under Settings > Press > Masthead, you can enter and edit key publishing and press details. All Masthead information will appear under the pages in the About menu on your press website.

While a section is provided for adding editorial board information, OMP 3.5 can now automatically compile a list of editorial board members, replacing the need to manually document the members of your team. Simply select which roles should be captured in the masthead and configure start and end dates for board members. 

To select which roles should be captured in the masthead:
- Navigate to Users & Roles and select the "Roles" tab
- Find the role you want to be captured in the masthead
- Under "Role Options", enable the option "Consider role in masthead list"
- Select the option to automatically include anyone with this role on the list of Editorial Board members.

You can learn more about assigning users roles and toggling the display of individual users in the list of Editorial Board members in the [User Accounts chapter](./user-accounts). You can view the Editorial Masthead at any time by visiting your press website and selecting "Editorial Masthead" from the "About Menu". You can view a history of previous editorial members by clicking "View Editorial History".


### Contact

This section contains the primary contact information you provided when originally creating your press and includes a technical support contact option. You can also add a mailing address. All contact information will appear on the Contact page under the About menu on your press website.

### Series

Series can be used to help organize your publications. A series represents a special set of books devoted to a theme or topic. Visitors will be able to search and browse the press by series. In the Series tab of your Press Settings, you can create, edit, and order the series that will appear on your press website.

![The Series tab of the Press Settings screen.](./assets/learning-omp3.3-press-setting-series-1.png.png)

#### Add Series

To add a series, click **Add Series**  on the right corner of the Series table and fill in the following fields:

* __Cover Image__: Upload a cover for the series (optional)
* __Title__: Title of series
* __Description__: Use this field to add details regarding the series, editor, editor information, etc.
* __ISSN__: The 8-digit code to identify your print and/or online series (you can apply for an ISSN through your country’s ISSN centre, listed in the [ISSN Network](https://www.issn.org/the-centre-and-the-network/members-countries/the-issn-network-today/#))
* __Order Monograph__: The order in which you would like monographs within the series to be displayed
![List of display order options.](./assets/learning_omp-press_setup-mono_order.png)
* __Category__: The subject matter this series will be part of
* __Path__: What you want to use for the end of the URL

#### Edit Series

You can modify a series by clicking on the blue arrow to the left of the series name. This will reveal options to edit or delete the series.

![The expanded edit options menu under a series.](./assets/learning-omp3.3-press-setting-series-3.png)

#### Order Series

To order your series, click Order on the right corner of the series box. Using the double arrow beside the Series title, drag the series in order and click Done once you have completed ordering your series.

![The drag & drop interface found after clicking Order.](./assets/learning-omp3.2-press-setting-series-4.png)

#### Add books to series

See the [Catalog and Displaying Content chapter](./catalog-management.md) for instructions on how to add books to series.

### Categories

Categories can be used to group and display books according to the subject matter or themes — for example, economics, literature, and poetry. Categories may be nested within “parent” categories in a hierarchy. Categories can be displayed as a browse block on your press site, and readers can select a category to view all books in that category.

You can place a book in a category by editing its metadata, which is explained in the Catalog and Displaying Content chapter. This section explains how to create and edit categories.

To start, go to Press Setting followed by the Categories tab.

#### Create a category

1. Click Add Category
2. Enter a name for your category that will be displayed to readers
3. Select a Parent Category (if applicable)
4. Enter a path for the category’s URL on your site
5. Enter a description that will appear above the list of books in the category
6. Change the order of the books by date or title (optional)
7. Add an image that will appear at the top of the category’s page (optional)
8. Click Save

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/learning-omp3.3-press-setting-categories-1.mp4" type="video/mp4">
  </video>
  <figcaption>Video of the steps above being performed.</figcaption>
</figure>

#### Edit a category

1. Click the name of the category you want to edit
2. Make the changes
3. Click OK

<figure class="video_container">
  <video controls="true" allowfullscreen="true">
    <source src="./assets/learning-omp3.3-press-setting-categories-2.mp4" type="video/mp4">
  </video>
  <figcaption>Video of the steps above being performed.</figcaption>
</figure>

#### Remove a category

1. Click the blue arrow next to the category you want to remove
2. Click the Remove button that appears below
3. Confirm that you want to remove the category

![Category edit options with Remove button highlighted.](./assets/learning_OMP_press_settings_remove_category.png)

#### Display categories

To display categories on your website you can go to Website Settings > Appearance > Sidebar Management and place the Browse block on your sidebar.

#### Add books to categories

See the Catalog and Displaying Content chapter for instructions on how to add books to categories.

### Public Identifiers

If your Press will be using Public Identifiers such as DOI or URN, these will need to be enabled in the Plugin Gallery (Website Settings > Plugin > Plugin Gallery).

![The Public Identifiers section of the Plugin Gallery.](./assets/learning-omp3.2-website-setting-indentifier-1.png)

Once these have been enabled, you can click the blue arrow to configure the settings for both these.

## Website Settings

Please refer to the [Learning OJS guide](/learning-ojs/en/) for information on Website Setting applicable to OMP.

Please note that some plugins for OJS are not available for OMP.

### Highlights 

Use Highlights to Draw Attention to Big News on your Press #highlights

Highlights allow you to feature images and information on your press home page. Use this to draw attention to a Call for Book Manuscripts or to highlight a particular publication. If you add multiple highlights, they will be displayed in a manual carousel. 


![Press Homepage showcasing a Call for Book Manuscripts as a highlight.](./assets/omp-highlight-3.5.png)

#### Create a Press Highlight #create-highlights

To add a highlight, navigate to Website> Settings> Set Up> Highlights. 

Click on the button ‘Add Highlight’. Enter a title, a short description, the URL of the page you want readers to visit, a button label, an optional image and click ‘Save’.

> [!NOTE]  
> The Highlights feature may not currently work with all themes. 

![Menu screen with the fillable fields to create a highlight.](./assets/omp-website-add-highlights-3.5.png)


## Workflow Settings

The Settings > Workflow screen includes all submission, and review configuration options, as well as the Press Library (a space to store frequently access files) and email template settings. You will want to review each tab to ensure that the settings match your press policies for submission and review.

Each tab of the workflow settings is documented in detail in Learning OJS 3.5 for Journal Managers.

- To learn about the configurations on the Submissions tab, consult [the Configure Submission Settings section](https://docs.pkp.sfu.ca/learning-ojs/journal-managers/en/policies#submission-settings-config) of Learning OJS. This will teach you how to disable submissions, set author guidelines, choose what metadata (information about a submission) to collect, and configure components (the labels of the files included with submissions).
- To learn about the configurations on the Review tab, consult [the Configure Basic Review Settings section](https://docs.pkp.sfu.ca/learning-ojs/journal-managers/en/policies#basic-review-settings)) of Learning OJS. This will teach you how to set the review type, enable reviewer suggestions from authors, configure review deadlines and review reminders, and create and edit review forms.
- To learn about the Press Library tab, consult [the Use the Publisher Library for Documents section](https://docs.pkp.sfu.ca/learning-ojs/journal-managers/en/other-tools#publisher-library) of Learning OJS. Although it is referred to as the Press Library in OMP, the Press/Publisher library is a place to store frequently used or otherwise useful documents for your Editorial team to access easily.
- Lastly, to learn about configuring Email templates, consult [the Configure and Customize Automated Emails section](https://docs.pkp.sfu.ca/learning-ojs/journal-managers/en/communications#email-templates) section of Learning OJS. This will teach you how to configure what kinds of automated emails are sent when a submission as received, as well as customize and edit all automated email templates.

## Distribution

### Payment

The payment configuration for OMP is much simpler than in OJS. If you are using your press to accept payment you have the option of PayPal or manual payment notification.

#### PayPal

For help setting up your PayPal account see [Using the PayPal Plugin for OJS and OMP](/using-paypal-for-ojs-and-ocs/en/)

Once you have your PayPal account set up, you will need to enter the following information under the PayPal Fee Payment setup.

![The Paypal Fee Payment setup screen.](./assets/learning-omp3.2-distribution-payment-1.png)

For books or publication versions that will be available for purchase, you will need to indicate the price of these in the Publication Formats by clicking __Set Terms__

![The Set Terms button for various publication formats.](./assets/learning-omp3.2-distribution-payment-2.png)

Select Direct Sales followed by the price and Save.

![Sample Direct Sales settings.](./assets/learning-omp3.2-distribution-payment-3.png)

The book's landing page will now show the prices for each format.

![A sample of the display of a book with prices set per format.](./assets/learning-omp3.2-distribution-payment-4.png)

Users who wish to purchase will click the button which will direct them to PayPal to complete payment. Once payment has been processed the document will become available to the user for reading and/or download.

#### Manual Payment

If your press will be collecting payment in another form (e.g cheque, ETF) you can provide the instructions under Manual Payment.

![Sample manual payment instructions entered in the settings screen.](./assets/learning-omp3.2-distribution-payment-5.png)

Opting for this payment method will provide users with the same payment button on the book’s landing page with instructions on how to pay and will prompt them to send notification of payment.

![The display of the Manual Payment instructions on the book's landing page.](./assets/learning-omp3.2-distribution-payment-6.png)

This notification will be sent to the Journal Manager via email with the users information (Full Name and Username). It will be up to the Press to determine the delivery method of the publication.
