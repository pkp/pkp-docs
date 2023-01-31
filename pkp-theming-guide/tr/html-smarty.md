# HTML/Akıllı Şablonlar

OJS ve OMP, HTML şablonlarını derlemek için [Smarty](http://www.smarty.net/) şablonlama sistemini kullanır. Smarty, HTML şablonlarında PHP benzeri basit mantık kullanmanıza izin veren hafif bir sözdizimidir.

## Ön Uç Şablonları Konumlandırma

Ön uç, halka açık dergi veya basın web sitesi için kullanılan her şablon dosyası, uygulamanın arka ucunu, editoryal arayüzü güçlendirmek için kullanılan şablon dosyalarından ayrı tutulan özel bir dizinde bulunacaktır. Bu, arka ucu etkilemeden ön ucu daha güvenli bir şekilde özelleştirmenize olanak tanır ve özel bir tema oluşturmak için yapmanız gereken iş miktarını önemli ölçüde azaltır.

Her ön uç şablonu birkaç yerden birinde bulunabilir.

1. OJS veya OMP uygulamanıza özel tüm şablonlar, uygulama dizininde `şablonlar/ön uç/` altında bulunacaktır.
2. Kullanıcı kaydı ve duyurular gibi her iki uygulamada ortak olan tüm şablonlar `lib/pkp/templates/frontend` altında bulunabilir.
3. Temanızın geçersiz kıldığı tüm şablonlar `eklentiler/temalar/<your-theme-name>/templates/frontend` altında bulunur.


### Ön Uç Şablon Yapısı
Bu dizinlerin her biri, belirli şablon türlerini depolayan üç alt dizine bölünmüştür.

`/templates/frontend/pages`

Bu dizin, uygulama tarafından çağrılan tüm üst düzey şablon dosyalarını içerir. Bu şablon dosyalarının her biri, tam bir sayfa isteğini temsil eder.

Örneğin, ana sayfaya yapılan bir istek `/pages/index.tpl` dosyasını çağırır. Duyuru isteği `/pages/announcement.tpl` dosyasını çağırır.

`/templates/frontend/objects`

Bu dizin, belirli bir veri nesnesiyle eşleşen şablon dosyalarını içerir. OJS'de bir Sayı ve Makale nesnesi için şablonlar bulacaksınız. OMP'de bir Monograph nesnesi için şablonlar bulacaksınız.

Bu şablon dosyalarının her biri, veri nesnesinin belirli bir görünümünü temsil eder. Bir Sayının içindekiler tablosunda bir Makalenin özetini görüntülemek için `article_summary.tpl` dosyasını bulacaksınız. Ve bir Makalenin tam görünümünü görüntülemek için `article_details.tpl` dosyasını bulacaksınız.

`/templates/frontend/components`

Bu dizin, belirli UI bileşenlerini işleyen şablon dosyaları veya içerik haritası gezintisi ve arama formları gibi başka yerlere sığmayan şablonlar içerir.

### Şablonu Geçersiz Yapmayı Anlama

**Varsayılan Tema**, çekirdek uygulamadaki tüm şablonları kullanır. Ancak temanıza aynı ada sahip bir dosya ekleyerek sistemdeki herhangi bir şablonu geçersiz kılabilirsiniz.

Örneğin, temanızdaki `/templates/frontend/pages/article.tpl` şablonunu geçersiz kılmak isterseniz, `/plugins/themes/<your-theme>/templates/frontend/pages/article.tpl`'ye bir dosya eklemelisiniz.

Bu tekniği kullanarak, yalnızca geçersiz kılmak istediğiniz belirli şablonları geçersiz kılabilirsiniz. Veya sistemdeki her bir şablonu kendi şablonunuzla değiştirebilirsiniz.

OJS veya OMP bir şablon yüklediğinde aşağıdaki sırayla arama yapar.

1. Geçerli tema şablonu dizini.
2. OJS veya OMP şablon dizini.
3. Uygulama içindeki `lib/pkp/templates/` dizini.

(1)'de bir şablon bulamazsa, (2)'de arama yapar ve bu şekilde devam eder.

*Bu bölüm, ön uç şablonlarının düzenlenmesini açıklar. **Arka uç şablonlarını asla değiştirmemenizi** öneririz, ancak bunu yapmak isterseniz, [yazım arka ucunu temalandırma](theme-backend.md) hakkında daha fazla bilgi edinebilirsiniz.*

## Şablonlarda Smarty Verilerini Kullanma

Her uygulama, verileri yüklemeden önce bir şablon dosyasına iletir. Her şablon dosyası, ziyaret edilen sitenin adını içeren bir `$siteTitle` değişkeni alır.

```html
<p>{$siteTitle} sitesine hoş geldiniz!</p>
```

Şablonlara iletilen verilerin bir kısmı, nesne ayarlarına erişmenize izin verir. `$currentContext` altında güncel dergiyi bulacaksınız veya değişkenin altına basın.

```html
<p>{$currentContext->getLocalizedName()}'a hoş geldiniz</p>
```

Bazı veriler belirli şablonlara özeldir. `/frontend/pages/article.tpl` şablonu, o makaleyle ilgili verilere erişmek için kullanılabilecek bir `$article` değişkeni alır.

```html
<h1 class="article-title">{$article->getLocalizedTitle()}</h1>
```

Tüm ön uç şablonları, şablonun başlığında hangi değişkenleri kullandığı hakkında bilgi içerir. Bu bilgiyi `@uses` öneki altında bulacaksınız.

```smarty
{**
 * templates/frontend/pages/article.tpl
 *
 * Copyright (c) 2014-2016 Simon Fraser University Library
 * Copyright (c) 2003-2016 John Willinsky
 * Distributed under the GNU GPL v2. Tüm koşullar için docs/COPYING dosyasına bakın.
 * @brief Display the page to view an article with all of it's details.
 *
 * @uses $article Article This article
 * @uses $issue Issue The issue this article is assigned to
 * @uses $section Section The journal section this article is assigned to
 * @uses $journal Journal The journal currently being viewed.
 *}
```

*Lütfen her değişkenin burada listelenmediğini unutmayın. Yalnızca bu şablon tarafından kullanılan değişkenler listelenir. Ancak kullanabileceğiniz birçok [ortak şablon değişkeni](template-variables.md) vardır. [özel verileri](advanced-custom-data.md) de yükleyebilirsiniz.*
