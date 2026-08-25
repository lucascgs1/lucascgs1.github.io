import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './layout/header/header';
import { HeroComponent } from './features/portfolio/hero/hero';
import { SkillsComponent } from './features/portfolio/skills/skills';
import { ExperienceComponent } from './features/portfolio/experience/experience';
import { ProjectsComponent } from './features/portfolio/projects/projects';
import { EducationComponent } from './features/portfolio/education/education';
import { FooterComponent } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'portfolio';
}
