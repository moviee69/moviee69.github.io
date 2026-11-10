# MOVIEE69

Website video statis dengan halaman admin, pengaturan iklan, dan proses publikasi otomatis melalui GitHub Actions ke GitHub Pages.

## Fitur utama

- Kategori video: Indonesia, Papua, dan Barat.
- Slug video dibuat otomatis dari judul dan Part.
- Nomor Part dihitung otomatis per kategori saat video baru dibuat.
- Mengedit video tidak mengubah slug atau Part yang sudah ada.
- Urutan video mengikuti tanggal dan jam publikasi, bukan waktu terakhir diedit.
- Halaman utama menampilkan navigasi nomor halaman di atas dan di bawah daftar video.
- Cover video disimpan di `covers/[slug].jpg`.
- Gambar Open Graph disimpan di `covers/og/[slug].jpg` dengan ukuran 1200 × 630 piksel.
- Player Google Drive tetap didukung; URL embed dapat digunakan jika tersedia.
- `videos.json` adalah sumber data video utama.
- `config.json` menyimpan identitas website dan pengaturan iklan.
- GitHub Actions menjalankan generator halaman dan deployment ke GitHub Pages.

## Panel admin

Panel admin dapat dibuka melalui `/admin/` setelah website ter-deploy.

Panel menggunakan GitHub Personal Access Token (PAT) yang dimasukkan sendiri oleh admin. Token disimpan di `sessionStorage` pada browser, bukan ditulis ke file website. Token perlu memiliki izin **Contents: Read and write** untuk repository yang dipilih di pengaturan website.

Jangan membagikan token kepada siapa pun dan jangan memasukkan token ke file publik atau commit Git.

## Pengaturan website dan iklan

Melalui panel admin, admin dapat mengatur nama dan URL website serta konfigurasi iklan yang tersedia di proyek. Gunakan kode dan URL iklan milik sendiri. Periksa pengaturan iklan sebelum mengaktifkannya di website produksi.

## Iklan

- **Popunder**: tampil di halaman utama dan di setiap halaman video (termasuk bagian Riwayat Video).
- **Smartlink**: hanya terbuka di tab baru saat pengunjung menekan tombol putar video.
- Popunder dan Smartlink masing-masing punya saklar aktif/nonaktif di Adsterra Settings (selain saklar utama "Aktifkan iklan").
- Isi kode Popunder dan URL Smartlink dari **Admin → Adsterra Settings**, lalu simpan. GitHub Actions akan menerapkannya ke halaman.

## Pemeriksaan akses

Skrip pemeriksaan akses lama masih disimpan sebagai aset proyek, tetapi tidak lagi dimuat oleh halaman publik maupun generator. Tidak ada pemeriksaan AdBlock, VPN, atau proxy yang aktif pada versi bersih ini.

## Data publikasi

Contoh nilai tanggal dan jam publikasi di data video:

```json
{
  "tanggal": "2026-09-19",
  "jam": "21:30"
}
```

## Struktur file penting

- `videos.json` — data video utama.
- `config.json` — konfigurasi website dan iklan.
- `generate.py` — generator halaman HTML.
- `templates/` — template halaman utama dan halaman video.
- `assets/css/style.css` — gaya tampilan website.
- `assets/js/` — JavaScript website, termasuk pemeriksaan akses bila diaktifkan.
- `admin/` — panel administrasi.
- `covers/` — cover dan gambar Open Graph.
- `videos/` — halaman HTML video hasil generator.
- `.github/workflows/deploy.yml` — workflow build/deploy GitHub Actions.

## Deployment ke GitHub Pages

1. Unggah atau commit perubahan ke branch `main`.
2. Di GitHub, buka **Settings → Pages**.
3. Pilih **GitHub Actions** sebagai Source jika belum dipilih.
4. Buka tab **Actions** dan pastikan workflow deploy selesai dengan status berhasil.
5. Buka website dan lakukan hard refresh (`Ctrl+F5`) untuk memuat file terbaru.

Jangan menghapus `videos.json`, `config.json`, atau file konfigurasi repository saat menerapkan pembaruan.

## Menyalin proyek ke repository lain

1. Salin source proyek ke repository GitHub tujuan.
2. Pastikan branch yang dipakai sesuai dengan workflow (umumnya `main`).
3. Buka `/admin/` setelah deployment.
4. Masukkan GitHub Owner, Repository, Branch, dan token untuk repository tujuan.
5. Di **Website Settings**, isi nama dan URL website lalu simpan.
6. Di **Adsterra Settings**, isi kode iklan milik website tersebut jika ingin menggunakan iklan.
7. Periksa pengaturan dan jalankan pengujian sebelum membagikan website.

## Migrasi data lama

Data lama dapat diimpor melalui `scripts/import_legacy.py` setelah URL legacy diisi secara manual bila diperlukan. Script tersebut membaca `videos.json` lama; folder `covers/` lama tidak dibaca secara otomatis.


## Status pembersihan konten

Seluruh data video lama, halaman video hasil publikasi, dan gambar cover lama telah dihapus dari paket ini. Halaman `privacy-policy.html` dan `about.html` telah ditambahkan. Sebelum menambahkan konten baru, pastikan konten legal, memiliki izin publikasi, dan tidak melanggar kebijakan penyedia iklan.
