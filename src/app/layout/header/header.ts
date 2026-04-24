import { Component, Inject, PLATFORM_ID, Renderer2, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html'
})
export class HeaderComponent {
  isDarkMode = signal<boolean>(false);
  langService = inject(LanguageService);
  translations = this.langService.translations;
  currentLang = this.langService.currentLang;
  meta = inject(Meta);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.isDarkMode.set(true);
        this.renderer.addClass(this.document.documentElement, 'dark');
        this.meta.updateTag({ name: 'theme-color', content: '#0f172a' });
      } else {
        this.renderer.removeClass(this.document.documentElement, 'dark');
        this.meta.updateTag({ name: 'theme-color', content: '#ffffff' });
      }
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode.update(v => !v);
      if (this.isDarkMode()) {
        this.renderer.addClass(this.document.documentElement, 'dark');
        localStorage.setItem('theme', 'dark');
        this.meta.updateTag({ name: 'theme-color', content: '#0f172a' });
      } else {
        this.renderer.removeClass(this.document.documentElement, 'dark');
        localStorage.setItem('theme', 'light');
        this.meta.updateTag({ name: 'theme-color', content: '#ffffff' });
      }
    }
  }
  
  toggleLang() {
    this.langService.toggleLang();
  }
}
