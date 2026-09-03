# Architecture - Portofolio Rama Khumar

## Stack
HTML/CSS/JS vanilla. Tanpa framework, tanpa build tool, tanpa pustaka JS
(Motion One dsb tidak dipakai - lihat DECISIONS.md 2026-09-03).
Font dari Google Fonts CDN (Montserrat + Inter).

## Struktur folder
```
portofolio-rama/
├── index.html          satu halaman, semua section
├── style.css           satu berkas; single-theme gelap (charcoal)
├── script.js           i18n + gerak native (IIFE, tanpa modul, defer)
├── favicon.svg
├── images/
│   ├── hero1.png                 potret cut-out (background transparan)
│   ├── insurance1.jpeg           pengalaman: agen asuransi
│   ├── amway1.jpeg               pengalaman: ABO
│   ├── putra2.jpeg               pengalaman: Putra Kampus
│   ├── klbr3.jpeg                pengalaman: Putera Puteri Kalbar
│   ├── referensi/ref.jpeg        (referensi visual lama, tidak dipakai)
│   └── sertifikat/
│       ├── runnerup.jpeg         penghargaan 01
│       ├── bujang1.jpeg          penghargaan 02
│       ├── klbr1.jpeg            penghargaan 03
│       └── klbr2.jpeg            penghargaan 04
├── CLAUDE.md · PROJECT.md · ARCHITECTURE.md · PROGRESS.md · DECISIONS.md
└── data-konten.md      sumber konten asli dari Rama (jangan dikarang sendiri)
```

## Section di index.html (urut)
1. Header/nav (sticky, progress bar tipis di atas)
2. Hero — nama raksasa "RAMA KHUMAR" + ceruk lengkung + potret cut-out warna
   + blok "Halo saya"/role (kiri) & tagline (kanan)
3. Tentang — 3 paragraf + pull-quote
4. Fokus & keahlian — 4 kartu + tag + baris Tools/Bahasa
5. Perjalanan — timeline horizontal (garis terisi + 4 stop)
6. Penghargaan — galeri foto 4 kolom + caption
7. Pengalaman — 4 entri daftar editorial: teks + foto kecil di kanan
8. Pendidikan — 1 blok
9. Kontak — header bab + email + lokasi + tombol "Kirim Email"
10. Footer

## Bilingual (ID / EN)
- Elemen teks diberi `data-i18n="kunci"` (~100 buah).
- Teks Indonesia = isi HTML apa adanya (sumber kebenaran).
- Terjemahan Inggris = objek `EN` di script.js.
- Toggle tombol `#lang`; pilihan disimpan `localStorage['bahasa']`.
- Skrip kecil di `<head>` menetapkan `<html lang>` sebelum render (anti-kedip).

## Alur data
Statis — semua konten hardcoded di HTML. Tidak ada database/API.

## Gerak (semua native)
- `IntersectionObserver` -> class `.in` pada `.reveal` (fade+rise saat masuk layar)
- Hero: class `.anim` -> CSS `@keyframes` dengan `animation-fill-mode: backwards`
- Timeline: 1x reveal saat section masuk layar (bukan terikat posisi gulir)
- Scroll listener + rAF: progress bar, sorot nav aktif, parallax potret
- Email: pointermove + rAF lerp (efek magnetik pegas)
- Jaring pengaman: `<html class="loaded">` dipasang skrip `<head>` setelah
  4,5 dtk -> paksa semua ke keadaan selesai kalau script.js gagal dimuat.
