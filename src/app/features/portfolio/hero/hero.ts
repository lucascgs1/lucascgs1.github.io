import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ResumeService } from '../../../core/services/resume.service';
import { LanguageService } from '../../../core/services/language.service';
import { ScrollRevealDirective } from '../../../core/directives/scroll-reveal.directive';
import { ExternalLinkDirective } from '../../../core/directives/external-link.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, ExternalLinkDirective, NgOptimizedImage],
  templateUrl: './hero.html'
})
export class HeroComponent {
  resumeService = inject(ResumeService);
  resumeData = this.resumeService.getResume();
  langService = inject(LanguageService);
  translations = this.langService.translations;
  currentLang = this.langService.currentLang;
}
