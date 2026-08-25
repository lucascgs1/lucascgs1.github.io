import { Resume } from '../models/cv.model';

export const CV_DATA: Resume = {
  name: 'Lucas Coutinho',
  title: 'Engenheiro Frontend | Angular | Microfrontends | AWS',
  location: 'São Paulo, SP, Brasil',
  email: 'lucascoutinho85@gmail.com',
  linkedin: 'linkedin.com/in/lucascgs1',
  github: 'github.com/lucascgs1',
  summary: 'Engenheiro Frontend com cerca de 8 anos de experiência em desenvolvimento de software, com sólido histórico na criação de arquiteturas escaláveis e ecossistemas de microfrontends, e na modernização de plataformas legadas de alta complexidade. Tenho forte atuação no setor financeiro, com aproximadamente 2 anos somados em três empresas, em projetos para os bancos Santander, Pan e Itaú, e experiência mais recente no setor automotivo, na plataforma global BMW MyAccount, em ambiente internacional bilíngue (português-inglês). Foco minha atuação em otimização de performance web, governança de código, criação de bibliotecas compartilhadas e estruturação de esteiras automatizadas de CI/CD integradas a serviços cloud da AWS. Além do escopo técnico, lidero processos de onboarding e mentoria de engenheiros, e tenho experiência diagnosticando e resolvendo rapidamente falhas críticas em produção.',
  skills: {
    languagesAndFrameworks: ['Angular (2+ até 20)', 'AngularJS', 'TypeScript', 'JavaScript (ES6+)', 'RxJS', 'NgRx (padrão Redux para Angular)', 'HTML5', 'CSS3/SCSS (BEM, Flexbox, Grid)', 'Angular Material', '.NET Core', 'C#'],
    architecture: ['Microfrontends (MFE)', 'Module Federation', 'Clean Architecture', 'Clean Code', 'SOLID', 'KISS', 'DRY', 'DDD (organização por domínio)', 'Lazy Loading', 'Single Page Applications (SPA)', 'Acessibilidade Web (WCAG, ARIA)'],
    devopsAndCloud: ['AWS (S3, CloudFront, Lambda, DynamoDB)', 'Azure DevOps', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Docker'],
    methodologies: ['Scrum', 'Kanban', 'SAFe', 'Jira', 'Confluence', 'Karma', 'Jasmine', 'Vitest', 'Postman', 'SonarQube', 'axe DevTools', 'Git']
  },
  experience: [
    {
      company: 'act digital',
      role: 'Engenheiro Frontend Bilíngue',
      period: 'Novembro de 2025 – Abril de 2026',
      description: [
        'Migrou módulos monolíticos da plataforma global MyAccount da BMW para uma arquitetura de microfrontends com Angular 20 (Signals, @defer) e Module Federation, reduzindo o tempo de build e isolando os deploys por microfrontend.',
        'Foi o desenvolvedor mais experiente do time e assumiu, na prática, responsabilidades de liderança técnica durante um longo período sem tech lead formal, em ambiente internacional bilíngue com alinhamentos diários em inglês.',
        'Desenvolveu funcionalidades com foco em acessibilidade (WCAG, ARIA) e contribuiu para a governança das bibliotecas internas de UI e Serviços compartilhadas entre os microfrontends.',
        'Mapeou módulos legados sem documentação com apoio de IA (GitHub Copilot/Claude Sonnet), incluindo um agente próprio que construiu para automatizar essa documentação.',
        'Corrigiu memory leaks de subscriptions RxJS, route guards implementados de forma assimétrica entre microfrontends, e bugs de banco de dados/encoding que quebravam o pipeline de CI/CD.'
      ]
    },
    {
      company: 'Numax',
      role: 'Engenheiro Frontend / Full-Stack',
      period: 'Março de 2024 – Junho de 2025',
      description: [
        'Liderou a migração completa do ecossistema de AngularJS para Angular 18, reduzindo o tempo de carregamento inicial da aplicação multitenant de aproximadamente 1 minuto e 40 segundos para cerca de 35 segundos e eliminando sobrecargas severas no bundle inicial.',
        'Desenhou e configurou esteiras completas de CI/CD via Azure DevOps, automatizando a publicação direta em ambientes AWS (S3 e CloudFront), com deploys contínuos e invalidação automática de cache.',
        'Criou componentes dinâmicos e bibliotecas reutilizáveis para agilizar o desenvolvimento de novos módulos internos do sistema.',
        'Diagnosticou e corrigiu uma falha crítica em produção surgida antes da conclusão da validação em ambiente de testes: uma feature flag ausente impedia a exibição do botão de login. Restaurou a funcionalidade no mesmo dia.',
        'Desenvolveu e manteve continuamente aplicações web corporativas em Angular, aplicando Clean Code e princípios SOLID/KISS/DRY em refatorações recorrentes de performance e manutenibilidade.'
      ]
    },
    {
      company: 'GFT Group (Projeto: Banco Santander - benAssist)',
      role: 'Desenvolvedor Frontend Nível L3',
      period: 'Setembro de 2022 – Abril de 2023',
      description: [
        'Projetou componentes de interface modulares e reutilizáveis alinhados aos design tokens corporativos da plataforma benAssist, acelerando a entrega de novos recursos das squads ágeis paralelas.',
        'Treinou e apoiou estagiários da equipe e alinhou diretamente com a gestão e o time de produto, desempenhando no dia a dia responsabilidades de nível sênior.',
        'Elevou os indicadores de estabilidade e segurança técnica do internet banking, expandindo a cobertura de testes unitários automatizados com Karma e Jasmine.',
        'Integrou o frontend a APIs RESTful via HttpClient e RxJS, consumindo os serviços backend da plataforma benAssist.',
        'Geriu o ciclo de CI/CD com Jenkins e GitLab, aplicou análise estática com SonarQube, e conduziu entregas sob metodologias ágeis (Kanban/Scrum/OKR) com Jira e Confluence.'
      ]
    },
    {
      company: 'Qintess (Projeto: Banco Pan - giropan)',
      role: 'Desenvolvedor Frontend',
      period: 'Março de 2022 – Setembro de 2022',
      description: [
        'Refatorou fluxos assíncronos de dados e otimizou o gerenciamento de estado global via NgRx no projeto giropan, eliminando um memory leak causado por múltiplas subscriptions RxJS aninhadas sem gerenciamento adequado, e corrigindo falhas de concorrência em dashboards de alto tráfego.',
        'Manteve um ciclo contínuo de refatoração com foco em performance de renderização do lado do cliente, implementou testes automatizados (Postman, Jasmine) integrados a Jenkins/Azure Git sob Scrum/SAFe, com análise estática via SonarQube e documentação técnica no Confluence.'
      ]
    },
    {
      company: 'everis / NTT DATA Europe & Latam (Projeto: Banco Itaú - Hub Agro)',
      role: 'Desenvolvedor Frontend / Fullstack',
      period: 'Abril de 2021 – Março de 2022',
      description: [
        'Implementou e manteve a plataforma financeira corporativa Hub Agro utilizando Angular e RxJS, integrando o front-end a back-ends baseados em .NET Core.',
        'Assumiu responsabilidades equivalentes às de um tech lead, conduzindo múltiplas frentes de trabalho de forma independente, e coordenou a trilha de onboarding de novos engenheiros, encurtando o tempo até a entrega de código de forma independente.',
        'Manteve uma branch de backup isolada antes de integrar alterações de terceiros; quando uma mudança corrompeu o repositório principal e afetou múltiplas equipes, essa branch foi usada para restaurar o projeto rapidamente, reduzindo um dia inteiro de recuperação para cerca de 30 minutos.',
        'Executou testes automatizados (Karma, Jasmine, Postman) e documentou tecnicamente no Confluence, atuando sob metodologias Kanban/Scrum/OKR com gestão de tarefas no Jira e versionamento via GitLab.'
      ]
    },
    {
      company: 'Tecnologia Unica',
      role: 'Desenvolvedor Fullstack (trajetória de Estagiário/Júnior até Pleno)',
      period: 'Fevereiro de 2018 – Setembro de 2020',
      description: [
        'Construiu interfaces responsivas com AngularJS e Angular 2+ e desenvolveu aplicações móveis híbridas estáveis com as versões 3 e 4 do Ionic, com foco em fluidez e performance de renderização em dispositivos móveis.',
        'Estruturou APIs RESTful seguras sob modelo de microsserviços usando .NET Core, C# e Swagger, aplicando validações via tokens JWT para suportar cargas volumosas de requisições paralelas.',
        'Configurou rotinas de dados em serviços web com .NET Framework MVC e páginas dinâmicas com ASP.NET Razor, conectando bancos relacionais (SQL Server) e NoSQL (DynamoDB).',
        'Diagnosticou e corrigiu um bug crítico no campo de senha da aplicação, com deploy da correção ainda no mesmo dia.'
      ]
    }
  ],
  education: [
    { course: 'Pós-graduação em Engenharia Front-end', institution: 'FIAP', period: 'Agosto 2024 – Julho 2025' },
    { course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', institution: 'FIAP', period: 'Janeiro 2020 – Dezembro 2021' },
    { course: 'Curso de Teatro e Oratória', institution: '', period: 'Agosto 2022 – Março 2024' }
  ],
  projects: [
    { name: 'Portfólio Pessoal (este site)', url: 'https://github.com/lucascgs1/lucascgs1.github.io', description: 'Site pessoal construído em Angular 20+, com suporte a internacionalização (PT/EN), PWA e deploy automatizado via GitHub Actions.' }
  ]
};
