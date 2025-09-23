// app.config.ts
import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
  APP_INITIALIZER,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import {
  TranslateHttpLoader,
  TRANSLATE_HTTP_LOADER_CONFIG, // <-- important
} from '@ngx-translate/http-loader';

// Init i18n au démarrage
export function initI18nFactory(t: TranslateService) {
  return () => {
    t.addLangs(['fr', 'en']);
    t.setDefaultLang('fr');
    const saved = localStorage.getItem('lang');
    const browser = t.getBrowserLang();
    const lang = (saved ?? browser)?.match(/^(fr|en)$/) ? (saved ?? browser)! : 'fr';
    t.use(lang);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateHttpLoader,   
        },
        defaultLanguage: 'fr',
      })
    ),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,         
      useValue: { prefix: 'i18n/', suffix: '.json' },
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initI18nFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
};
