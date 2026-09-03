# Progress - Portofolio Rama Khumar

## Status: implementasi selesai, siap review + deploy

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

## Lagi dikerjain
- (nunggu review Rico + Rama)

## Next
1. **Review visual** buka `index.html` di browser sungguhan (Chrome/HP).
   Pane sesi Claude tidak bisa render andal -> belum dicek mata untuk versi
   project ini (baru dicek DOM: 9 foto load, i18n jalan 2 arah, CSS/JS OK).
2. **Rama cek akurasi** teks konteks penghargaan/pengalaman (hasil riset publik,
   ditandai di DECISIONS.md sebelumnya) + terjemahan EN.
3. **git init** + commit pertama (repo belum ada).
4. **Deploy** ke GitHub Pages akun Rama (`rcoalxndr`? atau akun Rama sendiri).

## Blocker
- Belum ada git repo.
- Foto hero cut-out kualitasnya seadanya (background transparan tapi hasil
  potong manual) - bisa diganti kalau Rama punya yang lebih rapi.
