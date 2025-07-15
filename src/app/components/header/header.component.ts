// src/app/components/header/header.component.ts
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor() {}

  ngOnInit(): void {
    // Component yüklendiğinde mevcut scroll durumunu kontrol et
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Sayfanın 50 pikselden fazla kaydırılıp kaydırılmadığını kontrol eder
    this.isScrolled = window.pageYOffset > 50;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    // Geniş ekranlarda mobil menüyü otomatik kapat
    if (window.innerWidth > 991 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateBodyScroll();
  }

  closeMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      this.updateBodyScroll();
    }
  }

  private updateBodyScroll() {
    // Mobil menü açıkken body'nin kaymasını engelle
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  ngOnDestroy() {
    // Component yok edildiğinde body scroll'u normale döndür
    document.body.style.overflow = '';
  }
}
