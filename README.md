# Tomasz Gajda - Portfolio Web 5

Portfolio satu halaman untuk front-end developer dan UI designer. Versi ini difokuskan pada konten yang lebih profesional, struktur yang lebih scalable, aksesibilitas, dan responsivitas mobile-first.

## Peningkatan Utama

- Konten berbahasa Indonesia yang lebih jelas untuk hero, layanan, keahlian, proses kerja, portofolio, dan kontak.
- Struktur HTML semantik dengan `main`, `section`, `article`, label form, skip link, dan atribut ARIA penting.
- CSS dipusatkan dalam design tokens (`:root`) agar warna, radius, shadow, spacing, dan container mudah dikembangkan.
- Layout responsif menggunakan fluid container, CSS grid adaptif, breakpoint tablet/mobile, viewport lock sesuai permintaan mobile, dan dukungan `prefers-reduced-motion`.
- JavaScript modular untuk menu mobile, viewport lock, smooth scroll, active navigation, reveal animation, parallax hero image, filter portofolio, back-to-top, dan validasi form.

## Struktur File

```text
portoweb5/
├── index.html      # Markup utama dan konten portofolio
├── css/style.css   # Design system, layout, animasi, dan responsive styles
├── js/main.js      # Interaksi UI modular
└── README.md       # Dokumentasi proyek
```

## Menjalankan Secara Lokal

Tidak perlu build step karena proyek masih statis dan memakai CDN untuk Tailwind, FontAwesome, dan Google Fonts.

```bash
python3 -m http.server 8765
# buka http://127.0.0.1:8765/index.html
```

## Catatan Pengembangan

- Ubah token global di `css/style.css` untuk menyesuaikan brand.
- Tambahkan kartu portofolio baru dengan atribut `data-portfolio-category` agar filter tetap berjalan.
- Sambungkan form kontak ke endpoint backend nyata pada fungsi `initFormHandling` di `js/main.js`.
