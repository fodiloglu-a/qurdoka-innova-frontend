// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: Service[] = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Geliştirme',
      description: 'Modern teknolojiler kullanarak responsive ve hızlı web siteleri geliştiriyoruz.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Web Tasarım',
      description: 'Kullanıcı deneyimini ön planda tutan, estetik ve fonksiyonel tasarımlar oluşturuyoruz.'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Ticaret',
      description: 'Güvenli ve kullanıcı dostu e-ticaret platformları ile satışlarınızı artırın.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobil Uyumlu',
      description: 'Tüm cihazlarda mükemmel görünüm sağlayan responsive tasarımlar geliştiriyoruz.'
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimizasyon',
      description: 'Arama motorlarında üst sıralarda yer almanız için SEO optimizasyonu yapıyoruz.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Teknik Destek',
      description: '7/24 teknik destek ile web sitenizin sorunsuz çalışmasını sağlıyoruz.'
    }
  ];

  features: Feature[] = [
    {
      icon: 'fas fa-rocket',
      title: 'Hızlı Geliştirme',
      description: 'Modern araçlar ve metodolojiler kullanarak projelerinizi hızla teslim ediyoruz.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Güvenlik',
      description: 'En yüksek güvenlik standartlarını uygulayarak verilerinizi koruyoruz.'
    },
    {
      icon: 'fas fa-users',
      title: 'Deneyimli Ekip',
      description: 'Alanında uzman geliştiricilerden oluşan deneyimli ekibimizle çalışıyoruz.'
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Sürekli Destek',
      description: 'Proje teslimi sonrası da sürekli bakım ve güncelleme desteği sağlıyoruz.'
    }
  ];

  stats: Stat[] = [
    {
      number: '50+',
      label: 'Tamamlanan Proje'
    },
    {
      number: '3+',
      label: 'Yıllık Deneyim'
    },
    {
      number: '40+',
      label: 'Mutlu Müşteri'
    },
    {
      number: '24/7',
      label: 'Teknik Destek'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Sayfa yüklendiğinde scroll animasyonları için
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    // Intersection Observer ile scroll animasyonları
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Animasyon sınıflarını gözlemle
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll('.service-card, .feature-item, .stat-item');
      elementsToAnimate.forEach(el => observer.observe(el));
    }, 100);
  }

  // Scroll to section fonksiyonu
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
