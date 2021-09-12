---
book: learning-ojs
version: 3.1
---

# Bölüm 3: Kullanıcı Hesapları

OJS, işi kullanıcılar arasında bölmek, iş akışları atamak ve sistemin farklı bölümlerine erişimi sınırlamak için kapsamlı bir rol sistemi kullanır.

OJS'nin bir kurulumu birden fazla dergiyi barındırabileceğinden, kullanıcılar birden fazla dergi için farklı rollere kaydolabilir. Örneğin, bir kişi aynı dergide hem editör hem de yazar olabileceği gibi, bir dergide yalnızca yazar, diğerinde hakem ve üçüncü bir dergide editör olabilir.

Bir kullanıcı sisteme giriş yaptığında, Kontrol Paneline yönlendirilecektir. Buradan erişim sağladıkları sistemin tüm fonksiyonlarını göreceklerdir. Örneğin, bir Hakem yalnızca incelemesi için atandığı gönderiyi görürken, Editör editoryal iş akışındaki tüm gönderileri görür.

## OJS'de Roller

OJS iş akışı, farklı kullanıcılar için farklı roller etrafında döner ve iş akışının farklı bölümlerine ve farklı izin ve sorumluluklara erişmelerine olanak tanır.

Başlıca roller Site Yöneticisi, Dergi Yöneticisi, Editör, Bölüm Editörü, Yazar, Hakem, Kopya Editörü, Mizanpaj Editörü, Son Okuyucu ve Okuyucudur.

OJS 3, ayrıca Çevirmen ve Tasarımcı gibi ek roller içerir. Ayrıca yeni roller oluşturabilir veya mevcut olanları yeniden adlandırabilirsiniz. Rolleri yapılandırma konusunda daha fazla bilgiyi [Kullanıcılar ve Roller bölümünde](./users-and-roles.md) bulabilirsiniz.

### Sistem Yöneticisi
Sistem Yöneticisi, genel OJS kurulumundan, sunucu ayarlarının doğru olmasını sağlamaktan, dil dosyalarını eklemekten ve kurulumda yeni dergiler oluşturmaktan sorumludur. Sistem Yöneticisi hesabı, yükleme işleminin bir parçası olarak oluşturulur. Diğer tüm OJS rollerinden farklı olarak, yalnızca bir Site Yöneticisi olabilir.

Daha fazla ayrıntı için [Bölüm 4: Sistem Yönetimi](./site-administration.md)'ne bakınız.

### Dergi Yöneticisi
Dergi Yöneticisi, dergi web sitesinin kurulmasından, sistem seçeneklerinin yapılandırılmasından ve kullanıcı hesaplarının yönetiminden sorumludur. Bu, herhangi bir ileri teknik beceri gerektirmez, ancak web tabanlı formların doldurulmasını ve dosyaların yüklenmesini gerektirir.

Dergi Yöneticisi ayrıca Editörler, Bölüm Editörleri, Kopya Editörleri, Mizanpaj Editörleri, Düzelticiler, Yazarlar ve Hakemleri de kaydeder.

Dergi Yöneticisi ayrıca derginin diğer yönetim özelliklerine de erişebilir ve dergi için yeni Bölümler oluşturabilir, Değerlendirme Formları oluşturabilir, varsayılan E-postaları düzenleyebilir, istatistikleri ve raporları görüntüleyebilir, verileri içe ve dışa aktarabilir ve editoryal iş akışına ve dergilere yapılan tüm gönderilere erişebilir.

Daha fazla ayrıntı için Ayarlar bölümlerine bakın.

### Yazar

Yazarlar, makalelerini doğrudan derginin web sitesi aracılığıyla dergiye gönderebilirler. Yazardan gönderi dosyalarını yüklemesi ve üstveri veya indeksleme bilgisi sağlaması istenir (üstveri, çevrimiçi araştırma ve dergi için arama kapasitesini geliştirir). Yazar, gönderiyi zenginleştirecek ve daha açık ve sağlam araştırma ve akademik biçimlerine katkıda bulunacak veri setleri, araştırma araçları veya kaynak metinler biçiminde birden fazla dosya yükleyebilir.

Yazar, derginin web sitesine giriş yaparak, değerlendirme ve editörlük süreci boyunca gönderiyi izleyebilir - ayrıca yayınlanmak üzere kabul edilen gönderilerin kopya düzenleme ve düzeltme okumalarına katılabilir.

Daha fazla ayrıntı için [Yazma bölümüne](./authoring.md) bakınız.

### Editör

Editör, tüm inceleme, düzenleme ve yayınlama sürecini denetler. Dergi Yöneticisi ile birlikte çalışan Editör, genellikle dergi için politika ve prosedürleri belirler.

Editörlük sürecinde, Editör, Gönderi değerlendirme ve Gönderi Düzenleme işlemleri için gönderileri Bölüm Editörlerine atar. Editör, gönderinin ilerlemesini takip eder ve herhangi bir zorlukta yardımcı olur.

Değerlendirme tamamlandıktan sonra, Editör genellikle gönderiyi Düzenleme süreci (kopya düzenleme, üretim ve son okuma dahil) aracılığıyla görür, ancak bazı dergilerde bu, gönderinin değerlendirme sürecinden sorumlu Bölüm Editörünün sorumluluğunda kalır.

Editör ayrıca dergi sayılarını oluşturur, gönderileri yayın için planlar, İçindekiler Tablosunu düzenler ve Sayıyı Yayınlama Sürecinin bir parçası olarak yayınlar. Editör, arşivlenen gönderileri etkin değerlendirmede veya Düzenlemede listelerine geri yükleyebilir.

Editörler ayrıca dergi ayarlarına, kullanıcılara ve rollere ve araçlara da erişebilir.

Daha fazla ayrıntı için [Editoryal İş Akışı bölümüne](./editorial-workflow.md) bakınız.

### Bölüm Editörü

Bölüm Editörü, atandıkları gönderilerin gözden geçirilmesini ve düzenlenmesini yönetir. Bazı durumlarda, Gözden Geçirme Süreci aracılığıyla gönderileri görmek üzere atanan bir Bölüm Editörü, Düzenleme süreci (yani, kopya düzenleme, üretim ve düzeltme okuma) yoluyla kabul edilen gönderileri görmekten de sorumlu olacaktır.

Bununla birlikte, genellikle Bölüm Editörleri yalnızca inceleme süreciyle çalışır ve Bölüm Editörü rolünde hareket eden bir Editör, Gönderileri Düzenleme süreci boyunca görür. Dergi, görevlerin nasıl bölündüğü konusunda bir politikaya sahip olacaktır.

Daha fazla ayrıntı için [Editoryal İş Akışı bölümüne](./editorial-workflow.md) bakınız.

### Hakem

Hakem, bir gönderiyi gözden geçirmek için Editör veya Bölüm Editörü tarafından seçilir. Hakemlerden derginin web sitesine değerlendirme göndermeleri istenir ve Editör ve Yazarın kullanımı için ek dosya yükleyebilirler. Hakemler, yine bu derginin politikalarına bağlı olarak Bölüm Editörleri tarafından derecelendirilebilir.

Daha fazla ayrıntı için [İnceleme bölümüne](./reviewing.md) bakınız.

### Kopya Editörü

Kopya Editörü, dilbilgisini ve anlaşılırlığı geliştirmek için gönderileri düzenler, her şeyin yerinde olduğundan emin olmak için yazarlarla birlikte çalışır, derginin bibliyografik ve metinsel stiline sıkı sıkıya bağlı kalmayı sağlar ve bir Mizanpaj Editörü veya Prodüksiyon Asistanının galeriye dönüşmesi için temiz, derginin yayımlanmış formatında düzenlenmiş bir kopya üretir.

Bazı dergilerin bu rol için bir Editör veya Bölüm Editörü vardır.

Daha fazla ayrıntı için [Editoryal İş Akışı bölümüne](./editorial-workflow.md) bakınız.

### Tasarım Editörü

Mizanpaj Düzenleyicisi, gönderinin kopyalanmış sürümlerini HTML, PDF, XML, vb. dosyalara dönüştürür -- derginin çevrimiçi yayın için kullanmayı seçtiği format.
> Not
> 
> OJS does not currently provide software for automatically converting word processed documents to galley formats (although a project is in development), so the Layout Editor should have access to and be able to use third-party software packages for creating galleys.

In some cases, the Editor or Section Editor will also serve as Layout Editor.

See the [Editorial Workflow chapter](./editorial-workflow.md) for more details.

### Düzeltmen

The Proofreader carefully reads over the galleys in the various formats in which the journal publishes (as does the author). The Proofreader (and the Author) record any typographic and formatting errors for the Layout Editor to fix.

In the case of some journals, the Editor or Section Editor will also serve as Proofreader.

See the [Editorial Workflow chapter](./editorial-workflow.md) for more details.

### Okuyucu

The Reader role is the simplest role in OJS, and has the fewest capabilities. Readers receive a notification email with the publication of each issue, which includes the Table of Contents for that particular issue.

<hr />

## Dergiye Kayıt

Unregistered visitors to a journal can normally register as a Reader, Author, and/or Reviewer. Journal Managers are able to remove the ability for visitors to self-register, in which case a notice will appear stating that registration is currently closed (see Journal Settings), but Journal Managers can always register users at any time, and for any role.

To register with a journal, click the Register link on the upper right corner.

![The Register link at the upper right corner of the journal site.](./assets/learning-ojs-3-registration.png)

This will open the Registration Form for you to complete with all required information.

![Kayıt Formu.](./assets/learning-ojs-3-registration-form.png)

All fields with an asterisk (First Name, Last Name, Affiliation, Country, Email, Username, Password, Repeat Password) are mandatory. If the journal is multilingual, you will need to select your preferred language.

You will be automatically registered as a Reader and an Author. You will be given the option to register as a Reviewer as well.

You will not be able to self-register for an Editorial Role (e.g., Editor, Section Editor, Copyeditor, Layout Editor, Proofreader, or Journal Manager). If you need to be enrolled at that level, contact a current Journal Manager or Site Administrator.

<hr />

## Viewing and Changing your Profile

To view and edit your profile, log in and click your Username link from the upper right corner. Choose the View Profile link.

![The View Profile menu.](./assets/learning-ojs3.1-ed-view-profile.png)

From here, by choosing the different tabs, you can update your personal details, contact information, change your roles, add a personal image \(which some journals may publish along with your article or on a list of editors\), determine your notification settings, or update your password.

Under **Notifications**, you can configure what kinds of notifications you receive from the journal when events occur, such as a new journal issue is published or there is activity on a submission you're involved in.

* Check off "Enable these types of notifications" if you want to see a notification of this event on your dashboard when you log in to the site
* Check off "Do not send me an email for these types of notifications" if you do not want to receive an email notification about this event

![The Notifications tab where you can manage notifications.](./assets/learning-ojs-3-user-notifications.png)

The **API tab** on the user profile allows you to use OJS’s REST API to interact with external applications.  However, most users will not use the API and can ignore this tab.

## Şifrenizi Sıfırlayın

Şifrenizi şu şekilde sıfırlayabilirsiniz:

1. Dergiye giriş
2. Ekranın sağ üst köşesinden kullanıcı adınızı ve Profili Görüntüle'yi seçin
3. Şifre sekmesini seçme
4. Mevcut şifrenizi ve ardından yeni şifrenizi iki kez giriniz
5. Kaydet tuşuna basınız

![Şifre sıfırlama ekranı.](./assets/learning-ojs3.1-ed-change-pw.png)

Şifreniz değiştirildi.
