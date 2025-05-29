📱 Frontend - Cadastro de Usuário com React e Vite
Frontend da aplicação de cadastro de usuário, desenvolvido com React, Vite e CSS, consumindo a API criada na API-parte1.

-------------------------------------------------------------------------------------------------------------------------

🚀 Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.

Vite: Ferramenta de build rápida e moderna para projetos frontend.

CSS: Folhas de estilo em cascata para estilização da aplicação.

Axios: Cliente HTTP para realizar requisições à API.

React Router DOM: Biblioteca para navegação entre páginas no React.

-------------------------------------------------------------------------------------------------------------------------

🧪 Funcionalidades
Cadastro de novos usuários.

Listagem de usuários cadastrados.

Atualização de dados do usuário.

Exclusão de usuários.

Validação de formulários.

Feedbacks visuais para o usuário.

-------------------------------------------------------------------------------------------------------------------------

📦 Instalação
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/Osmil20/API-parte2.git
Acesse a pasta do projeto:

bash
Copiar
Editar
cd API-parte2
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
A aplicação estará disponível em: http://localhost:5173

-------------------------------------------------------------------------------------------------------------------------

🔗 Endpoints Consumidos
POST /users: Cadastrar novo usuário.

GET /users: Listar todos os usuários.

GET /users/:id: Buscar usuário por ID.

PUT /users/:id: Atualizar usuário.

DELETE /users/:id: Deletar usuário.

-------------------------------------------------------------------------------------------------------------------------

🖼️ Exemplo de Tela

📁 Estrutura do Projeto
pgsql
Copiar
Editar
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   ├── UserCard.jsx
│   │   └── UserForm.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   └── UserDetail.jsx
│   ├── services
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles
│       └── App.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
🧑‍💻 Contribuição
Contribuições são bem-vindas! Para contribuir:

-------------------------------------------------------------------------------------------------------------------------

Faça um fork deste repositório.

Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).

Faça commit das suas alterações (git commit -am 'Adiciona nova feature').

Envie para o repositório remoto (git push origin feature/nome-da-feature).

Abra um Pull Request.

📄 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
