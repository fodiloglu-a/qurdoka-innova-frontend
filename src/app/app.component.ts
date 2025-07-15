// src/app/app.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100px)', opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Qurdoka Innova';
  isLoading = false;
  showScrollTop = false;
  isTransitioning = false;

  private routerSubscription?: Subscription;

  constructor(private router: Router, private translate: TranslateService) {
    // Varsayılan dili ayarla ve tarayıcı dilini kullanmayı dene
    translate.setDefaultLang('tr');
    translate.use(translate.getBrowserLang()?.match(/tr|uk/) ? translate.getBrowserLang()! : 'tr');
  }

  ngOnInit(): void {
    this.setupRouteChangeListeners();
    this.checkScrollPosition();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  private setupRouteChangeListeners(): void {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        this.isTransitioning = true;
      } else if (event instanceof NavigationEnd) {
        // Simulated loading delay for smooth UX
        setTimeout(() => {
          this.isLoading = false;
          this.isTransitioning = false;
          this.scrollToTop();
        }, 500);
      }
    });
  }

  private checkScrollPosition(): void {
    this.showScrollTop = window.pageYOffset > 400;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Method to handle global loading states
  setLoadingState(loading: boolean): void {
    this.isLoading = loading;
  }

  // Method to handle page transitions
  triggerPageTransition(): void {
    this.isTransitioning = true;
    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);
  }
}
