// src/app/components/about/about.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Arayüzler (Mevcut haliyle iyi, değiştirilmedi)
// ... Milestone, Value, TeamMember, Statistic, etc.

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // Veri setleri (mevcut halleriyle bırakıldı)
  milestones = [
    { year: '2021', title: 'Şirket Kuruluşu', description: 'Kyiv merkezli Qurdoka Innova web geliştirme şirketi olarak kuruldu.' },
    { year: '2022', title: 'İlk Büyük Projeler', description: '15+ müşteri ile çalışarak e-ticaret ve kurumsal web siteleri geliştirdik.' },
    { year: '2023', title: 'Ekip Genişlemesi', description: 'Deneyimli geliştiriciler ve tasarımcılar ekibimize katıldı.' },
    { year: '2024', title: 'Teknoloji Liderliği', description: '40+ başarılı proje ve yenilikçi çözümlerle sektörde öncü konuma geldik.' }
  ];

  teamMembers = [
    { name: 'Dmitri Volkov', role: 'Kurucu & CEO', skills: ['Leadership', 'Strategy', 'Full-Stack'] },
    { name: 'Anna Kovalenko', role: 'Lead Frontend Developer', skills: ['Angular', 'React', 'UI/UX'] },
    { name: 'Maxim Petrov', role: 'Senior Backend Developer', skills: ['Java', 'Microservices', 'AWS'] },
    // ... diğer üyeler
  ];

  // ... diğer veri setleri

  constructor() { }

  ngOnInit(): void {
    this.initializeScrollAnimations();
  }

  private initializeScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    // Animasyon uygulanacak elementleri seç
    setTimeout(() => {
      const elements = document.querySelectorAll('.mv-card, .timeline-item, .team-card');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}
