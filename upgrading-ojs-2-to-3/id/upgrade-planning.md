# Perencanaan untuk Upgrade dalam Skala Besar

Setelah anda melihat fitur-fitur pada OJS 3 dan memutuskan untuk melanjutkan upgrade, anda perlu melakukan rencana yang tepat untuk memastikan agar prosesnya dapat berjalan lancar, hampir tidak ada masalah pada jadwal penerbitan, dan tidak akan mengganggu pekerjaan staf jurnal. Banyak perubahan yang akan berkaitan dengan sumber daya manusia (misalnya, pelatihan dan desain visual), serta hal teknis lainnya, sehingga komunikasi yang jelas, sangat penting pada setiap tahap.

Langkah-langkah utama dalam merencanakan upgrade adalah sebagai berikut:

1. Tentukan apakah dan kapan anda siap untuk upgrade ke OJS 3
2. Tentukan versi OJS 3 yang akan anda upgrade
3. Diskusikan tentang proses upgrade dengan tim editorial atau dengan kontak jurnal anda
4. Pastikan bahwa server anda memenuhi persyaratan OJS 3 dan lakukan modifikasi jika diperlukan
5. Lakukan inventarisasi
6. Bersihkan database pengguna yang ada
7. Siapkan sandbox atau uji coba upgrade
8. Evaluasi, uji coba dan atasi masalah pada situs sandbox OJS 3 anda
9. Rencanakan themes/tampilan dan nuansa jurnal yang baru
10. Minta konfirmasi dari tim anda, apakah sudah siap untuk upgrade pada bagian produksi
11. Jadwalkan upgrade pada bagian produksi
12. Tetapkan tanggal jeda penerimaan naskah dan proses lain jika diperlukan
13. Lakukan upgrade pada bagian produksi
14. Evaluasi, uji coba, dan atasi masalah situs OJS 3 anda yang baru
15. Pelatihan dan pengaturan

Bab ini akan lebih menekankan pada perencanaan awal dan langkah-langkah sumber daya manusia dalam proses upgrade. Bab berikutnya akan membahas mengenai langkah-langkah teknis.

## Tentukan apakah dan kapan anda ingin melakukan upgrade

Pengembangan OJS masih berlangsung dan versi terbaru dengan fitur yang baru dirilis setiap beberapa bulan. Anda dapat memutuskan secara strategis kapan akan melakukan upgrade berdasarkan kapan fitur yang diinginkan akan tersedia. Misalnya, jika plugin tertentu penting bagi pengguna anda dan plugin tersebut tidak akan tersedia untuk OJS 3 hingga tahun depan, anda mungkin dapat menunggu hingga tahun depan untuk melakukan upgrade dengan skala besar. Anda mungkin juga ingin menunggu hingga rilis baru OJS telah sepenuhnya diuji dan bebas dari bug, yang terkadang tidak terjadi segera setelah rilis resminya. Namun, jika OJS 3 memiliki semua fitur utama yang anda butuhkan, penjadwalan upgrade akan melibatkan pertimbangan lain yang diuraikan dalam bab ini.

* Identifikasi fitur-fitur penting yang digunakan dalam jurnal anda. Anda harus membahas hal ini dengan tim editorial anda dan memastikan anda memiliki pemahaman penuh tentang kebutuhan dan alur kerja mereka.
* Pelajari tentang OJS 3, fitur-fitur serta fungsinya
* Jika versi OJS 3 memenuhi kebutuhan anda, inilah saatnya mempersiapkan tim jurnal anda untuk melakukan upgrade. Anda dapat melibatkan dukungan dari tim editorial, tim teknis, dan sumber daya manusia. Anda perlu mengkoordinasikan waktu upgrade dengan semua pihak yang terlibat. Waktu terbaik untuk upgrade adalah ketika jurnal tidak dalam fase aktif penerbitan, dan waktu upgrade tertentu harus dijadwalkan ketika semua anggota tim ada untuk melakukan upgrade dan untuk mengecek jurnal segera setelah upgrade untuk menemukan masalah dan untuk membuat perubahan yang diperlukan.

Untuk referensi tambahan yang menjelaskan tentang fitur-fitur terbaru di OJS 3 dan dokumen terkait upgrade, dapat dilihat pada bagian Referensi Tambahan pada akhir panduan ini.

## Tentukan versi OJS 3 mana yang akan diperbaharui

Sebaiknya anda harus upgrade ke versi OJS terbaru. Namun, jika versi terbaru adalah rilis utama baru (misalnya, OJS 3.1.0, OJS 3.2.0), anda mungkin dapat menunggu hingga rilis minor berikutnya tersedia (misalnya, OJS 3.1.0-1; OJS 3.2.0-1) karena biasanya rilis utama terbaru dapat memiliki beberapa bug yang tak terduga dan akan diperbaiki dalam rilis minor pertama yang menyusul kemudian. Periksa [PKP website](https://pkp.sfu.ca/category/news/) untuk berita tentang rilis saat akan mengambil keputusan ini.

## Rencanakan upgrade anda

Dengan mempertimbangkan langkah-langkah yang harus dilakukan, buatlah rencana dan jadwal untuk upgrade tersebut.

## Komunikasikan tentang upgrade tersebut dengan tim editorial atau kontak jurnal anda

Tergantung pada apakah anda adalah institusi atau penerbit yang menjadi tuan rumah atau mendukung beberapa jurnal atau jika anda adalah administrator dari sebuah jurnal, anda dapat berkomunikasi secara langsung dengan tim editorial jurnal atau dengan kontak utama pada setiap jurnal yang kemudian berkomunikasi atau mendukung tim editorial. Umumkan rencana upgrade tersebut kepada tim editorial atau kontak jurnal anda. Upgrade tersebut terutama akan mempengaruhi Journal Manager, Editor, dan Section Editor. Mereka harus diberi tahu tentang perubahan yang akan datang, menerima informasi tentang cara menggunakan versi terbaru OJS, dan memiliki masukan ke dalam jadwal upgrade. Reviewer dan Penulis tidak akan terpengaruh oleh upgrade tersebut dan akan melihat sedikit perubahan dalam alur kerja mereka.

Tentukan pelatihan dan dukungan apa yang akan dibutuhkan oleh tim editorial Anda sebelum dan setelah upgrade dan bagaimana pelatihan serta dukungan tersebut akan diberikan.

## Pastikan server Anda memenuhi persyaratan OJS 3 dan lakukan modifikasi jika diperlukan

Persyaratan server yang direkomendasikan untuk OJS 3 adalah:

- PHP >= 7.2
- MySQL >= 4.1 atau PostgreSQL >= 9.1.5
- Apache >= 1.3.2x atau >= 2.0.4x atau Microsoft IIS 6
- Sistem operasi: OS apapun yang mendukung perangkat lunak di atas, termasuk Linux, BSD, Solaris, Mac OS X, Windows

Karena PKP tidak memiliki sumber daya untuk menguji setiap kemungkinan kombinasi versi perangkat lunak dan platform, tidak ada jaminan sistem operasi atau dukungan yang benar. Kami menerima masukan dari pengguna yang telah menerapkan OJS pada sistem selain yang tercantum di atas.

## Lakukan inventarisasi jurnal anda

Sebelum melanjutkan upgrade, anda disarankan untuk melakukan inventarisasi jurnal anda.

Selama proses upgrade, bagian berikut akan secara otomatis dipindahkan dari OJS 2 ke OJS 3:

* Submission
* Pengguna
* Pengaturan Peranan/Izin
* Pengumuman
* Bagian

Anda disarankan untuk **menyimpan salinan dari semua data** yang muncul di halaman jurnal anda untuk dimasukkan kembali ke OJS 3. Mungkin juga berguna untuk memiliki screenshoot dari semua Pengaturan Jurnal dari OJS 2 sebagai referensi.  Anda akan melihat bahwa terdapat sejumlah perubahan yang dibuat antara OJS 2 dan OJS 3, sehingga informasi yang dimasukkan dalam Setup di OJS 2 perlu dimasukkan di tempat yang berbeda dalam OJS 3.

Beberapa hal yang perlu dibuat ulang setelah anda melakukan upgrade ke OJS 3 adalah sebagai berikut:

* Informasi Jurnal - Masthead, Tim Editorial, Izin, dll.
* Kustomisasi - CSS, gambar, kode warna
* Pengaturan setup jurnal dan informasi tekstual
* Plugin
* Halaman/Menu
* Tautan
* File
* Templat email yang disesuaikan
* Formulir Reviewer
* Custom blocks
* Unggahan PDF

Kami sarankan anda menyimpan kustomisasi yang anda buat ke sandbox (gambar, CSS, teks) secara lokal untuk diunggah ulang jika diperlukan ke versi produksi final.

Jika instalasi OJS 2 anda memiliki tautan ke PDF yang diunggah atau berkas lain (misalnya, formulir berlangganan dan perjanjian), tautan tersebut perlu diunggah ulang ke Publisher Library dan diperbarui dalam hyperlink. Direktori file OJS 2 tidak akan berfungsi lagi setelah upgrade.

## Bersihkan database pengguna yang ada

Upgrade dari OJS 2 ke 3 juga merupakan cara untuk membersihkan pengguna yang mungkin merupakan pengguna spam, yang merupakan masalah umum di OJS, khususnya untuk contoh yang ada sebelum PKP menerapkan reCAPTCHA pada pendaftaran akun. Terdapat beberapa cara untuk mengidentifikasi tipe pengguna ini, tetapi salah satu pilihannya adalah melalui domain email yang digunakan saat pengguna mendaftar. Dengan menggunakan kueri SQL berikut, anda atau sistem administrator anda dapat mengidentifikasi domain untuk mengidentifikasi kemungkinan pengguna spam:

```
SELECT substring_index(email, '@', -1) domain, COUNT(*) email_count
FROM users
GROUP BY substring_index(email, '@', -1)

-- Jika anda ingin melakukan sort:
ORDER BY email_count DESC, domain;
```
Setelah anda mengidentifikasi domain yang terhubung ke pengguna spam, anda dapat menggunakannya untuk membuat daftar nama pengguna untuk dibersihkan dengan kueri berikut:

```
SELECT * FROM users
WHERE email LIKE "%@spam.com"
OR email LIKE "%morespam.com"
```

Dengan daftar nama pengguna ini, anda dapat menggunakan alat penggabungan (merging tool) pengguna bawaan OJS (pada direktori OJS anda di `tools/mergeUsers.php`) untuk membersihkan pengguna. Kami membuat skrip bash kecil untuk melakukan ini, dan PKP juga memiliki proses yang mereka rekomendasikan. Anda harus membuat akun pengguna yang dapat digunakan untuk menggabungkan semua akun jika belum ada. Perlu diingat bahwa meskipun hampir tidak mungkin untuk menemukan semua pengguna spam dalam contoh OJS yang besar, anda mungkin dapat membersihkannya secara signifikan, sehingga mengurangi jumlah data dalam contoh anda dan memudahkan tim jurnal untuk mengelola pengguna mereka.  Lebih baik untuk menggunakan alat penggabungan daripada menghapus pengguna spam dari tabel pengguna, karena menghapus pengguna dapat menghasilkan kesalahan besar dalam instalasi anda.

## Lakukan sandbox atau uji coba upgrade

> Untuk informasi lebih lanjut tentang langkah-langkah teknis untuk melakukan upgrade sistem anda, lihat [Technical Upgrade Guide](/dev/upgrade-guide/). 
> 
> {:.notice}

Lihat bagian di bawah ini pada [Upgrade Realisasi OJS Anda – Langkah 1 – Lakukan Upgrade Sandbox](./upgrading-ojs#step-1-perform-a-sandbox-upgrade)

## Evaluasi, uji, dan atasi masalah situs OJS 3 sandbox anda

Beritahukan kepada semua anggota tim jurnal yang secara rutin menggunakan situs tersebut (misalnya, Journal Manager, Editor, dan Section Editor) untuk mengecek situs sandbox dan memberikan masukan. Ini adalah waktu yang tepat untuk memberikan pelatihan penggunaan sistem baru jika anda berencana untuk melakukannya. Jika anda menemukan bahwa fungsi penting tidak tersedia dalam versi yang baru, pertimbangkan untuk menunda upgrade atau diskusikan cara untuk mengakomodasi perbedaan fungsional.

Saat tersebut adalah waktu yang tepat untuk meninjau alur kerja jurnal. Tim jurnal mungkin ingin memanfaatkan fitur-fitur terbaru atau sekadar meningkatkan alur kerja yang ada sambil melatih tim dalam menggunakan sistem yang baru.

Pastikan bahwa tim jurnal memahami bahwa perubahan yang dibuat pada situs sandbox tidak akan dimasukkan ke dalam situs produksi setelah upgrade. Simpan semua daftar perubahan pada konten dan struktur yang diminta selama peninjauan situs sandbox sehingga perubahan tersebut dapat diterapkan ke situs produksi segera setelah upgrade.

## Rencanakan theme yang baru

OJS 3 memiliki themes untuk situs web secara berbeda dari versi perangkat lunak sebelumnya, sehingga tampilan dan nuansa jurnal anda akan berubah. Anda akan memiliki pilihan baru untuk menyesuaikan aspek situs jurnal anda melalui pilihan theme saat ini.

Jika anda telah menggunakan theme khusus ke jurnal anda di OJS 2, theme tersebut tidak akan ditampilkan dengan benar di OJS 3. Anda dapat memilih untuk menggunakan salah satu theme yang tersedia di OJS 3 atau membuat theme khusus baru yang berfungsi dengan baik pada OJS 3. Jika anda membuat theme khusus baru, anda harus mengembangkannya sebelum upgrade sehingga anda dapat menerapkannya di situs produksi segera setelah upgrade. Silakan lihat [Designing Your Journal guide](https://docs.pkp.sfu.ca/designing-your-journal/en) dari PKP untuk bantuan dalam menciptakan tampilan dan nuansa khusus untuk jurnal anda. [Theming Guide](https://docs.pkp.sfu.ca/pkp-theming-guide/en/) dari PKP dapat digunakan untuk mengembangkan theme khusus untuk jurnal anda.

## Minta konfirmasi dari tim anda, apakah siap untuk upgrade di bagian produksi

Meskipun anda telah berdiskusi dengan anggota tim selama proses ini, penting untuk menghubungi setiap anggota tim untuk mengkonfirmasi apakah mereka siap untuk melanjutkan upgrade. Upgrade dari OJS 2 ke OJS 3 merupakan perubahan besar yang tergantung pada jurnal, dapat melibatkan banyak pemangku kepentingan dengan peran besar atau kecil dalam proses upgrade tersebut. Hubungi anggota tim untuk mengkonfirmasi bahwa mereka siap untuk proses upgrade.

## Jadwalkan upgrade produksi

Setelah anda siap untuk melanjutkan upgrade, diskusikan dengan tim jurnal mengenai:

* Tanggal pelaksanaan upgrade
* Waktu jeda saat situs web jurnal tidak dapat diakses
* Konten akan dinonaktifkan jika anda menghentikan sementara pembuatan/modifikasi konten baru sebelum upgrade
* Kontak dukungan untuk menjawab pertanyaan dan memberikan bantuan

Jika upgrade melibatkan waktu jeda atau pembekuan konten baru, pastikan untuk meminta konfirmasi tanda terima melalui email setelah tanggal diumumkan.
