# Modern React Portföy Şablonu

Koyu (siyah/füme) temalı, hareketli ve responsive kişisel portföy arayüzü.

## Öne çıkanlar

- React + TypeScript tabanlı yapı (statik HTML'e dönüştürülmedi)
- Bölümler: sabit/aktif navbar, hero, hakkımda, yetenekler, projeler, deneyim/eğitim, iletişim, footer
- Projeler veri dizisinden kart olarak üretilir (teknoloji etiketleri + demo/kaynak kodu)
- Scroll reveal, hover efektleri ve ölçülü arka plan hareketleri
- `prefers-reduced-motion` desteği
- Erişilebilir semantik yapı, klavye odağı ve kontrast odaklı tasarım

## İçerik nereden güncellenir?

Tüm ana içerik tek dosyada tutulur:

- `src/data/portfolio.ts`

Bu dosyadan aşağıdakileri düzenleyebilirsiniz:

- Hero: isim, unvan, açıklama, CTA butonları, sosyal bağlantılar
- Hakkımda metni ve öne çıkanlar
- Yetenek kategorileri
- Projeler (kartlar, teknoloji etiketleri, demo ve kaynak kodu URL'leri)
- Deneyim/eğitim zaman çizelgesi
- İletişim bilgileri
- Footer notu

## Yerel geliştirme

```bash
npm install
npm start
```

Uygulama: `http://localhost:3000`

## Test ve production build

```bash
npm test -- --watchAll=false
npm run build
```

Build çıktısı: `build/`

## Cloudflare Pages ayarları

Bu proje `react-scripts` kullanır. Cloudflare Pages üzerinde ayarlar:

- Framework preset: **Create React App** (veya None)
- Build command: `npm run build`
- Build output directory: `build`
- Node version: Cloudflare varsayılan güncel LTS (gerekirse `NODE_VERSION` tanımlayın)

Git entegrasyonu ile her push sonrası otomatik deploy alınabilir.
