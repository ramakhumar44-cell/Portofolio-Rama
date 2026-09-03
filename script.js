/* ============================================================
   Portofolio Rama Khumar — script.js

   Tanpa framework, tanpa build, tanpa pustaka luar. Semua gerak
   pakai IntersectionObserver + satu listener scroll + CSS.

   Prinsip: kalau berkas ini gagal dimuat, halaman tetap lengkap
   dan diam -- <html class="loaded"> dipasang skrip di <head>
   sebagai jaring pengaman, dan semua keadaan awal di CSS adalah
   keadaan SELESAI.
   ============================================================ */
(function () {
  'use strict';

  var d = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     1. BAHASA (ID / EN)
     Teks ID diambil dari DOM apa adanya saat load; kamus di
     bawah hanya berisi terjemahan EN. Toggle menyimpan pilihan
     di localStorage.
     --------------------------------------------------------- */
  var EN = {
    'nav.tentang': 'About',
    'nav.fokus': 'Focus',
    'nav.perjalanan': 'Journey',
    'nav.penghargaan': 'Awards',
    'nav.pengalaman': 'Experience',
    'nav.kontak': 'Contact',

    'hero.eyebrow': 'Personal Profile',
    'hero.place': 'Pontianak &middot; West Kalimantan',
    'hero.greetLbl': "Hello, I'm",
    'hero.role': 'Management Student<br>Public Speaker &middot; Social Media',
    'hero.tagline': '&ldquo;Think with vision, move with action, and make an impact through contribution.&rdquo;',

    'tentang.k': 'About me',
    'tentang.h': 'Who I am',
    'tentang.p1': "I'm a student at Widya Dharma University Pontianak who actively develops myself through academic activities, competitions, and various personal-development programs. I'm drawn to communication, self-development, social media, and activities that create room to interact and contribute to the community.",
    'tentang.p2': 'I believe experience is built not only through formal education, but also through the courage to try, to compete, and to take on new opportunities. Experiences in Putra Kampus Widya Dharma University, Bujang Dara Gawai West Kalimantan, Putera Puteri West Kalimantan, and other activities have helped me improve my communication, knowledge, self-confidence, and ability to work with others.',
    'tentang.p3': 'Outside academics, I enjoy the world of social media, content creation, and activities that let me keep learning and exploring creativity. I try to be someone open to new experiences, responsible for the work I do, and always looking for ways to make a positive impact.',
    'tentang.belief': 'Experience is built through the courage to try, to compete, and to take on new opportunities.',

    'fokus.k': 'What I do',
    'fokus.h': 'Focus &amp; skills',
    'fokus.1.h': 'Public Speaking &amp; Communication',
    'fokus.1.p': 'Sharpened at every stage of Putra Kampus, Bujang Dara Gawai, and Putera Puteri West Kalimantan &mdash; judge Q&amp;A, stage presentation, and interviews. The focus: delivering ideas clearly and confidently in front of an audience.',
    'fokus.1.t1': 'Stage', 'fokus.1.t2': 'Interview', 'fokus.1.t3': 'Judge Q&amp;A',
    'fokus.2.h': 'Social Media &amp; Content',
    'fokus.2.p': 'Won Best Social Media West Kalimantan 2026. Planning and creating content, keeping it consistent, and building audience engagement &mdash; from idea to execution.',
    'fokus.2.t1': 'Planning', 'fokus.2.t2': 'Content',
    'fokus.3.h': 'Self-Development &amp; Competition',
    'fokus.3.p': 'Regularly entering competitions as a way to learn: try, get evaluated, then improve. Four awards in two years, from campus to provincial level.',
    'fokus.3.t1': 'Competition', 'fokus.3.t2': 'Evaluation', 'fokus.3.t3': 'Iteration',
    'fokus.4.h': 'Leadership &amp; Teamwork',
    'fokus.4.p': 'Working alongside groups of finalists and event committees; freelance roles that demand initiative, managing my own activity, and building relationships with new people.',
    'fokus.4.t1': 'Teamwork', 'fokus.4.t2': 'Initiative', 'fokus.4.t3': 'Relationships',
    'fokus.kv.tools': 'Tools',
    'fokus.kv.lang': 'Languages',
    'fokus.kv.langVal': 'English (basic, improving) &middot; Spanish (learning)',

    'perjalanan.k': 'Timeline',
    'perjalanan.h': 'Journey',
    'perjalanan.1.h': 'Started Bachelor of Management',
    'perjalanan.1.p': 'Faculty of Economics &amp; Business, Widya Dharma University Pontianak.',
    'perjalanan.2.h': 'Putra Kampus UWD',
    'perjalanan.2.p': 'Placed 2nd Runner Up. Began taking public speaking and appearing in public seriously.',
    'perjalanan.3.h': 'Bujang Dara Gawai &amp; freelance',
    'perjalanan.3.p': 'Finalist, Bujang Dara Gawai West Kalimantan. Started work as an AAJI-licensed life insurance agent.',
    'perjalanan.4.h': 'Putera Puteri West Kalimantan',
    'perjalanan.4.p': 'Intelligence Category + Best Social Media. Became an ABO. 9th semester &mdash; thesis.',

    'penghargaan.k': 'On the record',
    'penghargaan.h': 'Awards &amp; achievements',
    'penghargaan.1.h': '2nd Runner Up, Putra Kampus',
    'penghargaan.1.org': 'Widya Dharma University Pontianak',
    'penghargaan.1.ctx': 'A campus-ambassador selection at UWD &mdash; seeking students strong in academics as well as communication and social skills. The 2024/2025 grand final drew around 35 finalists across faculties.',
    'penghargaan.2.h': 'Finalist, Bujang Dara Gawai',
    'penghargaan.2.org': 'West Kalimantan',
    'penghargaan.2.ctx': "A young-ambassador selection within the Gawai Dayak festival. The ambassador's role: to promote, educate about, and preserve Dayak culture. Finalist briefing covered public speaking, West Kalimantan tourism, and the region's traditional woven textiles (wastra).",
    'penghargaan.3.h': 'Intelligence Category',
    'penghargaan.3.org': 'Putera Puteri West Kalimantan',
    'penghargaan.3.ctx': 'A provincial young-generation ambassador program &mdash; preparing young people who are knowledgeable, cultured, and have a leadership spirit. &ldquo;Intelligence Category&rdquo; is the award for the participant with the best knowledge and intellect scores.',
    'penghargaan.4.h': 'Best Social Media',
    'penghargaan.4.org': 'Putera Puteri West Kalimantan',
    'penghargaan.4.ctx': 'An award for the participant with the best social-media performance and engagement over the course of the program &mdash; content consistency, reach, and audience interaction.',

    'pengalaman.k': 'In the field',
    'pengalaman.h': 'Experience',
    'pengalaman.1.role': '2025 &middot; Freelance',
    'pengalaman.1.h': 'Life Insurance Agent (AAJI-Licensed)',
    'pengalaman.1.p1': '<b>Allianz Indonesia.</b> AAJI (the Indonesian Life Insurance Association) is the sole body authorised to test and issue licences for life-insurance marketers in Indonesia.',
    'pengalaman.1.p2': 'Providing information and education about protection products to prospective clients, building communication to understand their needs, then tailoring the product explanation to those needs.',
    'pengalaman.1.p3': 'What it sharpened: communication, negotiation, patience with rejection, and honest service.',
    'pengalaman.2.role': '2026 &middot; Freelance',
    'pengalaman.2.h': 'Amway Business Owner (ABO)',
    'pengalaman.2.p1': "<b>Amway Indonesia.</b> An ABO is an independent business owner in Amway's direct-selling network; income comes from product sales, not recruitment.",
    'pengalaman.2.p2': 'Running my own business activity: learning the products, marketing to customers, presenting, and maintaining long-term relationships.',
    'pengalaman.2.p3': 'What it sharpened: basic marketing, presentation, relationship-building, and the discipline to manage activity without being told.',
    'pengalaman.3.role': '2025 &middot; Organisation',
    'pengalaman.3.h': 'Putra Kampus UWD Pontianak',
    'pengalaman.3.p1': '<b>Widya Dharma University Pontianak.</b> Took part in the full Putra Kampus selection process &mdash; from briefing and assessment to the grand-final night.',
    'pengalaman.3.p2': 'Developed public speaking, knowledge, self-confidence, and communication. Placed 2nd Runner Up, Putra Kampus UWD Pontianak 2025.',
    'pengalaman.4.role': '2026 &middot; Organisation',
    'pengalaman.4.h': 'Putera Puteri West Kalimantan',
    'pengalaman.4.p1': '<b>PPKB 2026.</b> Took part in the full Putera Puteri West Kalimantan process across the provincial-level stages.',
    'pengalaman.4.p2': 'Developed public speaking, knowledge, creativity, and communication. Won the Intelligence Category and Best Social Media, West Kalimantan 2026.',

    'pendidikan.k': 'Academic background',
    'pendidikan.h': 'Education',
    'pendidikan.yr': '2022 &ndash; Present',
    'pendidikan.h3': 'Bachelor of Management',
    'pendidikan.org': 'Widya Dharma University Pontianak &middot; Faculty of Economics &amp; Business',
    'pendidikan.p1': '9th semester &mdash; currently completing the undergraduate thesis.',
    'pendidikan.p2': 'Active in self-development activities, competitions, and communication / personal-development programs outside of coursework.',

    'kontak.k': 'Contact',
    'kontak.h': "Let's work on something meaningful together",
    'kontak.lead': 'For collaboration, event invitations, or a professional introduction.',
    'kontak.rk1': 'Email',
    'kontak.rk2': 'Location',
    'kontak.loc': 'Pontianak City, West Kalimantan',
    'kontak.cta': 'Send Email',

    'footer.place': 'Pontianak, West Kalimantan'
  };

  var i18nEls = [].slice.call(document.querySelectorAll('[data-i18n]'));
  var ID = {};                          // teks Indonesia asli, disalin dari DOM
  i18nEls.forEach(function (el) { ID[el.getAttribute('data-i18n')] = el.innerHTML; });

  function applyLang(lang) {
    var dict = lang === 'en' ? EN : ID;
    i18nEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    d.lang = lang;
    var btn = document.getElementById('lang');
    if (btn) {
      btn.textContent = lang === 'en' ? 'EN / ID' : 'ID / EN';
      btn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }
    try { localStorage.setItem('bahasa', lang); } catch (e) {}
  }

  var startLang = 'id';
  try {
    var saved = localStorage.getItem('bahasa');
    if (saved === 'en' || saved === 'id') startLang = saved;
  } catch (e) {}
  applyLang(startLang);

  var langBtn = document.getElementById('lang');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLang(d.lang === 'en' ? 'id' : 'en');
    });
  }

  /* ---------------------------------------------------------
     2. REVEAL saat masuk layar (IntersectionObserver)
     Elemen di atas lipatan saat load tidak disembunyikan.
     --------------------------------------------------------- */
  var revealSel = '.prose p, .fcard, .ecard, .gitem';
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px' });

    [].forEach.call(document.querySelectorAll(revealSel), function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
        el.classList.add('reveal');
        io.observe(el);
      }
    });
  }

  /* ---------------------------------------------------------
     3. GERAK TERIKAT GULIR — satu listener + rAF
     (Gerak masuk hero sekarang murni CSS — lihat style.css.
      Tak ada lagi ketergantungan JS untuk memunculkan hero.)
     --------------------------------------------------------- */
  var prog = document.getElementById('prog');
  var portrait = document.querySelector('[data-parallax]');
  var tlFill = document.getElementById('tlFill');
  var tlWrap = document.getElementById('tlStops');
  var tlStops = [].slice.call(document.querySelectorAll('.tl-stop'));
  var secs = [].slice.call(document.querySelectorAll('main section[id]'));
  var navLinks = {};
  [].forEach.call(document.querySelectorAll('.nav .links a'), function (a) {
    navLinks[a.getAttribute('href').slice(1)] = a;
  });
  var heroReady = reduce;
  setTimeout(function () { heroReady = true; }, 1800);

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var h = document.documentElement, vh = window.innerHeight;
      var p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (prog) prog.style.width = (p * 100) + '%';

      var cur = null;
      for (var i = 0; i < secs.length; i++) {
        if (secs[i].getBoundingClientRect().top <= vh * 0.4) cur = secs[i].id;
      }
      for (var id in navLinks) navLinks[id].classList.toggle('current', id === cur);

      if (!reduce) {
        if (portrait && heroReady) {
          portrait.style.transform = 'translateX(-50%) translateY(' + (p * -16) + 'px)';
        }
        if (tlWrap && !tlWrap.dataset.shown) {
          var r = tlWrap.getBoundingClientRect();
          if (r.top < vh * 0.82 && r.bottom > vh * 0.15) {
            tlWrap.dataset.shown = '1';
            if (tlFill) tlFill.classList.add('go');   // CSS pilih tumbuh lebar (desktop) / tinggi (mobile)
            tlStops.forEach(function (s, k) {
              setTimeout(function () { s.classList.add('on'); }, k * 120);
            });
          }
        }
      }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('load', onScroll);
  onScroll();
  setTimeout(onScroll, 300);

  /* ---------------------------------------------------------
     4. Tautan email magnetik (pegas, native rAF)
     --------------------------------------------------------- */
  var mag = document.querySelector('[data-magnetic]');
  if (mag && !reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    function loop() {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      mag.style.transform = 'translate(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px)';
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
        raf = requestAnimationFrame(loop);
      } else {
        mag.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
        raf = null;
      }
    }
    function kick() { if (!raf) raf = requestAnimationFrame(loop); }
    mag.addEventListener('pointermove', function (e) {
      var r = mag.getBoundingClientRect();
      tx = ((e.clientX - (r.left + r.width / 2)) / r.width) * 14;
      ty = ((e.clientY - (r.top + r.height / 2)) / r.height) * 8;
      kick();
    });
    mag.addEventListener('pointerleave', function () { tx = 0; ty = 0; kick(); });
  }
})();
