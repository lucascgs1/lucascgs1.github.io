import { Injectable, computed, inject } from '@angular/core';
import { CV_DATA as CV_PT } from '../mocks/cv-data';
import { CV_DATA_EN } from '../mocks/cv-data-en';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private languageService = inject(LanguageService);

  private resumeData = computed(() => {
    return this.languageService.currentLang() === 'pt' ? CV_PT : CV_DATA_EN;
  });

  getResume() {
    return this.resumeData;
  }
}
