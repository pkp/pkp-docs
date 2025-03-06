# Upgrade Realisasi OJS Anda

Bab ini akan membahas aspek teknis upgrade realisasi OJS anda ke OJS 3.X. Perencanaan upgrade akan sangat membantu agar proses ini berhasil. Sebelum upgrade dilakukan, penting untuk memastikan bahwa server anda memenuhi [persyaratan OJS 3.X](https://pkp.sfu.ca/ojs/README) dan instalasi OJS 2.x anda tidak terlalu lama untuk di-upgrade ke OJS 3.X. Setelah anda memastikan bahwa server anda memenuhi persyaratan, anda dapat melanjutkan upgrade OJS 3.X.

Rincian tambahan tentang langkah-langkah teknis upgrade dapat ditemukan dalam [Technical Upgrade guide](/dev/upgrade-guide/).

## Langkah 1: Lakukan upgrade sandbox

Penting untuk melakukan uji coba upgrade terlebih dahulu. Untuk melakukannya, anda perlu membuat salinan lengkap jurnal OJS 2.x anda, termasuk database dan file area. Ikuti petunjuk upgrade pada salinan tersebut. Petunjuk upgrade resmi dapat ditemukan langsung dalam [UPGRADE documentation](https://pkp.sfu.ca/ojs/UPGRADE). Di sini anda akan menemukan petunjuk untuk upgrade dari beberapa versi OJS 2.x.

Mintalah staf teknis anda dapat membiasakan diri dengan langkah-langkah upgrade yang disertakan dalam file unduhan dengan versi terbaru OJS 3, yang tersedia dari situs web PKP.

Buat sandbox dimana anda dapat melakukan uji coba upgrade. Ini juga merupakan saat yang tepat untuk membuat cadangan instalasi anda.

Untuk membuat sandbox, anda perlu membongkar versi baru OJS 3 ke area baru di server web anda (yang tidak akan mengganggu instalasi OJS 2 yang sudah ada), dan membuat salinan database, direktori file, dan direktori publik anda untuk digunakan pada sandbox OJS 3.

Melakukan upgrade sandbox akan memberi perkiraan berapa lama proses upgrade akan berlangsung dan apakah diperlukan pembersihan atau penyesuaian tambahan. Ini juga dapat memberikan kesempatan untuk menjelajahi beberapa fitur terbaru di OJS 3.

Untuk mencegah sandbox OJS 3 anda diakses atau diindeks secara tidak sengaja, kami sarankan untuk membatasi akses ke sandbox hanya untuk pengguna yang berwenang melalui arahan NoIndex atau autentikasi dasar yang disediakan oleh server web anda. Biasanya kedua hal ini dilakukan menggunakan file .htaccess, tetapi detailnya akan tergantung pada konfigurasi server web anda.

Anda mungkin juga ingin mencegah agar instalasi sandbox OJS 3 mengirimkan email ke orang sungguhan saat anda menyelesaikan evaluasi dan review. Anda dapat melakukannya dengan mengubah alamat email di database sandbox anda menggunakan kueri SQL ini:

`UPDATE users SET email = CONCAT(email, 'test');`

Selanjutnya, edit file konfigurasi `config.inc.php` anda pada instalasi sandbox untuk menambahkan detail dari instalasi OJS 2 yang sudah ada, tetapi pastikan untuk menentukan salinan database dan direktori file Anda, bukan versi produksi yang digunakan oleh instalasi OJS 2 yang sudah ada. Ikuti petunjuk di `docs/UPGRADE` untuk mengupgrade database. (Ini juga akan mengatur ulang direktori file anda, itulah sebabnya penting untuk membuat salinan!)

Lihat bagian [Pemecahan Masalah](#troubleshooting) di bawah ini untuk kemungkinan kesalahan yang mungkin anda temukan selama proses upgrade.

Jika upgrade berhasil diselesaikan, login ke instalasi sandbox OJS 3 dan tinjau apakah semua submission dan file sudah ada dan semuanya ditampilkan dengan benar.

Setelah anda puas dengan uji coba upgrade, lanjutkan ke langkah berikutnya.

## Langkah 2 - Lakukan upgrade

Sekarang setelah anda menguji upgrade sandbox dan puas dengan hasilnya, sekarang saatnya untuk mengupgrade instalasi anda. Pada hari yang ditentukan dan pada waktu yang ditentukan, non-aktifkan jurnal OJS 2.x anda dan ikuti petunjuk di `docs/UPGRADE` untuk mengupgrade perangkat lunak. Untuk melakukannya, anda akan mengulangi langkah-langkah upgrade dengan instalasi produksi anda. Sebelum mengupgrade instalasi anda, lakukan backup lengkap dari database dan folder ‘files’ anda. Jika proses upgrade gagal, anda perlu memulihkan dari backup sebelum melanjutkan. Petunjuk upgrade resmi dapat ditemukan langsung dalam [UPGRADE documentation](https://pkp.sfu.ca/ojs/UPGRADE). Ketika upgrade berhasil diselesaikan, informasikan kepada para editor agar mereka dapat login dan mulai bekerja.

Jika instalasi OJS anda belum memiliki folder ‘files’ yang terletak di luar instalasi OJS yang dapat diakses melalui web, silakan pindahkan sekarang. Kegagalan untuk memenuhi persyaratan ini merupakan satu-satunya risiko keamanan signifikan yang dihadapi oleh jurnal OJS. Lihat bagian “Recommended Configuration” dari dokumen README yang disertakan dalam file unduhan OJS anda untuk lebih detail.

## Pemecahan Masalah

### Pesan kesalahan fatal selama proses upgrade

Hal ini biasanya menunjukkan bahwa terdapat ketidakkonsistenan data dalam database OJS 2.x anda; cari pesan serupa di [PKP Community Forum](https://forum.pkp.sfu.ca/).

### Peringatan dalam bentuk “PHP Notice: unserialize(): Error at offset…”

Ini menunjukkan bahwa anda mungkin secara tidak sengaja mengubah konfigurasi set karakter di `config.inc.php` atau saat membuat database sandbox anda.

### Pesan kesalahan “Perintah tar tidak tersedia. Harap konfigurasikan dengan benar pada ‘config.inc.php’ anda”

Ini adalah pesan kesalahan umum yang mungkin anda temukan saat mencoba mengaktifkan plugin. [PKP Community Forum](https://forum.pkp.sfu.ca/) memiliki sejumlah solusi yang disarankan.

### Kesalahan pada upgrade database

Hal ini biasanya menunjukkan bahwa beberapa hal tidak cocok atau terduplikasi. Anda harus memeriksa database yang ada dan memastikan bahwa semuanya sama atau belum terduplikasi

Untuk sumber upgrade tambahan, lihat bagian [Referensi Tambahan](./resources.md) di akhir panduan ini.
