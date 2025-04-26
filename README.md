# 📅 App de Agendamento de Consultas Médicas

Este aplicativo permite que usuários agendem, visualizem e gerenciem consultas médicas de forma prática e intuitiva. Desenvolvido como parte do projeto acadêmico da disciplina de Desenvolvimento Mobile, o app utiliza tecnologias modernas e boas práticas de desenvolvimento.

## 🧾 Sumário

- [📱 Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Instalação e Execução](#-instalação-e-execução)
- [📸 Capturas de Tela](#-capturas-de-tela)
- [🧪 Testes](#-testes)
- [📚 Referências](#-referências)
- [📄 Licença](#-licença)

## 📱 Funcionalidades

- Agendamento de novas consultas com data, hora, médico e descrição.
- Visualização de consultas agendadas com detalhes do médico e status.
- Edição e exclusão de consultas existentes.
- Atualização automática da lista de consultas ao retornar à tela inicial.
- Armazenamento local dos dados utilizando AsyncStorage.
- Utilização de tipagem forte (TypeScript) e segregação de responsabilidades em arquivos.

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [React Native Elements](https://reactnativeelements.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Expo](https://expo.dev/)

## 📂 Estrutura do Projeto

```bash
├── src
│   ├── components
│   │   └── Header.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   └── CreateAppointmentScreen.tsx
│   ├── styles
│   │   └── theme.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── storage.ts
│   └── App.tsx
├── assets
│   └── images
├── package.json
└── README.md

## 🚀 Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install

4. Inicie o projeto:
   ```bash
   npm start
   # ou
   yarn start
