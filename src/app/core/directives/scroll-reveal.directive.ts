import { Directive, ElementRef, OnInit, Renderer2, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(this.el.nativeElement, 'opacity-0');
      this.renderer.addClass(this.el.nativeElement, 'translate-y-8');
      this.renderer.addClass(this.el.nativeElement, 'transition-all');
      this.renderer.addClass(this.el.nativeElement, 'duration-1000');
      this.renderer.addClass(this.el.nativeElement, 'ease-out');

      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
            this.renderer.removeClass(this.el.nativeElement, 'translate-y-8');
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      }, { threshold: 0.1 });

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
