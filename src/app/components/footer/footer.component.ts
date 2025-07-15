// src/app/components/footer/footer.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  isSubscribing = false;

  // Bildirim durumu için bir nesne
  notification = {
    active: false,
    message: '',
    type: 'success' as 'success' | 'error',
  };

  constructor() {}

  ngOnInit(): void {}

  openSocialLink(platform: string): void {
    const links: { [key: string]: string } = {
      linkedin: 'https://linkedin.com/company/qurdoka-innova',
      github: 'https://github.com/qurdoka-innova',
      twitter: 'https://twitter.com/qurdokainnova',
    };
    if (links[platform]) {
      window.open(links[platform], '_blank');
    }
  }

  subscribeNewsletter(event: Event): void {
    event.preventDefault();

    if (!this.newsletterEmail || !this.validateEmail(this.newsletterEmail)) {
      this.showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
      return;
    }

    this.isSubscribing = true;

    // API çağrısı simülasyonu
    setTimeout(() => {
      this.isSubscribing = false;
      this.showNotification('Başarıyla abone oldunuz! Teşekkür ederiz.', 'success');
      console.log('Newsletter subscription:', this.newsletterEmail);
      this.newsletterEmail = '';
    }, 1500);
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Bildirimleri Angular'a uygun şekilde yönet
  private showNotification(message: string, type: 'success' | 'error'): void {
    this.notification = { active: true, message, type };

    // Bildirimi 4 saniye sonra gizle
    setTimeout(() => {
      this.notification.active = false;
    }, 4000);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
