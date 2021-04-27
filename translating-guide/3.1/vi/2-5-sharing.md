---
book: translating-guide
version: 3.1
---

## Share your translations

1. Save and place your files
2. Suggest inclusion of the files to PKP

### Saving and Properly Placing the Files

Once you have translated the necessary XML files, they will need to be placed in an appropriately named subdirectories, using the ISO locale codes for your language and country (e.g., the files in `locale/en_US` are translated into French and saved in a subdirectory named `locale/fr_CA`).  See [XML files](2-2-xml-files) for location details.

New locales must also be added to the file `registry/locales.xml`, after which they can be installed in the system through the site administration web interface.


### Commit your translations

GitHub "pull request" is the preferred method to submit your translations to PKP.

You will find this link extremely helpful to create your local repository and submit your changes like described in [Github Documentation for PKP Contributors](http://pkp.sfu.ca/wiki/index.php?title=Github_Documentation_for_PKP_Contributors) (PKP wiki).

Once you have setup you local and origin forked repository, you will need to submit your changes to your remote github repository ("origin") as is suggested in [Information for Developers](http://pkp.sfu.ca/wiki/index.php?title=Information_for_Developers#PKP_library_submodule_changes) (PKP wiki).

Notice that, as far as translation files are in root but also in the submodule "lib/pkp" folder, you will need TWO pushes: One for the main "OxS" repository and the other for the submodule "pkp-lib".

In summary this is the process you need to follow:

1.  Fork "oxs" and "lib-pkp" repositories to your own github account.
2.  Clone your fork to your local repository.
3.  Make your local modifications.
4.  Push first "lib-pkp" and then "oxs" (separately) to your remote repository.
5.  Make 2 separate "pull requests" (github interface).

In detail those are the specific instructions that you need to run after forking both repositories:

```
# Check out your base repository (pe: ojs-dev_2_4), including submodules.
git checkout ojs-dev_2_4
git submodule update --init --recursive\
cd lib/pkp
git checkout ojs-dev_2_4
cd ../..
```

```
# Create a branch with your new translations (both, in "OxS" and "pkp-lib")
git checkout -b tra-es_ES-245 origin/ojs-dev-2_4
cd lib/pkp
git checkout -b tra-es_ES-245 origin/ojs-dev-2_4
cd ../..
```

```
# If you worked with external tools (pe: CAT tools that generate new XMLs) copy your source files over the existing ones.
cp origen/* . -a
```

```
# Commit your changes (first in your submodule)
cd lib/pkp
git add .
git commit -a
cd ../..
git add .
git commit -a
```

```
# Send your changes to your own github repository.
git push -u origin tra-es_ES-243
cd lib/pkp
git push -u origin tra-es_ES-243
cd ../..
```

```
# Make a "pull request" and send your work to the official PKP repository (first submodule, then root).
```

### Some tips

Adding a subproject:

```
git submodule add [git://github.com/marcbria/adminlocker](git://github.com/marcbria/adminlocker) plugins/generic/adminLocker
```

Change your remote repository (pe: from git to https)

```
git remote set-url origin https://github.com/marcbria/pkp-lib.git
```

Add color information:

```
git config --global --add color.ui true
```

Draw branches:

```
git log --graph --oneline --all https://github.com/pkp/ojs/network
```

### Exporting a Translation

*(OJS 2.x plugin only)* You can export a translation by clicking the <em>Export</em> link across from the language name on the Translator plugin page: the system will compress all locale files for that one translation to a downloadable tar.gz package. This is especially useful if you need to migrate a newly-translated language to another OJS or OCS environment, or if you would like to contribute your changes back to the PKP.

