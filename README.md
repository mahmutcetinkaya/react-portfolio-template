# Mahmut Çetinkaya — Kişisel Portföy

React ve TypeScript ile hazırlanmış, koyu/füme temalı ve responsive kişisel portföy sitesi.

## Yerel çalıştırma

```bash
npm install
npm start
```

Üretim build'i almak için:

```bash
npm run build
```

Build çıktısı Create React App tarafından `build/` klasörüne oluşturulur.

## Cloudflare Pages

GitHub reposunu Cloudflare Pages'e bağlarken şu ayarları kullan:

- **Framework preset:** Create React App (veya None)
- **Build command:** `npm run build`
- **Build output directory:** `build`
- **Node version:** 18 veya üzeri

Her push işleminden sonra Cloudflare Pages yeni bir deployment oluşturur.

## İçerikleri değiştirme

Kişisel bilgiler, sosyal bağlantılar, yetenekler ve proje kartları `src/App.tsx` dosyasının üst kısmındaki `profile`, `skills` ve `projects` sabitlerinden düzenlenebilir. Renkler ve tüm görsel stil `src/index.scss` içindeki CSS değişkenlerinden yönetilir.

Gerçek e-posta, GitHub, LinkedIn, CV ve proje bağlantılarını yayınlamadan önce yer tutucularla değiştir.
