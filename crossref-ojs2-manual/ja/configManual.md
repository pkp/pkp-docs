# How to Configure OJS for Automatic Deposits

​1) Ensure that all Journal Setup steps that the Crossref plugin requires have been filled in. Under **Journal Setup Step 1**, you will need the following:

-   Journal Title
-   Journal Initials
-   Journal Abbreviation
-   Journal ISSN (or electronic ISSN)
-   Principal Contact (name and email)
-   Technical Support Contact (name and email)
-   Publisher (Institution and URL)

​2) Enable and configure the "DOI" public identifier plugin at **System Plugins -\> Public Identifier Plugins -\> DOI Plugin**.

-   First, **Enable** the plugin; then configure the plugin **Settings**.
-   For plugin settings, ensure that you have only Articles and Supplementary Files checked for depositing Journal Content.
-   You must also include a DOI prefix which you get from Crossref, and additionally must configure the DOI suffix. We **strongly recommend** using the default patterns if you are a new journal and have not previously had DOIs issued.

​3) Ensure that your articles have DOIs assigned to them.

4) Ensure that page numbers are enabled and present for the articles you are submitting.

- First, navigate to **Journal Setup Step 4.3  Identification of Journal Content**
- Enable the Page Numbers option.
- Secondly, navigate to your journal issues and include page numbers in the fields provided.
    - make sure the page format is either just the first page, or `first page - last page`, for example:
        - `1 - 10`
    - The spacing is important for automatic deposit, and it is best to stick to a basic dash to separate the numbers.

​5) Configure the Crossref Deposit Plugin. This can be done from **Import/Export -\> Crossref Export/Registration Plugin**.

-   The plugin will tell you whether the overall system requirements have been satisfied.
-   Depositor name and email will be initially retrieved from the journal's Primary Contact information, but you can change this if you like.
-   If you have your Crossref login credentials, you can supply them here and enable automatic DOI deposit.

# Depositing DOIs with Crossref via the Plugin UI

If you have not configured the plugin to deposit DOIs automatically, you can register them manually yourself by using the "Register" button on the **Unregistered Articles**, **All Issues** or **All Articles** page. For best results, register a small amount of DOIs at a time. Registration can take a while for large uploads to Crossref servers. Large batch uploads are likely better performed via XML Export.

If your DOIs fail to properly register or you get confusing feedback from the plugin, please read the [troubleshooting](troubleshooting.md) documentation for guidance.

# Depositing DOIs with Crossref via XML Export

You can export batch XML files to upload via the [Crossref backend](http://doi.Crossref.org). From the Crossref plugin you can use the "Export" button on the **Unregistered Articles**, **All Issues** or **All Articles** pages. You'll be asked where you'd like to save the XML. You can then navigate to the Crossref backend, login with your credentials, and upload your XML from there.

## Export Registration Steps

1. Export from OJS by selecting the articles/issues you'd like to export and clicking the Export button.
2. Save the XML file locally.
3. Navigate to Crossref's [metadata quality check](http://www.Crossref.org/02publishers/parser.html) and upload your file here first to check for any validation errors.
4. Login to your [Crossref member backend](http://doi.Crossref.org).
5. Click on the **Submissions** tab.
6. Click on "choose file" and select your XML export file. Make sure that "metadata" is selected below, and click upload.

You should receive an email to let you know the status of your submission, provided you are listed as the "technical support contact" of your journal. You can change the submitter email name and ID in the XML before you export, if you like.  
