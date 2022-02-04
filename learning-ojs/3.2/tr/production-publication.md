---
book: learning-ojs
version: 3.2
---

# Production and Publication

Kopya Düzenleme aşamasının tamamlanmasıyla, gönderi artık Üretim'e taşınır. Burada, kopyalanan dosyalar, dizigi dosyaları (Ön. PDF, HTML) biçiminde yayınlanabilir biçimlere dönüştürülecek ve yayınlanmadan önce düzeltilecektir. Yeni bir dergi sayısı oluşturulacak ve makale bu sayıda yayınlanmak üzere planlanacaktır. Bu bölüm, bu süreçteki adımların yanı sıra, önemli değişiklikler yapılırsa bir makalenin yeni bir sürümünü yayınlamak için OJS 3.2'deki sürüm oluşturma özelliğinin nasıl kullanılacağını açıklar.

OJS ayrıca önceki bölümde açıklanan editoryal iş akışını atlamak ve içeriği doğrudan bir sayıya eklenebileceği ve yayınlanabileceği üretime göndermek için basit bir yol sunar. Bunu Hızlı Gönder eklentisi ile yapabilirsiniz. Detay için [Veri İçe Aktarma & Dışa Aktarma bölümü](./tools.md#importexport) altındaki Hızlı Gönderi eklentisi talimatlarına bakın.

Üretimde çalışmaya başlamak için Bölüm Editörü veya Dergi Editörü sisteme giriş yapmalı ve panolarından gönderiyi seçmelidir.

Makaleye tıklamak, gönderi kaydını açacaktır.

![Production tab in the editorial workflow of a manuscript](./assets/learning-ojs-3.2-se-production.png)

Kopyalanmış dosyaların artık **Üretime Hazır Dosyalar** panelinde mevcut olduğunu göreceksiniz.

**Üretim** sekmesinde, iş akışının Üretim aşamasına katılımcıları (örneğin bir Mizanpajcı) atayabilir ve **Üretim Tartışmaları** panelinde katılımcılarla iletişim kurabilirsiniz.

## Yayın Sekmeleri

Gönderinin yayınlanmasıyla ilgili her şey Yayın sekmesi altında yapılır. Yayın sekmesi, katkıda bulunanlar, üstveriler ve tanımlayıcılar dahil olmak üzere gönderiyle ilgili bilgileri düzenlemenize veya eklemenize olanak tanır. Ayrıca dergide yayınlanmak üzere son Dizgi dosyalarını yükleyeceğiniz yerdir.

![Publication tab that displays metadata information of a manuscript.](./assets/learning-ojs-3.2-production-publication-tab.png)

Burada, bu bölümdeki farklı sekmelerin ne için olduğuna ilişkin bir genel bakış yer almaktadır. Bunlardan bazıları hakkında ayrıntılı talimatlar bölümün ilerleyen kısımlarında mevcuttur.

**Başlık & Özet** Makale başlığını, alt başlığını ve özeti düzenlemek için bu sekmeyi kullanın.

Herhangi bir değişiklik yapılırsa, bu pencereden çıkmadan önce Kaydet'e tıklayın.

**Katkıda Bulunanlar** Makaleye katkıda bulunanları eklemek, düzenlemek veya kaldırmak için bu sekmeyi kullanın.

**Metaveriler** Makaleye anahtar kelime eklemek veya düzenlemek için bu sekmeyi kullanın.

Herhangi bir değişiklik yapılırsa, bu pencereden çıkmadan önce Kaydet'e tıklayın.

**Tanımlayıcılar** DOI gibi benzersiz bir tanımlayıcıyı görüntülemek veya eklemek için Tanımlayıcılar sekmesini kullanın. DOI atama ve yönetme hakkında daha fazla bilgiyi [DOI Eklenti Kılavuzu](/doi-plugin/)'nda bulabilirsiniz.

**Dizgi** Yayınlanmak üzere son dosyayı yüklemek için Dizgiler sekmesini kullanın. Bu aşağıda açıklanmıştır.

**İzinler & Açıklama** Varsa, telif hakkı sahibiyle ilgili ayrıntıları ve makale lisansına bağlantı ekleyin. Bu, [Dağıtım Ayarlarınıza](./settings-distribution.md) göre otomatik olarak doldurulacaktır.

**Sayılar** Makaleyi bir dergi sayısına atamak için Sayılar sekmesini kullanın. Bu aşağıda açıklanmıştır.

### Çok Dilli Gönderiler

Başlık & Özet, Üstveriler, İzinler & Açıklama ve Sayı sekmelerinde birden çok dilde üstveri ekleme ve düzenleme seçenekleri bulunur. Diller önce Web Sitesi Ayarları -> Kurulum -> Diller'de açılmalıdır.

“Üretim Programı” düğmesinin altında istediğiniz dil sekmesini seçin ve seçilen dilde üstveri alanlarını doldurun.

![Multilingual button and text fields for French(Canada)in the metadata subtab within Publication.](./assets/learning-ojs3.2-ed-prod-metadata-lang.png)

"Sayı" sekmesi, seçilen dillerde birden fazla kapak resmi yüklemenize olanak tanır.

![Multilingual button and upload field for an issue cover image for French(Canada)in the Issue subtab within Publication.](./assets/learning-ojs3.2-ed-prod-issue-languages.png)

## Yayın İçin Makale Biçimlendirme

### Mizanpajcı Ata

Bir bildirim başlığı, üretime hazır dosyalardan dizgi dosyalarını (örn. PDF'ler, HTML, vb.) oluşturmak için birini atamanız gerektiğini belirtir.

Bu, dergiden dergiye değişebilir – bu işi yapmak için mizanpaj editörleriniz veya üretim asistanlarınız olabilir. Bazı dergiler harici bir grafik tasarım veya dizgi hizmeti kullanır. Mizanpaj düzenleyiciniz, yapım asistanınız, grafik tasarımcınız veya dizgiciniz ile OJS üzerinden iletişim kurmak ve üretim sürecini OJS'de onlarla yönetmek istiyorsanız, bir kullanıcı hesabına sahip olduklarından emin olun ve onları gönderiye katılımcı olarak ekleyin.

Görevi yapmak için Katılımcılar listesindeki **Ata** bağlantısını kullanın. Bu yeni bir pencere açacaktır.

![New window to assign participants such as Layout Editor.](./assets/learning-ojs-3.2-se-production-participants-add.png)

Uygun kullanıcıları bulmak için rol seçi ve arama düğmesini kullanın. Kullanıcıyı seçin ve önceden tanımlanmış bir mesaj seçin, ardından göndermek için **Tamam**'ı tıklayın.

Kullanıcı artık e-posta yoluyla ve kontrol panelinde bilgilendirildi.

![Manuscript dashboard after additional participants have been assigned.](./assets/learning-ojs-3.2-se-production-participants-added.png)

Artık Katılımcılar listesinde Mizanpajcıyı görebilir ve Üretim Tartışmaları panelinde istek bildirimini görebilirsiniz. Artık Mizanpaj Düzenleyicisinin görevlerini tamamlamasını bekleyebilirsiniz.

### Tasarım Editörü

Bir Mizanpaj Editörü olarak, sizi gönderi için dizgiler oluşturmaya davet eden bir mesaj almış olacaksınız. Başlamak için sisteme giriş yapın ve kontrol panelinize gidin.

![Layout Editor Dashboard showing list of assigned manuscripts.](./assets/learning-ojs-3.2-le-dashboard.png)

Burada gönderiyi bulun ve **Üretim** bağlantısını seçin. Bu sizi gönderi kaydına götürecektir.

![Production tab of on the assigned manuscript with 1 production ready file for the Layout Editor.](./assets/learning-ojs-3.2-le-submission.png)

Üretime Hazır Dosyalar panelinden dosyaları masaüstünüze indirin ve onları galeri dosyalarına dönüştürmek için OJS dışında çalışın. Bir sonraki bölüm, dizgi dosya formatlarını ve hazırlamayı açıklar.

> Not: PKP şu anda Microsoft Word belgelerinin XML, HTML, PDF, EPUB vb. dahil olmak üzere diğer biçimlere dönüştürülmesini otomatikleştirmek için bir proje üzerinde çalışıyor. Güncellemeler için blogumuzu takip edin.

### Dizgi Dosyaları Hazırlama ve Ekleme

Dizgi, okuyucular için hazırlanmış ve makale sayfasında yayınlanacak olan yayına hazır son dosyadır. Dizgi'ler, tam metin makalenin sabit, düzenlenemez bir biçimde (ör. HTML, PDF, ePub veya XML) sürümlerinde olmalıdır. Dizgi dosyaları, multimedya dosyaları ve araştırma verileri gibi ek materyalleri de içerebilir. Bir makale ve tüm sayı için bir dizgi dosyası yayınlayabilirsiniz.

#### Dizgi dosyası bileşen türleri

Bir dizgi dosyası yüklediğinizde, bir **Bileşen Türü** seçmeniz gerekecektir. Bunlar, yazarların gönderi dosyalarını yüklediklerinde seçtikleri bileşen türlerinin aynısıdır. You can configure component types under Workflow Settings > Submission > Components, according to whether you want the component type to be published and whether you want a link to it to appear on the article landing page or in the table of contents.

The configurations are as follows:

* Dependent: the link will not appear with published content at all
* Supplementary: The link will appear on the article landing page
* Neither supplementary nor dependent: The link will appear on the article landing page and in the table of contents

For example, if you want to embed multimedia files in HTML files and have these appear on the landing page, the issue page, and the submission page, you would configure the settings as follows:

* Go to Settings > Workflow > Submission > **Components** tab
* Click the blue arrow next to **HTML Stylesheet** and **Edit**
* Uncheck “Mark files of this type as dependent files” and “Mark files of this type as supplementary files”. Click **Save**.
* Click the blue arrow next to **Multimedia** and **Edit**
* Uncheck “Mark files of this type as supplementary files”. Leave “Dependent files” checked off. Click **Save**.

#### Galley file formats

Online journals publish their articles in a variety of file types. The most common are PDF and HTML, but increasingly additional formats are being used, such as ePub, MP3, and XML.

Plugins in OJS allow PDF, HTML, and XML files to be viewed in a web browser or downloaded. If the files are being downloaded instead of displayed in the browser, you may need to enable one of these plugins under Website Settings > Plugins:

* PDF.JS PDF Viewer provides rendering support for PDF Article files.
* eLife Lens Article Viewer provides rendering support for JATS XML Article files using eLife Lens.
* HTML Article Galley plugin provides rendering support for HTML Article files.

Other formats may require additional plugins or can be downloaded directly. Alternatively, you may host the full-text content on a different platform and embed a remote URL by choosing the checkbox: “This galley will be available at a separate website.”

#### Using templates

Requiring all submissions to use a document template that is pre-formatted with your journal’s publication styles (e.g., the font face, font size, boldness, placement, etc., of the header, body, footers, etc.) can make your document conversion much easier. [Microsoft provides a brief overview for creating templates in MS Word](https://support.office.com/en-us/article/create-a-template-86a1d089-5ae2-4d53-9042-1191bce57deb).

Once you’ve created a template that matches your journal style, it may be useful for submitting authors, layout editors, or other users. Here’s an example of an OJS journal that requires authors to download and use a template file: [Paideusis](https://journals.sfu.ca/pie/index.php/pie#authorGuidelines).

Ideally, your template should be created using styles rather than direct formatting. This not only ensures consistency throughout your documents, but will also aid in any conversions to other formats (e.g., HTML). Here’s an [explanation of the difference between styles and direct formatting in Word](https://support.office.com/en-us/article/Style-basics-in-Word-d382f84d-5c38-4444-98a5-9cbb6ede1ba4?CorrelationId=1b00844c-a9dc-4d62-98df-a966f30d4b20&ui=en-US&rs=en-US&ad=US&ocmsassetID=HA010230882)

#### PDF files

A PDF is the easiest type of file to create from a Word document. Current versions of Microsoft Word (and other word processors) let you “Save As” or “Export As” a PDF. The majority of OJS journals publish their articles as PDFs.

PDFs are also popular with many readers as they most closely recreate the printed page. However, PDFs are often less flexible on mobile devices and do not always handle links or embedded media (such as sound or video files) particularly well. With the widespread usage of mobile devices, ensuring your audience can read your articles on their phones or tablets is increasingly important.

Example (see PDF link at bottom of page): [Irish Journal of Technology Enhanced Learning](http://www.journal.ilta.ie/index.php/telji/article/view/22/51)

#### HTML Dosyaları

HTML dosyaları esneklik avantajına sahiptir. Bağlantı ve multimedyayı çok iyi idare ederler ve telefonlar ve tabletler dahil olmak üzere hemen hemen her ekrana sığabilirler. Ancak, basılı bir sayfadan farklı görünürler, bu nedenle bazı okuyucular PDF'yi tercih eder. İdeal durum, farklı kullanıcıların ihtiyaçlarını en iyi şekilde karşılamak için hem PDF hem de HTML dosyalarını sağlamaktır.

Bir HTML dosyası oluşturmak, PDF dosyaları oluşturmaktan daha fazla zaman ve çaba gerektirebilir. Kelime işlemcilerin HTML'ye "Farklı Kaydet" yapmak için etkili araçları yoktur. Microsoft Word bunu yapmaya çalışır, ancak sonuçlar OJS'ye yüklemek için kullanışlı değildir. Bunun yerine, şu iş akışını izlemeyi deneyin:

* Word belgesini dönüştürün. İlk dönüşümü yapmak için [bu ücretsiz çevrimiçi aracı](https://word2cleanhtml.com/) kullanabilirsiniz.
* Ortaya çıkan HTML dosyalarını bir metin düzenleyicide (ör. Windows'ta NotePad) veya HTML düzenleyicide (ör. Adobe Dreamweaver) açın. Buradan, herhangi bir son temizlik veya biçimlendirme yapmanız gerekecektir. HTML'nin temellerini anlamak gereklidir. Birçok [ücretsiz öğretici](https://www.w3schools.com/html/) vardır, ancak bu biraz zaman alır.
* HTML biçimlendirmesini temel alın. Sadece paragraflara, satır sonlarına, başlıklara ve bağlantılara odaklanın. Yazı tipleri, renkler veya diğer tasarım öğeleri hakkında endişelenmeyin - OJS, genel dergi tasarımının bir parçası olarak tüm bunları otomatik olarak yapacaktır.
* OJS'ye HTML dizgi dosyası olarak yükleyin
* HTML görüntüleyici, HTML dosyalarını bir iframe içinde işler ve bu, köprü bağlantılı web sayfalarına navigasyonu etkileyebilir. Bu özelliği, href etiketlerinize `target="_blank"` özniteliğini ekleyerek yeni bir tarayıcı sekmesinde köprüler açarak atlayabilirsiniz.

Bu kaynaklardan birkaç örnek HTML şablonu bulunabilir ve uyarlanabilir:

* [U'dan A'ya Kaynak](https://drive.google.com/file/d/1mCP0tguFJf7jJn_CNceEwvRn5eCJrvxP/view) - License: CC0 1.0 Universal (CC0 1.0)

Örnekler (sayfanın altındaki HTML bağlantısına bakın):

* [Kültürel antropoloji](https://journal.culanth.org/index.php/ca/article/view/4434)
* [Kanıta Dayalı Kütüphane & Bilgi Uygulaması](https://journals.library.ualberta.ca/eblip/index.php/EBLIP/article/view/29621)

##### Stil HTML dizgi dosyaları

HTML dizgi dosyalarınızın tasarımını toplu olarak veya makale bazında ayrı ayrı biçimlendirmek mümkündür. Toplu şekillendirme yalnızca özel bir tema kullanıyorsanız yapılabilir.

Tek bir HTML dizgi dosyasına stil vermek için:

* HTML galeri dosyasını oluştururken, `<head>` bölümündeki stil sayfasına bir referans içerdiğinden emin olun, ör. `<link rel="stylesheet" href="./article_styles.css" type="text/css" />`
* HTML dizgi dosyasını yükleyin (**Dizgi Dosyalarını Ekleme** ile ilgili talimatlar için aşağıya bakın)
* Dizgi dosyasını düzenleyin
* Uygun **Bileşen Türü - HTML Stil Sayfası** ile CSS stil sayfalarını yükleyin

Tüm HTML dizgi dosyalarına stil vermek için: Özel bir tema eklentisi kullanıyorsanız, tüm HTML galerileri için özel bir stil eklemek üzere bir kod satırı yazabilirsiniz. Bu, yalnızca ayrı ayrı uygulanan bir stili olmayan HTML dizgi dosyaları için geçerli olacaktır. Özel tema oluşturma hakkında daha fazla bilgiyi [PKP Tema Kılavuzu](https://docs.pkp.sfu.ca/pkp-theming-guide/en/)'nda bulabilirsiniz.

##### HTML Dizgi'ye resim ve multimedya ekleyin

Görüntüleri veya multimedya dosyalarını bir HTML dizgi dosyasına dahil etmek isterseniz, bunları Bağımlı Dosyalar olarak gönderiye yükleyebilir ve görüntülemek için dosya içinde bunlara bağlantı verebilirsiniz.

Öğe yüklemeye başlamadan önce, aşağıdakilerden birini içeren bir HTML sayfasına ihtiyacınız olacak:

* `<audio controls>` öğe (MP3 için)
* `<video>` öğe (MP4) için, veya
* `<img src=”imagename”>` resimler için etiket

HTML sayfası, bağlandığınız dosyanın tam adını da içermelidir.

Ses/video/görüntü dosyasını HTML sayfasındaki adı kullanarak MP3/MP4/JPEG/GIF formatında kaydetmeniz gerekecektir.

HTML dosyanızın aşağıdaki minimum kodu içermesi gerekir (ses dosyaları için). İlgili video veya resim dosyası kodu için lütfen w3schools'un HTML'ye video gömme talimatlarına veya HTML'ye resim gömme talimatlarına bakın.

```html
<html>
<head>
<title>MP3 upload</title>
</head>
<body>
<audio controls>
  <source src="filename.mp3" type="audio/mpeg">
Tarayıcınız ses öğesini desteklemiyor.
</audio>
</body>
</html>
```

OJS'de multimedya dosyaları eklemeden önce Bileşen Türleriniz için ayarları yapılandırmanız gerekecektir. Bu ayarların yapılmasıyla ilgili ayrıntılar için yukarıdaki **Dizgi Dosya Bileşeni Türleri**'ne bakın.

Bileşen Türü ayarlarında "bağımlı dosyalar" olarak yapılandırılmış "Multimedya" ve/veya "Görüntü" dosyalarına sahip olduğunuzdan emin olun.

![Form to add Multimedia as a dependent component type.](./assets/learning-ojs3.2-ed-prod-multimedia-component-edit.png)

Şimdi multimedya dosyanızı görüntülemek üzere bir HTML stil sayfası yüklemek için gönderime geri dönün. **Dizgi Dosyaları Ekleme** ile ilgili talimatlar için aşağıya bakın. Ayrıca dosyayı yüklediğinizde:

* Dizigiyi multimedya dosya türüne göre etiketleyin (ör. MP3, MP4, Görüntü)
* **Makale Bileşeni** açılır menüsünden **HTML Stil Sayfası**'nı seçin
* Hazırladığınız HTML dosyasını en az minimum kodla yükleyin (yukarıdaki talimatlar)
* **Devam**’a tıklayın
* **Ayrıntıları İncele** sekmesinde Bağımlı Dosyaları yükleyebilirsiniz. MP3/MP4/image dosyasını yükleyeceğiniz yer burasıdır.

![Step 2 of uploading production ready files where users will go to upload their dependent files.](./assets/learning-ojs3.2-ed-prod-multimed-dep-file.png)

**Makale Bileşeni**'i açılır menüsünden **Multimedya** veya **Resim**'i seçin ve MP3, MP4 veya görüntü dosyasını yükleyin.

![Step 1 for uploading dependent files. The dropdown bar lists Multimedia and Image as selection for Article components.](./assets/learning-ojs3.2-ed-prod-upload-multimedia.png)

Bir resim dosyası yüklerken, uygun olduğu şekilde bir Altyazı, Telif Hakkı Sahibi ve İzin Koşulları eklemeniz istenecektir.

![Step 2 for uploading dependent files. Text fields to enter Caption, Credit, Copyright Owner, and Permission Terms.](./assets/learning-ojs3.2-ed-prod-image-details.png)

Yüklemeyi tamamlamak, ayrıntıları gözden geçirmek ve onaylamak için **Devam**'ı tıklayın. Multimedya dosyanız artık HTML ile birlikte bağımlı bir dosya olarak eklenmiştir ve öğe yayınlandığında HTML'ye gömülecektir.


#### ePUB Files

Similar to HTML files, ePub files are ideal for mobile devices but require specialized coding to create. Conversion tools are available, such as [Calibre](https://calibre-ebook.com/). More detailed HOW TO instructions for creating ePub files are [available here](https://www.wikihow.com/Convert-a-Word-Document-to-Epub).

Like HTML files, some additional cleanup may be required after conversion and [require some knowledge](http://www.jedisaber.com/eBooks/Introduction.shtml) of the format.

Example (see EPUB link at bottom of the page): [International Review of Research in Open and Distance Learning](http://www.irrodl.org/index.php/irrodl/article/view/2895)

#### XML Files

XML files are structured files in which each part of the article is tagged as a distinct element. This allows the reader to easily navigate through and access figures, images, metadata, references, and parts of the article text. Creating XML files is a very efficient way to publish in multiple formats. When you create an XML file, you can then automatically generate PDFs, HTML, ePub, and other formats.

![XML preview of article with navigation menu options.](./assets/learning-ojs3.2-ed-prod-xmlgalley.png)

PKP is developing tools that will allow you to create, convert, and edit XML files within OJS. Currently you need to create and edit the files outside of OJS. If you want to produce XML galley files for your journal, you can use the services of a graphic designer or typesetter, or if you have some XML expertise you can create the files yourself. W3schools has excellent tutorials on XML.

Example [Food and Nutrition Research](https://foodandnutritionresearch.net/index.php/fnr/article/view/3609/10173)

#### Multimedia files

It is becoming increasingly popular for journals to publish multimodal content, including audio and video files, in addition to text-based articles. In addition to providing audio and visual formats for text-based articles, which can help to increase the accessibility of journal content, multimodal content is increasingly [valued as an alternative form of scholarship](https://www.tandfonline.com/doi/full/10.1080/07294360.2017.1389857?casa_token=QlJ8xBTQUEMAAAAA%3AWDkOV6R-qfZxJBimLv_Jv4iB3o2XYeA-Cym7uxHoCww9THLVmZFVfKmRP3dtqq098HvYG6kqTl_v) which represents and reflects different modes of expression and ways of knowing. Journals that choose to create audio versions of text-based articles may choose to do so manually, by having someone read the article into a voice recorder, or automatically using Text to Speech software.

Multimedia files can be embedded into the article page on your journal site, or can be linked to  from an external site, such as YouTube or SoundCloud. If you use an external site, the quality may be better, but statistics will not be collected on galley views or downloads, and preservation of the content is dependent on the external site.

When uploading a multimedia file, you can select “article text” from the component list and upload the file (MP3, MP4, image file, etc) directly. This will allow the user to access the file using the image viewing software or the audio/video playing software installed on their device.

Example (see MP3 link in side menu at bottom of the page): [International Review of Research in Open and Distance Learning](http://www.irrodl.org/index.php/irrodl/article/view/3279)

Alternatively, you can embed the audio, video, or image file in an HTML page so that users can view the file directly in their browser. See **Add images and multimedia to an HTML galley** above for instructions on how to do this.

Example: [Intersectional Apocalypse](https://journals.lib.sfu.ca/index.php/ifj/article/view/673)

##### Upload a multimedia file linked from an external site

Upload the multimedia galley file in the Production stage of the workflow. See below for instructions on how to **Add Galley Files**. In addition, when you upload the file:

* Label the galley according to the multimedia file type (e.g., MP3/MP4)
* Check the box indicating “This galley will be available at a separate website”

![Pop-up window to add Video as an external Galley File.](./assets/learning-ojs3.2-ed-prod-upload-video-youtube.png)

To get the URL, locate the video or audio in YouTube, SoundCloud, etc., then click **Share** and copy the URL.

![Share Button on Youtube to generate external link for Galley File.](./assets/learning-ojs3.2-ed-prod-share-youtube.png)

Paste the URL into the remote galley field and click **Save**.

The video should now appear in the published submission.

### Contact the Author

Next, you will want to share the PDF with the author for a final look and sign off. To do so, use the **Add Discussion** link in the Production Discussion panel. This will open a new window.

![Creating a discussion post in OJS to indicate that galley are ready for proofreading.](./assets/learning-ojs-3-le-production-add-participant.png)

Remember to add the author at the top of the window and then add a subject and a message.

Before sending, attach a copy of the PDF file using the **Upload File** link. This will make it available to the author.

![Step 1 of uploading galley file in discussion- uploading file.](./assets/learning-ojs-3-le-production-add-participant-upload.png)

Remember to select the correct Article Component and then upload the PDF.

Click **Continue**.

Next, make any changes to the file name (usually you don’t need to do anything here).

![Step 2 of uploading galley file in discussion- confirming file name.](./assets/learning-ojs-3-le-production-add-participant-upload2.png)

Then, you can upload additional files, if necessary.

![Step 3 of uploading galley file in discussion- option to add additional file or complete.](./assets/learning-ojs-3-le-production-add-participant-upload3.png)

Once you are done, hit **Complete**.

The file is now attached and you can send the message using the **OK** button.

![Discussion box showing the uploaded galley file as attachment.](./assets/learning-ojs-3-le-production-add-participant2.png)

The Author has now been notified and you can await their response.

### Author Response

Once the author has had a chance to review the galleys and respond, you will receive an email notification and will see a reply in the Production Discussions.

![List of Production related discussion on author account.](./assets/learning-ojs-3-au-production-message-reply.png)

### Add Galley Files

Now that the Author has proofread the galleys, you can make any final changes, and then upload them to the submission. To upload galleys, go to the Publication tab, then Galleys.

![Galley subtab within the manuscript's Publication tab to add galley.](./assets/learning-ojs-3.2-au-production-galleys.png)

Then click **Add galley**, which will open a new window.

![Creating new galley for with the galley label PDF and english as the language.](./assets/learning-ojs-3-au-production-galleys-upload1.png)

Add an appropriate label (e.g., PDF, HTML, etc.) and click **Save**.

![Step 1 of uploading file. PDF file uploaded displays option to Change File, Continue, or Cancel.](./assets/learning-ojs-3-au-production-galleys-upload2.png)

From this window, choose the appropriate article component (e.g., article text) and upload the galley file. Click **Continue**.

![Step 2 of uploading file. Displays option to edit file name, Continue, or Cancel.](./assets/learning-ojs-3-au-production-galleys-upload3.png)

If necessary, change the filename. Click **Continue**.

![Step 3 of uploading file. Confirming file has been added. Displays option to Complete or Cancel.](./assets/learning-ojs-3-au-production-galleys-upload4.png)

If you have more files, upload them now. Otherwise click **Complete**.

You can now see the galleys in the Galley panel.

![Galley subtab within the manuscript's Publication tab. Displays previously uploaded PDF.](./assets/learning-ojs-3.2-au-production-galleys-uploaded.png)

You can make changes to the upload by selecting the blue arrow to the left of the galley label, which reveals options to edit, change the file, or delete.

### Edit Galley Files

If you want to make a change to a galley file or galley file label after it has been uploaded, you can edit it. Please note that if the article has already been published, to make a change to the galley file you will first have to un-publish the article or create a new version (see Versioning of Articles below). But before the article is published, you can edit the galley file easily.

1. Open the submission from the submission dashboard
2. Go to the Publication tab and Galleys
3. Click the blue arrow next to the file you want to edit
4. If you would like to edit the galley label, click the Edit button that appears and change the Galley Label
5. If you would like to change the file, click Change File and upload a new file
6. When you are finished editing, click Save

![Galley subtab within the manuscript's Publication tab. Blue arrow for PDF expanded to reveal additional option to Edit, Change File or Delete.](./assets/learning-ojs-3.2-au-production-galleys-edit.png)

### Inform the Section Editor

Finally, you will need to inform the Section Editor that the galleys have been completed. To do so, use the Production Discussion panel and choose the **Add Discussion** link.

![Creating a discussion post in OJS to indicate that galley files have been uoloaded.](./assets/learning-ojs-3-au-production-galleys-complete.png)

Add the Section Editor to the top of the page, and then include a subject line and message. Click **OK** to send the message.

You can now see the final discussion.

![List of Production related discussion Section Editor account.](./assets/learning-ojs-3-au-production-galleys-discussions.png)

### Section Editor Informs Editor

At this point, the Section Editor receives the notification from the Layout Editor and reviews the galley files.

They can either ask the Layout Editor to make additional changes \(using the Production Discussions\) or inform the Editor that the galleys are ready for publication.

To inform the Editor, use the Production Discussion panel's **Add Discussion** link.

The next step in publishing the submission is to check and finalize the metadata.

## Finalize Metadata

Before publishing the submission, you should check that the metadata for the article is complete and accurate in OJS and matches the metadata on the PDF. This is important for ensuring that the content is indexed by Google Scholar, discoverable by other services, and accessible to readers.

You can check the metadata for the submission by going to **Submissions**, opening the submission, going to the **Publication** tab, and checking the **Title**, **Contributors**, and **Metadata** tabs.

At this point you can also add the article to a category to display it on a thematic category page on your site and extract and save references (if you have not already).

### Add the Article to a Category

Categories can be used to organize your articles into thematic collections. If you use categories in your journal, you can optionally add the article to a category or categories. For instructions on how to create categories see the [Journal Settings chapter](./journalsetup.md). You can add the article to a category by editing its metadata.

* In the article submission, go to the **Publication** tab
* Click **Issue**
* In the **Categories** box, check the category or categories that you want to add the article to
* Click **Save**

![Issue subtab within Manuscripts Publication tab. Shows options to assign Issue, Section, Categories.](./assets/learning-ojs3.2-ed-prod-add-to-category.png)

### Extract and Save References

If you would like to display the article’s bibliographic references on the article page with linked DOIs, and submit the references to Crossref with the rest of the article’s metadata, you can use the “Extract and save references” feature. This feature can only be used if you’re using the DOI plugin and the Crossref plugin to export your metadata to Crossref. The feature will store each reference in the database as a separate reference and add the DOI to the reference on the article page. It will also make it easier for indexing services, such as Google Scholar, identify and index the article’s citations.

The first thing you must do is enable References as a submission metadata field.

1. Go to Workflow Settings > Submission > Metadata
2. Scroll down to **References** and check off **Enable references metadata**
3. New options will appear below and you can select to either
  * do not request references from the author during submission - the References field will not be on the submission form and instead references can be added by an editor
  * ask the author to provide references during submission - the References field will be on the submission form and authors can optionally add their references to it, or an editor can add references to the submission later
  * require the author to provide references before accepting their submission - the References field will be on the submission form and authors will be required to add their references to it
4. Click **Save**

![Setting option to Eanble Reference metadata with additional options for authors during the time of submission.](./assets/learning-ojs3.2-ed-prod-enable-references.png)

Now if you go to a submission record’s **Publication** tab you will see a **References** tab below. An editor can open the tab and copy and paste the article's references into the field. In addition, if you checked the second or third option above, there will be a **References** field when an author makes a submission and the author will be able to add their references to it.

Each reference should be on a separate line and you should sure the text you paste into the field is unformatted and has no extra line breaks or spaces. Remove any DOIs in the references if you plan to add them later with the Crossref Reference Linking plugin.

When the article is published, the references will appear on the article page and the references will be submitted to CrossRef.

After you have exported the article’s metadata to Crossref, you can insert the DOIs for the article references from Crossref if you use the Crossref Reference Linking plugin. Instructions on how to use the plugin are available in the [Crossref Plugin Guide](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/references).

Once you have the plugin set up and have exported the article's metadata to Crossref, you can insert the DOIs from Crossref back into the references:

1. Open the submission
2. Go to the **Publication** tab and **References**
3. Click **Check Crossref DOIs**
4. Some DOIs will now be added to the references

## Create Issue

When you are ready to publish the article, you have to create an issue to publish it in first. Then you will schedule articles for publication in the issue. The articles will not be published until you publish the issue as a whole. This section explains how to create and edit issues.

From the left menu, select Issues to manage all of the issues for your journal.

![Future Issues tab in Issues. Displays Vol 1 No 3 (2018).](./assets/learning-ojs3.1-jm-issues.png)

You will see tabs for Future Issues and Back Issues.

**Future Issues** are all of your unpublished issues. You can create as many of these as you wish, and schedule submissions to any of them.

**Back Issues** lists all of your published issues.

![Back Issue tab in Issues. Displays Vol 1 No 2 (2018) and Vol 1 No 1 (2018).](./assets/learning-ojs3.1-jm-issues-back.png)

To create a new issue, use the **Create Issue** link and fill in the form.

![Form to create new issue.](./assets/learning-ojs-3-issues-create.png)

There are spaces to add volume, number, year, and title information (e.g., Special Issue #1), as well as a description, cover image, and custom URL. The cover image and description will appear at the top of the issue page on your site, if you add them. If you have volume, number, and title checked off below, you will be required to fill something into each field.

When you’re finished, click **Save**.

### Edit Issue

You can also edit an existing future issue by selecting the blue arrow to the left of the issue entry on the Future Issues page.

![Vol 1 No 3 (2018) in Future Issues with blue arrow expanded to show additional options to Edit, Preview, Publish Issue, or Delete.](./assets/learning-ojs3.1-jm-issues-edit.png)

This will reveal an **Edit** link, which will open a new window of information.

![Table of Contents for Vol 1 No 6 (2016): June 2016.](./assets/learning-ojs-3-issues-details.png)

**Table of Contents**: For a new issue, this will be empty, but for issues that have had submissions scheduled, they will be listed here.

Use the blue arrow next to each submission to reveal links to go directly to the submission record or remove it.

**Issue Data**: This provides access to the volume, issue, number data you entered when first creating the issue.

**Issue Galleys**: This allows you to upload galley of the complete issue – e.g., one PDF containing all articles. This will be linked from the issue web page.

**Identifiers**: Use this space to add a DOI for the issue, if your journal supports issue-level identifiers.

### Order Sections and Articles

When you publish an issue, articles will be displayed under your journal’s sections.

If you go to Journal Settings > Sections and edit a section, you can configure how it will appear on your published issue page, including whether the title of the section is displayed.

You can also drag and drop the sections to change the order of how they will appear on your published issue.

If you want to change the order of sections on a per issue basis or the order of articles within a section:

* Go to **Issues** and open the issue you want to edit
* Click **Order**
* Drag and drop the sections and articles where you want them
* Click **Done** when you are finished

### Preview Issue and Articles

If you want to see what your issue and the articles in it will look like on your site before publishing it, you can use the Preview feature:

* Click the blue arrow next to the future issue
* Click **Preview**
* The issue preview page will open. To preview an article, click the article title in the table of contents.

![Vol 10 No 10 (2019) in Future Issues with blue arrow expanded to show additional options to Edit, Preview, Publish Issue, or Delete.](./assets/learning-ojs-3.2-ed-production-publish-issue.png)

### Publish Issue

Once you are happy with the issue hit the **Publish Issue** link to publish it on your journal website.

### Notify Readers

You will have the option to send a notification to users about the new issue.

To not send a notification of a new issue published, uncheck the box beside “Send notification email to all registered users” before pressing **OK**.

![Option to notify readers upon issue publication.](./assets/learning-ojs-3.2-ed-production-reader-notify.png)

The content of the announcement is generated automatically and cannot be edited. You can alternatively use the [Announcements](./settings-website.md#announcements) feature to send a publication announcement with customized content.

### Unpublish Issue

Use the **Unpublish Issue** link to remove the issue and all of its content from public view. The issue will revert to the Future Issues tab.

### Delete Issue

You can use the **Delete** link to remove the issue entirely. Not only will the issue be unpublished, the organizational structure and any issue metadata will also be removed. Any assigned articles will revert to their unpublished status.

## Add the Article to an Issue

Now that you have created an issue, you can add the article to it. Please note that the article will not be published until the issue is published. In this step you are assigning the article to an issue.

* Go back to **Submissions**
* Find and open the submission you want to publish
* Go to the **Publication** tab > **Issue**
* In the **Issue** field, select the issue you want to publish the article in
* The **Section** will be filled in automatically based on the submission metadata but you can change it if needed
* You can select a **Category** if you haven’t already done so (explained above)
* If you want an image to appear on the article page, upload it under **Cover Image**
* You can add **Page Numbers**, which will be included in the metadata and on the table of contents
* **Date Published** will be set automatically when the issue is published. Do not enter a publication date unless the article was previously published elsewhere and you need to backdate it.
* Click **Save** when you are finished

![Issue subtab in Manuscript Publication tab showing all options and fields related to Issue - Issue, Section, Categories, Cover Image, Page Number and Date Published.](./assets/learning-ojs3.2-ed-prod-add-to-issue.png)

### Continuous Publishing

OJS is currently designed for a traditional publishing model where articles are published in issues. However, continuous publishing is a popular alternative way to publish scholarly research, in which articles are published as they are ready. You can use a continuous publishing model within OJS.

You can create an issue with a title like “Current Publications,” publish it, and add articles to it as they become available. The articles will be published immediately on the current issue page of your site.

When the “Current Publications” issue gets full, you can rename it with an issue number (e.g., Vol 1, Issue 2) and create a new “Current Publications” issue for the next batch of new articles.

If you would like to notify your readers when each new article is published, you will have to create an individual **Announcement**, as the automatic notification message for a new publication can only be sent when a new issue is published. See the [Website Settings chapter](./settings-website.md#announcements) for information about Announcements.

## Schedule for Publication

The next step is to schedule the article for publication. Although the article will not be published until the issue it is assigned to is published, the Schedule for Publication step is the final step in confirming that the article is ready to be published.

Only a Journal Editor can schedule an article for publication, not a Section Editor or Guest Editor.

The article must have been assigned to an issue and passed the Review stage in order to be able to schedule it for publication.

When you are ready to publish the article:

* Open the submission
* Go to the **Publication** tab
* Click the blue **Schedule for Publication** button.

![Publication tab of Manuscripts shows subtab and option to Preview and Schedule Issue and language toggles to enter metadata in Francais (Canada) and English.](./assets/learning-ojs3.2-ed-prod-schedule-for-pub.png)

A message will pop up that confirms you want to schedule the article for publication. Click **Publish**.

### Schedule for Individual Publications

In previous versions of OJS, an article would be assigned to an issue and would be published when that issue was published. In OJS 3.2, it is now possible to set a specific publication date for each publication.

To do this, under the **Publication** tab of the manuscript, go to **Issues**.

Under **Date Published** you can enter the publication date if it is different from the issue publication date. If not, leave this blank.

![Issue subtab with an Manuscripts Publication tab highlights the Date Published field.](./assets/learning-ojs-3.2-ed-production-schedule-individual.png)

In order to schedule an individual publication, it must be assigned to an issue and have passed the review stage.

If the date is set to a future date, the publication should be published when the scheduled task runs for that date.

If the scheduled manuscript is unscheduled from the issue, the previously scheduled date should not change.

## Versioning of Articles

An ability to publish versions of articles is one of the major new features in OJS 3.2. This feature supports preprint publication and publishing new versions of articles when a correction or significant change has been made. With the versioning feature you can manage different versions of an article and clearly indicate which is the most current.

Once an article is published, neither metadata nor galleys can be edited. When a revision of a published article or metadata is necessary, it can be done in one of two ways:

![Publication tab of article highlighting options available after article has been published to Unpublish or Create New Version.](./assets/learning-ojs-3.2-ed-production-versioning-ways.png)

**Option 1: Unpublish and republish**

Unpublishing an article allows you to make changes without creating a new version. After unpublishing, you can update metadata and/or replace the galley file and schedule the article for publication again. If scheduled into a published issue, it will become available right away. No notification will be sent to readers, since the notification is sent when an issue is published, not for an individual article.

**Option 2: Create new version**

When creating a new version, you will be able to make changes to the metadata and/or galley files. Make sure to click **Save** on the bottom right to record the changes.

You can keep track of version updates under **All Versions**. Each version is marked by a number and date published. The version currently being updated is marked by a number and **Unpublished**.

![Publication tab of manuscript showing a list of all versions available for this article. Article currently has 4 published version and 1 unpublished.](./assets/learning-ojs-3.2-ed-production-all-versions.png)

Once your changes are completed, you can publish the new version by clicking **Publish** on the top right. If scheduled into a published issue, it will become available right away. No notification will be sent to readers since the notification is sent when an issue is published, not for an individual article.

The list of prior versions and update dates will be listed on the published article page.

![List of dates for all versions for article that displays on the article abstract page on the front end.](./assets/learning-ojs-3.2-ed-production-published-versions.png)

Readers will be able to access previous versions. They will see a message on the article and galley pages advising them that it is an outdated version and pointing them to the most recent version.

Example of an outdated version message on the article page:

![Warning notification of outdated version on article abstract page and prompt to read the most recent version.](./assets/learning-ojs-3.2-ed-production-outdated-version.png)

Example of an outdated version message on the PDF galley page:

![Warning notification of outdated version on PDF viewer and prompt to read the most recent version.](./assets/learning-ojs-3.2-ed-production-outdated-pdf.png)

The article URL will always point to the most recent version, with earlier versions being available at the same URL with the version at the end of the URL (e.g. /version/1234/).

### DOIs and Indexing of Versions

Where a DOI was assigned to the original version, it will not be changed automatically. Previously deposited CrossRef metadata will not be automatically updated. If article metadata was changed, we recommend updating CrossRef metadata in the CrossRef XML Export Plugin by manually depositing the updated article. For instructions on how to manually deposit an article see the PKP’s [CrossRef Plugin Guide - Manual Deposits](https://docs.pkp.sfu.ca/crossref-ojs-manual/en/config#manual-deposits).

Indexing services and repositories that use OAI to harvest metadata will need to harvest the article metadata again in order to update to the new version.

The new version will be tagged properly to be recognized and updated by Google Scholar's index, but the harvester will need to visit your site again in order to find the new version.

It is best to check with a particular repository or index to learn what their process is and what they require.
