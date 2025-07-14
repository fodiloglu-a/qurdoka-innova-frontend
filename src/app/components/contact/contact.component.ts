// src/app/components/contact/contact.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.createContactForm();
  }

  ngOnInit(): void {
    this.initializeAnimations();
  }

  private createContactForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      service: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  private initializeAnimations(): void {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll('.contact-card, .form-group');
      elementsToAnimate.forEach(el => observer.observe(el));
    }, 100);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);

    if (field?.errors) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} alanı zorunludur.`;
      }
      if (field.errors['email']) {
        return 'Geçerli bir e-posta adresi giriniz.';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `En az ${requiredLength} karakter giriniz.`;
      }
    }

    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      company: 'Şirket',
      service: 'Hizmet',
      message: 'Mesaj'
    };
    return labels[fieldName] || fieldName;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const formData = this.contactForm.value;

      // Simulate API call
      this.submitToServer(formData).then(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        this.scrollToTop();
      }).catch(error => {
        this.isSubmitting = false;
        console.error('Form submission error:', error);
        // Handle error (show error message, etc.)
        this.showErrorMessage('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }

  private async submitToServer(formData: any): Promise<void> {
    // Simulated API call - replace with actual API endpoint
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful submission
        console.log('Form submitted:', formData);

        // Here you would typically send the data to your backend
        // Example:
        // this.http.post('/api/contact', formData).subscribe(
        //   response => resolve(response),
        //   error => reject(error)
        // );

        resolve();
      }, 2000);
    });
  }

  closeSuccessMessage(): void {
    this.showSuccessMessage = false;
  }

  private showErrorMessage(message: string): void {
    // Implement error message display
    alert(message); // Replace with proper error handling
  }

  private scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Utility methods for contact actions
  sendEmail(): void {
    window.location.href = 'mailto:info@qurdokainnova.com';
  }

  makeCall(): void {
    window.location.href = 'tel:+380445551234';
  }

  openWhatsApp(): void {
    window.open('https://wa.me/380445551234', '_blank');
  }

  openGoogleMaps(): void {
    const address = 'Shevchenko District, Kyiv, Ukraine';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  }

  // Social media links
  openLinkedIn(): void {
    window.open('https://linkedin.com/company/qurdoka-innova', '_blank');
  }

  openGitHub(): void {
    window.open('https://github.com/qurdoka-innova', '_blank');
  }

  openTwitter(): void {
    window.open('https://twitter.com/qurdokainnova', '_blank');
  }

  // Form field focus handlers for better UX
  onFieldFocus(fieldName: string): void {
    const field = this.contactForm.get(fieldName);
    if (field) {
      field.markAsUntouched();
    }
  }

  onFieldBlur(fieldName: string): void {
    const field = this.contactForm.get(fieldName);
    if (field) {
      field.markAsTouched();
    }
  }

  // Auto-resize textarea
  autoResizeTextarea(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  // Phone number formatting
  formatPhoneNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
      if (value.startsWith('90')) {
        value = value.substring(2);
      }

      if (value.length <= 10) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      }

      input.value = '+90 ' + value;
    }
  }

  // Email validation helper
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Form analytics tracking
  trackFormInteraction(action: string, field?: string): void {
    // Implement analytics tracking
    console.log(`Form interaction: ${action}`, field);

    // Example: Google Analytics tracking
    // gtag('event', action, {
    //   event_category: 'Contact Form',
    //   event_label: field
    // });
  }

  // Keyboard navigation support
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && event.ctrlKey) {
      this.onSubmit();
    }
  }

  // Copy contact information to clipboard
  copyToClipboard(text: string, type: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showCopyNotification(type);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  private showCopyNotification(type: string): void {
    // Show brief notification that text was copied
    // This could be implemented with a toast notification
    console.log(`${type} copied to clipboard`);
  }

  // Prefill form with URL parameters (for marketing campaigns)
  private prefillFormFromUrl(): void {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('service')) {
      this.contactForm.patchValue({
        service: urlParams.get('service')
      });
    }

    if (urlParams.has('ref')) {
      // Track referral source
      this.trackFormInteraction('prefill_from_url', urlParams.get('ref') || undefined);
    }
  }
}
