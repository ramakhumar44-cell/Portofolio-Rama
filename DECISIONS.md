# Decisions - Portofolio Rama Khumar

## [Tanggal isi sendiri] - Stack: HTML/CSS/JS vanilla
**Keputusan:** Pakai vanilla, tanpa static site generator.
**Kenapa:** Konten statis, nggak butuh build tool, tim (Ericcorico) udah 
familiar dengan stack ini dari project sebelumnya.
**Alternatif dipertimbangkan:** Astro/Eleventy - ditolak karena nambah 
kompleksitas tanpa value tambahan untuk scope sekecil ini.

## 2026-09-02 - Bahasa: struktur toggle ID/EN (opsi B)
**Keputusan:** Bangun toggle ID/EN dari awal. Teks di HTML pakai atribut
`data-i18n`, kamus terjemahan di script.js. Default ID, pilihan disimpan di
localStorage.
**Kenapa:** Data asli Rama minta "dua-duanya". Rico pilih B walau teks EN
belum dikirim Rama - EN diisi terjemahan kerja yang setia dulu, bisa dikoreksi.
**Alternatif dipertimbangkan:** Opsi A (ID dulu, toggle nanti) - ditolak Rico,
mau strukturnya langsung ada.

## 2026-09-03 - Tampilan FINAL: charcoal minimalis / editorial (Arah 4.2)
**Keputusan:** Setelah banyak iterasi (lihat catatan di bawah), Rama menetapkan
spek: warna utama hitam/charcoal `#1b1b1b`, pendamping off-white/cream `#efece4`,
aksen silver/abu-abu `#9c9c9c` (sangat irit), font **Montserrat** (display/label)
+ **Inter** (body), banyak ruang kosong, garis tipis, foto berkualitas, minim
ornamen. Single-theme (gelap) - `color-scheme:dark`, tidak ikut tema device.
Hero: nama raksasa + ceruk lengkung (portal atas-bulat) + potret cut-out warna
menembus huruf + teks "Halo saya"/tagline di kiri-kanan foto. Section: header
bab bernomor + garis, daftar editorial, timeline horizontal, galeri foto 4
kolom (Penghargaan), daftar foto+teks (Pengalaman). Foto WARNA (bukan grayscale).
**Kenapa:** Rama minta gelap+elegan+minimalis, dengan 1 referensi (portfolio web
designer "Alex Morgan"). Bahasa visualnya diambil, strukturnya tidak (Rama tetap
7 section, tanpa "Featured Projects"/proses/QR/telepon).
**Alternatif ditolak sepanjang jalan:** palet hijau (ref.jpeg lama); Fraunces
serif ("terlalu lebay"); Syne ("kurang profesional"); Bricolage+putih ("terlalu
dingin/template"); Bodoni Moda + dusty rose (Arah 4.1 - "kurang minimalis");
shape lingkaran di hero ("sama kayak porto Rico"); kartu di Penghargaan (Rama
prefer galeri polos); animasi timeline terikat-gulir (bug: harus scroll jauh
untuk memicu -> diganti reveal saat masuk layar).

## 2026-09-03 - Motion: TANPA pustaka (native)
**Keputusan:** Gerak (reveal saat scroll, entrance hero, timeline, progress
bar, parallax, email magnetik) semua pakai IntersectionObserver + 1 listener
scroll + rAF + CSS keyframes. Tidak pakai Motion One / library apa pun.
**Kenapa:** Konstitusi project (nol dependency, nol build). Gerak scroll-nya
sederhana; sisanya trivial dengan native. Motion One via CDN sempat dipakai di
preview dan berkali-kali bermasalah (scroll() rusak, animasi ke-pause saat tab
tak fokus). Native = lebih ringan, offline, dan tidak bisa gagal karena CDN.
**Jaring pengaman:** semua nilai awal CSS = keadaan SELESAI; skrip <head>
memasang `<html class="loaded">` setelah 4,5 dtk kalau script.js tak jalan.
**Font tetap dari Google Fonts CDN** (link stylesheet) - sama seperti porto Rico,
diterima.

## 2026-09-03 - Foto: pakai file asli Rama, ditampilkan berwarna
**Keputusan:** Semua foto dari `images/` (hero1.png cut-out, insurance1/amway1/
putra2/klbr3 untuk Pengalaman, sertifikat/{runnerup,bujang1,klbr1,klbr2} untuk
Penghargaan). Ditampilkan warna penuh, di-crop lewat `object-fit:cover`.
**Kenapa:** Rama upload foto asli; sempat dibuat grayscale untuk kohesi tapi
Rama tolak - minta warna.

## 2026-09-02 - Tampilan: gaya editorial (ref.jpeg) + palet hijau [DIGANTI, lihat 09-03]
**Keputusan:** Ikuti arah visual images/referensi/ref.jpeg - layout editorial,
tipografi display uppercase besar, label small-caps letterspaced, garis tipis,
potret monokrom di atas lingkaran. Palet: off-white (#f4f3ef) + hijau tua
(#1f7355 / #164e3a) + near-black (#1a1a18).
**Kenapa:** Rico menaruh ref.jpeg di folder sebagai acuan dan memilih ikut
palet hijau ref (Rama tidak mengisi preferensi warna).
**Alternatif dipertimbangkan:** (1) navy + emas + serif dari draft awal -
diganti. (2) navy sebagai aksen dengan layout editorial - ditolak, Rico pilih
hijau penuh.
**Catatan:** Elemen ref yang TIDAK diambil karena di luar scope: "Selected
Projects" (section Proyek sudah dihapus) dan angka statistik "5+/40+/25+"
(Rama tidak memberi data angka).

## 2026-09-02 - Menu mobile: show/hide, bukan transisi max-height
**Keputusan:** Menu mobile pakai `display: none` <-> `display: block` via
class `.is-open`, tanpa animasi tinggi.
**Kenapa:** Versi awal pakai transisi `max-height` - saat diuji, transisi CSS
ke-pause ketika tab tidak fokus sehingga menu "nyangkut" ketinggian 0. Juga
`max-height` fix rawan memotong konten kalau item nav bertambah.
**Alternatif dipertimbangkan:** Animasi transform/opacity - ditunda, tidak
sepadan untuk menu 6 item; utamakan yang tidak bisa gagal.

## [Tanggal isi sendiri] - Section Proyek dihapus
**Keputusan:** Halaman nggak punya section "Proyek/Portfolio karya".
**Kenapa:** Rama belum punya proyek yang bisa ditampilkan (3 slot proyek 
di data semua diisi SKIP).
**Alternatif dipertimbangkan:** Taruh placeholder "coming soon" - ditolak 
karena bisa kesan kosong/belum niat, mending fokus ke section yang 
memang punya konten kuat (pengalaman & sertifikat).