// src/app/components/header/header.component.ts

import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, TranslateModule], // TranslateModule eklendi
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;

  // TranslateService'i constructor'a enjekte ediyoruz
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
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

  // Dili değiştiren ve mobil menüyü kapatan fonksiyon
  switchLang(lang: string) {
    this.translate.use(lang);
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  private updateBodyScroll() {
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  ngOnDestroy() {
    // Component yok edildiğinde her ihtimale karşı body scroll'u normale döndür
    document.body.style.overflow = '';
  }
}
