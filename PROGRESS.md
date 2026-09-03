# Progress - Portofolio Rama Khumar

## Status: LIVE di https://ramakhumar44-cell.github.io/Portofolio-Rama/ (2026-09-03)

## Selesai
- [x] Data mentah + foto asli dari Rama
- [x] Iterasi desain panjang (via artifact claude.ai) -> arah final:
      charcoal minimalis / editorial (Arah 4.2). Lihat DECISIONS.md.
- [x] Foto Rama masuk: hero cut-out, 4 foto pengalaman, 4 foto penghargaan
- [x] **Integrasi ke project**: index.html + style.css + script.js + favicon.svg
- [x] Bilingual ID/EN: 100 elemen `data-i18n`, kamus EN lengkap di script.js,
      toggle + simpan localStorage, default ID
- [x] Motion native (tanpa pustaka): reveal on scroll (IntersectionObserver),
      entrance hero (CSS keyframes), timeline reveal, progress bar, parallax
      potret, email magnetik (rAF spring)
- [x] Jaring pengaman: `<html class="loaded">` failsafe kalau script.js gagal
- [x] Responsive (breakpoint 940px), prefers-reduced-motion dihormati

- [x] **Deploy**: repo Rama `ramakhumar44-cell/Portofolio-Rama`, 4 commit,
      Pages source = "Deploy from a branch" (main / root). Workflow Actions
      dihapus (tak dipakai + selalu gagal). `.nojekyll` + `robots.txt` ditambah.
- [x] Verifikasi live: 8 section urut 01-07, 9 foto HTTP 200, i18n ID<->EN OK,
      css/js/svg 200, robots.txt aktif.

## Lagi dikerjain
- (nunggu review teks dari Rama)

## Next
1. **Rama cek akurasi** teks konteks penghargaan/pengalaman (hasil riset publik,
   ditandai di DECISIONS.md) + terjemahan EN. Kalau ada ralat -> edit index.html
   (ID) + kunci EN di script.js, commit, push (auto-deploy).
2. Opsional: ganti foto hero cut-out kalau Rama punya yang lebih rapi.

## Catatan
- Dokumen kerja `.md` ikut ke-serve publik (konsekuensi deploy-from-root) tapi
  di-`Disallow` di robots.txt jadi tak keindeks. Isinya tak sensitif.
- Push ke `main` = auto-deploy Pages (~1 menit).
