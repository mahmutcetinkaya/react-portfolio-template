import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";

export type SocialPlatform = "github" | "linkedin" | "email";

export interface SocialLink {
  label: string;
  url: string;
  platform: SocialPlatform;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
  image: string;
}

export const navigationItems = [
  { id: "hero", label: "Ana Sayfa" },
  { id: "about", label: "Hakkımda" },
  { id: "skills", label: "Yetenekler" },
  { id: "projects", label: "Projeler" },
  { id: "timeline", label: "Deneyim" },
  { id: "contact", label: "İletişim" },
];

export const portfolioData = {
  seo: {
    siteName: "Mahmut Çetinkaya | Portföy",
    description:
      "Modern, hareketli ve koyu temalı kişisel portföy şablonu. Projeler, deneyimler, yetenekler ve iletişim bilgileri tek noktadan kolayca güncellenebilir.",
  },
  hero: {
    greeting: "Merhaba, ben",
    name: "Ad Soyad",
    title: "Frontend & Full Stack Geliştirici",
    description:
      "Performans odaklı, erişilebilir ve ölçeklenebilir web ürünleri geliştiriyorum. Bu şablon üzerinden içeriklerinizi hızlıca özelleştirip yayına alabilirsiniz.",
    primaryCta: { label: "Projeleri İncele", targetId: "projects" },
    secondaryCta: { label: "İletişime Geç", targetId: "contact" },
    socialLinks: [
      {
        label: "GitHub Profili",
        platform: "github" as const,
        url: "https://github.com/your-username",
      },
      {
        label: "LinkedIn Profili",
        platform: "linkedin" as const,
        url: "https://www.linkedin.com/in/your-profile",
      },
      {
        label: "E-posta Gönder",
        platform: "email" as const,
        url: "mailto:hello@example.com",
      },
    ] as SocialLink[],
  },
  about: {
    title: "Hakkımda",
    text: "Kullanıcı deneyimini merkeze alan, modern teknolojilerle uçtan uca ürün geliştiren bir yazılım geliştiricisiyim. Kod kalitesi, sürdürülebilir mimari ve ekip içi iletişim konularına önem veririm.",
    highlights: [
      "5+ yıl web geliştirme deneyimi",
      "React, TypeScript ve Node.js odaklı üretim",
      "Cloud tabanlı dağıtım ve CI/CD süreçleri",
    ],
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "SCSS", "Accessibility"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST API", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps & Araçlar",
      items: ["Cloudflare Pages", "Docker", "GitHub Actions", "Jest", "Figma"],
    },
  ],
  projects: [
    {
      title: "Kurumsal Yönetim Paneli",
      description:
        "Rol bazlı yetkilendirme, gelişmiş filtreleme ve gerçek zamanlı raporlama içeren yönetim paneli.",
      technologies: ["React", "TypeScript", "Material UI"],
      demoUrl: "https://example.com/demo-1",
      sourceUrl: "https://github.com/your-username/project-1",
      image: mock01,
    },
    {
      title: "E-Ticaret Vitrin Uygulaması",
      description:
        "Ürün keşfi, kategori yönetimi ve ödeme adımına hazırlık akışları içeren hızlı vitrin deneyimi.",
      technologies: ["React", "SCSS", "REST API"],
      demoUrl: "https://example.com/demo-2",
      sourceUrl: "https://github.com/your-username/project-2",
      image: mock02,
    },
    {
      title: "İçerik Yönetim Platformu",
      description:
        "Editör ekiplerinin iş akışını hızlandıran, modüler ve ölçeklenebilir içerik yönetim arayüzü.",
      technologies: ["TypeScript", "Node.js", "PostgreSQL"],
      demoUrl: "https://example.com/demo-3",
      sourceUrl: "https://github.com/your-username/project-3",
      image: mock03,
    },
    {
      title: "Analitik Gösterge Paneli",
      description:
        "KPI takibi için dinamik grafikler, karşılaştırmalı raporlar ve dışa aktarma seçenekleri sunar.",
      technologies: ["React", "Charting", "Testing Library"],
      demoUrl: "https://example.com/demo-4",
      sourceUrl: "https://github.com/your-username/project-4",
      image: mock04,
    },
  ] as ProjectItem[],
  timeline: [
    {
      period: "2024 - Günümüz",
      title: "Kıdemli Frontend Geliştirici",
      organization: "Örnek Teknoloji A.Ş.",
      details:
        "Kurumsal ürünlerin yeniden tasarım ve performans iyileştirme sürecine liderlik ettim.",
    },
    {
      period: "2022 - 2024",
      title: "Full Stack Geliştirici",
      organization: "Dijital Ürün Stüdyosu",
      details:
        "Çoklu müşteri projelerinde frontend mimarisi ve API entegrasyonlarını yönettim.",
    },
    {
      period: "2018 - 2022",
      title: "Bilgisayar Mühendisliği",
      organization: "Üniversite / Eğitim",
      details:
        "Yazılım mühendisliği, veri yapıları ve kullanıcı deneyimi odaklı eğitim aldım.",
    },
  ],
  contact: {
    title: "İletişim",
    description:
      "Yeni bir ürün, freelance proje ya da ekip fırsatı için iletişime geçebilirsiniz.",
    email: "hello@example.com",
    phone: "+90 (5xx) xxx xx xx",
    location: "İstanbul, Türkiye",
  },
  footer: {
    note: "Bu şablon React tabanlıdır ve Cloudflare Pages üzerinde yayınlanmaya uygundur.",
  },
};
