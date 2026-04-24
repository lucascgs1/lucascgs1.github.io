import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ResumeService } from '../../../core/services/resume.service';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { LanguageService } from '../../../core/services/language.service';
import { ScrollRevealDirective } from '../../../core/directives/scroll-reveal.directive';
import { HighlightPipe } from '../../../core/pipes/highlight.pipe';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, HighlightPipe, SectionTitleComponent],
  templateUrl: './experience.html'
})
export class ExperienceComponent {
  resumeService = inject(ResumeService);
  resumeData = this.resumeService.getResume();
  langService = inject(LanguageService);
  translations = this.langService.translations;
}
