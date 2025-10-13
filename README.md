# Delive Keep - Frontend

Interface do usuário para o serviço **Delive Keep**, construída com **React** e **Vite**.

![Insira um screenshot ou GIF da aplicação aqui]

---

## Sobre o Projeto
Este é o repositório do **front-end da Delive Keep**, uma aplicação pensada para simplificar a retirada de encomendas.  
A plataforma permite que usuários se cadastrem, acompanhem seus pedidos e gerenciem sua conta de forma centralizada.

Atualmente, o projeto conta com:
- Landing page para apresentação do serviço.
- Fluxo de autenticação com páginas de **Login** e **Registro**.
- **Dashboard do usuário** para gerenciamento de conta e visualização de pedidos.
- **Validação de formulários** no lado do cliente para uma melhor experiência de usuário.

---

## Tecnologias Utilizadas
- **React**
- **Vite**
- **React Router DOM** → roteamento
- **React Bootstrap** → componentes de UI
- **Axios** → requisições HTTP
- **SASS** → estilização avançada

---

## Como Começar

Para rodar este projeto localmente, você vai precisar do **Node.js (versão 18 ou superior)** e do **npm** instalados.

**Importante:** É essencial que o **backend da aplicação** esteja rodando localmente.  
A API deve estar disponível em **http://localhost:5000**, conforme a especificação.

### Passos para Instalação

Clone o repositório:
```bash
git clone https://github.com/DeliveKeep/DeliveKeep-Front.git
```

Navegue até a pasta do projeto:
```bash
cd delivekeep-front
```

Instale as dependências:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O app estará disponível em **http://localhost:5173** (ou outra porta indicada pelo Vite no seu terminal).

---

## Scripts Disponíveis

No `package.json`, você encontrará os seguintes scripts:

- `npm run dev` → Inicia o servidor de desenvolvimento com **Hot-Reload**.
- `npm run build` → Gera a **build de produção** na pasta `dist`.
- `npm run preview` → Serve a pasta `dist` para testar a build de produção localmente.
- `npm run lint` → Executa o **ESLint** para analisar o código em busca de erros.

---

## Estrutura de Pastas

A estrutura de arquivos foi pensada para ser **escalável e organizada**:

```
/src
├── /assets         # Imagens, ícones e fontes
├── /components     # Componentes reutilizáveis (botões, cards, layouts)
├── /contexts       # Gerenciamento de estado global (ex: AuthContext)
├── /pages          # Componentes que representam as páginas da aplicação
├── /services       # Lógica de comunicação com a API (ex: instância do Axios)
├── App.jsx         # Configuração principal de rotas
└── main.jsx        # Ponto de entrada da aplicação
```

---
