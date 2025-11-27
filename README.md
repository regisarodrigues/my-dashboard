# SolidStart Dashboard (Bun + SolidStart 2025)

Este é um projeto desenvolvido com **SolidStart**, **Vinxi** e **Bun**, inspirado no estilo do curso  
**[“Next.js: El framework de React para producción”](https://www.udemy.com/course/nextjs-fh/)** de Fernando Herrera.

O objetivo é criar uma base sólida (sem trocadilhos ) para projetos modernos usando **SSR**, **rotas dinâmicas**, **queries com cache**, **Suspense**, **Streams**, e desenvolvimento rápido com **Bun**.

---

## Tecnologias Utilizadas

- **SolidStart 1.1.0+** – Framework fullstack para SolidJS com SSR e rotas
- **SolidJS** – Biblioteca reativa ultrarrápida
- **Vinxi** – Bundler e desenvolvimento do SolidStart
- **Bun** – Runtime + gerenciador de pacotes super rápido
- **TypeScript** – Tipagem forte para melhor DX
- **TailwindCSS** – Estilização utilitária moderna
- **Fetch API** – Consumo de APIs externas (ex: PokéAPI)
- **Arquitetura por pastas** (`routes`, `components`, `types`, `lib`, `server`)
- **Queries com Cache** (`query()` + `createAsync()`)
- **Suspense** – Carregamento assíncrono fluido
- **ChatGPT (Assistente de Desenvolvimento)** – Auxílio na documentação, estrutura e arquitetura do projeto

---

## Estrutura do Projeto

```
src/
 ├ components/    # Componentes reutilizáveis
 ├ routes/        # Rotas (SSR, ações, loaders)
 ├ types/         # Tipos e interfaces TypeScript
 ├ lib/           # Funções auxiliares e utils
 ├ server/        # APIs, handlers, server-functions
 └ app.tsx        # Configuração raiz do app
```

---

## Como iniciar o projeto

```bash
git clone <URL_DO_SEU_REPO>
cd my-dashboard
bun install
bun dev
```

---

## Build para produção

```bash
bun run build
bun run start
```

---

## Features importantes deste projeto

- Rotas dinâmicas
- Queries com cache
- SSR + Suspense
- Organização profissional em `/types`

---

## Scripts úteis

| Comando         | Descrição                                 |
| --------------- | ----------------------------------------- |
| `bun dev`       | Inicia o servidor em modo desenvolvimento |
| `bun run build` | Gera build de produção                    |
| `bun run start` | Roda o servidor em modo produção          |

---

## Licença

Livre para estudos e modificação.

---

## Autor

Feito por **Regis Adriano Rodrigues**,  
baseado em práticas do curso de Fernando Herrera.
