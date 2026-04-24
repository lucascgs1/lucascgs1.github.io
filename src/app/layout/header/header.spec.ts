import { vi } from 'vitest';
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: class {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  });
}
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';



describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    // Limpando mock localStorage
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle theme', () => {
    expect(component.isDarkMode()).toBe(false);
    component.toggleTheme();
    expect(component.isDarkMode()).toBe(true);
    component.toggleTheme();
    expect(component.isDarkMode()).toBe(false);
  });

  it('should initialize dark theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    const fixtureDark = TestBed.createComponent(HeaderComponent);
    expect(fixtureDark.componentInstance.isDarkMode()).toBe(true);
  });

  it('should toggle language', () => {
    const initialLang = component.currentLang();
    component.toggleLang();
    expect(component.currentLang()).not.toBe(initialLang);
  });
});
