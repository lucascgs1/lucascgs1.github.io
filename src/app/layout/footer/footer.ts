import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { ResumeService } from '../../core/services/resume.service';
import { LanguageService } from '../../core/services/language.service';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { ExternalLinkDirective } from '../../core/directives/external-link.directive';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, ExternalLinkDirective, ContactFormComponent],
  templateUrl: './footer.html'
})
export class FooterComponent {
  resumeService = inject(ResumeService);
  resumeData = this.resumeService.getResume();
  langService = inject(LanguageService);
  translations = this.langService.translations;
}
