/*
 * i18n.js - Dua bahasa (Indonesia / Inggris) untuk MOVIEE69.
 *
 * Cara kerja:
 *  1. Jika pengunjung pernah memilih bahasa lewat tombol ID/EN, pilihan itu dipakai (localStorage).
 *  2. Jika belum, bahasa browser dibaca (navigator.languages). Bahasa Indonesia -> 'id',
 *     selain itu -> 'en'.
 *  3. Teks pada elemen dengan atribut data-i18n / data-i18n-html / data-i18n-attr diganti
 *     sesuai kamus di bawah. Teks asli di HTML adalah bahasa Indonesia (bahasa dasar).
 *
 * Judul & deskripsi video berasal dari videos.json dan tidak diterjemahkan otomatis.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'moviee69_lang';
  var SUPPORTED = ['id', 'en'];

  var DICT = {
    id: {
      'site.desc': 'MOVIEE69 - situs berbagi video yang dipublikasikan secara legal.',
      'nav.categories': 'Kategori video',
      'cat.all': 'Semua',
      'cat.indonesia': 'Indonesia',
      'cat.papua': 'Papua',
      'cat.barat': 'Barat',
      'ad.banner': 'Iklan Banner',
      'ad.native': 'Iklan Native',
      'page.videos': 'Halaman video',
      'page.history': 'Halaman riwayat video',
      'page.n': 'Halaman {n}',
      'page.prev': 'Halaman sebelumnya',
      'page.next': 'Halaman berikutnya',
      'home.commit.h': 'Komitmen kami',
      'home.commit.p': 'Kami tidak mengizinkan konten seksual yang melibatkan anak di bawah umur, kekerasan seksual, eksploitasi, pelanggaran hak cipta, maupun materi ilegal lainnya.',
      'footer.rights': 'Hak cipta dilindungi.',
      'footer.privacy': 'Kebijakan Privasi',
      'footer.about': 'Tentang',
      'video.back': '\u2190 Kembali ke Beranda',
      'video.category': 'Kategori:',
      'video.published': 'Publikasi:',
      'video.play': 'Putar video',
      'video.desc': 'Deskripsi',
      'video.history': 'Riwayat Video',
      'video.latest': 'Video terbaru',
      'video.none': 'Belum ada video lainnya.',
      'lang.label': 'Pilih bahasa',

      'about.title': 'Tentang - MOVIEE69',
      'about.h1': 'Tentang Kami',
      'about.p': 'MOVIEE69 adalah situs yang sedang ditata ulang. Kami berkomitmen hanya mempublikasikan konten yang legal, memiliki izin, menghormati privasi, dan tidak melanggar hak pihak lain.',
      'back.home': 'Kembali ke beranda',

      'pp.title': 'Kebijakan Privasi - MOVIEE69',
      'pp.desc': 'Kebijakan privasi pengunjung website MOVIEE69.',
      'pp.h1': 'Kebijakan Privasi',
      'pp.updated': '<strong>Terakhir diperbarui: 11 November 2026</strong>',
      'pp.intro': 'Kebijakan ini menjelaskan bagaimana situs MOVIEE69 ("kami") menangani informasi ketika Anda mengunjungi situs ini.',
      'pp.1.h': '1. Informasi yang dikumpulkan',
      'pp.1.p': 'Situs ini merupakan situs statis yang di-host melalui GitHub Pages. Kami tidak menyediakan akun pengguna, formulir pendaftaran, atau fitur pembayaran. Penyedia hosting dapat memproses data teknis seperti alamat IP, jenis browser, waktu akses, dan informasi permintaan untuk menjaga keamanan serta operasional layanan sesuai kebijakan mereka.',
      'pp.2.h': '2. Cookie dan penyimpanan lokal',
      'pp.2.p': 'Situs ini sendiri tidak membuat akun pengguna. Namun, jaringan iklan pihak ketiga yang kami gunakan (lihat bagian Iklan) dapat menyimpan cookie atau teknologi serupa di browser Anda. Browser atau layanan hosting juga dapat menggunakan teknologi teknis yang diperlukan untuk menjalankan layanan. Situs ini juga menyimpan pilihan bahasa Anda (ID/EN) di penyimpanan lokal browser. Anda dapat mengatur atau menghapus cookie melalui pengaturan browser.',
      'pp.3.h': '3. Layanan pihak ketiga dan tautan eksternal',
      'pp.3.p': 'Situs dapat memuat tautan ke situs pihak ketiga. Jika Anda membuka tautan tersebut, pengelolaan data pribadi tunduk pada kebijakan privasi penyedia situs tujuan. Kami tidak mengendalikan praktik privasi situs pihak ketiga.',
      'pp.4.h': '4. Iklan',
      'pp.4.p': 'Situs ini menampilkan iklan dari jaringan iklan pihak ketiga (Adsterra), berupa iklan pop-under di halaman utama dan halaman video, serta tautan iklan (smartlink) yang terbuka di tab baru ketika Anda menekan tombol putar video. Penyedia iklan dapat mengumpulkan data teknis seperti alamat IP, jenis perangkat dan browser, serta menggunakan cookie untuk menayangkan dan mengukur iklan sesuai kebijakan privasi mereka. Kami tidak mengendalikan data tersebut. Anda dapat membatasi pelacakan melalui pengaturan browser atau pemblokir iklan.',
      'pp.5.h': '5. Keamanan dan penyimpanan data',
      'pp.5.p': 'Kami tidak meminta pengunjung mengirimkan data pribadi melalui situs ini. Data teknis yang diproses oleh penyedia hosting tunduk pada kebijakan dan masa penyimpanan penyedia tersebut.',
      'pp.6.h': '6. Privasi anak',
      'pp.6.p': 'Situs ini tidak ditujukan untuk anak-anak dan tidak mengizinkan materi seksual yang melibatkan anak di bawah umur. Kami tidak dengan sengaja meminta atau mengumpulkan informasi pribadi anak.',
      'pp.7.h': '7. Perubahan kebijakan',
      'pp.7.p': 'Kami dapat memperbarui kebijakan ini apabila fitur atau layanan situs berubah. Versi terbaru akan ditampilkan pada halaman ini beserta tanggal pembaruannya.',
      'pp.8.h': '8. Kontak',
      'pp.8.p': 'Untuk pertanyaan atau permintaan terkait privasi, silakan hubungi pengelola melalui repositori proyek: <a href="https://github.com/moviee69/moviee69">GitHub repository</a>.'
    },

    en: {
      'site.desc': 'MOVIEE69 - a video sharing site featuring legally published content.',
      'nav.categories': 'Video categories',
      'cat.all': 'All',
      'cat.indonesia': 'Indonesia',
      'cat.papua': 'Papua',
      'cat.barat': 'Western',
      'ad.banner': 'Banner Ad',
      'ad.native': 'Native Ad',
      'page.videos': 'Video pages',
      'page.history': 'Video history pages',
      'page.n': 'Page {n}',
      'page.prev': 'Previous page',
      'page.next': 'Next page',
      'home.commit.h': 'Our commitment',
      'home.commit.p': 'We do not allow sexual content involving minors, sexual violence, exploitation, copyright infringement, or any other illegal material.',
      'footer.rights': 'All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.about': 'About',
      'video.back': '\u2190 Back to Home',
      'video.category': 'Category:',
      'video.published': 'Published:',
      'video.play': 'Play video',
      'video.desc': 'Description',
      'video.history': 'Video History',
      'video.latest': 'Latest videos',
      'video.none': 'No other videos yet.',
      'lang.label': 'Choose language',

      'about.title': 'About - MOVIEE69',
      'about.h1': 'About Us',
      'about.p': 'MOVIEE69 is a site that is currently being reorganized. We are committed to publishing only content that is legal, authorized, respects privacy, and does not infringe the rights of others.',
      'back.home': 'Back to home',

      'pp.title': 'Privacy Policy - MOVIEE69',
      'pp.desc': 'Visitor privacy policy for the MOVIEE69 website.',
      'pp.h1': 'Privacy Policy',
      'pp.updated': '<strong>Last updated: November 11, 2026</strong>',
      'pp.intro': 'This policy explains how the MOVIEE69 website ("we") handles information when you visit this site.',
      'pp.1.h': '1. Information collected',
      'pp.1.p': 'This is a static website hosted on GitHub Pages. We do not provide user accounts, registration forms, or payment features. The hosting provider may process technical data such as IP address, browser type, access time, and request information to keep the service secure and operational, in accordance with its own policies.',
      'pp.2.h': '2. Cookies and local storage',
      'pp.2.p': 'This site does not create user accounts. However, the third-party ad network we use (see the Advertising section) may store cookies or similar technologies in your browser. Your browser or the hosting service may also use technical mechanisms necessary to run the service. This site also saves your language choice (ID/EN) in your browser\'s local storage. You can manage or delete cookies through your browser settings.',
      'pp.3.h': '3. Third-party services and external links',
      'pp.3.p': 'The site may contain links to third-party websites. If you open those links, the handling of your personal data is subject to the privacy policy of the destination site. We do not control the privacy practices of third-party sites.',
      'pp.4.h': '4. Advertising',
      'pp.4.p': 'This site displays ads from a third-party ad network (Adsterra), in the form of pop-under ads on the home page and video pages, as well as an ad link (smartlink) that opens in a new tab when you press the video play button. The ad provider may collect technical data such as IP address, device and browser type, and may use cookies to deliver and measure ads in accordance with its own privacy policy. We do not control that data. You can limit tracking through your browser settings or an ad blocker.',
      'pp.5.h': '5. Security and data retention',
      'pp.5.p': 'We do not ask visitors to submit personal data through this site. Technical data processed by the hosting provider is subject to that provider\'s policies and retention periods.',
      'pp.6.h': '6. Children\'s privacy',
      'pp.6.p': 'This site is not intended for children and does not allow sexual material involving minors. We do not knowingly request or collect personal information from children.',
      'pp.7.h': '7. Changes to this policy',
      'pp.7.p': 'We may update this policy when the site\'s features or services change. The latest version will be shown on this page together with its update date.',
      'pp.8.h': '8. Contact',
      'pp.8.p': 'For privacy-related questions or requests, please contact the administrator through the project repository: <a href="https://github.com/moviee69/moviee69">GitHub repository</a>.'
    }
  };

  /* Nama kategori yang ditampilkan pada badge kartu video (nilai asli di HTML: indonesia/papua/barat). */
  var CAT_KEYS = { indonesia: 'cat.indonesia', papua: 'cat.papua', barat: 'cat.barat' };

  function safeGet() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function safeSet(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) {}
  }

  /* Bahasa browser: 'id' hanya jika bahasa utama pengunjung adalah Indonesia. */
  function detect() {
    var saved = safeGet();
    if (SUPPORTED.indexOf(saved) !== -1) return saved;
    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || navigator.userLanguage || 'en'];
    var first = String(langs[0] || 'en').toLowerCase();
    return (first === 'id' || first.indexOf('id-') === 0 || first === 'in') ? 'id' : 'en';
  }

  var current = detect();
  document.documentElement.lang = current;

  function t(key, vars) {
    var s = (DICT[current] && DICT[current][key]);
    if (s === undefined) s = DICT.id[key];
    if (s === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    }
    return s;
  }

  function apply(root) {
    root = root || document;

    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    root.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    /* data-i18n-attr="aria-label:nav.categories;content:site.desc" */
    root.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var i = pair.indexOf(':');
        if (i < 1) return;
        el.setAttribute(pair.slice(0, i).trim(), t(pair.slice(i + 1).trim()));
      });
    });

    /* Badge kategori: simpan nilai asli lalu tampilkan terjemahannya. */
    root.querySelectorAll('.badge').forEach(function (el) {
      if (!el.dataset.cat) el.dataset.cat = el.textContent.trim().toLowerCase();
      var key = CAT_KEYS[el.dataset.cat];
      el.textContent = key ? t(key) : el.dataset.cat;
    });

    /* Kategori pada baris "Kategori: ..." di halaman video. */
    root.querySelectorAll('[data-cat-label]').forEach(function (el) {
      var key = CAT_KEYS[el.getAttribute('data-cat-label')];
      if (key) el.textContent = t(key);
    });

    /* Tombol ID/EN */
    root.querySelectorAll('.lang-btn').forEach(function (b) {
      var active = b.getAttribute('data-lang') === current;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1 || lang === current) return;
    current = lang;
    safeSet(lang);
    document.documentElement.lang = lang;
    apply(document);
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
  }

  /* Sisipkan tombol ID | EN ke dalam <header> bila belum ada. */
  function mountSwitcher() {
    if (document.querySelector('.lang-switch')) return;
    var header = document.querySelector('header');
    if (!header) return;
    var box = document.createElement('div');
    box.className = 'lang-switch';
    box.setAttribute('role', 'group');
    box.setAttribute('data-i18n-attr', 'aria-label:lang.label');
    ['id', 'en'].forEach(function (code) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'lang-btn';
      b.setAttribute('data-lang', code);
      b.textContent = code.toUpperCase();
      b.addEventListener('click', function () { setLang(code); });
      box.appendChild(b);
    });
    header.appendChild(box);
  }

  window.I18N = {
    t: t,
    apply: apply,
    setLang: setLang,
    get lang() { return current; }
  };

  document.addEventListener('DOMContentLoaded', function () {
    mountSwitcher();
    apply(document);
  });
})();
