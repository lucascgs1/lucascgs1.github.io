import { vi } from 'vitest';
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: class {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  });
}
import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { PLATFORM_ID } from '@angular/core';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        LanguageService,
        { provide: PLATFORM_ID, useValue: 'browser' } // Simula ambiente de browser para o localStorage
      ]
    });
    
    localStorage.clear();
    service = TestBed.inject(LanguageService);
  });

  it('deve ser criado com o idioma padrao "pt"', () => {
    expect(service).toBeTruthy();
    expect(service.currentLang()).toBe('pt');
  });

  it('deve alternar o idioma para "en"', () => {
    service.toggleLang();
    expect(service.currentLang()).toBe('en');
    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('deve retornar a chave de traducao correta apos a troca', () => {
    expect(service.translations().nav.about).toBe('Sobre');
    
    service.toggleLang(); // troca para EN
    
    expect(service.translations().nav.about).toBe('About');
  });

  it('deve inicializar com o idioma salvo no localStorage se existir', () => {
    localStorage.setItem('lang', 'en');
    const newService = new LanguageService('browser', document);
    expect(newService.currentLang()).toBe('en');
  });

  it('deve atualizar o atributo lang do documento ao trocar de idioma', () => {
    service.toggleLang();
    expect(document.documentElement.lang).toBe('en');

    service.toggleLang();
    expect(document.documentElement.lang).toBe('pt');
  });
});
