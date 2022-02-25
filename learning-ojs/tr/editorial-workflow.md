---
book: learning-ojs
version: 3.3
title: Learning Open Journal Systems 3.3 - Editorial Workflow
description: How to manage an article manuscript through the OJS workflow, from submission to publication.
---

# Editorial Workflow

In this chapter, you will follow a submission throughout the workflow, from first submission to final publication.

{% include video.html id="K-qjxN7rOJs" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 2: Editorial Workflow Overview"%}

This PKP School video provides an overview of the editorial workflow in OJS 3.3. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

İş akışı 4 aşamaya ayrılmıştır:

**Gönderi**: Burası, Bölüm Editörlerine atanan ve Değerlendirme aşamasına geçmek için dikkate alınan yeni gönderilerin geldiği yerdir.

Belirgin olarak uygun olmayan gönderiler asla bu aşamanın ötesine geçemez.

{% include video.html id="9rx-AahCU10" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 4: Responding to a submission"%}

This PKP School video explains the steps the Editor takes to assign a new submission to a Section Editor. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

**Değerlendirme**: Burası, yazar tarafından gerekli görülen revizyonların yanı sıra hakem değerlendirmesinin gerçekleştiği yerdir.

Bazı gönderiler değerlendirmeyi geçmeyecek ve süreci burada tamamlanacaktır. Kabul edilen gönderiler bir sonraki aşamaya geçer.

**Kopya Düzenleme**: Kabul edilen gönderiler, kopya düzenleme sürecinden sonra bu aşamaya taşınır. Yazarlara kopyaları gözden geçirme fırsatı verilebilir.

**Üretim**: Kopya düzenlemeleri tamamlanıp onaylandıktan sonra, gönderi bu aşamaya geçer. Üretimde, kopyalanan dosyalar dizgileri yapılarak yayınlanacak biçime dönüştürülür - HTML, XML, PDF, vb. Yazar, dizgileri yapılmış kopyayı düzeltme fırsatına sahiptir. İlgili kişiler uygun gördüğünde, gönderinin gelecekteki bir sayıda yayınlanması planlanır.

{% include video.html id="-VRKdBQPdn4" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 9: Production."%}

This PKP School video explains the Production stage. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

<hr />

## Tasks

Görevlerinize Kontrol Panelinizin sol üst menüsünden ulaşabilirsiniz. Aşağıda verilen resimdeki "1" rakamına dikkat edin. Bu, listenizde şu anda 1 görev olduğunu gösterir.

![The expanded Tasks menu in OJS.](./assets/learning-ojs3.1-ed-tasks.png)

Görevler, ilgilenmeniz gereken öğelere hızlı bir bakış sağlar. Koyu girişler okunmadı ve açık olan girişler okundu.

Görevleri silinmek üzere işaretlemek için onay kutusunu kullanın \(bağlantı listenin altındadır\).

<hr />

## Submission Notifications

When an author makes a new submission to your journal, the author and all contributors will receive an email acknowledging their submission and an editor will be automatically emailed a notification of the new submission. In some cases an editor will be automatically assigned to the submission. Which editor(s) receive the notification or are automatically assigned will depend on how you have set up your journal.

* If there is only one user assigned to an Editor or Journal Manager role, that user will be automatically assigned and notified.
* If one or more Section Editors are assigned to the [section](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#sections) the submission was made in, they will be automatically assigned to the submission and notified.
* If one or more Section Editors are assigned to a [category](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#categories) the submission was made in, they will be automatically assigned to the submission and notified.

OJS'de, bildirim e-postasının bir kopyasını derginin Dergi Ayarları kısmında birincil iletişim grubuna veya başka bir adrese gönderilmesi için de yapılandırabilirsiniz.

Gönderi onay e-posta kopyalarının birincil ilgili kişiye veya başka bir adrese gönderilmesini sağlamak için:

1. In the Journal Manager’s dashboard, go to Settings > Workflow > Submissions
2. Scroll down to Notification of Author Submissions
3. Check off the box next to “Send a copy to the primary contact, identified in the Journal Settings.” if you wish for a copy to be sent to the primary contact email, and/or
4. Enter the email you would like to have a copy sent to in the text field.

![The Notification of Author Submission settings in OJS.](./assets/learning-ojs3.1-configure-submission-notification.png)

Gönderi onayı e-postalarını tamamen devre dışı bırakmak istiyorsanız, hazırlanan e-posta şablonları listesinden *Gönderi Onayı* e-posta şablonunu devre dışı bırakarak bunu yapabilirsiniz. To learn more about disabling and enabling email templates, refer to *Disable email templates* in the [Workflow Settings chapter](./settings-workflow).

Kullanıcılar ayrıca kendi profillerinden Profili Görüntüle > Bildirimler.

## Submission Dashboard

When you log into your Dashboard, you can find active submissions either from your Tasks, or from one of the queues (My Queue, Unassigned, All Active, and Archives). The counter gives you an overview of how many total items are in each queue.

![The submission dashboard in OJS.](./assets/learning-ojs3.2-ed-dashboard-active.png)

### My Queue

**Atanan Görevler**: Bu panel, bölüm editörü olduğunuz bölümlere veya bu dergide yazarsanız kendi gönderilerinize eklenen gönderileri içerir.

**Arama** aracı bazen gönderilerin her birini izlenmesinde yardımcı olabilir.

The **Filter** tool allows you to limit your browsing to specific conditions for faster searching. Depending on their role, editorial roles will be able to filter by the following:

- __Status:__ select from _incomplete_, _overdue_, and _inactive for 30 days_

- __Stages:__ select from _submission_, _review_, _copyediting_, and _production_

- __Sections:__ this option is only available if more than 5 sections exist. After you begin entering text, the filter will auto-suggest. For example, filter by _articles_ or _reviews_

- __Assigned editor(s):__ only Journal Managers and Journal Editors have this filter option. Like sections, this is a textbox which will auto-suggest a Section Editor, Journal Editor, or Guest Editor's name as you start to type it, then display all articles assigned to the editor.

- __Assigned issue:__ only journal managers can filter by unpublished issues, but editors and assistants will be able to filter by published issues. This field is case-sensitive and require exact match. For best results, search by year or title, rather than volume or number. This filter is mostly used if the assignment of a submission to an issue is done in an early phase of the editorial process.

Some filters allow multiple selections; users can filter by more than one editor, section or issue. Filters are applied with OR conditions, so when a user selects to filter by Editor A and Editor B, all submissions will be returned that are assigned to editor A OR editor B.

When using multiple filters, the AND condition will be applied between filters. For example, when filtering by Review Stage AND Editor A, only submissions assigned to Editor A in the review stage will be returned.

![A sample filter applied to the list of submissions.](./assets/learning-ojs3.2-ed-dashboard-filter.png)

Öne çıkan yorum sayısı, yeni tartışmalar ve daha fazlası dahil olmak üzere daha fazla ayrıntıyı ortaya çıkarmak için her gönderinin sağındaki mavi okları kullanabileceğinizi unutmayın. Ayrıca sizi gönderi kaydına götürmek, etkinlik günlüğünü ve notları görüntülemek ve gönderiyi silmek için düğmeler gösterir.

![A sample of expanded submission details in the dashboard.](./assets/learning-ojs3.2-ed-dashboard-active-details.png)

### Unassigned

Bu panel, bölüm düzenleyicileri olmayan bölümlere eklenen gönderileri içerir.

![The Unassigned tab in the Submissions dashboard.](./assets/learning-ojs3.1-ed-dashboard-unassigned.png)

Yukarıdaki örnekte, atanmamış gönderi olmadığından panel boştur.

### All Active

Bu bölüm, iş kuyrukları halinde düzenlenmeden tüm gönderilerin bir listesini içerir.

![The All Active tab in the Submissions dashboard.](./assets/learning-ojs3.1-ed-dashboard-all-active.png)

### Archives

This section includes a list of all submissions either declined or already published by the journal. Declined submissions may be deleted from the list of archived submissions. Deleting a declined submission will completely remove the submission and all submission files from your journal.

![The list of archived submissions with the option to delete submissions.](./assets/ojs-3.3-sub-delete.png)

### Demonstration Submission

For this demonstration, we are looking at the Cerpa submission, entitled _A Review of Object Oriented Database Concepts and their Implementation_. **Atananlar** iş kuyruğunun en üstünde ve **Aktif Görevler** kuyruğunda bulunabilir.

![The My Assigned queue on the OJS Submissions Dashboard, with the example article by Cerpa at the top of the queue.](./assets/learning-ojs3.3-submission-queue.png)

Once you find the submission, you can use the view button to view the submission, or use the blue arrow to reveal options and see if there are any open discussions (there are none in this case), the number of production galleys, and access the activity log & notes.

![A submission with the options menu expanded.](./assets/learning-ojs3.3-submission-options.png)

**Etkinlik Günlüğü & Notlar**, gönderinin geçmişini tutar.

![A sample activity log for a submission](./assets/learning-ojs3.1-ed-dashboard-log.png)

Düzenleme notlarını da görüntülemek veya eklemek için Notlar sekmesini kullanın.

![The Notes tab of the Activity log.](./assets/learning-ojs-3-ed-submissions-notes.png)

### Submission Record

Gönderiyi daha ayrıntılı olarak görüntülemek için **Gönderiyi Görüntüle** düğmesini seçin. Bu sizi gönderi kaydına götürecektir.

![A sample submission record.](./assets/learning-ojs3.1-ed-dashboard-record.png)

Burda şunları görebilirsiniz:

**Gönderi Dosyaları**: Bu panel, gönderilen dosyaları listeler. Bu görünümde yalnızca bir dosya vardır, ancak birden fazla dosya gönderilmiş olabilir. Submission files will now retain the original names when downloaded.

For journals using anonymous review, the author and reviewer (if they were to upload any document) are still removed. An example filename structure for files downloaded by Reviewers will be `ojs-review-assignment-1-article-text-8.docx` The numeric number corresponds with the manuscript number of assignment.

**Ön İnceleme Tartışmaları**: Bu panel, editörün yazarla veya editör ekibindeki diğer kişilerle iletişim kurmasını sağlar. Örneğin, yazardan bazı ek bilgiler veya bir bölüm editöründen bu gönderi için sorumluluk almasını istemek.

**İşlem Düğmeleri**: Bunlar, Değerlendirmeye Gönder, Değerlendirmeyi Kabul Et ve Atla veya Gönderiyi Reddet'i içerir.

> Note: If you don't see these buttons, you likely have not yet assigned the submission to an editor.

**Submission Status** Once an editor has recorded a decision in one stage of the workflow of OJS 3.2, the recorded decision will appear in place of the decision buttons. Editors will still have the ability to change the recorded decision by clicking, ‘Change Decision’ this will enable the 3 options once again.

![The Change Decision button in the submission status.](./assets/learning-ojs3.2_edflow_decisionstatus2.png) *The screenshot above shows the decision button for MS# 425 prior to a decision being recorded. The screenshot below shows the notification of the recorded decision.*

![The "Submission accepted" status of a submission.](./assets/learning-ojs3.2_edflow_decisionstatus_accept.png)

**Katılımcılar**: Bu panel, editör, bölüm editörleri ve yazar dahil olmak üzere gönderiye katılan katılımcıların listesini göreceğiniz yerdir. Other names (copyeditors, layout editors, etc.) will appear here as they are added in subsequent steps.

**Gönderi Kitaplığı**: Gönderi Kitaplığı, çıkar çatışması formları, dizgi onay formları vb. içerebilecek belgeler için genel bir depolama alanıdır. Bir kullanıcı, makalesi için doldurulmuş formu Gönderi Kitaplığı'na yükleyebilir. Yüklenen formlar, editoryal veya üretim iş akışı boyunca yeni sürümleri düzenlemek veya yeniden yüklemek için atanan diğer katılımcılara da (Hakemler hariç) sunulacaktır.

**Document Library**: Users throughout the editorial workflow will be able to access all the files in the Publisher Library (see [Workflow Settings chapter](./settings-workflow.md)) made available by the Journal Manager or Editor through opening the Submission Library and clicking "View Document Library".

![The location of the View Document Library button in the Submission Library panel.](./assets/learning-ojs3.1-jm-settings-workflow-sublib1.png)

**Preview**:  See how the submission will look when published with its current metadata and Galley files by clicking Preview.

![The preview feature that shows how an article will look when published](./assets/learning-ojs-3-ed-preview.png)

**Üstveriler**: Gönderi üst verilerini görüntüleyebililir ve düzenleyebilirsiniz. In OJS 3.2 and later, users can be granted permission to revise certain submission metadata at any stage of the workflow.

![The Metadata tab of a submission.](./assets/learning-ojs3.1-ed-dashboard-record-metadata.png)

### Granting Author permissions

As of OJS 3.2, editors can grant access to allow authors to make metadata changes. There are two ways editors can grant this type of access.

**Global permission**- will grant all users with the role ‘author’ permission to make metadata changes.

To enable this, go to Users & Roles > Roles. Click the blue arrow beside the ‘Author’ then click edit.

![The location of the Edit button under the Author role.](./assets/learning-ojs3.2-editorial-workflow-author-edit.png)

Under Role Options, enable ‘Permit submission metadata edit.’ then click OK.

![The "Permit submission metadata edit" checkbox in the role editing window.](./assets/learning-ojs3.2-editorial-workflow-author-editmenu.png)

**Limited Permission** - will grant registered authors (typically a single author) permission to only make changes at certain stages of the editorial workflow.

To allow an author to change the metadata at a specific stage of the workflow, click on the workflow stage (ie., Submission, Review, Copyediting, or Production).

Under the participants list, click the arrow beside the author’s name followed by Edit.

![The location of the Edit button for a participant in the participants list.](./assets/learning-ojs3.2-editorial-workflow-edit-participant.png)

Under Permissions, enable ‘Allow this person to edit publication details.’ followed by OK.

![The "Allow this person to edit publication details" checkbox in the Edit Assignment window.](./assets/learning-ojs3.2-editorial-workflow-edit-grantpermission.png)

Once the author has been granted access to made edits they will be able to make changes to the following sections on the Publication tab: Title & Abstract, Contributors, and Metadata.

![The sections available for authors to edit highlighted in the Publication tab.](./assets/learning-ojs3.2-editorial-workflow-edit-publicationmenu.png)

### Assigning the Submission

Bölümlerinizi nasıl yapılandırdığınıza bağlı olarak, bazı yeni gönderiler atanmamış olarak gelebilir. Bu durumda, bir sonraki adım bir editör veya bölüm editörü atamaktır. Bunu yapmak için **Katılımcılar** panelinde _Ata_ bağlantısını seçin.

![The Add Participants window.](./assets/learning-ojs-3-ed-submissions-add-participant.png)

Bir kullanıcıyı role göre bulma, bireysel bir seçim ve onlara yardımlarını isteyen bir mesaj gönderme seçeneğine sahip olacaksınız.

> Note: If you aren't sure of the names of the section editors, simply choose that role from the dropdown menu and then hit the Search button. All Section Editors will be displayed and available for selection.

Atamayı yapmak ve mesajı göndermek için **Tamam** düğmesine basın.

![The added participants name shown in the participants list.](./assets/learning-ojs3.1-ed-dashboard-record-assign.png)

> Note the new Pre-Review Discussion that was automatically created as part of the assignment.

Artık Bölüm Editörünün Katılımcılar altında listelendiğini ve Eylem düğmelerinin mevcut olduğunu görebilirsiniz:

**Değerlendirmeye Gönder**: Gönderiyi bir sonraki aşamaya taşır.

**Kabul Et ve Değerlendirmeyi Atla**: Değerlendirme Aşamasını atlar ve gönderiyi doğrudan Kopya Düzenlemeye taşır.

**Gönderiyi Reddet**: Değerlendirme sürecinden geçmeden gönderiyi reddeder. Gönderi daha sonra arşivlenecektir. In OJS 3.3, there is now the option to revert a Decline decision in the Submission and Review stage. This can be done by clicking **Change Decision** followed by **Revert Decline**. After a declined decision is reverted, the submission is restored to its previous stage and review round if active.

Bu örnekte editör bir bölüm editörü olarak atamış olsa da, kendisini gönderiye ataması mümkün olacaktır.

Once the editor has selected an action, the submission status will change and the action buttons will be disabled.

![The location of the Change Decision button of a submission.](./assets/learning-ojs3.2_edflow_decisionstatus2.png)

### Section Editor

Artık Bölüm Editörü atandığına göre, oturum açabilir ve kontrol panellerini görüntüleyebilir. Gönderi, Atananlar sırasının en üstünde bulunabilir.

![The My Assigned queue of a Section Editor with assigned submissions.](./assets/learning-ojs3.1-se-dashboard.png)

Makale başlığına tıklamak gönderi kaydını açar.

![A sample submission record.](./assets/learning-ojs3.1-se-record.png)

#### Accepting the Assignment

Bu zorunlu değildir, ancak Bölüm Editörü, atamaya devam edeceklerini editöre bildirmek için Ön Değerlendirme Tartışmasına yanıt verebilir.

#### Communicating with the Author

Bölüm Editörünün yazara herhangi bir sorusu varsa, Ön Değerlendirme Tartışmalarını kullanabilirler.

#### Sending to Review

Bölüm Editörü gönderinin dergi için uygun olduğundan karar verdiğinde, gönderiyi bir sonraki aşamaya taşımak için **Değerlendirmeye Gönder** düğmesini seçebilir.

![The Send to Review confirmation window.](./assets/learning-ojs3.1-se-record-sendReview.png)

Değerlendirilecek dosyaları işaretleyin.

<hr />

## Review

{% include video.html id="5Hwkqj4Jvew" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 5: Assigning a reviewer."%}

This PKP School video explains the steps the Section Editor takes to assign reviewers to the submission. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

Gönderi Değerlendirme Aşamasına geçildiğinde, bir bildirim Hakemlerin atanması gerektiğini belirtir.

![The "Waiting for reviewers to be assigned" notification.](./assets/learning-ojs3.1-se-record-revstage.png)

> Note: In the screenshot above, we see the Section Editor's view. Notice the limited Action buttons \(only Make Recommendation is available\). If we were logged in as an Editor, we would see more Action buttons \(Request Revision, Accept Submission, Decline Submission\).

Hakem panelinden, yeni bir Hakem atamak için Hakem Ekle'yi seçebilirsiniz.

Bu, Hakemlerin listelendiği ve birer birer seçilebildiği yeni bir pencere açar.

![The Locate a Reviewer window listing all Reviewers.](./assets/learning-ojs-3.1.2-locate-reviewer.png)

Mavi oka tıklamak, o anda atanan aktif değerlendirme sayısı, tamamladığı veya reddettiği değerlendirme sayısı vb. dahil olmak üzere değerlendirme geçmişi hakkında daha fazla bilgi gösterir. Kullanıcı bir Biyografi veya İlgi Alanlarını eklediyse, bu bilgi burada görüntülenecektir.

Ek olarak, bir Dergi Editörü, profillerine Kullanıcılar & Roller > Kullanıcılar altında hakem hakkında bir Editoryal Not ekleyebilir. Bu not, Hakem Ekle ekranında gözden geçiren ayrıntılarında görünecek, ancak hakeme veya herkese görünmeyecektir.

![A sample of expanded reviewer details with review history and notes.](./assets/learning-ojs-3.1.2-add-reviewer.png)

OJS 3.0'dan 3.1.0'a kadar olan sürümlerde, bir kullanıcı aynı zamanda gönderinin editörü ise, bu kullanıcıyı o gönderiyi incelemesi için atayamazsınız.  If you do, the editor will no longer be able to access the submission after they submit their review, in order to maintain the principles of anonymous peer review. Ancak, OJS 3.1.1'den başlayarak, bir kullanıcı aynı zamanda gönderinin editörü ise, o gönderiyi incelemesi için atayabilirsiniz.

Bu formun alt kısmında şu seçenekleri göreceksiniz:

**Hakem Seç**: Listeden bir Hakem seçtikten sonra seçiminizi onaylamak için bunu kullanın.

**Yeni Hakem Oluştur**: Hakemlerin hiçbiri uygun değilse, yeni bir Hakem oluşturmak için bu düğmeyi kullanabilirsiniz. Bu, sistemde yeni bir oluşturur.

**Mevcut Kullanıcıyı Yetkilendir**: Hakemlerin hiçbiri uygun değilse, mevcut bir kullanıcıyı Hakem olarak yetkilendirebilirsiniz.

Bu demo için, Sönmez Çelik'i Hakem olarak seçeceğiz ve **Hakem Seç** düğmesine basacağız.

Bu, Hakem için mesaj içeren yeni bir pencere açacaktır.

![The Add Reviewer screen with email notification template.](./assets/learning-ojs3.1-se-record-revstage-revreq.png)

Hazırlanan metinlerden herhangi birini revize edebilirsiniz.

If you are using an Anonymous Review method, ensure that the files you send to the Reviewer are stripped of any identifying information about the Author. Additional instruction for this is provided in the [Understanding Anonymous Review](#understanding-anonymous-review) and [Removing Identifying Information](#removing-identifying-information) sections.

Formun devamında, başlık, özet, önemli tarihler ve incelenecek dosyalara bağlantı dahil olmak üzere Hakem'e gönderilen ek ayrıntıları göreceksiniz.

![Review details include type and due date settings.](./assets/learning-ojs-3-ed-rev-add-4.png)

Varsayılan olarak, Hakemlere yorumlarını yazmaları için genişletilmiş bir metin kutusu sağlanacaktır. However, the Journal Manager can create Review Forms in [**Workflow Settings &gt; Review**](./settings-workflow#review) to ask more focused questions. Hakemin bir değerlendirme formu doldurmasını istiyorsanız, bunu **Değerlendirme Formu** altında seçin.

Mesajı göndermek ve Hakemi atamak için **Hakem Ekle** düğmesine basın.

Değerlendirme Aşamasına geri döndüğümüzde, Hakemin artık listelendiğini görebiliriz.

![The newly added Reviewer seen in the Review Stage.](./assets/learning-ojs-3-ed-rev-reviewer-added.png)

Hakem adının yanındaki mavi ok geçişini kullanarak ek değişiklikler yapabilirsiniz.

![Expanded reviewer details and options.](./assets/learning-ojs-3-ed-rev-reviewer-added-2.png)

**Değerlendirme Ayrıntıları**: Değerlendirmeyle ilgili ayrıntıları sağlar.

![The Review Details window.](./assets/learning-ojs-3-ed-rev-reviewer-review-details.png)

**Hakem'e E-posta**: Hekem'e bir mesaj göndermenizi sağlar.

![The Email Reviewer window.](./assets/learning-ojs-3-ed-rev-reviewer-email-reviewer.png)

**Değerlendirmeyi Düzenle**: Değerlendirme tarihlerini ve dosyalarını değiştirmenize olanak tanır.

![The Edit Review window.](./assets/learning-ojs-3-ed-rev-reviewer-edit-review.png)

**Hakem Atamasını Kaldır**: Hakem atamasını kaldırmanıza olanak tanır.

**Cancel Review Request**: As of OJS 3.2, you can cancel a review request. This may be necessary when a reviewer has not responded to a review request or accepted to do a review but never delivered.

![The Cancel Reviewer option in the expanded Reviewer options.](./assets/learning-ojs-3.2-cancel-reviewer.png)

Cancelling a review request will permit you to send a template email to the reviewer. The request will then show up in the editor's reviewer list as "cancelled".

![A sample review request marked "Request cancelled".](./assets/learning-ojs-3.2-reviewer-cancelled.png)

Cancelled review will be recorded in reviewer stats that you can see when selecting a reviewer.

![Cancelled requests as seen in a reviewer's stats.](./assets/learning-ojs-3.2-cancelled-reviews-tracker.png)

**Review Discussion**: Review Discussion is another way for you to contact a reviewer. In a review discussion, you have the option to attach files.

To start a discussion, click ‘Add Discussion.’

![The location of the Add Discussion button.](./assets/learning-ojs3.2-rev-contact2.png)

You will then select the reviewer(s) you would like to start a discussion with.

![The list of reviewers to select for discussion.](./assets/learning-ojs3.2-rev-contact3.png)

**Geçmiş**: Değerlendirmenin kısa bir geçmişini sağlar.

![The review History window.](./assets/learning-ojs-3-ed-rev-review-history.png)

Bu noktada, ek Hakemler ekleyebilir ve ardından önerilerinin gelmesini bekleyebiliriz.

### Understanding Anonymous Review

OJS, farklı değerlendirme türlerini barındıracak şekilde tasarlanmıştır ve anonimliği sağlamak için yerleşik adımlara sahiptir.

Seçilen değerlendirme türünden bağımsız olarak tüm bilgiler dergi yöneticileri ve editörler tarafından görülebilir. Değerlendirme türü, _Ayarlar_ > altında yapılandırılanlara göre otomatik olarak seçilecektir; _İş Akışı_ > _Değerlendirme_. Editörler, değerlendirme isteği gönderirken inceleme türünü değiştirebilir. Editörler/Bölüm Editörleri, değerlendirme talebini gönderirken aşağıdaki seçeneklerden inceleme türünü seçmelidir:

* Anonymous Reviewer/Anonymous Author
* Anonymous Reviewer/Disclosed Author
* Open

**Anonymous Reviewer/Anonymous Author**: The identity of both the author and the reviewer is kept hidden.

The author or editor must ensure that metadata from the manuscript file is removed in Anonymous Reviewer/Anonymous Author. Daha fazla bilgi için [Kimlik Bilgilerini Kaldırma](#removing-identifying-information) konusuna bakın.

*Reviewer*: The reviewer will not be able to see the author(s) in their reviewer’s queue if the editor has selected Anonymous Reviewer/Anonymous Author. All identifying information in the metadata of the submission details is automatically removed by the system, as seen in the example below.

![A sample of the metadata a reviewer will see in a double anonymous review - no identifying information is included.](./assets/learning-ojs3.1-ed-rev-anon1.png)

Bir değerlendirmenin sonunda, bir hakem bir değerlendirme dosyası yüklemeyi seçerse, sisteme yüklemeden önce tüm tanımlayıcı bilgileri kaldırmalıdır. Daha fazla bilgi için [Kimlik Bilgilerini Kaldırma](#removing-identifying-information) konusuna bakın.

*Yazar*: Yazar, makale görünümünde gözden geçirenle ilgili tanımlayıcı hiçbir bilgi görmeyecek.

![A sample of what the author will see after their submission is reviewed - no identifying information is included.](./assets/learning-ojs3.1-ed-rev-anon2.png)

*Editör Kararı*: Bir değerlendirmenin sonunda yazar(lar)a gönderilen karar e-postasında, hakemlerin genel başlıkları olacaktır.

![A sample decision email identifying the reviewer only as "Reviewer A".](./assets/learning-ojs3.1-ed-rev-anon3.png)

**Anonymous Reviewer/Disclosed Author**: Reviewer identity is kept anonymous from the author(s). Hakemler yazar ayrıntılarını görebilir.

*Hakem*: Hakem, makale istek sekmesindeki _Tüm Gönderi Ayrıntılarını Görüntüle_'yi tıklayarak yazar tarafından girilen üstverilerin tamamını görebilir. Yazarların adı hakem iş kuyruğunda görünecektir.

*Yazar*: Makale görünümünde hakeme ilişkin tanımlayıcı bilgiler bulunmayacaktır.

![A sample of what the author will see after their submission is reviewed - no identifying information is included.](./assets/learning-ojs3.1-ed-rev-anon2.png)

*Editör Kararı*: Bir değerlendirmenin sonunda yazar(lar) a gönderilen karar e-postasında, hakemlerin genel başlıkları olacaktır.

![A sample decision email identifying the reviewer only as "Reviewer A".](./assets/learning-ojs3.1-ed-rev-anon3.png)

### Removing Identifying Information

While OJS has a number of built-in functions for anonymous reviews, additional steps may need to be taken outside of the platform to ensure Anonymous Reviewer/Anonymous Author. Bir gönderi dosyası, belge özellikleri içinde yazarların kimliğini tanımlayabilecek bilgilere sahip olabilir.

![A sample of a document whose author is visible within the document properties.](./assets/learning-ojs3.1-ed-rev-anon4.png)

Yazarlar ayrıca adlarını makale, dipnotlar veya referanslara dahil edebilir, bu durumda editörün değerlendirmeye göndermeden önce bunları kaldırması gerekecektir. Alternatif olarak, yazarlardan göndermeden önce kaynak ve dipnotlarda yazar adı, makale başlığı vb. yerine "Yazar" ve yıl kullanılarak gönderi dosyasından adlarını düzeltmeleri istenebilir.

#### Microsoft Word for Windows

1. Go to _File_
2. Select _Info_
3. Click on _Check for Issues_
4. Click on _Inspect Document_
5. In the _Document Inspector_ dialog box, select the check boxes to choose the types of hidden content that you want to be inspected
6. Click _Remove All_
7. Click _Close_
8. Save the document

#### Microsoft Word for MacOS

1. Go to _Tools_
2. Click _Protect Document_
3. Select _Remove personal information from this file on save_
4. Click _OK_ and save the file

![The "Remove personal information from this file on save" option in Mac OS.](./assets/learning-ojs3.1-ed-rev-anon5.png)

### Re-uploading the Document

Dergi Yöneticileri ve Editörleri, _Değerlendirme Dosyaları_ kutusundaki **Dosyaları Yükle/Seç** seçeneğine tıklayarak değerlendirme dosyalarındaki anonimleştirilmiş belgeyi yeniden yükleyebilirler.

![The Upload/Select Files button under the Review Files section.](./assets/learning-ojs3.1-ed-rev-anon6.png)

Click **Upload Review File**.

![The Upload Review File button.](./assets/learning-ojs3.1-ed-rev-anon7.png)

Identify the article component and upload the file.

![The article component identification dropdown.](./assets/learning-ojs3.1-ed-rev-anon8.png)

Review Details. It may be helpful to rename the file to the time of re-upload. The file can also be renamed by clicking the arrow on the left side of the file name.

![The Edit button in the expanded menu under the list of review files.](./assets/learning-ojs3.1-ed-rev-anon9.png)

Click Complete and select the file you would like to use for the review.

The file(s) will appear under the initial upload. When sending out the review request, ensure that the original manuscript is unselected from the ‘Files To Be Reviewed’.

![Options to toggle which files are included for review.](./assets/learning-ojs3.1-ed-rev-anon10.png)

Select the Review File(s) and click **OK**.

### Responding to Reviews

{% include video.html id="LR_1BmmSTek" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 7: Responding to the reviews"%}

This PKP School video explains the steps the Section Editor and the author take once the reviews are complete. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

Once the Reviewers have completed their work, the Section Editor can see the results in their dashboard. Here they will see notifications that new reviews have been submitted and whether all reviews are in.

![Sample notification of completed reviews in the Section Editor's dashboard.](./assets/learning-ojs-3-ed-rev-responding.png)

Use the _Read Review_ link in the Reviewers panel to read the comments from the Reviewers, including those for both the Author and Editor as well as for the Editor only.

![A sample review with comments.](./assets/learning-ojs-3-ed-rev-read-reviews.png)

Select the _Confirm_ link at the bottom of the screen.

![The Review Confirmed status applied to a review.](./assets/learning-ojs-3-ed-rev-thank.png)

In the Reviewers panel, you can now see a _Thank Reviewer_ link. Choose that to thank the Reviewer.

![The Thank Reviewer window.](./assets/learning-ojs-3-ed-rev-thank2.png)

Hit the **Thank Reviewer** button to send the message.

### Making the Decision

Based on the Reviewer recommendations, you can use the action buttons to make a decision.

![The various action buttons for making a decision regarding a submission.](./assets/learning-ojs-3-ed-rev-decision.png)

Options include:

**Request Revisions**: This will require the Author to make minor changes, the editor has the option to select whether another round of review will be required.

**Accept Submission**: This means the submission is accepted without revisions and can proceed to the Copyediting stage.

**Decline Submission**: This means that the submission has not passed peer review and is unsuitable for further consideration. The submission would then move to the Archives. Only declined submissions in the Archives can be deleted. In OJS 3.3, there is now the option to revert a Decline decision in the Submission and Review stage. This can be done by clicking **Change Decision** followed by **Revert Decline**. After a declined decision is reverted, the submission is restored to its previous stage and review round if active.

### Request Revisions

In this demonstration, we are going to request that the Author make some minor revisions before acceptance.

To do so, select the **Request Revisions** button. This results in a new message window.

![The Request Revisions window.](./assets/learning-ojs-3-ed-rev-req-revisions.png)

You can modify any of the text before sending the message.

Use the **Add Reviews** button to import the Reviewer's comments from the Editor and Author field. Comments in the Editor only field will not be displayed.

If there are any attachments, such as a marked up file created by a Reviewer, you can attach it here (as long as it has been anonymized). In OJS 3.1.2 and later, you can also upload a new file and add it as an attachment.

Hit the **Record Editorial Decision** button to send the message.

![A sample request for revisions with imported comments and options to share files.](./assets/learning-ojs-3-ed-rev-req-revisions3.png)

You must now wait for the Author to respond with their revisions.

### Author Responds

Once the Author has made the revisions, you should receive a message (via email and the Review Discussions panel).

![The author's revision found in the Review Discussions panel.](./assets/learning-ojs-3-ed-discussion-panel.png)

You will also see the revised file in the Revisions panel.

At this point, you can download the revised file, check to make sure it is ready, and communicate with the Author using the Review Discussions panel.

In this case, we're going to inform the Author that we are accepting the revisions. To do so, click on the linked title of the discussion. This will open the discussion box.

![An expanded discussion.](./assets/learning-ojs-3-ed-discussion-window.png)

Use the **Add Message** button to reply, either requesting further revision or informing the author that the submission is ready to move on to the next stage.

![A sample reply to an author's revisions.](./assets/learning-ojs-3-ed-discussion-window-reply.png)

### Additional Round of Review

If you would like to put the revised article through another round of review, you can start a second (or third or subsequent) review round after the author revisions have been received.

It is best to start a new round of review **after** an author uploads revised files on the previous round. Creating a New Round of review before the author has uploaded their files could create some confusion as their dashboard (and yours) will default to the new round. The author will, however, be able to switch back to Round 1 to upload their files. This will also result in having to download the uploaded file from Round 1 and upload it into Round 2.

A new round should **not** be started if you are experiencing any issues with the current round (i.e., unable to record decision, re-invite a declined or removed reviewer).

To start an additional round of review after revised files have been received, click the **New Review Round** tab in the review tab of the manuscript.

![The New Review Round button in the Review panel](./assets/learning-ojs-3-new-round-1.png)

This will open another menu for you to select which files (provided by the author) to include for the new round of review.

![File selection options for a newly created review round.](./assets/learning-ojs-3-new-round-2.png)

If there are any additional files you want to make available again from the previous round, this can be done by clicking **Upload/Select Files**.

![The Upload/Select files button in the Review Files window.](./assets/learning-ojs-3-new-round-3.png)

Check the box next to **Show files from all accessible workflow stages**. The files available from Round 1 should appear under Submission. The files that appear under Review will only show files uploaded by the author from the previous round (i.e., revised files from Round 1). If you are on Round 3 (and onwards) and require files from Round 1 or 2, you will need to download these to your local desktop and re-upload them using **Upload/Select Files**.

![The list of files for a submission including previous round after the "Show files from all accessible workflow stages" option is enabled.](./assets/learning-ojs-3-new-round-4.png)

Similarly, if there are any additional files authors provide after they upload the resubmission, you can upload them using **Upload/Select Files**.

A new round will be added to the Review panel in the submission dashboard.

![The Round Two tab in the Review panel.](./assets/learning-ojs-3-new-round-0.png)

Once you’re ready to start the new round of review, assign Reviewers as you did in the previous round. You can assign the same reviewers or different reviewers.

Reviewers from previous rounds will not have access to comments they've made the round before. If a reviewer has requested their comments from the previous round, the editor could copy this from Round 1 - Review Details and start a discussion in Round 2. Alternatively, the journal may choose to encourage the submission of Response to Reviewer as part of the resubmission.

These steps can be repeated until a final decision to accept or decline the manuscript has been reached.

### Moving to Copyediting

The submission is now ready to be moved to copyediting. To do so, use the blue **Send to Copyediting** button.

![The "Send to Copyediting" button in a submission panel.](./assets/learning-ojs-3-ed-send-to-copyediting.png)

Bu yeni bir pencere açacaktır.

![The Send to Copyediting window including information about the notification of acceptance to be sent to the author.](./assets/learning-ojs-3-ed-accept.png)

Note that if the journal has enabled an article processing charge (APC) to be charged to authors, the option will appear at this stage to notify the author that the payment is due. Selecting "Request publication fee" will prompt a payment notification email to be sent to the author with payment instructions. For information about enabling author fees, please see the [Subscriptions chapter > Payment Types](./subscriptions#payment-types) and [Distribution settings > Enable Payments](./settings-distribution#enable-payments).

![A sample notification for a journal with APCs enabled.](./assets/learning-ojs3.1-jm-subscriptions-authorfees.png)

Hit the **Record Editorial Decision** button at the bottom of the window.

The submission is automatically moved to the Copyediting stage.

Back on the review tab, you will notice that the status now indicates the submission has been accepted.

![The "Submission accepted" status of a submission.](./assets/learning-ojs3.2_edflow_decisionstatus_accept.png)

<hr />

## Copyediting

{% include video.html id="uc272bhGfeU" provider="youtube" title="Video of Editorial workflow in OJS 3.3. Module 8: Copyediting."%}

This PKP School video explains the Copyediting stage. To watch other videos in this series, visit [PKP’s YouTube channel](https://www.youtube.com/playlist?list=PLg358gdRUrDUKJbWtr4bgy133_jwoiqoF).

When a submission is accepted in the Review Stage, it will automatically move to the Copyediting stage.

![The Copyediting stage of a submission.](./assets/learning-ojs-3-ed-copyediting.png)

### Adding a Copyeditor

When the submission enters the Copyediting Stage, a notification indicates that a Copyeditor needs to be assigned. Copyeditors can be assigned using the *Add* link on the Participants panel.

Bu yeni bir pencere açacaktır.

![The Add Participant window in the Copyediting stage.](./assets/learning-ojs-3-ed-copyediting-add.png)

You can use the role dropdown to choose Copyeditor and hit the **Search** button. This will bring up all Copyeditors.

Select one of the Copyeditors for this submission.

Choose a prepared message.

Make any changes needed to the message.

Hit **Send**.

You can now see the new notification that the submission is awaiting copyedits, the Copyeditor is now included in the Participants list, and the request is visible in the Copyediting Discussions.

![The "Awaiting Copyediting" notification and updated participants list.](./assets/learning-ojs-3-ed-copyediting-add-dash.png)

You can now wait for the Copyeditor to do their work.

### Copyeditor

The Copyeditor will receive an email message from the Section Editor requesting them to take on the submission.

To get started, they must login and find the submission from their dashboard.

![The Copyeditor's submission queue.](./assets/learning-ojs-3-ce-dash.png)

Then, they can click the Copyediting link next to the submission name. This will take them directly to the Copyediting stage for this submission.

![The Copyediting stage as seen by an assigned Copyeditor.](./assets/learning-ojs-3-ce-submission.png)

From here, they can see the Draft Files. These are the files that require copyediting. Clicking on the linked title will download the file to their desktop.

Outside of OJS, they will do the copyediting work.

To check the submission metadata, click from the Workflow tab to the Production tab.

![An article record's Publication tab with metadata fields](./assets/learning-ojs-3-ce-copyediting-metadata.png)

This would include checking the article title, abstract, contributor names, keywords, etc.

If any changes are made, hit the **Save** button before exiting this window.

You can Preview how the Abstract page would look if published with the current metadata by clicking on the Preview button in the top-right portion of the page.

#### Consult with the Author

Once they have finished copyediting, they will run the changes past the Author by adding a new discussion, using the Copyediting Discussions panel's *Add discussion* link.

From the Add Discussion window, they must choose the Author and add a subject line and message.

![The Add Discussion window.](./assets/learning-ojs-3-ce-add-discussion.png)

Further down that same window, they must upload a copy of the copyedited file.

![The file upload area of the Add Discussion window.](./assets/learning-ojs-3-ce-add-discussion2.png)

To do so, use the *Upload File* link. This will open a new window where you must choose the *Article Component* (e.g., article text) and upload the file.

![The File Upload screen.](./assets/learning-ojs-3-ce-upload1.png)

Hit **Continue** to proceed.

This will open the next step, where you can edit the filename if needed.

![The Edit option next to the file name.](./assets/learning-ojs-3-ce-upload2.png)

Next, you can upload more files if necessary, or hit **Complete**.

![The Confirmation step of the file upload.](./assets/learning-ojs-3-ce-upload3.png)

Back on the Add window, you can now see the attached file.

![The newly upload file attached to the discussion.](./assets/learning-ojs-3-ce-upload4.png)

Hit **OK** to send the message to the author.

It is now visible in the Copyediting Discussions.

![The discussion added to the Copyediting Discussions section.](./assets/learning-ojs-3-ce-discussion.png)

You can now wait for the author's response.

### Author Replies

Once you hear back from the author, you can review their feedback by checking the discussion reply.

![The previous Copyediting Discussion now containing a "1" in the reply column.](./assets/learning-ojs-3-se-author-copyedits.png)

From here, you can see no further changes are required.

![A sample reply from an author approving the copyediting.](./assets/learning-ojs-3-se-author-copyedits-reply.png)

### The Final Copyedited File

Now you can go ahead and upload the final copyedited version to the Copyedited panel, near the bottom of the screen.

![The Upload/Select Files option can be found near the Copyedited section of the panel.](./assets/learning-ojs-3-ce-copyedited.png)

Use the Upload/Select Files link to upload the final copyedited version.

![The Upload/Select Files window.](./assets/learning-ojs-3-ce-copyedited-upload-select.png)

It is important to note here that you have a few choices.

1. You can use the Upload File link to upload a new file (e.g., a file with some recent changes since you showed it to the author).
2. You can select the Author's original version (unlikely).
3. You can select the Copyeditor version, which is the version you sent to the author (if you made no further changes, choose this one).

For this demonstration, we will select the Copyeditor version **by checking the box** to the left of that file.

Hit **OK**.

The file is now visible in the *Copyedited* panel (near the bottom of the screen), indicating to the editor that this is the final version, which is ready for the Production stage.

![The selected file seen in the Copyedited panel.](./assets/learning-ojs-3-ce-copyedited2.png)

### Inform the Section Editor

The final step is for you to inform the Section Editor that the copyediting is complete.

To do so, start a new Copyediting Discussion by using the *Add Discussion* link.

![The list of Copyediting Discussions ](./assets/learning-ojs-3-ce-copyedited-final.png)

In the discussion window, add the Section Editor, a subject line, and a message.

![A sample message from the Copy Editor to the Section Editor](./assets/learning-ojs-3-ce-copyedited-discussion.png)

Mesajı göndermek için **Tamam**'a basın.

Returning to the Copyediting stage, you can see the message is posted.

![The message added to the list of copyediting discussions.](./assets/learning-ojs-3-ce-copyedited-done.png)

Your work as the Copyeditor is now complete!

### Moving to Production

The Section Editor will receive an email that the copyediting is complete, and see a notification in the discussions.

![The Copyediting Stage in the Section Editor's dashboard](./assets/learning-ojs-3-se-copyedited-dash.png)

You can download and review the final copyedited version from the Copyedited panel.

![The final copyedited version uploaded to the Copyedited panel. ](./assets/learning-ojs-3-se-copyedited-files.png)

At this point you could communicate further with the Copyeditor, or, if you are satisfied, move the submission to the Production stage.

To do so, select the blue **Send to Production** button.

This will generate an official notice to the Authors that the submission is moving to the next stage.

![The Send to Production window with notification to the author.](./assets/learning-ojs-3-se-send-to-production.png)

Notice that the appropriate file, from the Copyedited panel, is included and will be automatically transferred to Production.

Hit **Record Editorial Decision** to proceed.

The Copyediting stage is now complete and the submission status will be updated. The next chapter covers the Production and Publication stage.

![The "Sent to production" status.](./assets/learning-ojs3.2_edflow_decisionstatus_copyedit.png)
