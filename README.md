# Lucas Coutinho — Portfólio Pessoal

Site pessoal e currículo interativo, publicado em **[lucascgs1.github.io](https://lucascgs1.github.io/)**.

## Funcionalidades

- **Internacionalização (PT/EN)** — todo o conteúdo, incluindo os dados de currículo, é carregado de forma tipada e traduzida.
- **PWA instalável** — service worker configurado (`ngsw-config.json`), manifest e ícones para instalação em desktop/mobile.
- **Currículo em PDF** — download direto das versões PT e EN (`public/assets/cv-lucas-pt.pdf`, `cv-lucas-en.pdf`).
- **Formulário de contato** integrado à seção de projetos e experiência.
- **Deploy automático** a cada push na branch principal.

## Stack

- [Angular 21](https://angular.dev/) (standalone components)
- TypeScript
- Tailwind CSS
- Vitest (testes unitários)
- Angular Service Worker (PWA)

## Rodando localmente

```bash
pnpm install
pnpm start   # ng serve — http://localhost:4200
```

## Build de produção

```bash
pnpm run build
```

O output vai para `dist/portfolio/browser`.

## Deploy

Todo push nas branches `main`/`master` dispara o workflow em
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que instala as
dependências, builda o projeto e publica automaticamente no GitHub Pages.

## Contato

- **LinkedIn:** [linkedin.com/in/lucascgs1](https://www.linkedin.com/in/lucascgs1/)
- **GitHub:** [@lucascgs1](https://github.com/lucascgs1)
