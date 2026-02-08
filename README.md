# OPPO Manufacturing Portal 🏭

Portal website untuk Departemen Manufacturing Engineering OPPO Indonesia Manufacturing dengan 10 sistem yang terbagi dalam 4 kategori.

## ✨ Features

- 🎨 Modern & Eye-catching UI dengan animasi smooth
- 🚀 Animasi entrance saat pertama load
- 💫 Animasi redirect dengan overlay dan spinner
- 📱 Responsive design
- 🎯 10 website systems dalam 4 kategori:
  - Production Systems (3 websites)
  - Engineering Tools (3 websites)
  - Analytics Hub (2 websites)
  - Documentation (2 websites)

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📋 Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js** (versi 16 atau lebih tinggi)
- **npm** atau **yarn**

Cek versi Node.js Anda:
```bash
node --version
```

## 🚀 Setup Instructions

### 1. Extract Project Files

Extract semua file yang sudah didownload ke folder project Anda.

Struktur folder harus seperti ini:
```
oppo-manufacturing-portal/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── OppoPortal.jsx
    └── index.css
```

### 2. Install Dependencies

Buka terminal/command prompt di folder project, lalu jalankan:

```bash
npm install
```

Proses ini akan menginstall semua dependencies yang dibutuhkan (React, Vite, Tailwind CSS, Lucide React, dll).

### 3. Run Development Server

Setelah instalasi selesai, jalankan:

```bash
npm run dev
```

Server development akan berjalan di: **http://localhost:3000**

Browser akan otomatis terbuka dengan portal website Anda! 🎉

### 4. Build for Production

Untuk membuat production build:

```bash
npm run build
```

File production akan ada di folder `dist/`

### 5. Preview Production Build

Untuk preview production build:

```bash
npm run preview
```

## 📝 Customization

### Mengubah URL Website

Edit file `src/OppoPortal.jsx`, cari bagian `categories` dan ubah URL sesuai kebutuhan:

```javascript
{
  name: 'MES Dashboard',
  url: 'https://mes.oppo-indonesia.com', // Ubah URL di sini
  desc: 'Manufacturing Execution System',
  icon: <Monitor className="w-8 h-8 text-emerald-400" />
}
```

### Menambah Website Baru

Tambahkan object baru di dalam array `websites` pada kategori yang diinginkan:

```javascript
{
  name: 'Website Baru',
  url: 'https://example.com',
  desc: 'Deskripsi website',
  icon: <YourIcon className="w-8 h-8 text-emerald-400" />
}
```

### Mengubah Warna Tema

Ubah warna di bagian `categories`:

```javascript
{
  name: 'Production Systems',
  color: '#00FF88',  // Warna utama
  gradient: 'from-emerald-500 to-green-400',  // Gradient untuk button
  bgGradient: 'from-emerald-950/40 to-green-950/40',  // Background gradient
  // ...
}
```

## 🎨 Color Palette

- **Production Systems**: Emerald/Green (#00FF88)
- **Engineering Tools**: Orange/Amber (#FF6B00)
- **Analytics Hub**: Cyan/Blue (#00D4FF)
- **Documentation**: Purple/Violet (#B366FF)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🐛 Troubleshooting

### Port 3000 sudah digunakan?

Edit `vite.config.js` dan ubah port:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,  // Ganti dengan port lain
    open: true
  }
})
```

### Module not found?

Pastikan semua dependencies sudah terinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

© 2026 OPPO Indonesia Manufacturing - Manufacturing Engineering Department

## 🤝 Support

Jika ada pertanyaan atau masalah, hubungi IT Department atau Manufacturing Engineering Team.

---

**Made with ❤️ for OPPO Manufacturing Engineering Team**
