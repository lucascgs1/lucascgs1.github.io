import { Resume } from '../models/cv.model';

export const CV_DATA_EN: Resume = {
  name: 'Lucas Coutinho',
  title: 'Senior Frontend Engineer | Angular | Microfrontends | AWS',
  location: 'São Paulo, SP, Brazil',
  email: 'lucascgs1@hotmail.com',
  linkedin: 'linkedin.com/in/lucascgs1',
  github: 'github.com/lucascgs1',
  summary: 'Senior Frontend Engineer specialized in Angular and microfrontend architecture, focused on developing scalable and high-performance corporate applications. Solid experience in the financial and automotive sectors, acting in highly complex projects with international teams and daily communication in English. Expert in modernizing legacy systems, migrating from AngularJS to recent Angular versions, and building reusable architectures with clean code. Experienced in implementing CI/CD pipelines, deploying to AWS infrastructure (S3 and CloudFront), and seamlessly integrating with REST APIs.',
  skills: {
    languagesAndFrameworks: ['Angular (2+ up to 20)', 'TypeScript', 'SCSS', 'React Native', 'Redux.js', 'RxJS', 'NgRx', '.NET Core'],
    architecture: ['Microfrontends', 'REST APIs', 'Reusable Components', 'Single Page Applications (SPA)'],
    devopsAndCloud: ['AWS (S3, CloudFront)', 'Jenkins', 'Azure DevOps', 'GitHub Actions', 'Gitlab'],
    methodologies: ['Scrum', 'Kanban', 'Jira', 'Karma', 'Jasmine', 'Postman']
  },
  experience: [
    {
      company: 'act digital',
      role: 'Bilingual Senior Frontend Engineer',
      period: 'November 2025 – Present',
      description: [
        'Develops microfrontend architecture for BMW\'s MyAccount platform, utilizing Angular 20 and integrating new features into legacy systems.',
        'Collaborates daily with a distributed international team, maintaining communication and alignment in English.',
        'Leads the migration of monolithic components to a microfrontend (MFEs) based architecture and manages the update of UI and Service libraries.',
        'Develops database scripts for data insertion and manipulation.'
      ]
    },
    {
      company: 'Numax',
      role: 'Frontend Developer',
      period: 'March 2024 – June 2025',
      description: [
        'Developed and maintained corporate web applications, leading the complete migration of systems from AngularJS to Angular 18.',
        'Optimized technical performance by creating custom libraries and continuously refactoring code.',
        'Structured build and deploy automation routines using Jenkins and Azure DevOps, directly publishing to AWS infrastructure.'
      ]
    },
    {
      company: 'GFT Group (Allocated to Banco Santander)',
      role: 'Front-end Developer',
      period: 'September 2022 – April 2023',
      description: [
        'Built interactive web applications with Angular, integrating the frontend with RESTful APIs via HttpClient and RxJS.',
        'Ensured system reliability by implementing automated testing routines with Karma and Jasmine.',
        'Managed the continuous integration (CI/CD) cycle using Jenkins and agile methodologies (Scrum/Jira).'
      ]
    },
    {
      company: 'Qintess (Allocated to Banco Pan)',
      role: 'Front-end Developer',
      period: 'March 2022 – September 2022',
      description: [
        'Developed modular components in Angular using state management with NgRx.',
        'Applied refactoring best practices, ensuring performance, scalability, and security of banking applications.',
        'Documented technical and architectural specifications in Confluence, facilitating communication with stakeholders.'
      ]
    },
    {
      company: 'NTT DATA Europe & Latam (Allocated to Banco Itaú)',
      role: 'Mid-level Front-end Developer',
      period: 'May 2021 – March 2022',
      description: [
        'Worked on maintaining Angular interfaces and API service integration.',
        'Actively participated in "war rooms" for the rapid resolution of critical technical issues.',
        'Trained and provided technical mentorship to new development team members.'
      ]
    },
    {
      company: 'Tecnologia Unica',
      role: 'Junior Fullstack Developer / Intern',
      period: 'February 2018 – September 2020',
      description: [
        'Programmed responsive interfaces using AngularJS and Angular 2+, along with mobile components using Ionic.',
        'Developed backend services in .NET Core and .NET Framework (microservices architecture), communicating with SQL Server and DynamoDB.'
      ]
    },
    {
      company: 'Anapro',
      role: 'Consultant',
      period: 'March 2017 – December 2017',
      description: [
        'Provided advanced technical support, acting as the primary liaison between the business area and the technical team.'
      ]
    }
  ],
  education: [
    { course: 'Postgraduate in Front-end Engineering', institution: 'FIAP', period: 'August 2024 – July 2025' },
    { course: 'Associate Degree in Systems Analysis and Development', institution: 'FIAP', period: 'January 2020 – December 2021' },
    { course: 'Vocational in Graphic Design', institution: 'SAGA', period: '2015 – 2016' },
    { course: 'Technical in Business Administration', institution: 'ETEC de Cidade Tiradentes', period: '2012 – 2014' }
  ],
  projects: [
    { name: 'Angular Project', url: 'https://github.com/lucascgs1', description: 'Modern and scalable system.' }
  ]
};
