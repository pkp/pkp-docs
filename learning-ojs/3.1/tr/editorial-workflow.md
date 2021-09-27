---
book: learning-ojs
version: 3.1
---

# Bölüm 14: Editoryal İş Akışı

Bu bölümde, ilk gönderiden yayınlanma sürecinin son aşamasına kadar bir gönderinin tüm iş akış süreçlerini göreceksiniz.

İş akışı 4 aşamaya ayrılmıştır:

**Gönderi**: Burası, Bölüm Editörlerine atanan ve Değerlendirme aşamasına geçmek için dikkate alınan yeni gönderilerin geldiği yerdir.

Belirgin olarak uygun olmayan gönderiler asla bu aşamanın ötesine geçemez.

**Değerlendirme**: Burası, yazar tarafından gerekli görülen revizyonların yanı sıra hakem değerlendirmesinin gerçekleştiği yerdir.

Bazı gönderiler değerlendirmeyi geçmeyecek ve süreci burada tamamlanacaktır. Kabul edilen gönderiler bir sonraki aşamaya geçer.

**Kopya Düzenleme**: Kabul edilen gönderiler, kopya düzenleme sürecinden sonra bu aşamaya taşınır. Yazarlara kopyaları gözden geçirme fırsatı verilebilir.

**Üretim**: Kopya düzenlemeleri tamamlanıp onaylandıktan sonra, gönderi bu aşamaya geçer. Üretimde, kopyalanan dosyalar dizgileri yapılarak yayınlanacak biçime dönüştürülür - HTML, XML, PDF, vb. Yazar, dizgileri yapılmış kopyayı düzeltme fırsatına sahiptir. İlgili kişiler uygun gördüğünde, gönderinin gelecekteki bir sayıda yayınlanması planlanır.

<hr />

## Görevler

Görevlerinize Kontrol Panelinizin sol üst menüsünden ulaşabilirsiniz. Aşağıda verilen resimdeki "1" rakamına dikkat edin. Bu, listenizde şu anda 1 görev olduğunu gösterir.

![The expanded Tasks menu in OJS.](./assets/learning-ojs3.1-ed-tasks.png)

Görevler, ilgilenmeniz gereken öğelere hızlı bir bakış sağlar. Koyu girişler okunmadı ve açık olan girişler okundu.

Görevleri silinmek üzere işaretlemek için onay kutusunu kullanın \(bağlantı listenin altındadır\).

<hr />

## Gönderi Bildirimleri

Bir yazar derginize yeni bir gönderi yaptığında, editöre otomatik olarak bir bildirim e-postası gönderilir ve yazara gönderisini onaylayan bir e-posta gönderilir. OJS'de, bildirim e-postasının bir kopyasını derginin Dergi Ayarları kısmında birincil iletişim grubuna veya başka bir adrese gönderilmesi için de yapılandırabilirsiniz.

Gönderi onay e-posta kopyalarının birincil ilgili kişiye veya başka bir adrese gönderilmesini sağlamak için:
1. Dergi Yöneticisi panelinde Ayarlar > İş akışı > Gönderiler
2. Yazar Gönderi Bildirimleri'ne ilerleyin
3. Bir kopyasının birincil iletişim e-postasına gönderilmesini istiyorsanız "Dergi Ayarlarında tanımlanan birincil ilgili kişiye bir kopyasını gönderin"in yanındaki kutuyu işaretleyin
4. Metin alanına bir kopyasının gönderilmesini istediğiniz e-postayı girin.

![The Notification of Author Submission settings in OJS.](./assets/learning-ojs3.1-configure-submission-notification.png)

Gönderi onayı e-postalarını tamamen devre dışı bırakmak istiyorsanız, hazırlanan e-posta şablonları listesinden *Gönderi Onayı* e-posta şablonunu devre dışı bırakarak bunu yapabilirsiniz. E-posta şablonlarını devre dışı bırakma ve etkinleştirme hakkında daha fazla bilgi için, [İş Akışı Ayarları bölümündeki](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#workflow-settings) *E-posta şablonlarını devre dışı bırak* kısmına bakın.

Kullanıcılar ayrıca kendi profillerinden Profili Görüntüle > Bildirimler.

## Gönderi Paneli

Yönetim Panelinizde oturum açtığınızda, Görevlerinizden veya \(İş Kuyrukları, Atanmamış, Aktif Görevler ve Arşivler\) iş kuyruklarından birinde etkin gönderileri bulabilirsiniz.

![The submission dashboard in OJS.](./assets/learning-ojs3.1-ed-dashboard-active.png)

### İş Kuyrukları

**Atanan Görevler**: Bu panel, bölüm editörü olduğunuz bölümlere veya bu dergide yazarsanız kendi gönderilerinize eklenen gönderileri içerir.

**Arama** aracı bazen gönderilerin her birini izlenmesinde yardımcı olabilir.

**Filtre** aracı, göz atmanızı belirli durum \(örneğin, eksik, süresi geçmiş\) aşamaları \(gönderim, inceleme, kopya düzenleme, üretim\) veya bölümlerle sınırlandırmanıza olanak tanır. Daha hızlı arama için \(örn. makaleler, incelemeler\).

![A sample filter applied to the list of submissions.](./assets/learning-ojs3.1-ed-dashboard-filter.png)

Öne çıkan yorum sayısı, yeni tartışmalar ve daha fazlası dahil olmak üzere daha fazla ayrıntıyı ortaya çıkarmak için her gönderinin sağındaki mavi okları kullanabileceğinizi unutmayın. Ayrıca sizi gönderi kaydına götürmek, etkinlik günlüğünü ve notları görüntülemek ve gönderiyi silmek için düğmeler gösterir.

![A sample of expanded submission details in the dashboard.](./assets/learning-ojs3.1-ed-dashboard-active-details.png)

### Atanmamış

Bu panel, bölüm düzenleyicileri olmayan bölümlere eklenen gönderileri içerir.

![The Unassigned tab in the Submissions dashboard.](./assets/learning-ojs3.1-ed-dashboard-unassigned.png)

Yukarıdaki örnekte, atanmamış gönderi olmadığından panel boştur.

### Aktif Görevler

Bu bölüm, iş kuyrukları halinde düzenlenmeden tüm gönderilerin bir listesini içerir.

![The All Active tab in the Submissions dashboard.](./assets/learning-ojs3.1-ed-dashboard-all-active.png)

### Arşivler

Bu bölüm, dergi tarafından reddedilen veya halihazırda yayınlanmış tüm gönderilerin bir listesini içerir.

![The Archives tab in the Submissions dashboard.](./assets/learning-ojs3.1-ed-dashboard-archive.png)

### Demo Gönderisi

Bu demo için Çelik ve Buğan'ın _Açık Dergi Sistemleri: Açık kaynak kodlu dergi yönetim ve yayımlama sistemi._ başlıklı makalesini arıyoruz. **Atananlar** iş kuyruğunun en üstünde ve **Aktif Görevler** kuyruğunda bulunabilir.

![The submission dashboard in OJS.](./assets/learning-ojs3.1-ed-dashboard-active.png)

Gönderiyi bulduktan sonra, açık tartışma olup olmadığını görmek için mavi oku kullanabilirsiniz \(hiçbiri yok\) ve ayrıca gönderiyi görüntülemek, etkinlik günlüklerini ve notu görüntülemek veya gönderi silmek dahil.

![The expanded options for a submission.](./assets/learning-ojs3.1-ed-submission-details.png)

**Sil**, gönderi ve tüm gönderi dosyalarını derginizden tamamen kaldıracaktır. Gönderinin kaydını tutmak istiyorsanız, **Reddet** seçeneğini kullanmak daha iyidir; bu seçenek, gönderiyi Arşive taşıyacaktır.

**Etkinlik Günlüğü & Notlar**, gönderinin geçmişini tutar.

![A sample activity log for a submission](./assets/learning-ojs3.1-ed-dashboard-log.png)

Düzenleme notlarını da görüntülemek veya eklemek için Notlar sekmesini kullanın.

![The Notes tab of the Activity log.](./assets/learning-ojs-3-ed-submissions-notes.png)

### Gönderi Kaydı

Gönderiyi daha ayrıntılı olarak görüntülemek için **Gönderiyi Görüntüle** düğmesini seçin. Bu sizi gönderi kaydına götürecektir.

![A sample submission record.](./assets/learning-ojs3.1-ed-dashboard-record.png)

Burda şunları görebilirsiniz:

**Gönderi Dosyaları**: Bu panel, gönderilen dosyaları listeler. Bu görünümde yalnızca bir dosya vardır, ancak birden fazla dosya gönderilmiş olabilir.

**Ön İnceleme Tartışmaları**: Bu panel, editörün yazarla veya editör ekibindeki diğer kişilerle iletişim kurmasını sağlar. Örneğin, yazardan bazı ek bilgiler veya bir bölüm editöründen bu gönderi için sorumluluk almasını istemek.

**İşlem Düğmeleri**: Bunlar, Değerlendirmeye Gönder, Değerlendirmeyi Kabul Et ve Atla veya Gönderiyi Reddet'i içerir.

> Not: Bu düğmeleri görmüyorsanız, gönderiyi henüz bir editöre atamamış olabilirsiniz.

**Katılımcılar**: Bu panel, editör, bölüm editörleri ve yazar dahil olmak üzere gönderiye katılan katılımcıların listesini göreceğiniz yerdir. Diğer adlar \(kopya düzenleyiciler, mizanpajcılar, vb.\) sonraki adımlarda eklendikçe burada görünecektir.

Ayrıca, üst kısımdaki mavi çubukta şunları görebilirsiniz:

**Üstveriler**: Gönderi üst verilerini görüntüleyebililir ve düzenleyebilirsiniz.

![The Metadata tab of a submission.](./assets/learning-ojs3.1-ed-dashboard-record-metadata.png)

Benzersiz bir tanımlayıcı görüntülemek veya eklemek için Tanımlayıcılar sekmesini kullanın.

![The Identifiers tab.](./assets/learning-ojs-3-ed-submissions-identifiers.png)

**Gönderi Kitaplığı**: Gönderi Kitaplığı, çıkar çatışması formları, dizgi onay formları vb. içerebilecek belgeler için genel bir depolama alanıdır. Bir kullanıcı, makalesi için doldurulmuş formu Gönderi Kitaplığı'na yükleyebilir. Yüklenen formlar, editoryal veya üretim iş akışı boyunca yeni sürümleri düzenlemek veya yeniden yüklemek için atanan diğer katılımcılara da (Hakemler hariç) sunulacaktır.

**Belge Kitaplığı**: Düzenleme iş akışındaki kullanıcılar, Yayıncı Kitaplığı'ndaki tüm dosyalara erişebilir (bkz. [ İş Akışı Ayarları bölümü](./settings-workflow.md)), Dergi Yöneticisi veya Editör tarafından Gönderi Kitaplığı'nı açarak ve "Belge Kitaplığını Görüntüle"yi tıklatarak kullanıma sunulur

![The location of the View Document Library button in the Submission Library panel.](./assets/learning-ojs3.1-jm-settings-workflow-sublib1.png)

### Gönderi Atama

Bölümlerinizi nasıl yapılandırdığınıza bağlı olarak, bazı yeni gönderiler atanmamış olarak gelebilir. Bu durumda, bir sonraki adım bir editör veya bölüm editörü atamaktır. Bunu yapmak için **Katılımcılar** panelinde _Ata_ bağlantısını seçin.

![The Add Participants window.](./assets/learning-ojs-3-ed-submissions-add-participant.png)

Bir kullanıcıyı role göre bulma, bireysel bir seçim ve onlara yardımlarını isteyen bir mesaj gönderme seçeneğine sahip olacaksınız.

> Not: Bölüm editörlerinin adlarından emin değilseniz, açılır menüden o rolü seçin ve ardından Ara düğmesine basın. Tüm Bölüm Editörleri görüntülenecek ve seçime imkanı olacaktır.

Atamayı yapmak ve mesajı göndermek için **Tamam** düğmesine basın.

![The added participants name shown in the participants list.](./assets/learning-ojs3.1-ed-dashboard-record-assign.png)

> Atamanın bir parçası olarak otomatik olarak oluşturulan yeni Ön Değerlendirme Tartışmasına dikkat edin.

Artık Bölüm Editörünün Katılımcılar altında listelendiğini ve Eylem düğmelerinin mevcut olduğunu görebilirsiniz:

**Değerlendirmeye Gönder**: Gönderiyi bir sonraki aşamaya taşır.

**Kabul Et ve Değerlendirmeyi Atla**: Değerlendirme Aşamasını atlar ve gönderiyi doğrudan Kopya Düzenlemeye taşır.

**Gönderiyi Reddet**: Değerlendirme sürecinden geçmeden gönderiyi reddeder. Gönderi daha sonra arşivlenecektir.

Bu örnekte editör bir bölüm editörü olarak atamış olsa da, kendisini gönderiye ataması mümkün olacaktır.

### Bölüm Editörü

Artık Bölüm Editörü atandığına göre, oturum açabilir ve kontrol panellerini görüntüleyebilir. Gönderi, Atananlar sırasının en üstünde bulunabilir.

![The My Assigned queue of a Section Editor with assigned submissions.](./assets/learning-ojs3.1-se-dashboard.png)

Makale başlığına tıklamak gönderi kaydını açar.

![A sample submission record.](./assets/learning-ojs3.1-se-record.png)

#### Görevi Kabul Et

Bu zorunlu değildir, ancak Bölüm Editörü, atamaya devam edeceklerini editöre bildirmek için Ön Değerlendirme Tartışmasına yanıt verebilir.

#### Yazarla İletişim

Bölüm Editörünün yazara herhangi bir sorusu varsa, Ön Değerlendirme Tartışmalarını kullanabilirler.

#### Değerlendirmeye Gönder

Bölüm Editörü gönderinin dergi için uygun olduğundan karar verdiğinde, gönderiyi bir sonraki aşamaya taşımak için **Değerlendirmeye Gönder** düğmesini seçebilir.

![The Send to Review confirmation window.](./assets/learning-ojs3.1-se-record-sendReview.png)

Değerlendirilecek dosyaları işaretleyin.

<hr />

## Değerlendirme

Gönderi Değerlendirme Aşamasına geçildiğinde, bir bildirim Hakemlerin atanması gerektiğini belirtir.

![The "Waiting for reviewers to be assigned" notification.](./assets/learning-ojs3.1-se-record-revstage.png)

> Not: Yukarıdaki ekran görüntüsünde Bölüm Editörünün görünümünü görüyoruz. Sınırlı Eylem düğmelerine dikkat edin \(yalnızca Öneri Yap kullanılabilir\). Editör olarak oturum açmış olsaydık, daha fazla Eylem düğmesi \(Revizyon İste, Değerlendirme İçin Yeniden Gönder, Kopya Düzenlemeye Gönder, Gönderyi Reddet\) seçeneklerini görürdük.

Hakem panelinden, yeni bir Hakem atamak için Hakem Ekle'yi seçebilirsiniz.

Bu, Hakemlerin listelendiği ve birer birer seçilebildiği yeni bir pencere açar.

![The Locate a Reviewer window listing all Reviewers.](./assets/learning-ojs-3.1.2-locate-reviewer.png)

Mavi oka tıklamak, o anda atanan aktif değerlendirme sayısı, tamamladığı veya reddettiği değerlendirme sayısı vb. dahil olmak üzere değerlendirme geçmişi hakkında daha fazla bilgi gösterir. Kullanıcı bir Biyografi veya İlgi Alanlarını eklediyse, bu bilgi burada görüntülenecektir.

Ek olarak, bir Dergi Editörü, profillerine Kullanıcılar & Roller > Kullanıcılar altında hakem hakkında bir Editoryal Not ekleyebilir. Bu not, Hakem Ekle ekranında gözden geçiren ayrıntılarında görünecek, ancak hakeme veya herkese görünmeyecektir.

![A sample of expanded reviewer details with review history and notes.](./assets/learning-ojs-3.1.2-add-reviewer.png)

OJS 3.0'dan 3.1.0'a kadar olan sürümlerde, bir kullanıcı aynı zamanda gönderinin editörü ise, bu kullanıcıyı o gönderiyi incelemesi için atayamazsınız.  Bunu yaparsanız, editör, kör hakemlik değerlendirmesi ilkelerini sürdürmek için incelemesini gönderdikten sonra gönderiye artık erişemez. Ancak, OJS 3.1.1'den başlayarak, bir kullanıcı aynı zamanda gönderinin editörü ise, o gönderiyi incelemesi için atayabilirsiniz.

Bu formun alt kısmında şu seçenekleri göreceksiniz:

**Hakem Seç**: Listeden bir Hakem seçtikten sonra seçiminizi onaylamak için bunu kullanın.

**Yeni Hakem Oluştur**: Hakemlerin hiçbiri uygun değilse, yeni bir Hakem oluşturmak için bu düğmeyi kullanabilirsiniz. Bu, sistemde yeni bir oluşturur.

**Mevcut Kullanıcıyı Yetkilendir**: Hakemlerin hiçbiri uygun değilse, mevcut bir kullanıcıyı Hakem olarak yetkilendirebilirsiniz.

Bu demo için, Sönmez Çelik'i Hakem olarak seçeceğiz ve **Hakem Seç** düğmesine basacağız.

Bu, Hakem için mesaj içeren yeni bir pencere açacaktır.

![The Add Reviewer screen with email notification template.](./assets/learning-ojs3.1-se-record-revstage-revreq.png)

Hazırlanan metinlerden herhangi birini revize edebilirsiniz.

Kör Değerlendirme yöntemi kullanıyorsanız, Hakem'e gönderdiğiniz dosyaların Yazar hakkında herhangi bir tanımlayıcı bilgi içermediğinden emin olun. Bunun için ek talimat, [Kör İncelemeyi Anlama](#understanding-blind-review) ve [Tanımlayıcı Bilgileri Kaldırma](#removing-identifying-information) bölümlerinde verilmektedir.

Formun devamında, başlık, özet, önemli tarihler ve incelenecek dosyalara bağlantı dahil olmak üzere Hakem'e gönderilen ek ayrıntıları göreceksiniz.

![Review details include type and due date settings.](./assets/learning-ojs-3-ed-rev-add-4.png)

Varsayılan olarak, Hakemlere yorumlarını yazmaları için genişletilmiş bir metin kutusu sağlanacaktır. Ancak Dergi Yöneticisi, daha detaylı sorular sormak için [**İş Akışı Ayarları &gt; Değerlendirme**](https://docs.pkp.sfu.ca/learning-ojs/en/journal-setup#workflow-settings) adresinde Değerlendirme Formları oluşturabilir. Hakemin bir değerlendirme formu doldurmasını istiyorsanız, bunu **Değerlendirme Formu** altında seçin.

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

**Geçmiş**: Değerlendirmenin kısa bir geçmişini sağlar.

![The review History window.](./assets/learning-ojs-3-ed-rev-review-history.png)

Bu noktada, ek Hakemler ekleyebilir ve ardından önerilerinin gelmesini bekleyebiliriz.

### Kör Hakemliği Anlamak

OJS, farklı değerlendirme türlerini barındıracak şekilde tasarlanmıştır ve anonimliği sağlamak için yerleşik adımlara sahiptir.

Seçilen değerlendirme türünden bağımsız olarak tüm bilgiler dergi yöneticileri ve editörler tarafından görülebilir. Değerlendirme türü, _Ayarlar_ > altında yapılandırılanlara göre otomatik olarak seçilecektir; _İş Akışı_ > _Değerlendirme_. Editörler, değerlendirme isteği gönderirken inceleme türünü değiştirebilir. Editörler/Bölüm Editörleri, değerlendirme talebini gönderirken aşağıdaki seçeneklerden inceleme türünü seçmelidir:

* Çift-Kör
* Kör
* Açık

**Çift Kör Hakemlik**: Hem yazarın hem de gözden geçirenin kimliği gizli tutulur.

Yazar veya editör, bir Kör-Hakem Değerlendirmesinde makale dosyasındaki üstverilerin kaldırılmasını sağlamalıdır. Daha fazla bilgi için [Kimlik Bilgilerini Kaldırma](#removing-identifying-information) konusuna bakın.

*Hakem*: Editör çift kör bir değerlendirme seçtiyse, hakem kendi hakem iş kuyruğundaki yazar(lar)ı göremeyecektir. Gönderi detaylarının üstverilerindeki tüm tanımlayıcı bilgiler sistem tarafından otomatik olarak kaldırılır.

![A sample of the metadata a reviewer will see in a double anonymous review - no identifying information is included.](./assets/learning-ojs3.1-ed-rev-anon1.png)

Bir değerlendirmenin sonunda, bir hakem bir değerlendirme dosyası yüklemeyi seçerse, sisteme yüklemeden önce tüm tanımlayıcı bilgileri kaldırmalıdır. Daha fazla bilgi için [Kimlik Bilgilerini Kaldırma](#removing-identifying-information) konusuna bakın.

*Yazar*: Yazar, makale görünümünde gözden geçirenle ilgili tanımlayıcı hiçbir bilgi görmeyecek.

![A sample of what the author will see after their submission is reviewed - no identifying information is included.](./assets/learning-ojs3.1-ed-rev-anon2.png)

*Editör Kararı*: Bir değerlendirmenin sonunda yazar(lar)a gönderilen karar e-postasında, hakemlerin genel başlıkları olacaktır.

![A sample decision email identifying the reviewer only as "Reviewer A".](./assets/learning-ojs3.1-ed-rev-anon3.png)

**Kör Değerlendirme**: Hakem kimliği yazar(lar) için anonim olarak tutulur. Hakemler yazar ayrıntılarını görebilir.

*Hakem*: Hakem, makale istek sekmesindeki _Tüm Gönderi Ayrıntılarını Görüntüle_'yi tıklayarak yazar tarafından girilen üstverilerin tamamını görebilir. Yazarların adı hakem iş kuyruğunda görünecektir.

*Yazar*: Makale görünümünde hakeme ilişkin tanımlayıcı bilgiler bulunmayacaktır.

![A sample of what the author will see after their submission is reviewed - no identifying information is included.](./assets/learning-ojs3.1-ed-rev-anon2.png)

*Editör Kararı*: Bir değerlendirmenin sonunda yazar(lar) a gönderilen karar e-postasında, hakemlerin genel başlıkları olacaktır.

![A sample decision email identifying the reviewer only as "Reviewer A".](./assets/learning-ojs3.1-ed-rev-anon3.png)

### Tanımlayıcı Bilgilerin Kaldırılması

OJS, kör değerlendirme için bir dizi yerleşik işleve sahip olsa da, Çift Kör İnceleme sağlamak için platformun dışında ek adımlar atılması gerekebilir. Bir gönderi dosyası, belge özellikleri içinde yazarların kimliğini tanımlayabilecek bilgilere sahip olabilir.

![A sample of a document whose author is visible within the document properties.](./assets/learning-ojs3.1-ed-rev-anon4.png)

Yazarlar ayrıca adlarını makale, dipnotlar veya referanslara dahil edebilir, bu durumda editörün değerlendirmeye göndermeden önce bunları kaldırması gerekecektir. Alternatif olarak, yazarlardan göndermeden önce kaynak ve dipnotlarda yazar adı, makale başlığı vb. yerine "Yazar" ve yıl kullanılarak gönderi dosyasından adlarını düzeltmeleri istenebilir.

#### Windows için Microsoft Word

1. _Dosya_'yı gidin
2. _Bilgi_ seçeneğini seçin
3. _Sorunları Denetle_'yi seçin
4. _Belgeyi İncele_'yi tıklayın
5. _Belge Denetçisi_ iletişim kutusunda, denetlenmesini istediğiniz gizli içerik türlerini seçmek için onay kutularını seçin
6. _Tümünü Kaldır_'ı tıklayın
7. _Kapat_'ı tıklayın
8. Belgeyi kaydet

#### MacOS için Microsoft Word

1. _Araçlar_'a gidin
2. Click _Protect Document_
3. _Kaydetme sırasında bu dosyadan kişisel bilgileri kaldır_'ı seçin
4. _Tamam_'ı tıklayın ve dosyayı kaydedin

![The "Remove personal information from this file on save" option in Mac OS.](./assets/learning-ojs3.1-ed-rev-anon5.png)

### Belgeyi Yeniden Yükleme

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

**Request Revisions**: This will require the Author to make minor changes, but no further peer review is required.

**Resubmit for Review**: This will require the Author to make major changes and another round of review will need to take place.

**Send to Copyediting**: This means the submission is accepted without revisions and can proceed to the Copyediting stage.

**Decline Submission**: This means that the submission has not passed peer review and is unsuitable for further consideration. The submission would then move to the Archives.

### Request Revisions

In this demonstration, we are going to request that the Author make some minor revisions before acceptance.

To do so, select the **Request Revisions** button. This results in a new message window.

![The Request Revisions window.](./assets/learning-ojs-3-ed-rev-req-revisions.png)

You can modify any of the text before sending the message.

Use the **Add Reviews** button to import the Reviewer's comments from the Editor and Author field. Comments in the Editor only field will not be displayed.

If there are any attachments, such as a marked up file created by a Reviewer, you can attach it here \(as long as it has been anonymized\). In OJS 3.1.2 and later, you can also upload a new file and add it as an attachment.

Hit the **Record Editorial Decision** button to send the message.

![A sample request for revisions with imported comments and options to share files.](./assets/learning-ojs-3-ed-rev-req-revisions3.png)

You must now wait for the Author to respond with their revisions.

### Author Responds

Once the Author has made the revisions, you should receive a message \(via email and the Review Discussions panel\).

![The author's revision found in the Review Discussions panel.](./assets/learning-ojs-3-ed-discussion-panel.png)

You will also see the revised file in the Revisions panel.

At this point, you can download the revised file, check to make sure it is ready, and communicate with the Author using the Review Discussions panel.

In this case, we're going to inform the Author that we are accepting the revisions. To do so, click on the linked title of the discussion. This will open the discussion box.

![An expanded discussion.](./assets/learning-ojs-3-ed-discussion-window.png)

Use the **Add Message** button to reply, either requesting further revision or informing the author that the submission is ready to move on to the next stage.

![A sample reply to an author's revisions.](./assets/learning-ojs-3-ed-discussion-window-reply.png)

### Moving to Copyediting

The submission is now ready to be moved to copyediting. To do so, use the blue **Send to Copyediting** button.

![The "Send to Copyediting" button in a submission panel.](./assets/learning-ojs-3-ed-send-to-copyediting.png)

This will open a new window.

![The Send to Copyediting window including information about the notification of acceptance to be sent to the author.](./assets/learning-ojs-3-ed-accept.png)

Hit the **Record Editorial Decision** button at the bottom of the window.

The submission is automatically moved to the Copyediting stage.

<hr />

## Copyediting

When a submission is approved in the Review Stage, it will automatically move to the Copyediting stage.

![The Copyediting stage of a submission.](./assets/learning-ojs-3-ed-copyediting.png)

### Adding a Copyeditor

When the submission enters the Copyediting Stage, a notification indicates that a Copyeditor needs to be assigned. Copyeditors can be assigned using the *Add* link on the Participants panel.

This will open a new window.

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

To check the submission metadata, use the Metadata link in the blue bar at the top.

![The Metadata tab as seen on the submission dashboard.](./assets/learning-ojs-3-ce-copyediting-metadata.png)

This would include checking the article title, abstract, author names, keywords, etc.

![The submission metadata editing window.](./assets/learning-ojs-3-ce-copyediting-metadata2.png)

If any changes are made, hit the **Save** button before exiting this window.

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

### Author Responds

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

Hit **OK** to send the message.

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

The Copyediting stage is now complete.

<hr />

## Production

With the completion of the Copyediting stage, the submission now moves to Production. From here, the copyedit files \(often Microsoft Word files\) will be converted to publishable formats in the form of galley files \(e.g., PDF, HTML\) and proofread before publishing.

To start working in Production, the Section Editor must login to the system and choose the submission from their dashboard.

![The Section Editor's dashbord.](./assets/learning-ojs-3-se-production-submissions.png)

Choosing the Production link will open the submission record.

![A sample submission record.](./assets/learning-ojs-3-se-production.png)

You will see the copyedited files are now available in the _Production Ready Files_ panel.

A notification banner also indicates that you must assign someone to create the galley files \(e.g., the PDFs, HTML, etc.\) from those production ready files.

This can vary from journal to journal -- you may have layout editors or production assistants to do this work.

To make the assignment, use the _Add_ link in the Participants list. This will open a new window.

![The Add Participant window.](./assets/learning-ojs-3-se-production-participants-add.png)

Use the role selector and search button to find appropriate users, select one, choose a predefined message, and hit **OK** to send.

The user has now been notified via email and in the dashboard.

![The added user as seen in the participants list.](./assets/learning-ojs-3-se-production-participants-added.png)

Notice that the notification now indicates the submission is "Awaiting Galleys". You can see the layout editor in the Participants list, and you can see the request notice in the Production Discussions panel.

You can now wait for the Layout Editor to complete their tasks.

### Layout Editing

As a Layout Editor, you will have received a message inviting you to create the galleys for the submission.

To get started, login to the system and go to your dashboard.

![The Layout Editor's dashboard.](./assets/learning-ojs-3-le-dashboard.png)

From here, find the submission and select the Production link.

This will take you to the submission record.

![A sample submission record.](./assets/learning-ojs-3-le-submission.png)

From the Production Ready Files panel, download the files to your desktop and work outside of OJS to convert them to the formats appropriate for your journal \(e.g., HTML, PDF, etc.\).

> Note: PKP is currently working on a project to automate the conversion of Microsoft Word documents into other formats, including XML, HTML, PDF, EPUB, etc. Keep an eye on our blog for updates.

### Deciding on Article File Formats

Online journals today publish their articles in a variety of file types. Most common are the PDF and HTML, but increasingly additional formats are being used, such as ePub, MP3, and XML.

The majority of author submissions come in as Microsoft Word documents \(.doc or .docx\), and typically move through the OJS workflow \(review, revision, copyediting\) in that format. Other formats sometimes include text \(.txt\), rich text format \(.rtf\), or Open Office \(.odt\). These aren't suitable for final publication, so will need to eventually be converted into a more reader-friendly format.

#### Working from Templates

Requiring all submissions to use a template that is pre-formatted with your journal's publication styles \(e.g., the font face, font size, boldness, placement, etc. of the header, body, footers, etc.\) will make your document conversion much easier.

Microsoft provides a brief overview for creating templates in MS Word [here](https://support.office.com/en-us/article/create-a-template-86a1d089-5ae2-4d53-9042-1191bce57deb).

Once you've created a template that matches your journal style, you should link it from your Author Guidelines, along with a brief explanation of the need to use the template. This means that all of your submissions will come in already formatted, saving your layout editor a significant amount of work.

Here's an example of an OJS journal that requires authors to download and use a template file: [Paideusis](https://journals.sfu.ca/pie/index.php/pie#authorGuidelines).

Ideally, your template should be created using styles rather than direct formatting. This not only ensures consistency throughout your documents, but will also aid in any conversions to other formats \(e.g., HTML\). Here's an [explanation of the difference between styles and direct formatting in Word](https://support.office.com/en-us/article/Style-basics-in-Word-d382f84d-5c38-4444-98a5-9cbb6ede1ba4?CorrelationId=1b00844c-a9dc-4d62-98df-a966f30d4b20&ui=en-US&rs=en-US&ad=US&ocmsassetID=HA010230882).

#### Creating PDF files

A PDF is the easiest type of file to create from a Word document. Current versions of Microsoft Word \(and other word processors\) let you simply "Save As" a PDF. The majority of OJS journals publish their articles as PDFs.

PDFs are also popular with many readers, as they most closely recreate the printed page. However, PDFs are often less flexible on mobile devices and do not always handle links or embedded media \(such as sound or video files\) particularly well. With the growing importance of mobile computing, ensuring your audience can easily read your articles on their phones or tablets is increasingly important.

Example \(see PDF link at bottom of page\): [Irish Journal of Technology Enhanced Learning](http://www.journal.ilta.ie/index.php/telji/article/view/22/51)

#### Creating HTML Files

HTML files have the advantage of flexibility. They handle linking and multimedia very well, and can fit on just about any screen - including phones and tablets. They do, however, look different than a printed page, so some readers continue to prefer a PDF. The ideal situation is to provide both PDF and HTML files to best meet the needs of your different users.

We saw in the previous section that creating a PDF from a submitted Word file is easy. Unfortunately, creating HTML files is a little more time consuming. Word processors do not have effective tools for doing a "Save As" to HTML. Microsoft Word tries to do this, but the results are not useful for uploading to OJS. Instead, try following this workflow:

1. Convert the Word document. You can use this [free online tool](https://word2cleanhtml.com/) to do an initial conversion.
2. Open the resulting HTML files in a text editor \(e.g., NotePad in Windows\) or HTML editor \(e.g., Adobe Dreamweaver\). From here, you will need to make any final clean up or formatting. Understanding the basics of HTML is required. Its not hard and there are many [free tutorials](https://www.w3schools.com/html/), but it does take some time.
3. Keep the HTML formatting basic. Just focus on paragraphs, line breaks, headings, and links. Don't worry about fonts, colours, or other design elements - OJS will take care of all of that automatically as part of the overall journal design.
4. Upload to OJS as an HTML galley file

Example \(see HTML link at bottom of the page\): [Forum Qualitative Sozialforschung](http://www.qualitative-research.net/index.php/fqs/article/view/2577)

#### Creating ePUB Files

Similar to HTML files, ePub files are ideal for mobile devices, but require specialized coding to create. Conversion tools are available, such as [Calibre](https://calibre-ebook.com/). More detailed HOW TO instructions for creating ePub files are [available here](https://www.wikihow.com/Convert-a-Word-Document-to-Epub).

Like HTML files, some additional cleanup may be required after conversion and [require some knowledge](http://www.jedisaber.com/eBooks/Introduction.shtml) of the format.

Example \(see EPUB link at bottom of the page\): [International Review of Research in Open and Distance Learning](http://www.irrodl.org/index.php/irrodl/article/view/2895)

#### Creating Audio Files

Although not common, some journals also create audio files of their articles, to allow for users to listen to the content. This is particularly helpful to the visually impaired, but many people enjoy podcasts and audio books while traveling or doing other activities.

Creating audio files can either be done manually, by having someone read the article into a voice recorder, or automatically using Text to Speech software.

Example \(see MP3 link at bottom of the page\): [International Review of Research in Open and Distance Learning](http://www.irrodl.org/index.php/irrodl/article/view/3279)

#### Creating XML Files

Creating XML files is a very efficient way to publish in multiple formats. When you create an XML file, you can then automatically generate PDFs, HTML, ePub, and other formats. PKP is developing an XML conversion tool called the [Open Typesetting Stack](https://pkp.sfu.ca/open-typesetting-stack/), which is currently available in beta. You can also learn how to create XML files yourself. [Excellent tutorials](https://www.w3schools.com/xml/) are available online, but will require a significant time investment to become proficient.

Example \(see XML link on top right of the page\): [Journal of Medical Research and Innovation](https://jmri.org.in/jmri/article/view/e000084)

### Contact the Author

Next, you will want to share the PDF with the author for a final look and sign-off.

To so, use the _Add Discussion_ link in the Production Discussion panel. This will open a new window.

![The Add Discussion window.](./assets/learning-ojs-3-le-production-add-participant.png)

Remember to add the author at the top of the window, and then add a subject and a message.

Before sending, however, attach a copy of the PDF file using the _Upload File_ link. This will make it available to the author.

![The file upload window.](./assets/learning-ojs-3-le-production-add-participant-upload.png)

Remember to select the correct Article Component, and then upload the PDF.

Hit **Continue**.

Next, make any changes to the file name \(usually you don't need to do anything here\).

![The edit filename option in the file upload window.](./assets/learning-ojs-3-le-production-add-participant-upload2.png)

And then, you can upload additional files, if necessary.

![The file upload confirmation screen.](./assets/learning-ojs-3-le-production-add-participant-upload3.png)

Once you are done, hit **Complete**.

The file is now attached and you can send the message using the **OK** button.

![The message to be sent to the author.](./assets/learning-ojs-3-le-production-add-participant2.png)

The Author has now been notified and you can await their response.

### Author Response

Once the author has had a chance to review the galleys and respond, you will receive an email notification and will see a reply in the Production Discussions.

![The previous Production Discussion now containing a "1" in the reply column.](./assets/learning-ojs-3-au-production-message-reply.png)

### Add Galleys

Now that the Author has proofread the galleys, you can make any final changes, and then upload them to the Galleys panel.

![The Add Galley button.](./assets/learning-ojs-3-au-production-galleys.png)

To do so, use the _Add Galley_ link, which will open a new window.

![The Create New Galley window.](./assets/learning-ojs-3-au-production-galleys-upload1.png)

Add an appropriate label \(e.g., PDF, HTML, etc.\) and Hit **Save**.

![The galley label field in the file upload window.](./assets/learning-ojs-3-au-production-galleys-upload2.png)

From this window, choose the appropriate article componenet \(e.g., article text\) and upload the galley file. Hit **Continue**.

![The article identification prompt in the file upload window.](./assets/learning-ojs-3-au-production-galleys-upload3.png)

If necessary, change the filename. Hit **Continue**.

![The edit filename button in the file upload window.](./assets/learning-ojs-3-au-production-galleys-upload4.png)

If you have more files, upload them now. Otherwise hit **Complete**.

You can now see the galleys in the Galley panel.

![The galleys panel.](./assets/learning-ojs-3-au-production-galleys-uploaded.png)

You can make changes to the upload by selecting the blue arrow to the left of the galley label, which reveals options to edit, change the file, or delete.

### Add an Image to an HTML Galley

If you would like to include images in an HTML galley file, you can upload them to the submission and link to them in the file to display them.

To upload the image file:
1. In the Production stage of the submission, after uploading the HTML galley file, click the blue arrow in the front of the galley name
2. Click **Edit** from the links that appear
3. Click **Upload File**
4. Select **Image** as the **Article Component**
5. Upload the image file
6. Continue, review details, and confirm
7. Click **Save**

To link to the image file you uploaded in the galley text, use the image tag with the file name - e.g., `<img src="filename.jpg">`. The HTML galley plugin should rewrite the address when the HTML document is shown.

### Add the Article to a Category

If you use categories in your journal, you can optionally add the article to a category or categories. For instructions on how to create categories see [the Journal Settings chapter](./journal-setup.md). You can add the article to a category by editing its metadata.

1. Click Metadata from the top right menu.
2. Scroll down to the Categories section and check off the categor(ies) you want to add the article to.
3. Click Save.

![The category list in the Metadata window.](./assets/learning-ojs3.1-add-to-category.png)

### Inform the Section Editor

Finally, you will need to inform the Section Editor that the galleys have been completed. To do so, use the Production Discussion panel and choose the _Add Discussion_ link.

![The Add Discussion window.](./assets/learning-ojs-3-au-production-galleys-complete.png)

Add the Section Editor to the top of the page, and then include a subject line and message. Hit **OK** to send the message.

You can now see the final discussion.

![The discussion in the Production Discussions section](./assets/learning-ojs-3-au-production-galleys-discussions.png)

### Section Editor Informs Editor

At this point, the Section Editor receives the notification from the Layout Editor and reviews the galley files.

They can either ask the Layout Editor to make additional changes \(using the Production Discussions\) or inform the Editor that the galleys are ready for publication.

To inform the Editor, use the Production Discussion panel's _Add Discussion_ link.

### Scheduling for Publication

Before you can schedule an article for publication, you have to create an issue. See the [Issues chapter](./issues).

Upon receiving notification of the completed galleys, the editor logs into the submission record, and checks the uploaded galley files.

If the galleys look ready, the editor can hit the blue **Schedule for Publication** action button.

![The Schedule for Publication button.](./assets/learning-ojs-3-ed-production-schedule.png)

Selecting this button opens a Publication window.

![The Publication window.](./assets/learning-ojs-3-ed-production-publish.png)

Use this to add the submission to a future or back issue of the journal.

You also have the option to add page numbers, permission, and licensing information.

Hitting **Save** will publish the submission to the selected issue. If the issue is already published, the submission will be immediately available to readers. Otherwise the submission will not be published until the issue is published. See the [Issues chapter](./issues) for how to publish an issue.

Congratulations! You have now come to the end of the editorial workflow.
