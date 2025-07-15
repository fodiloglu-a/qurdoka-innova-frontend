// src/app/components/home/home.component.ts
import { Component, OnInit, Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// İkonları güvenli bir şekilde render etmek için bir Pipe
@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

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
  imports: [CommonModule, RouterLink, SafeHtmlPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  services: Service[] = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
      title: 'Web Geliştirme',
      description: 'Modern teknolojilerle performanslı ve ölçeklenebilir web uygulamaları inşa ediyoruz.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>',
      title: 'UI/UX Tasarımı',
      description: 'Kullanıcılarınızı etkileyecek, estetik ve sezgisel arayüzler tasarlıyoruz.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>',
      title: 'E-Ticaret Çözümleri',
      description: 'Güvenli ve yönetimi kolay e-ticaret platformları ile işinizi dijitale taşıyoruz.'
    },
  ];

  features: Feature[] = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
      title: 'Stratejik Yaklaşım',
      description: 'Projenizin her aşamasında, hedeflerinize en uygun stratejileri belirliyoruz.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
      title: 'Kalite Odaklılık',
      description: 'Yüksek kalite standartlarımızdan ödün vermeden, test edilmiş ve güvenilir ürünler sunuyoruz.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
      title: 'Zamanında Teslimat',
      description: 'Proje takvimine sadık kalarak, işlerinizi zamanında ve eksiksiz teslim ediyoruz.'
    },
  ];

  stats: Stat[] = [
    { number: '50+', label: 'Tamamlanan Proje' },
    { number: '3+', label: 'Yıllık Deneyim' },
    { number: '40+', label: 'Mutlu Müşteri' },
    { number: '24/7', label: 'Teknik Destek' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.service-card, .why-us-image, .why-us-content, .stat-card').forEach(el => {
      observer.observe(el);
    });
  }
}
