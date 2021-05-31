---
book: apprendre-ojs
version: 3.1
---

# Chapter 3: User Accounts

OJS uses a comprehensive roles system to divide work between users, assign workflows, and limit access to different parts of the system.

Since one installation of OJS can host multiple journals, users can be enrolled in different roles for more than one journal. For example, one person could be both an editor and author for the same journal, as well as being only an author in one journal, a reviewer in another, and an editor in a third.

When a user logs into the system, they will be taken to their Dashboard. From here, they will see all of the functions of the system to which they have access. Par exemple, un-e Évaluateur/trice ne verra que la soumission qui lui a été affectée, tandis qu'un-e rédacteur/trice verra toutes les soumissions dans le flux des travaux éditorial.

## Roles in OJS

The OJS workflow revolves around different roles for different users, allowing them access to different parts of the workflow, and different permissions and responsibilities.

Major roles include Site Administrator, Journal Manager, Editor, Section Editor, Author, Reviewer, Copyeditor, Layout Editor, Proofreader, and Reader.

OJS 3 also includes additional roles such as Translator and Designer. You can also create new roles or rename existing ones. More information on configuring roles is available in the [Users and Roles chapter](./users-and-roles.md).

### Site Administrator
The Site Administrator is responsible for the overall OJS installation, ensuring the server settings are accurate, adding language files, and creating any new journals on the installation. The Site Administrator account is created as part of the installation process. Unlike all other OJS roles, there can only be one Site Administrator.

See [Chapter 4: Site Administration](./site-administration.md) for more details.

### Éditeur de Mise en Page
The Journal Manager is responsible for setting up the journal web site, configuring the system options, and managing the user accounts. This does not involve any advanced technical skills, but entails filling out web-based forms and uploading files.

The Journal Manager also enrolls the Editors, Section Editors, Copyeditors, Layout Editors, Proofreaders, Authors, and Reviewers.

The Journal Manager also has access to the journal's other management features, and can create new Sections for the journal, set up Review Forms, edit the default Emails, view statistics and reports, import and export data, and access the editorial workflow and all journal submissions.

See the Settings chapters for more details.

### Author

Authors are able to submit manuscripts to the journal directly through the journal's website. The Author is asked to upload submission files and to provide metadata or indexing information (the metadata improves the search capacity for research online and for the journal). The Author can upload multiple files, in the form of data sets, research instruments, or source texts that will enrich the item, as well as contribute to more open and robust forms of research and scholarship.

The Author is able to track the submission through the review and editorial process — as well as participate in the copyediting and proofreading of submissions accepted for publication — by logging in to the journal's website.

See the [Authoring chapter](./authoring.md) for more details.

### Rédacteur/Rédacteur de rubrique

The Editor oversees the entire review, editing and publishing process. The Editor, working with the Journal Manager, typically establishes the policies and procedures for the journal.

In the editorial process, the Editor assigns submissions to the Section Editors to see through Submission Review and Submission Editing. The Editor keeps an eye on the submission's progress and assists with any difficulties.

Once review is completed, the Editor typically sees the submission through the Editing process (including copyediting, production, and proofreading) although in some journals this remains the responsibility of the Section Editor in charge of the submission's review process.

The Editor also creates the journal issues, schedules submissions for publication, arranges the Table of Contents, and publishes the issue as part of the Publishing Process. The Editor can restore archived submissions to the active In Review or In Editing lists.

Editors can also access journal settings, users and roles, and tools.

See the [Editorial Workflow chapter](./editorial-workflow.md) for more details.

### Rédacteur/trice de Section

The Section Editor manages the review and editing of submissions to which they have been assigned. In some cases, a Section Editor who is assigned to see submissions through the Review Process will also be responsible for seeing the submissions that are accepted through the Editing process (that is, through copyediting, production, and proofreading).

Often, however, Section Editors only work with the review process, and an Editor, acting in the role of Section Editor, sees the submissions through the Editing process. The journal will have a policy on how the tasks are divided.

See the [Editorial Workflow chapter](./editorial-workflow.md) for more details.

### Rédacteur/Rédacteur de rubrique

The Reviewer is selected by the Editor or Section Editor to review a submission. Reviewers are asked to submit reviews to the journal's website and are able to upload attachments for the use of the Editor and Author. Reviewers may be rated by Section Editors, again depending on the policies for this journal.

See the [Reviewing chapter](./reviewing.md) for more details.

### Réviseur/euse

The Copyeditor edits submissions to improve grammar and clarity, works with authors to ensure everything is in place, ensures strict adherence to the journal's bibliographic and textual style, and produces a clean, edited copy for a Layout Editor or Production Assistant to turn into the galleys that will be in the published format of the journal.

Some journals have an Editor or Section Editor play this role.

See the [Editorial Workflow chapter](./editorial-workflow.md) for more details.

### Rédacteur

The Layout Editor transforms the copyedited versions of the submission into galleys in HTML, PDF, XML, etc. -- files which the journal has elected to use for online publication.
> Note
> 
> OJS does not currently provide software for automatically converting word processed documents to galley formats (although a project is in development), so the Layout Editor should have access to and be able to use third-party software packages for creating galleys.

In some cases, the Editor or Section Editor will also serve as Layout Editor.

See the [Editorial Workflow chapter](./editorial-workflow.md) for more details.

### Proofreader

The Proofreader carefully reads over the galleys in the various formats in which the journal publishes (as does the author). The Proofreader (and the Author) record any typographic and formatting errors for the Layout Editor to fix.

In the case of some journals, the Editor or Section Editor will also serve as Proofreader.

See the [Editorial Workflow chapter](./editorial-workflow.md) for more details.

### Rédacteur

The Reader role is the simplest role in OJS, and has the fewest capabilities. Readers receive a notification email with the publication of each issue, which includes the Table of Contents for that particular issue.

<hr />

## Inscription à la Revue

Les visiteurs non enregistrés d'une revue peuvent normalement s'inscrire en tant que Lecteur/trice, Auteur et/ou Évaluateur/trice. Les Directeurs de la Revue peuvent supprimer la possibilité pour les visiteurs de s'auto-enregistrer, auquel cas une notification apparaîtra indiquant que l'inscription est actuellement fermée (voir Paramètres de la Revue), mais les Directeurs de la Revue peuvent toujours enregistrer des utilisateurs à tout moment et pour n'importe quel rôle.

To register with a journal, click the Register link on the upper right corner.

![The Register link at the upper right corner of the journal site.](./assets/learning-ojs-3-registration.png)

Pour vous inscrire à une revue, cliquez sur le lien S'inscrire dans le coin en haut à droite.

![The Registration Form.](./assets/learning-ojs-3-registration-form.png)

Tous les champs avec un astérisque (Prénom, Nom, Affiliation, Pays, Email, Nom d'utilisateur, Mot de passe, Répéter le mot de passe) sont obligatoires. Si le journal est multilingue, vous devrez sélectionner votre langue préférée.

Vous serez automatiquement enregistré en tant que lecteur/trice et auteur. Vous aurez également la possibilité de vous inscrire en tant qu'Évaluateur/trice.

Vous ne pourrez pas vous inscrire vous-même pour un rôle éditorial (par exemple, rédacteur,redacteur/trice de rubrique, réviseur/euse, éditeur/trice de mise en page, correcteur/trice d'épreuve, ou directeur/trice de la revue). Si vous devez être inscrit à ce niveau, contactez un-e directeur/trice de la revue ou un administrateur de site actuel.

<hr />

## Soumettre un article

Pour afficher et modifier votre profil, connectez-vous et cliquez sur votre lien Nom d'utilisateur dans le coin en haut à droite. Choisissez le lien Afficher le profil.

![The View Profile menu.](./assets/learning-ojs3.1-ed-view-profile.png)

From here, by choosing the different tabs, you can update your personal details, contact information, change your roles, add a personal image \(which some journals may publish along with your article or on a list of editors\), determine your notification settings, or update your password.

Sous **Notifications**, vous pouvez configurer les types de notifications que vous recevez de la revue lorsque des événements se produisent, comme la publication d'un nouveau numéro de la revuel ou une activité sur une soumission dans laquelle vous êtes impliqué.

* Cochez "Activer ces types de notifications" si vous souhaitez voir une notification de cet événement sur votre tableau de bord lorsque vous vous connectez au site
* Cochez "Ne pas m'envoyer d'email pour ces types de notifications" si vous ne souhaitez pas recevoir de notification par email concernant cet événement

![The Notifications tab where you can manage notifications.](./assets/learning-ojs-3-user-notifications.png)

L' **onglet API** du profil utilisateur vous permet d'utiliser l'API REST d'OJS pour interagir avec des applications externes.  Cependant, la plupart des utilisateurs n'utiliseront pas cet API et peuvent ignorer cet onglet.

## Modification des métadonnées

Vous avez maintenant votre nouveau mot de passe temporaire et vous pouvez vous connecter:

1. Vous connectant à la revue
2. Sélectionner votre nom d'utilisateur et afficher le profil à partir du coin en haut à droite de l'écran
3. Choisir l'onglet Mot de passe
4. Entrer votre mot de passe actuel puis votre nouveau mot de passe deux fois
5. Cliquer sur Enregistrer

![The password reset screen.](./assets/learning-ojs3.1-ed-change-pw.png)

Vous pouvez réinitialiser votre mot de passe en:
