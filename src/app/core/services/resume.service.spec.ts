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
import { ResumeService } from './resume.service';
import { LanguageService } from './language.service';
import { PLATFORM_ID } from '@angular/core';

describe('ResumeService', () => {
  let service: ResumeService;
  let langService: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        ResumeService,
        LanguageService,
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });
    service = TestBed.inject(ResumeService);
    langService = TestBed.inject(LanguageService);
  });

  it('deve ser criado e retornar curriculo em PT por padrao', () => {
    expect(service).toBeTruthy();
    const resume = service.getResume();
    expect(resume().title.includes('Engenheiro')).toBe(true);
  });

  it('deve trocar os dados do curriculo quando o idioma mudar', () => {
    langService.toggleLang(); // Troca para EN
    
    const resume = service.getResume();
    expect(resume().title.includes('Engineer')).toBe(true);
  });
});
