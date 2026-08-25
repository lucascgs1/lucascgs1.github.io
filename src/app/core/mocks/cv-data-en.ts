import { Resume } from '../models/cv.model';

export const CV_DATA_EN: Resume = {
  name: 'Lucas Coutinho',
  title: 'Frontend Engineer | Angular | Microfrontends | AWS',
  location: 'São Paulo, SP, Brazil',
  email: 'lucascoutinho85@gmail.com',
  linkedin: 'linkedin.com/in/lucascgs1',
  github: 'github.com/lucascgs1',
  summary: 'Frontend Engineer with roughly 8 years of experience in software development, with a solid track record in building scalable architectures and microfrontend (MFE) ecosystems, and in modernizing highly complex legacy platforms. I have strong experience in the financial sector, with around 2 years combined across three client-based consulting roles for Santander, Pan, and Itaú, and more recent experience in the automotive sector, on the global BMW MyAccount platform, in a bilingual international environment (Portuguese-English). My focus areas are web performance optimization, code governance, shared library creation, and automated CI/CD pipeline structuring, integrated with AWS cloud services. Beyond the technical scope, I lead onboarding processes and mentor engineers, and I have experience diagnosing and quickly resolving critical production failures.',
  skills: {
    languagesAndFrameworks: ['Angular (2+ up to 20)', 'AngularJS', 'TypeScript', 'JavaScript (ES6+)', 'RxJS', 'NgRx (Redux pattern for Angular)', 'HTML5', 'CSS3/SCSS (BEM, Flexbox, Grid)', 'Angular Material', '.NET Core', 'C#'],
    architecture: ['Microfrontends (MFE)', 'Module Federation', 'Clean Architecture', 'Clean Code', 'SOLID', 'KISS', 'DRY', 'DDD (domain-driven organization)', 'Lazy Loading', 'Single Page Applications (SPA)', 'Web Accessibility (WCAG, ARIA)'],
    devopsAndCloud: ['AWS (S3, CloudFront, Lambda, DynamoDB)', 'Azure DevOps', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Docker'],
    methodologies: ['Scrum', 'Kanban', 'SAFe', 'Jira', 'Confluence', 'Karma', 'Jasmine', 'Vitest', 'Postman', 'SonarQube', 'axe DevTools', 'Git']
  },
  experience: [
    {
      company: 'act digital',
      role: 'Bilingual Frontend Engineer',
      period: 'November 2025 – April 2026',
      description: [
        'Migrated monolithic modules of BMW\'s global MyAccount platform to a microfrontend architecture using Angular 20 (Signals, @defer) and Module Federation, reducing build time and isolating deploys per microfrontend.',
        'Was the most experienced developer on the team and took on technical leadership responsibilities in practice for an extended period without a formal tech lead, in a bilingual international environment with daily alignments in English.',
        'Developed features with a focus on accessibility (WCAG, ARIA) and contributed to the governance of internal UI and Service libraries shared across microfrontends.',
        'Mapped undocumented legacy modules with AI support (GitHub Copilot/Claude Sonnet), including a self-built agent to automate that documentation.',
        'Fixed RxJS subscription memory leaks, asymmetrically implemented route guards across microfrontends, and database/encoding bugs that broke the CI/CD pipeline.'
      ]
    },
    {
      company: 'Numax',
      role: 'Frontend / Full-Stack Engineer',
      period: 'March 2024 – June 2025',
      description: [
        'Led the complete migration from AngularJS to Angular 18, cutting the multitenant application\'s initial load time from roughly 1 minute 40 seconds to about 35 seconds and eliminating severe initial bundle overheads.',
        'Designed and configured end-to-end CI/CD pipelines via Azure DevOps, automating direct publishing to AWS environments (S3 and CloudFront), with continuous releases and automated cache invalidation.',
        'Built dynamic components and reusable libraries to streamline the development flow of new internal system modules.',
        'Diagnosed and fixed a critical production issue that surfaced before validation in a test environment was complete: a missing feature flag was preventing the login button from displaying. Restored functionality the same day.',
        'Developed and maintained enterprise web applications in Angular on an ongoing basis, applying Clean Code and SOLID/KISS/DRY principles in recurring refactors for performance and maintainability.'
      ]
    },
    {
      company: 'GFT Group (Project: Banco Santander - benAssist)',
      role: 'Frontend Developer, Level L3',
      period: 'September 2022 – April 2023',
      description: [
        'Designed modular and reusable UI components aligned with corporate design tokens for the benAssist platform, accelerating the feature delivery time of parallel agile squads.',
        'Trained and supported interns on the team and worked directly with management and the product team, taking on senior-level responsibilities on a day-to-day basis.',
        'Elevated stability and security metrics for internet banking, expanding automated unit test coverage with Karma and Jasmine.',
        'Integrated the frontend with RESTful APIs via HttpClient and RxJS, consuming the benAssist platform\'s backend services.',
        'Managed the CI/CD cycle using Jenkins and GitLab, applied static code analysis with SonarQube, and delivered work under agile methodologies (Kanban/Scrum/OKR) with Jira and Confluence.'
      ]
    },
    {
      company: 'Qintess (Project: Banco Pan - giropan)',
      role: 'Frontend Developer',
      period: 'March 2022 – September 2022',
      description: [
        'Refactored asynchronous data flows and optimized global state management using NgRx in the giropan project, eliminating a memory leak caused by multiple nested RxJS subscriptions without proper management, and fixing concurrency failures in high-traffic dashboards.',
        'Conducted continuous refactoring focused on client-side rendering performance, implemented automated tests (Postman, Jasmine) integrated into Jenkins/Azure Git pipelines within Scrum/SAFe, with static code analysis via SonarQube and technical documentation in Confluence.'
      ]
    },
    {
      company: 'everis / NTT DATA Europe & Latam (Project: Banco Itaú - Hub Agro)',
      role: 'Frontend / Fullstack Developer',
      period: 'April 2021 – March 2022',
      description: [
        'Implemented and maintained the Hub Agro corporate financial platform using Angular and RxJS, integrating the frontend with .NET Core-based backends.',
        'Took on responsibilities equivalent to a tech lead role, driving multiple workstreams independently, and coordinated the onboarding track for new engineers, shortening the ramp-up time needed before independently delivering code.',
        'Maintained an isolated backup branch before integrating third-party changes; when a change corrupted the main repository and affected multiple teams, that branch was used to quickly restore the project, cutting what would have been a full day of recovery down to about 30 minutes.',
        'Delivered automated tests (Karma, Jasmine, Postman) and technical documentation in Confluence, working under Kanban/Scrum/OKR methodologies with task management in Jira and version control via GitLab.'
      ]
    },
    {
      company: 'Tecnologia Unica',
      role: 'Fullstack Developer (career path from Intern/Junior to Mid-Level)',
      period: 'February 2018 – September 2020',
      description: [
        'Created responsive interfaces using AngularJS and Angular 2+ and developed stable hybrid mobile applications using versions 3 and 4 of the Ionic framework, focused on improving rendering fluidity and performance on mobile devices.',
        'Structured secure RESTful APIs under a microservices model using .NET Core, C#, and Swagger, applying JWT token validation to support large volumes of concurrent requests.',
        'Configured data routines in web services with .NET Framework MVC and dynamic web pages with ASP.NET Razor, connecting relational (SQL Server) and NoSQL (DynamoDB) databases.',
        'Diagnosed and fixed a critical bug in the application\'s password field, deploying the fix the same day.'
      ]
    }
  ],
  education: [
    { course: 'Postgraduate in Front-end Engineering', institution: 'FIAP', period: 'August 2024 – July 2025' },
    { course: 'Associate Degree in Systems Analysis and Development', institution: 'FIAP', period: 'January 2020 – December 2021' },
    { course: 'Theater and Public Speaking Course', institution: '', period: 'August 2022 – March 2024' }
  ],
  projects: [
    { name: 'Personal Portfolio (this site)', url: 'https://github.com/lucascgs1/lucascgs1.github.io', description: 'Personal site built with Angular 20+, featuring internationalization (PT/EN), PWA support, and automated deployment via GitHub Actions.' }
  ]
};
