{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;\f1\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 title: Components - Multimodal Publishing\
---\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f1\fs24 \cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 \
\
#Components\
\
Components are used to organize and define the various files related to a submission within the system and establish where and how they should be shown to readers, if at all. For example, the article manuscript itself will be one component, while datasets, transcripts, images, etc. are included as separate supplementary or dependent components. In general,  journals publishing only PDFs or other standalone files that don\'92t include supplemental or embedded information will not need to make changes to component types. Components will be primarily of interest to those with complex submissions with multiple accompanying files, such as journals publishing in HTML, with datasets, etc.\
\
! [A display of the component settings within OJS](./assets/mulitmodal-component-settings.png)\
\
Using the links in the Article Components screen, you can change the order of the components (how they will be listed to the submitting author), Add a Component (if something you need is not included by default \'96 e.g., Video), or Restore the Defaults (if someone has made too many modifications and you just want to reset everything).\
\
#### Edit Component\
\
You can edit each component by selecting the blue arrow to the left of the component name. This will reveal an Edit link and a Delete link.  \
  \
**Please exercise caution when deleting components**! If a component is deleted, all files currently labeled with that component type will be hidden and will not be viewable until they are assigned a new component type. Unintended deletion of a common component can seriously affect your journal content, and in some cases is not feasible if the component has already been used in a submission.\
\
![Editing options for a editing a component within OJS](/assets/edit-component.png)\
\
-   Name: This is the name of the component, as presented to the author.\
    \
-   File Type: Choose how the files associated with this component will be treated and displayed. Understanding the file type and how it affects the display of a file is very important for journals using XML or HTML galleys and other multimedia formats.\
\
-   Dependent: the link will not appear with published content at all (e.g. images and figures embedded in HTML or XML galleys, HTML stylesheets, etc.)\
    \
-   Supplementary: The link will appear on the article landing page (e.g. datasets, transcripts, etc.)\
    \
-   Neither supplementary nor dependent: The link will appear on both the article landing page and in the table of contents (e.g. main publication files - PDFs, HTML and XML galleys, etc.)\
    \
-   File Metadata: Select the type of metadata that these files may receive. \'93Document\'94 should be selected for the main publication files, such as the downloadable PDF, so that these files inherit their metadata from the publication. Otherwise, choose \'93Supplementary Content\'94 for most file types. \'93Artwork\'94 is appropriate for files which require distinct credit, caption and licensing metadata.\
    \
-   Key: Optional short symbol for the component. This extra identifier is used in the backend of OJS and can be helpful for technical staff recovering inadvertently deleted components.\
    \
For an in-depth overview of how to manage components within OJS, [please consult the Learning OJS guide section on components.](https://docs.pkp.sfu.ca/learning-ojs/journal-managers/en/policies#components)}