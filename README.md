# React Kişisel Portföy Şablonu

Bu proje, React tabanlı modern ve koyu temalı kişisel portföy sitesi şablonudur.

## Özellikler

- React + TypeScript yapısı (statik HTML'e dönüştürülmeden)
- Koyu, füme gri ve beyaz ağırlıklı modern tasarım
- Bölümler: navbar, hero, hakkımda, yetenekler, projeler, deneyim/eğitim, iletişim, footer
- Scroll reveal, hover efektleri, yumuşak geçişler ve ölçülü arka plan hareketleri
- `prefers-reduced-motion` desteği
- Mobil / tablet / masaüstü responsive yapı
- Semantik HTML ve erişilebilir etkileşimli öğeler

## Yerel Geliştirme

Gereksinim: Node.js 18+ (önerilir)

```bash
npm install
npm start
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde açılır.

## Test ve Build

```bash
npm test -- --watchAll=false
npm run build
```

## İçerik Nereden Değiştirilir?

Kişisel bilgiler, sosyal bağlantılar, proje kartları ve deneyim/eğitim verileri tek yerden düzenlenir:

- `src/data/portfolioData.ts`

## Cloudflare Pages Build Ayarları

Bu proje Cloudflare Pages üzerinde build ile sorunsuz yayınlanabilir.

- **Framework preset:** Create React App (veya None)
- **Build command:** `npm run build`
- **Build output directory:** `build`
- **Node.js sürümü:** 18+

Git bağlantısı ile kullanıyorsanız her push sonrası otomatik deploy alırsınız.
