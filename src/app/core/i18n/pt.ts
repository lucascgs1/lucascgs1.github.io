import { TranslationDictionary } from './translation.model';

export const pt: TranslationDictionary = {
  nav: { about: 'Sobre', skills: 'Skills', experience: 'Experiência', projects: 'Projetos', education: 'Formação', contact: 'Fale Comigo' },
  hero: { category: 'Engenharia de Software', downloadCv: 'Baixar CV' },
  skills: { 
    title: 'Principais Stacks', 
    cat1: 'Linguagens e Frameworks', 
    cat2: 'Arquitetura e Integração', 
    cat3: 'DevOps e Cloud', 
    cat4: 'Metodologias e Testes' 
  },
  experience: { title: 'Onde Trabalhei' },
  education: { title: 'Formação Acadêmica' },
  projects: { title: 'Outros Projetos', seeMore: 'Ver Mais no GitHub' },
  footer: { 
    developedBy: 'Desenvolvido por',
    contactMe: 'Fale Comigo',
    contactText: 'Estou sempre aberto a conversar sobre tecnologia, arquitetura ou novas oportunidades.',
    namePlaceholder: 'Seu Nome',
    emailPlaceholder: 'Seu E-mail',
    messagePlaceholder: 'Sua Mensagem...',
    sendButton: 'Enviar Mensagem',
    successMessage: 'Mensagem enviada com sucesso!',
    errorMessage: 'Erro ao enviar. Tente novamente.'
  }
};
