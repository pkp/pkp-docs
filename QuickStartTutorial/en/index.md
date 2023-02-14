---
generateHeadingToc: true
---
A Cool Guide

# Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ultrices neque sed viverra. Ut lacinia sapien vitae elit tincidunt eleifend. Donec venenatis commodo orci sit amet tempus. Donec convallis lacinia ante. Aliquam rhoncus velit eu sem venenatis, sit amet consequat ante fringilla. Sed sit amet nisl nisi.

  
  
  
  

----------

  

# Strategy & Planning

Nulla molestie, justo viverra ornare cursus, mauris massa elementum metus, nec convallis est urna ut magna.

  

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae aliquam augue. Maecenas efficitur sodales eros quis dignissim. Morbi lacus velit, sollicitudin non ex ut, viverra tristique metus. Mauris feugiat dolor leo, non tincidunt nulla convallis ut.

  

Curabitur vel interdum ante, rhoncus tempor neque. Duis laoreet urna ac sapien tempor consectetur ac vitae arcu. Quisque congue accumsan consequat. Donec nec nunc suscipit, varius felis a, tempus purus.

## A Subsection

  

Suspendisse sit amet ultrices risus, nec condimentum ligula. Aenean in risus vel erat imperdiet interdum.

### Suspendisse feugiat euismod dolor

  

Proin nec mollis magna. Quisque et metus sit amet libero vehicula auctor nec vitae neque:

  

-   Integer fermentum velit non faucibus tempor.
    
-   Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    
-   Etiam ac tellus ac arcu vulputate pretium nec ut tortor. Proin nec mollis magna. Quisque et metus sit amet libero vehicula auctor nec vitae neque
    

### Pellentesque pulvinar nec lectus in facilisis

  

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce et urna eget quam finibus rhoncus laoreet vitae elit. Donec quis fermentum ex. Aliquam eu tincidunt risus, at malesuada dolor.

  

Mauris commodo ut lectus mollis consequat. [Nullam sit amet dignissim orci](https://docs.pkp.sfu.ca/translating-guide/en/), quis fringilla magna. Maecenas ornare metus id lectus rutrum euismod. Suspendisse et ornare mauris. Proin ullamcorper, elit ac varius viverra, lectus quam ultrices augue, a pretium ante dui id justo. Nunc aliquet sapien mattis, faucibus est et, laoreet dui.

  

Phasellus eget quam nunc. Proin ut rutrum velit, eu elementum orci. Proin cursus nibh imperdiet dolor commodo, sed tristique lacus dignissim. [Nunc eu eros sed mauris](https://docs.pkp.sfu.ca/translating-guide/en/) ullamcorper efficitur. Ut lacus sapien, dignissim eget turpis ac, posuere pulvinar lacus. Etiam gravida ex non sollicitudin varius.

### Nullam aliquet fringilla faucibus

In sagittis at velit vitae suscipit. Aliquam sed massa in felis placerat aliquam eu vitae ipsum. Pellentesque convallis, nibh at gravida ullamcorper, ex lectus dapibus enim, sed congue ex ipsum sit amet justo.

  



  

Donec vel venenatis dolor. Curabitur eleifend lacus ac volutpat vehicula. Proin ac diam luctus, dictum augue a, blandit lectus.

  
  

# Installing, Enabling, and Configuring Locales

  

Proin cursus nibh imperdiet dolor commodo, sed tristique lacus dignissim. Nunc eu eros sed mauris ullamcorper efficitur. Ut lacus sapien, dignissim eget turpis ac, posuere pulvinar lacus. Etiam gravida ex non sollicitudin varius.

## A Cool Subsection

New locales can be installed by your site administrator. For more information on how to install new locales you can read the [Manage Languages in PKP Software chapter](https://docs.pkp.sfu.ca/translating-guide/en/managing-languages#install-a-language) of the PKP Translating Guide.

## Enabling new locales

  ![A cute kitten being cute.](./assets/TestQuickStart.png)

Once a locale has been installed on your site by a site administrator, various aspects of the locale be enabled from Website > Setup > Languages. A brief description of each option is provided in the following list, with more detailed explanations provided further below:  
  

-   Primary Locale: This can only be enabled for one language. You can consider this the “default” language. Your site will first be shown to users in this language. Be especially careful about your primary locale selection, as changing primary locale can have serious consequences for data across your site (details below).
    
-   UI (User Interface): When enabled, the front-end and back-end interfaces will be available in that language.
    
-   Forms: When enabled, any forms in the system (user registration, for example) will be available in that language.
    
-   Submissions: When enabled, authors will be able to make a submission in that language and submit metadata in that language. This also enables submission metadata records to be entered in multiple languages. Be careful when enabling this option for a language, as disabling it after receiving submissions can impact your ability to edit metadata (details below).
    

## Primary locales

As discussed in the previous section, you will be able to specify a primary locale that will serve as the default language for your site. Primary locales are used to determine what language is required for various fields in the software. Users are free to skip entering information in any other language, but some fields will always be required in the primary locale.  
  

Changing your primary locale after launching your journal can have major consequences for user and submission data (outlined below) so please choose your primary locale carefully prior to allowing registrations and submissions.  
  

### Site-wide locale and journal primary locale required fields

A primary locale is required both at the site and journal level.

  

## Submissions

Once Submissions are enabled for a language, users will be given the option to select a submission language each time they make a submissions. Submission-specific required fields such as titles and abstracts, author family names, etc. will be required in the language specified in the first step of the submission process by the user.

### Cautions about changing available submission languages

  

Making changes to available submission languages when there are submissions in the journal may cause errors when trying to edit metadata. You will not be able to edit the metadata of a submission in a given language if you later disable submissions in that language. The only way to edit the metadata for a submission made in a language that has been disabled is to reenable submissions.

  

If you want to disable submissions in a particular language, go to Website Settings > Setup > Languages and un-check Submissions for that language.

  

If you decide to change or add submissions languages, ensure that your submissions policies and author guidelines are translated and updated accordingly. When guidelines are not translated for the languages enabled, OJS will show this information in the primary locale instead.
