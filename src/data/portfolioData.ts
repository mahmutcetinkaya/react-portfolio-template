export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
};

export const portfolioData = {
  profile: {
    name: 'Ad Soyad',
    title: 'Frontend Developer',
    heroDescription:
      'Modern web arayüzleri geliştiren, performans ve kullanıcı deneyimine odaklanan bir geliştirici.',
    about:
      'Merhaba, ben Ad Soyad. React ve TypeScript ağırlıklı projelerde kullanıcı odaklı, erişilebilir ve sürdürülebilir arayüzler geliştiriyorum. Bu alana kendi gerçek içeriklerinizi kolayca ekleyebilirsiniz.',
    location: 'İstanbul, Türkiye',
    email: 'ornek@eposta.com',
    cvUrl: '#'
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X', href: 'https://x.com/' }
  ] as SocialLink[],
  skills: [
    'React',
    'TypeScript',
    'JavaScript',
    'SCSS',
    'Material UI',
    'Node.js',
    'REST API',
    'Cloudflare Pages'
  ],
  projects: [
    {
      title: 'Proje Adı 01',
      description:
        'Kurumsal bir panel arayüzü için geliştirilen responsive yönetim ekranları ve grafik raporlama altyapısı.',
      tech: ['React', 'TypeScript', 'MUI'],
      repoUrl: 'https://github.com/',
      demoUrl: '#'
    },
    {
      title: 'Proje Adı 02',
      description:
        'Hızlı içerik yönetimi için modüler bileşen yapısına sahip koyu temalı web uygulaması.',
      tech: ['React', 'SCSS', 'Node.js'],
      repoUrl: 'https://github.com/',
      demoUrl: '#'
    },
    {
      title: 'Proje Adı 03',
      description:
        'Kullanıcı etkileşimini artırmak için mikro animasyonlar ve erişilebilir navigasyon içeren portföy deneyimi.',
      tech: ['React', 'Accessibility', 'Cloudflare'],
      repoUrl: 'https://github.com/',
      demoUrl: '#'
    }
  ] as ProjectItem[],
  timeline: [
    {
      period: '2024 - Günümüz',
      title: 'Frontend Developer',
      subtitle: 'Şirket / Takım Adı',
      description:
        'Büyük ölçekli arayüzlerde performans iyileştirmeleri, tasarım sistemi entegrasyonu ve erişilebilirlik geliştirmeleri.'
    },
    {
      period: '2022 - 2024',
      title: 'Frontend Stajyer / Junior',
      subtitle: 'Şirket / Takım Adı',
      description:
        'Bileşen tabanlı geliştirme, test süreçleri ve responsive ekran geliştirmeleri.'
    },
    {
      period: '2018 - 2022',
      title: 'Lisans Eğitimi',
      subtitle: 'Üniversite Adı',
      description: 'Bilgisayar mühendisliği odaklı eğitim ve uygulamalı proje deneyimi.'
    }
  ] as TimelineItem[],
  contact: {
    heading: 'İletişim',
    description:
      'Yeni bir proje, iş birliği veya danışmanlık için benimle iletişime geçebilirsiniz.',
    ctaLabel: 'E-posta Gönder',
    email: 'ornek@eposta.com'
  }
};
