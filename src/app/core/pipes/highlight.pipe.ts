import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(text: string, keywords: string[]): SafeHtml {
    if (!text || !keywords || keywords.length === 0) return text;
    
    let highlightedText = text;
    // Escapa caracteres especiais e cria regex dinâmica
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="text-accent-light font-bold">$1</span>`);
    });

    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
