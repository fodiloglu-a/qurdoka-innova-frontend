// src/app/components/about/about.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface Value {
  title: string;
  description: string;
  iconClass: string;
  iconPath: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
}

interface Statistic {
  number: string;
  displayNumber: string;
  label: string;
  iconClass: string;
  iconPath: string;
}

interface Technology {
  name: string;
  iconPath: string;
}

interface TechCategory {
  name: string;
  technologies: Technology[];
}

interface Advantage {
  title: string;
  description: string;
  iconPath: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  milestones: Milestone[] = [
    {
      year: '2021',
      title: 'Şirket Kuruluşu',
      description: 'Kyiv merkezli Qurdoka Innova web geliştirme şirketi olarak kuruldu.'
    },
    {
      year: '2022',
      title: 'İlk Büyük Projeler',
      description: '15+ müşteri ile çalışarak e-ticaret ve kurumsal web siteleri geliştirdik.'
    },
    {
      year: '2023',
      title: 'Ekip Genişlemesi',
      description: 'Deneyimli geliştiriciler ve tasarımcılar ekibimize katıldı.'
    },
    {
      year: '2024',
      title: 'Teknoloji Liderliği',
      description: '40+ başarılı proje ve yenilikçi çözümlerle sektörde öncü konuma geldik.'
    },
    {
      year: '2025',
      title: 'Global Vizyon',
      description: 'Uluslararası pazarlara açılım ve yeni teknoloji yatırımları.'
    }
  ];

  values: Value[] = [
    {
      title: 'İnovasyon',
      description: 'Sürekli öğrenme ve yenilikçi teknolojiler ile gelecеğin çözümlerini bugünden sunuyoruz.',
      iconClass: 'innovation',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      title: 'Kalite',
      description: 'Her projede en yüksek kalite standartlarını uygulayarak mükemmel sonuçlar elde ediyoruz.',
      iconClass: 'quality',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'İşbirliği',
      description: 'Müşterilerimiz ile güçlü ortaklıklar kurarak birlikte başarıya ulaşıyoruz.',
      iconClass: 'collaboration',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Büyüme',
      description: 'Sürekli gelişim ve öğrenme kültürümüz ile kendimizi ve müşterilerimizi ileriye taşıyoruz.',
      iconClass: 'growth',
      iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    },
    {
      title: 'Dürüstlük',
      description: 'Şeffaf iletişim ve güvenilir hizmet anlayışımız ile uzun vadeli ilişkiler kuruyoruz.',
      iconClass: 'integrity',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Mükemmellik',
      description: 'Her detayda mükemmelliği hedefleyerek standartların üzerinde hizmet sunuyoruz.',
      iconClass: 'excellence',
      iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'Dmitri Volkov',
      role: 'Kurucu & CEO',
      description: 'Web geliştirme alanında 8+ yıl deneyimli, startup ve teknoloji uzmanı.',
      skills: ['Leadership', 'Strategy', 'Full-Stack Development']
    },
    {
      name: 'Anna Kovalenko',
      role: 'Lead Frontend Developer',
      description: 'Modern JavaScript frameworks ve UI/UX tasarımında uzman geliştirici.',
      skills: ['Angular', 'React', 'TypeScript', 'UI/UX']
    },
    {
      name: 'Maxim Petrov',
      role: 'Senior Backend Developer',
      description: 'Scalable backend sistemler ve cloud teknolojileri konusunda deneyimli.',
      skills: ['Java', 'Spring Boot', 'Microservices', 'AWS']
    },
    {
      name: 'Sofia Ivanova',
      role: 'UX/UI Designer',
      description: 'Kullanıcı deneyimi ve görsel tasarım alanında yaratıcı çözümler üreten tasarımcı.',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research']
    },
    {
      name: 'Viktor Kozlov',
      role: 'DevOps Engineer',
      description: 'CI/CD süreçleri ve cloud infrastructure yönetiminde uzman.',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Monitoring']
    },
    {
      name: 'Elena Sidorova',
      role: 'Project Manager',
      description: 'Agile metodolojiler ve proje yönetimi konusunda deneyimli lider.',
      skills: ['Scrum', 'Agile', 'Project Planning', 'Team Coordination']
    }
  ];

  statistics: Statistic[] = [
    {
      number: '50',
      displayNumber: '50+',
      label: 'Tamamlanan Proje',
      iconClass: 'projects',
      iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      number: '40',
      displayNumber: '40+',
      label: 'Mutlu Müşteri',
      iconClass: 'clients',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      number: '4',
      displayNumber: '4+',
      label: 'Yıllık Deneyim',
      iconClass: 'experience',
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      number: '24',
      displayNumber: '24/7',
      label: 'Teknik Destek',
      iconClass: 'support',
      iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
    }
  ];

  techCategories: TechCategory[] = [
    {
      name: 'Frontend Technologies',
      technologies: [
        {
          name: 'Angular',
          iconPath: 'M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z'
        },
        {
          name: 'React',
          iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'
        },
        {
          name: 'TypeScript',
          iconPath: 'M3 12h18m-9-9v18'
        },
        {
          name: 'SASS/SCSS',
          iconPath: 'M12 2l3.09 6.26L22 9l-5.91 3.74L17.82 19 12 16.26 6.18 19l1.73-6.26L2 9l6.91-1.74L12 2z'
        }
      ]
    },
    {
      name: 'Backend Technologies',
      technologies: [
        {
          name: 'Java',
          iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'
        },
        {
          name: 'Spring Boot',
          iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        },
        {
          name: 'Node.js',
          iconPath: 'M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z'
        },
        {
          name: 'PostgreSQL',
          iconPath: 'M4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.59 4 8 4s8-1.79 8-4M4 7c0-2.21 3.59-4 8-4s8 1.79 8 4'
        }
      ]
    },
    {
      name: 'DevOps & Tools',
      technologies: [
        {
          name: 'Docker',
          iconPath: 'M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z'
        },
        {
          name: 'AWS',
          iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
        },
        {
          name: 'Git',
          iconPath: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22'
        },
        {
          name: 'Jenkins',
          iconPath: 'M10.5 1.5a.5.5 0 000 1 .5.5 0 000-1zM13.5 1.5a.5.5 0 000 1 .5.5 0 000-1zM10.5 4a.5.5 0 000 1 .5.5 0 000-1zM13.5 4a.5.5 0 000 1 .5.5 0 000-1z'
        }
      ]
    }
  ];

  advantages: Advantage[] = [
    {
      title: 'Deneyimli Ekip',
      description: 'Alanında uzman geliştiriciler ve tasarımcılardan oluşan deneyimli ekibimizle projelerinizi en iyi şekilde hayata geçiriyoruz.',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Modern Teknolojiler',
      description: 'En güncel teknolojiler ve framework\'ler kullanarak gelecеğe uyumlu, ölçeklenebilir çözümler geliştiriyoruz.',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      title: 'Hızlı Teslimat',
      description: 'Agile metodolojiler kullanarak projelerinizi zamanında ve kaliteli bir şekilde teslim ediyoruz.',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Sürekli Destek',
      description: 'Proje tesliminden sonra da 7/24 teknik destek ve bakım hizmetleri sağlayarak yanınızda olmaya devam ediyoruz.',
      iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
    },
    {
      title: 'Uygun Fiyatlandırma',
      description: 'Rekabetçi fiyatlarla yüksek kaliteli hizmet sunarak bütçenize en uygun çözümleri sağlıyoruz.',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
    },
    {
      title: 'SEO Optimizasyonu',
      description: 'Arama motorlarında üst sıralarda yer almanızı sağlayacak SEO optimizasyonları ile organik trafiğinizi artırıyoruz.',
      iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    }
  ];

  private observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  constructor() { }

  ngOnInit(): void {
    this.initializeAnimations();
    this.animateCounters();
  }

  ngOnDestroy(): void {
    // Cleanup observers if needed
  }

  private initializeAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, this.observerOptions);

    // Observe elements for animation
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll(
        '.value-card, .team-member, .advantage-item, .tech-category, .mission-card, .vision-card'
      );
      elementsToAnimate.forEach(el => observer.observe(el));
    }, 100);
  }

  private animateCounters(): void {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const finalNumber = target.getAttribute('data-target');
          if (finalNumber) {
            this.animateCounter(target, parseInt(finalNumber));
          }
        }
      });
    }, this.observerOptions);

    setTimeout(() => {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach(counter => counterObserver.observe(counter));
    }, 200);
  }

  private animateCounter(element: HTMLElement, target: number): void {
    let current = 0;
    const increment = target / 50; // Animation duration control
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current).toString() + '+';
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toString() + '+';
      }
    };
    updateCounter();
  }

  // Navigation methods
  navigateToContact(): void {
    // This will be handled by routerLink in template
  }

  navigateToProjects(): void {
    // This will be handled by routerLink in template
  }

  // Scroll to specific sections
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Track by functions for *ngFor performance
  trackByMilestone(index: number, milestone: Milestone): string {
    return milestone.year;
  }

  trackByValue(index: number, value: Value): string {
    return value.title;
  }

  trackByTeamMember(index: number, member: TeamMember): string {
    return member.name;
  }

  trackByStatistic(index: number, stat: Statistic): string {
    return stat.label;
  }

  trackByTechCategory(index: number, category: TechCategory): string {
    return category.name;
  }

  trackByAdvantage(index: number, advantage: Advantage): string {
    return advantage.title;
  }

  // Helper methods for dynamic content
  getValueIconClass(value: Value): string {
    return `value-icon ${value.iconClass}`;
  }

  getStatIconClass(stat: Statistic): string {
    return `stat-icon ${stat.iconClass}`;
  }

  // Social media and external links
  openLinkedIn(): void {
    window.open('https://linkedin.com/company/qurdoka-innova', '_blank');
  }

  openGitHub(): void {
    window.open('https://github.com/qurdoka-innova', '_blank');
  }

  // Method to handle dynamic timeline animation
  onTimelineItemVisible(index: number): void {
    setTimeout(() => {
      const timelineItem = document.querySelectorAll('.timeline-item')[index];
      if (timelineItem) {
        timelineItem.classList.add('animate-fade-up');
      }
    }, index * 200); // Stagger animation
  }
}
