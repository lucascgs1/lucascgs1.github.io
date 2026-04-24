import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormStatus } from '../../../core/models/form-status.enum';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.html'
})
export class ContactFormComponent {
  isSubmitting = signal(false);
  formStatus = signal<FormStatus>(FormStatus.Idle);
  FormStatus = FormStatus;
  
  langService = inject(LanguageService);
  translations = this.langService.translations;

  async handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    
    this.isSubmitting.set(true);
    this.formStatus.set(FormStatus.Idle);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.formStatus.set(FormStatus.Success);
        form.reset();
      } else {
        this.formStatus.set(FormStatus.Error);
      }
    } catch (error) {
      this.formStatus.set(FormStatus.Error);
    } finally {
      this.isSubmitting.set(false);
      setTimeout(() => {
        if (this.formStatus() !== FormStatus.Idle) {
          this.formStatus.set(FormStatus.Idle);
        }
      }, 5000);
    }
  }
}
