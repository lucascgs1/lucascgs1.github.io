import { Resume } from '../models/cv.model';

export const CV_DATA: Resume = {
  name: 'Lucas Coutinho',
  title: 'Engenheiro Frontend Sênior | Angular | Microfrontends | AWS',
  location: 'São Paulo, SP, Brasil',
  email: 'lucascgs1@hotmail.com',
  linkedin: 'linkedin.com/in/lucascgs1',
  github: 'github.com/lucascgs1',
  summary: 'Engenheiro Frontend Sênior especializado em Angular e na arquitetura de microfrontends, focado no desenvolvimento de aplicações corporativas escaláveis e de alta performance. Possui sólida experiência nos setores financeiro e automotivo, atuando em projetos de alta complexidade com times internacionais e comunicação diária em inglês. Especialista na modernização de sistemas legados, migrando de AngularJS para versões recentes do Angular, e na construção de arquiteturas reutilizáveis com código limpo. Experiente na implementação de pipelines de CI/CD, realização de deploys em infraestrutura AWS (S3 e CloudFront) e na integração fluida com APIs REST.',
  skills: {
    languagesAndFrameworks: ['Angular (2+ até 20)', 'TypeScript', 'SCSS', 'React Native', 'Redux.js', 'RxJS', 'NgRx', '.NET Core'],
    architecture: ['Microfrontends', 'APIs REST', 'Componentes Reutilizáveis', 'Single Page Applications (SPA)'],
    devopsAndCloud: ['AWS (S3, CloudFront)', 'Jenkins', 'Azure DevOps', 'GitHub Actions', 'Gitlab'],
    methodologies: ['Scrum', 'Kanban', 'Jira', 'Karma', 'Jasmine', 'Postman']
  },
  experience: [
    {
      company: 'act digital',
      role: 'Engenheiro Frontend Sênior Bilíngue',
      period: 'Novembro de 2025 – Presente',
      description: [
        'Atua no desenvolvimento de arquitetura de microfrontends para a plataforma MyAccount da BMW, utilizando Angular 20 e integrando novas funcionalidades a sistemas legados.',
        'Colabora diariamente com uma equipe internacional distribuída, mantendo comunicação e alinhamento em inglês.',
        'Lidera a migração de componentes monolíticos para uma arquitetura baseada em microfrontends (MFEs) e gerencia a atualização de bibliotecas de UI e Serviços.',
        'Desenvolve scripts de banco de dados para a inserção e manipulação de dados.'
      ]
    },
    {
      company: 'Numax',
      role: 'Desenvolvedor Frontend',
      period: 'Março de 2024 – Junho de 2025',
      description: [
        'Desenvolveu e manteve aplicações web corporativas, conduzindo a migração completa de sistemas de AngularJS para Angular 18.',
        'Otimizou a performance técnica criando bibliotecas personalizadas e aplicando refatoração de código contínua.',
        'Estruturou rotinas de automação para build e deploy utilizando Jenkins e Azure DevOps, com publicação direta em infraestrutura AWS.'
      ]
    },
    {
      company: 'GFT Group (Alocado no Banco Santander)',
      role: 'Desenvolvedor Front-end',
      period: 'Setembro de 2022 – Abril de 2023',
      description: [
        'Construuiu aplicações web interativas com Angular, integrando o frontend com APIs RESTful via HttpClient e RxJS.',
        'Assegurou a confiabilidade dos sistemas implementando rotinas de testes automatizados com Karma e Jasmine.',
        'Gerenciou o ciclo de integração contínua (CI/CD) utilizando Jenkins e metodologias ágeis (Scrum/Jira).'
      ]
    },
    {
      company: 'Qintess (Alocado no Banco Pan)',
      role: 'Desenvolvedor Front-end',
      period: 'março de 2022 – setembro de 2022',
      description: [
        'Desenvolveu componentes modulares em Angular utilizando gestão de estado com NgRx.',
        'Aplicou boas práticas de refatoração, garantindo a performance, escalabilidade e a segurança das aplicações bancárias.',
        'Documentou especificações técnicas e arquiteturais no Confluence, facilitando a comunicação com os stakeholders.'
      ]
    },
    {
      company: 'NTT DATA Europe & Latam (Alocado no Banco Itaú)',
      role: 'Desenvolvedor Front-end Pleno',
      period: 'maio de 2021 – Março de 2022',
      description: [
        'Atuou na manutenção de interfaces em Angular e integração de serviços API.',
        'Participou ativamente de "war rooms" para a rápida resolução de problemas técnicos críticos.',
        'Treinou e ofereceu mentoria técnica a novos membros da equipe de desenvolvimento.'
      ]
    },
    {
      company: 'Tecnologia Unica',
      role: 'Desenvolvedor Fullstack Júnior / Estagiário',
      period: 'Fevereiro de 2018 – Setembro de 2020',
      description: [
        'Programou interfaces responsivas utilizando AngularJS e Angular 2+, além de componentes mobile com Ionic.',
        'Desenvolveu serviços backend em .NET Core e .NET Framework (arquitetura de microsserviços), comunicando com SQL Server e DynamoDB.'
      ]
    },
    {
      company: 'Anapro',
      role: 'Consultor',
      period: 'Março de 2017 – dezembro de 2017',
      description: [
        'Prestou suporte técnico avançado, atuando como elo principal entre a área de negócios e a equipe técnica.'
      ]
    }
  ],
  education: [
    { course: 'Pós-graduação em Engenharia Front-end', institution: 'FIAP', period: 'Agosto 2024 – Julho 2025' },
    { course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', institution: 'FIAP', period: 'Janeiro 2020 – Dezembro 2021' },
    { course: 'Profissionalizante em Design Gráfico', institution: 'SAGA', period: '2015 – 2016' },
    { course: 'Técnico em Administração', institution: 'ETEC de Cidade Tiradentes', period: '2012 – 2014' }
  ],
  projects: [
    { name: 'Projeto Angular', url: 'https://github.com/lucascgs1', description: 'Sistema moderno e escalável.' }
  ]
};
