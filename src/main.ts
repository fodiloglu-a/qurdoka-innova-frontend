// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

/**
 * Çeviri dosyalarını yüklemek için bu fabrika fonksiyonu gereklidir.
 * Hatanın çözümü için yolun sonuna '/' karakteri eklendi.
 */
export function HttpLoaderFactory(httpClient: HttpClient) {
  // Önceki Hatalı Yol: './i18n'
  // DOĞRU YOL: './i18n/'
  return new TranslateHttpLoader(httpClient, './i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
        defaultLanguage: 'tr'
      })
    )
  ]
}).catch(err => console.error(err));
