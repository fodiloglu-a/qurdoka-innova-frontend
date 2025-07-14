// src/app/components/footer/footer.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  isSubscribing = false;

  constructor() { }

  ngOnInit(): void {
    // Component initialization
  }

  // Social media navigation
  openSocialLink(platform: string): void {
    const links: { [key: string]: string } = {
      linkedin: 'https://linkedin.com/company/qurdoka-innova',
      github: 'https://github.com/qurdoka-innova',
      twitter: 'https://twitter.com/qurdokainnova',
      instagram: 'https://instagram.com/qurdokainnova'
    };

    if (links[platform]) {
      window.open(links[platform], '_blank');
    }
  }

  // Contact actions
  sendEmail(): void {
    window.location.href = 'mailto:info@qurdokainnova.com?subject=Web Geliştirme Talebi&body=Merhaba, web geliştirme hizmetleriniz hakkında bilgi almak istiyorum.';
  }

  makeCall(): void {
    window.location.href = 'tel:+380445551234';
  }

  openGoogleMaps(): void {
    const address = 'Shevchenko District, Kyiv, Ukraine 01001';
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(url, '_blank');
  }

  // Newsletter subscription
  subscribeNewsletter(event: Event): void {
    event.preventDefault();

    if (!this.newsletterEmail) {
      this.showNotification('Lütfen e-posta adresinizi girin.', 'error');
      return;
    }

    if (!this.validateEmail(this.newsletterEmail)) {
      this.showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
      return;
    }

    this.isSubscribing = true;

    // Simulate API call
    setTimeout(() => {
      this.isSubscribing = false;
      this.showNotification('Başarıyla abone oldunuz! Teşekkür ederiz.', 'success');
      this.newsletterEmail = '';

      // Here you would typically send the email to your backend
      console.log('Newsletter subscription:', this.newsletterEmail);
    }, 2000);
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private showNotification(message: string, type: 'success' | 'error'): void {
    // Create and show notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10b981' : '#ef4444'};
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      font-size: 14px;
      max-width: 300px;
      animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-in';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 4000);
  }

  // Navigation utilities
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

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


