import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { pt } from '../i18n/pt';
import { en } from '../i18n/en';
import { TranslationDictionary } from '../i18n/translation.model';

export type Lang = 'pt' | 'en';

const UI_TRANSLATIONS: Record<Lang, TranslationDictionary> = { pt, en };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<Lang>('pt');
  
  translations = computed(() => UI_TRANSLATIONS[this.currentLang()]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') as Lang;
      if (saved && (saved === 'pt' || saved === 'en')) {
        this.currentLang.set(saved);
      }
    }
  }

  toggleLang() {
    const newLang = this.currentLang() === 'pt' ? 'en' : 'pt';
    this.currentLang.set(newLang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', newLang);
    }
  }
}
