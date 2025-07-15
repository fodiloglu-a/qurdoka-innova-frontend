// src/app/components/projects/projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

// Arayüzler
interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  category: string; // 'web-design', 'ecommerce' etc.
  categoryName: string;
  categoryClass: string;
  imageClass: string;
  iconClass: string;
  technologies: string[];
  year: string;
  duration: string;
  teamSize: number;
  demoUrl?: string;
}

interface FilterCategory {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  // Kategori Filtreleri
  filterCategories: FilterCategory[] = [
    { id: 'all', name: 'Tümü', icon: 'fas fa-th-large' },
    { id: 'web-development', name: 'Web Geliştirme', icon: 'fas fa-code' },
    { id: 'web-design', name: 'Web Tasarım', icon: 'fas fa-palette' },
    { id: 'ecommerce', name: 'E-Ticaret', icon: 'fas fa-shopping-cart' },
    { id: 'mobile-app', name: 'Mobil Uygulama', icon: 'fas fa-mobile-alt' },
  ];

  // Projelerin Tam Listesi
  private allProjects: Project[] = [
    {
      id: 1,
      title: 'Kurumsal Finans Platformu',
      description:
        'Finansal danışmanlık firması için modern ve güvenli web platformu.',
      fullDescription:
        'Bu proje, müşterilerin yatırım portföylerini yönetebilecekleri, piyasa analizlerine ulaşabilecekleri ve danışmanlarla doğrudan iletişim kurabilecekleri kapsamlı bir platformdur.',
      features: [
        'Gerçek zamanlı piyasa verileri',
        'Güvenli kullanıcı kimlik doğrulama',
        'Detaylı raporlama araçları',
      ],
      category: 'web-development',
      categoryName: 'Web Geliştirme',
      categoryClass: 'category-web-dev',
      imageClass: 'image-web-development',
      iconClass: 'fas fa-chart-line',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'WebSocket'],
      year: '2023',
      duration: '8 Ay',
      teamSize: 6,
      demoUrl: '#',
    },
    {
      id: 2,
      title: 'Lüks Moda E-Ticaret Sitesi',
      description:
        'Uluslararası bir moda markası için estetik ve hızlı bir alışveriş deneyimi.',
      fullDescription:
        'Kullanıcı deneyimini ön planda tutan bu e-ticaret sitesi, ürünlerin en iyi şekilde sergilenmesini sağlar. Sanal deneme ve stil danışmanı gibi yenilikçi özellikler içerir.',
      features: [
        '3D ürün görselleştirme',
        'Yapay zeka tabanlı öneri motoru',
        'Çoklu dil ve para birimi desteği',
      ],
      category: 'ecommerce',
      categoryName: 'E-Ticaret',
      categoryClass: 'category-ecommerce',
      imageClass: 'image-ecommerce',
      iconClass: 'fas fa-tshirt',
      technologies: ['React', 'Next.js', 'Stripe', 'GraphQL'],
      year: '2024',
      duration: '7 Ay',
      teamSize: 5,
      demoUrl: '#',
    },
    {
      id: 3,
      title: 'Sağlık ve Fitness Mobil Uygulaması',
      description:
        'Kişiselleştirilmiş antrenman ve beslenme takibi sunan bir mobil uygulama.',
      fullDescription:
        'Kullanıcıların fitness hedeflerine ulaşmalarını kolaylaştıran bu uygulama, antrenman programları, kalori takibi ve ilerleme raporları gibi özellikler sunar. Giyilebilir cihazlarla entegre çalışır.',
      features: [
        'Video destekli egzersizler',
        'Giyilebilir cihaz entegrasyonu (Apple Watch, etc.)',
        'Sosyal ilerleme paylaşımı',
      ],
      category: 'mobile-app',
      categoryName: 'Mobil Uygulama',
      categoryClass: 'category-mobile-app',
      imageClass: 'image-mobile-app',
      iconClass: 'fas fa-heartbeat',
      technologies: ['Flutter', 'Firebase', 'Google Fit API'],
      year: '2023',
      duration: '6 Ay',
      teamSize: 4,
    },
    {
      id: 4,
      title: 'Sanat Galerisi Marka Kimliği ve Web Tasarımı',
      description:
        'Modern sanat galerisi için oluşturulan minimalist ve etkileyici web tasarımı.',
      fullDescription:
        'Bu proje, sanat eserlerini ön plana çıkaran, sade ve şık bir tasarıma sahiptir. Sanatçılar ve eserler hakkında detaylı bilgi sunarken, online sergi deneyimi de yaşatır.',
      features: [
        'Yüksek çözünürlüklü görsel galerileri',
        'Online sergi turu',
        'Mobil öncelikli sanatçı portfolyoları',
      ],
      category: 'web-design',
      categoryName: 'Web Tasarım',
      categoryClass: 'category-web-design',
      imageClass: 'image-web-design',
      iconClass: 'fas fa-paint-brush',
      technologies: ['Figma', 'HTML5', 'CSS3', 'JavaScript'],
      year: '2022',
      duration: '3 Ay',
      teamSize: 2,
    },
    {
      id: 5,
      title: 'Online Eğitim Platformu (LMS)',
      description:
        'Video dersler, sınavlar ve sertifikasyon sunan kapsamlı bir öğrenme yönetim sistemi.',
      fullDescription:
        'Öğrencilerin ve eğitmenlerin interaktif bir ortamda buluştuğu bu platform, canlı dersler, ödev takibi ve otomatik değerlendirme gibi özelliklerle zenginleştirilmiştir.',
      features: [
        'Canlı video yayını',
        'Gelişmiş sınav modülü',
        'Otomatik sertifika oluşturma',
      ],
      category: 'web-development',
      categoryName: 'Web Geliştirme',
      categoryClass: 'category-web-dev',
      imageClass: 'image-web-development',
      iconClass: 'fas fa-graduation-cap',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      year: '2024',
      duration: '9 Ay',
      teamSize: 7,
      demoUrl: '#',
    },
    {
      id: 6,
      title: 'Gurme Gıda Pazaryeri',
      description:
        'Yerel üreticileri ve gurme lezzet tutkunlarını bir araya getiren online pazar yeri.',
      fullDescription:
        'Bu e-ticaret platformu, küçük üreticilerin ürünlerini sergileyip satabileceği, kullanıcıların ise coğrafi işaretli ve özel ürünlere ulaşabileceği bir yapı sunar.',
      features: [
        'Çoklu satıcı paneli',
        'Coğrafi konum tabanlı arama',
        'Abonelik tabanlı satış modeli',
      ],
      category: 'ecommerce',
      categoryName: 'E-Ticaret',
      categoryClass: 'category-ecommerce',
      imageClass: 'image-ecommerce',
      iconClass: 'fas fa-cheese',
      technologies: ['Magento', 'PHP', 'Elasticsearch'],
      year: '2023',
      duration: '10 Ay',
      teamSize: 8,
    },
    {
      id: 7,
      title: 'Restoran Rezervasyon ve Sipariş Uygulaması',
      description:
        'Kullanıcıların restoranlardan masa rezerve etmelerini ve paket sipariş vermelerini sağlayan uygulama.',
      fullDescription:
        'Bu mobil uygulama, kullanıcıların favori restoranlarını keşfetmelerini, menüleri incelemelerini ve kolayca sipariş vermelerini sağlar. Sadakat programı ve anlık bildirimler gibi özellikler içerir.',
      features: [
        'Harita üzerinde restoran bulma',
        'Anlık sipariş takibi',
        'Puan ve sadakat sistemi',
      ],
      category: 'mobile-app',
      categoryName: 'Mobil Uygulama',
      categoryClass: 'category-mobile-app',
      imageClass: 'image-mobile-app',
      iconClass: 'fas fa-utensils',
      technologies: ['React Native', 'Node.js', 'MongoDB Atlas'],
      year: '2024',
      duration: '5 Ay',
      teamSize: 3,
      demoUrl: '#',
    },
    {
      id: 8,
      title: 'Teknoloji Startupı Web Sitesi',
      description:
        'Yapay zeka odaklı bir startup için hazırlanan modern ve dinamik web arayüzü.',
      fullDescription:
        'Bu web tasarımı, şirketin vizyonunu ve teknolojisini yansıtan fütüristik ve interaktif öğelerle donatılmıştır. Scroll tabanlı animasyonlar ve mikro etkileşimler ile kullanıcıyı etkilemeyi hedefler.',
      features: [
        'Interaktif WebGL animasyonları',
        'Dinamik içerik yükleme',
        'Kapsamlı blog ve kaynak merkezi',
      ],
      category: 'web-design',
      categoryName: 'Web Tasarım',
      categoryClass: 'category-web-design',
      imageClass: 'image-web-design',
      iconClass: 'fas fa-robot',
      technologies: ['Vue.js', 'Three.js', 'GSAP'],
      year: '2023',
      duration: '4 Ay',
      teamSize: 3,
      demoUrl: '#',
    },
  ];

  filteredProjects: Project[] = [];
  selectedFilter: string = 'all';
  selectedProject: Project | null = null;
  private projectsToShow = 6; // Başlangıçta gösterilecek proje sayısı

  ngOnInit(): void {
    this.filterProjects('all');
  }

  filterProjects(category: string): void {
    this.selectedFilter = category;
    const projects =
      category === 'all'
        ? this.allProjects
        : this.allProjects.filter((p) => p.category === category);

    this.filteredProjects = projects.slice(0, this.projectsToShow);
  }

  hasMoreProjects(): boolean {
    const totalMatching =
      this.selectedFilter === 'all'
        ? this.allProjects.length
        : this.allProjects.filter((p) => p.category === this.selectedFilter)
          .length;
    return this.filteredProjects.length < totalMatching;
  }

  loadMoreProjects(): void {
    this.projectsToShow += 6; // Her seferinde 6 proje daha yükle
    this.filterProjects(this.selectedFilter);
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden'; // Arka planın kaymasını engelle
  }

  closeProjectModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  trackByProject(index: number, project: Project): number {
    return project.id;
  }
}
