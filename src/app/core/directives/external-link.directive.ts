import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[target="_blank"]',
  standalone: true
})
export class ExternalLinkDirective {
  @HostBinding('attr.rel') rel = 'noopener noreferrer';
}
