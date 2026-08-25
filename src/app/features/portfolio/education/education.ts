import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ResumeService } from '../../../core/services/resume.service';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { LanguageService } from '../../../core/services/language.service';
import { ScrollRevealDirective } from '../../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, SectionTitleComponent],
  templateUrl: './education.html'
})
export class EducationComponent {
  resumeService = inject(ResumeService);
  resumeData = this.resumeService.getResume();
  langService = inject(LanguageService);
  translations = this.langService.translations;
}
