# Interesse Popular Webapp

Frontend do Interesse Popular, criado com React, Next.js, TypeScript, Tailwind CSS e ESLint.

## Executar localmente

Instale as dependências (necessário apenas na primeira vez):

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:8080`. As mudanças nos arquivos são refletidas automaticamente no navegador.

## Comandos úteis

- `npm run dev`: inicia o ambiente local.
- `npm run lint`: verifica problemas de código.
- `npm run build`: gera a versão de produção.
- `npm run start`: inicia a versão de produção após o build.

## Estrutura inicial

- `src/app/page.tsx`: página inicial (`/`).
- `src/app/layout.tsx`: layout e metadados globais.
- `src/app/globals.css`: estilos globais e Tailwind.
- `public/`: arquivos estáticos, como imagens e ícones.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` antes de configurar integrações com a API. Arquivos `.env*` são ignorados pelo Git, com exceção do exemplo.
