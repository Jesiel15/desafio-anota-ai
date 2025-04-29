# Desafio Anota AI

Este projeto foi desenvolvido como parte de um desafio técnico para vaga de Front-end na **Anota AI**. A proposta era replicar uma interface com fidelidade visual, utilizando Angular 2+ (preferencialmente versão 17+), sem uso de bibliotecas de componentes como Bootstrap ou Angular Material, focando em **HTML, CSS puro e boas práticas de arquitetura front-end**.

---

## 🚀 Tecnologias Utilizadas

- [Angular 17](https://angular.io/) – Framework principal
- [TypeScript](https://www.typescriptlang.org/) – Superset do JavaScript utilizado com Angular
- [SCSS](https://sass-lang.com/) – Pré-processador CSS utilizado no projeto
- [Jasmine/Karma](https://karma-runner.github.io/) – Ferramentas utilizadas para testes unitários
- [VS Code](https://code.visualstudio.com) - Editor de código leve e poderoso com suporte a extensões
- [Vercel](https://vercel.com/) - Usado para hospedagem para aplicações web

---

## 📋 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

```
Node.js v20.9.0
Angular CLI v17.3.12
```

---

## 🔧 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Jesiel15/desafio-anota-ai.git
cd desafio-anota-ai
npm install
```

---

## 📂 Estrutura do Projeto

Este projeto utiliza uma arquitetura baseada em módulos e componentes organizados por funcionalidade. Os estilos foram construídos em SCSS, com separação por responsabilidades e sem uso de bibliotecas externas.

```bash
src/
├── app/
│   ├── components/               # Componentes reutilizáveis
│   │   ├── card/                 # Componente de cartão de exibição
│   │   ├── header/               # Cabeçalho da aplicação
│   │   └── search-field/         # Campo de busca reutilizável
│   ├── home/                     # Página inicial e lógica associada
│   ├── shared/                   # Recursos compartilhados (enums, pipes, etc.)
│   │   └── card.enum.ts          # Enum utilizado por múltiplos componentes
│   ├── app.component.html        # Template principal da aplicação
│   ├── app.component.scss        # Estilos do componente raiz
│   ├── app.component.spec.ts     # Testes do componente raiz
│   ├── app.component.ts          # Componente raiz da aplicação
│   ├── app.config.ts             # Configurações globais
│   └── app.routes.ts             # Definições de rotas da aplicação
├── assets/                       # Arquivos estáticos (imagens, ícones)
│   ├── .gitkeep
│   ├── close.svg
│   ├── favicon.png
│   ├── logo-anota-ai.png
│   └── lupa.png
├── index.html                    # HTML principal da aplicação
├── main.ts                       # Ponto de entrada da aplicação
├── styles.scss                   # Estilos globais

```

---

## 🖼️ Funcionalidades Implementadas

- ✅ Criação de cabeçalho (Header)
- ✅ Listagem dinâmica de cards via HTTP GET
- ✅ Filtro de cards por título ou descrição
- ✅ Exclusão de cards via ação do usuário
- ✅ Estilização visual fiel ao layout proposto (imagem e vídeo)
- ✅ Layout responsivo
- ✅ Estrutura SCSS organizada
- 🔁 Testes unitários com Karma e Jasmine

---

## 🔍 Como rodar o projeto

Após a instalação:

```bash
npm start
```

Acesse em: `http://localhost:4200`

---

## 🧪 Testes Unitários

Para executar os testes automatizados:

```bash
npm test
```

Os testes estão escritos com Jasmine e executados via Karma.
Para visualizar o Coverage, acesso arquivo e copie o **Resource Path**

---

Caminho do index.html do **coverage** na raiz do projeto.

```bash
coverage\desafio-anota-ai\index.html
```

Vai ficar mais ou menos assim, depois cole no navegador.

```bash
D:\Arquivos de Programas\desafio-anota-ai\coverage\desafio-anota-ai\index.html
```

---

## ✒️ Autor

- **Jesiel Faria** – 📎 [github.com/Jesiel15](https://github.com/Jesiel15)

---

## 🎥 Referência Visual

- 📸 [Mock da interface](https://githubanotaai.github.io/frontend-interview-mock-data/teste/Test-front-anota-ai.jpg)
- 🎬 [Vídeo da animação](https://githubanotaai.github.io/frontend-interview-mock-data/teste/Test-front-anota-ai.webm)

- 📄 [Enpoint da lista dos cards](https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json)

---

## 🎁 Expressões de gratidão

- Esse projeto foi um desafio proposto a uma vaga de emprego frontend 📢;
- Agradeço a Anota Aí pela oportunidade;

---

⌨️ com ❤️ por [Jesiel Faria](https://github.com/Jesiel15) 😊
