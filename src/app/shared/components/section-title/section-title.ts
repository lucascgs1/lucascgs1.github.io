import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="text-3xl font-bold mb-12 flex items-center text-text-main">
      <span class="text-accent-light mr-2">{{ number }}.</span> {{ title }}
      <div class="h-px bg-border flex-1 ml-6"></div>
    </h2>
  `
})
export class SectionTitleComponent {
  @Input({ required: true }) number!: string;
  @Input({ required: true }) title!: string;
}
