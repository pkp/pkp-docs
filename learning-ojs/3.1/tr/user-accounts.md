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
> OJS şu anda kelime işlemli belgeleri otomatik olarak dizgi formatlarına (bir proje geliştirilme aşamasında olmasına rağmen) dönüştürmek için yazılım sağlamamaktadır, bu nedenle Mizanpaj Düzenleyicisi, dizgi oluşturmak için üçüncü taraf yazılım paketlerine erişebilmeli ve bunları kullanabilmelidir.

Bazı durumlarda Editör veya Bölüm Editörü Mizanpaj Editörü olarak da görev yapacaktır.

Daha fazla ayrıntı için [Editoryal İş Akışı bölümüne](./editorial-workflow.md) bakınız.

### Düzeltmen

Düzletmen, derginin yayınladığı çeşitli formatlardaki dizgileri dikkatle okur (yazarın yaptığı gibi). Düzeltmen (ve Yazar), Mizanpaj Düzenleyicisinin düzeltmesi için tüm tipografik ve biçimlendirme hatalarını kaydeder.

Bazı dergilerde Editör veya Bölüm Editörü aynı zamanda Düzeltmen olarak da görev yapacaktır.

Daha fazla ayrıntı için [Editoryal İş Akışı bölümüne](./editorial-workflow.md) bakınız.

### Okuyucu

Okuyucu rolü, OJS'deki en basit roldür ve en az kapasiteye sahiptir. Okuyucular, her sayının yayınlandığı ve o sayının İçindekiler bölümünü içeren bir bildirim e-postası alırlar.

<hr />

## Dergiye Kayıt

Bir dergiye kayıtlı olmayan ziyaretçiler normalde Okuyucu, Yazar ve/veya Hakem olarak kayıt olabilirler. Dergi Yöneticileri, ziyaretçilerin kendi kendine kayıt olma özelliğini kaldırabilir, bu durumda kayıt sırasında kapalı olduğunu belirten bir bildirim görünür (bkz. Dergi Ayarları), ancak Dergi Yöneticileri her zaman ve herhangi bir rol için kullanıcıları kaydedebilir.

Bir dergiye kayıt olmak için sağ üst köşedeki Kayıt ol linkine tıklayınız.

![Dergi sitesinin sağ üst köşesindeki Kayıt ol bağlantısı.](./assets/learning-ojs-3-registration.png)

Bu, gerekli bilgileri doldurmanız için Kayıt Formunu açacaktır.

![Kayıt Formu.](./assets/learning-ojs-3-registration-form.png)

Yıldızlı tüm alanlar (Ad, Soyadı, Kurum Bilgisi, Ülke, E-posta, Kullanıcı Adı, Şifre, Şifre Tekrarı) zorunludur. Dergi çok dilliyse, tercih ettiğiniz dili seçmeniz gerekecektir.

Varsayılan olarak Okuyucu ve Yazar olarak kaydedileceksiniz. Size ayrıca bir Gözden Geçiren olarak kayıt olma seçeneği sunulacaktır.

Bir Editoryal Rol (Ör. Editör, Bölüm Editörü, Kopya Editörü, Mizanpaj Editörü, Son Okuyucu veya Dergi Yöneticisi) için kendi kendinize kayıt yaptıramazsınız. Bu seviyede kaydolmanız gerekiyorsa, mevcut bir Dergi Yöneticisi veya Sistem Yöneticisi ile iletişime geçin.

<hr />

## Profil Görüntüleme ve Düzeltme

Profilinizi görüntülemek ve düzenlemek için giriş yapın ve sağ üst köşedeki Kullanıcı Adı bağlantısına tıklayın. Profili Görüntüle bağlantısını seçin.

![Profili Görüntüle menüsü.](./assets/learning-ojs3.1-ed-view-profile.png)

Buradan farklı sekmeleri seçerek kişisel bilgilerinizi, iletişim bilgilerinizi güncelleyebilir, rollerinizi değiştirebilir, kişisel bir resim ekleyebilir \(bazı dergiler makalenizle birlikte veya editör listesinde yayınlayabilir\), bildiriminizi belirleyebilir, ayarları veya şifrenizi güncelleyebilirsiniz.

**Bildirimler** altında, yeni bir dergi sayısının yayınlanması veya gönderdiğiniz bir gönderide etkinlik olması gibi olaylar meydana geldiğinde dergiden ne tür bildirimler alacağınızı yapılandırabilirsiniz.

* Siteye giriş yaptığınızda kontrol panelinizde bu durumla ilgili bir bildirim görmek istiyorsanız "Bu tür bildirimleri etkinleştir" seçeneğini işaretleyin
* Bu etkinlikle ilgili bir e-posta bildirimi almak istemiyorsanız "Bu tür bildirimler için bana e-posta gönderme" seçeneğini işaretleyin

![Bildirimleri yönetebileceğiniz Bildirimler sekmesi.](./assets/learning-ojs-3-user-notifications.png)

Kullanıcı profilindeki **API sekmesi**, harici uygulamalarla etkileşim kurmak için AOJS'nin REST API'sini kullanmanıza olanak tanır.  Ancak çoğu kullanıcı API'yi kullanmaz ve bu sekmeyi görmezden gelebilir.

## Şifrenizi Sıfırlayın

Şifrenizi şu şekilde sıfırlayabilirsiniz:

1. Dergiye giriş
2. Ekranın sağ üst köşesinden kullanıcı adınızı ve Profili Görüntüle'yi seçin
3. Şifre sekmesini seçme
4. Mevcut şifrenizi ve ardından yeni şifrenizi iki kez giriniz
5. Kaydet tuşuna basınız

![Şifre sıfırlama ekranı.](./assets/learning-ojs3.1-ed-change-pw.png)

Şifreniz değiştirildi.
