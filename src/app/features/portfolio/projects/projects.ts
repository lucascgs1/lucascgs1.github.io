import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ResumeService } from '../../../core/services/resume.service';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { LanguageService } from '../../../core/services/language.service';
import { ScrollRevealDirective } from '../../../core/directives/scroll-reveal.directive';
import { ExternalLinkDirective } from '../../../core/directives/external-link.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, ExternalLinkDirective, SectionTitleComponent],
  templateUrl: './projects.html'
})
export class ProjectsComponent {
  resumeService = inject(ResumeService);
  resumeData = this.resumeService.getResume();
  langService = inject(LanguageService);
  translations = this.langService.translations;
}
