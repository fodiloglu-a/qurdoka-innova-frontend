import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryName: string;
  categoryClass: string;
  imageClass: string;
  iconPath: string;
  technologies: string[];
  year: string;
  duration: string;
  teamSize: number;
  fullDescription: string;
  features: string[];
  demoUrl?: string;
}

interface ProjectStat {
  number: number;
  label: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  // Hero kısmındaki istatistikler
  projectStats: ProjectStat[] = [
    { number: 50, label: 'Tamamlanan Proje' },
    { number: 30, label: 'Mutlu Müşteri' },
    { number: 5, label: 'Yıllık Tecrübe' }
  ];

  // Projelerin listesi
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Ticaret Web Sitesi',
      description: 'Modern tasarımlı bir e-ticaret çözümü.',
      category: 'ecommerce',
      categoryName: 'E-Ticaret',
      categoryClass: 'category-ecommerce',
      imageClass: 'image-ecommerce',
      iconPath: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      year: '2023',
      duration: '6 Ay',
      teamSize: 5,
      fullDescription:
        'Bu proje, kullanıcı dostu bir tasarım ve güçlü bir arka uç sunarak müşterilerin çevrimiçi ürün satışı yapmasını sağlar.',
      features: ['SEO optimizasyonu', 'Mobil uyumlu tasarım', 'Hızlı ödeme sistemi'],
      demoUrl: 'https://demo-ecommerce.example.com'
    },
    {
      id: 2,
      title: 'Kurumsal Web Sitesi',
      description: 'Profesyonel bir kurumsal web sitesi.',
      category: 'web-design',
      categoryName: 'Web Tasarım',
      categoryClass: 'category-web-design',
      imageClass: 'image-web-design',
      iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      year: '2021',
      duration: '4 Ay',
      teamSize: 3,
      fullDescription:
        'Kurumsal hizmetleri ve çözümleri tanıtmak için temiz bir tasarımla inşa edilmiş bir web sitesidir.',
      features: ['Hızlı yükleme süresi', 'Kolay navigasyon', 'Çok dilli destek']
    }
    // Daha fazla proje eklenebilir...
  ];

  filteredProjects: Project[] = [];
  selectedFilter: string = 'all';
  selectedProject: Project | null = null;
  hasMoreProjects: boolean = true; // Yükleme durumunu kontrol etmek için

  ngOnInit(): void {
    // İlk başta tüm projeleri göster
    this.filteredProjects = [...this.projects];
  }

  /**
   * Projeleri kategoriye göre filtreler
   * @param category Filtrelenecek kategori
   */
  filterProjects(category: string): void {
    this.selectedFilter = category;

    if (category === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }
  }

  /**
   * Belirli bir kategoriye ait proje sayısını döndüren metot
   * @param category Kategori adı
   * @returns Proje sayısı
   */
  getProjectCountByCategory(category: string): number {
    return this.projects.filter((project) => project.category === category).length;
  }

  /**
   * Daha fazla proje yükler
   */
  loadMoreProjects(): void {
    console.log('Daha fazla proje yükleniyor...');
    // Örnek olarak burada daha fazla proje dinaamik eklenebilir
    this.hasMoreProjects = false; // Şu an için başka proje olmadığı varsayılıyor.
  }

  /**
   * Modal açmak için kullanılan metot
   * @param project Seçili proje
   */
  openProjectModal(project: Project): void {
    this.selectedProject = project;
  }

  /**
   * Modalı kapatır
   */
  closeProjectModal(): void {
    this.selectedProject = null;
  }

  /**
   * Demo sitesini açmak için kullanılan metot
   * @param project Proje detayları
   */
  openDemo(project: Project): void {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    }
  }

  /**
   * Proje kartlarının performansını iyileştirme için trackBy fonksiyonu
   * @param index Proje dizisindeki indeks
   * @param project Proje objesi
   * @returns Proje ID'si
   */
  trackByProject(index: number, project: Project): number {
    return project.id;
  }

  viewProject(project: Project) {

  }
}
