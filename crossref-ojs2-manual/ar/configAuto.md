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

## Depositing DOIs with Crossref

If you have configured the plugin to work automatically, OJS will deposit DOIs as they are created without your intervention. You can check the **Unregistered Articles** page to confirm that DOIs have been deposited.
