import { TranslationDictionary } from './translation.model';

export const en: TranslationDictionary = {
  nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
  hero: { category: 'Software Engineering', downloadCv: 'Download CV' },
  skills: { 
    title: 'Main Stacks', 
    cat1: 'Languages & Frameworks', 
    cat2: 'Architecture & Integration', 
    cat3: 'DevOps & Cloud', 
    cat4: 'Methodologies & Testing' 
  },
  experience: { title: 'Where I Worked' },
  projects: { title: 'Other Projects', seeMore: 'See More on GitHub' },
  footer: { 
    developedBy: 'Developed by',
    contactMe: 'Contact Me',
    contactText: 'I am always open to chatting about technology, architecture, or new opportunities.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message...',
    sendButton: 'Send Message',
    successMessage: 'Message sent successfully!',
    errorMessage: 'Error sending message. Please try again.'
  }
};
