# ⚡ FlashFlow 2.0

FlashFlow 2.0 é uma aplicação Full-Stack desenvolvida para o gerenciamento de flashcards de estudo. O sistema permite criar, visualizar, editar e deletar cartões de estudo de forma dinâmica. O usuário pode organizar seus conhecimentos através de categorias fixas predefinidas e interagir com os cartões utilizando uma mecânica de virada (flip) para visualizar as perguntas e respostas.

Projeto desenvolvido para o Desafio Fase 3 - Pós Graduação Start Dev da Rocketseat, focado em boas práticas, código limpo, componentização e separação clara de responsabilidades entre Front-end e Back-end.

## 🚀 Tecnologias Utilizadas

### Front-end (`/web`)
*   **React:** Biblioteca para construção da interface de usuário.
*   **TypeScript:** Adicionando tipagem estática para maior previsibilidade.
*   **Vite:** Build tool extremamente rápida para projetos modernos.
*   **Tailwind CSS:** Estilização utility-first para criação de um layout pixel-perfect de acordo com o Figma.
*   **Axios:** Consumo assíncrono da API REST.
*   **Lucide React:** Ícones consistentes e bonitos para a interface.

### Back-end (`/server`)
*   **Node.js & Express:** Ambiente de execução e framework para o servidor HTTP.
*   **TypeScript:** Tipagem forte para as regras de negócio da API.
*   **Prisma ORM:** Abstração e manipulação do banco de dados relacional.
*   **SQLite:** Banco de dados relacional escolhido para fácil configuração local.
*   **Cors:** Middleware de permissões para comunicação com o front-end.

## 📁 Estrutura do Projeto

O repositório é um *monorepo* dividido em duas pastas principais:

```
flashflow-v2/
├── server/       # API REST (Back-end) e banco de dados SQLite
└── web/          # Aplicação Single Page Application (Front-end)
```

## 🛠️ Regras de Negócio e Funcionalidades

### Back-end
*   [x] Criação, listagem, edição e exclusão de flashcards (CRUD completo).
*   [x] Validação obrigatória para os campos de pergunta, resposta e categoria.
*   [x] Restrição para uso exclusivo de categorias predefinidas (`JavaScript`, `React`, `Tailwind CSS`, `Node.js`).
*   [x] Não possui funcionalidade para criar categorias novas (as mesmas são fixas).
*   [x] Geração automática de ID único em padrão UUID.
*   [x] Retorno dos dados garantido em formato padronizado JSON.

### Front-end
*   [x] Interface completa para interagir com o CRUD da API.
*   [x] Filtro visual de flashcards agrupados por categoria.
*   [x] Mecânica de *flip* (virar a carta) para exibição do conteúdo de Pergunta/Resposta.
*   [x] Gerenciamento de estado total no front (o flip da carta não necessita requisições extras).
*   [x] Consumo da API por meio da injeção de variáveis de ambiente.

## 💻 Como Executar o Projeto

Para rodar este projeto na sua máquina, siga os passos abaixo. Você precisará ter o [Node.js](https://nodejs.org/) instalado.

### 1. Clonando o Repositório
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd flashflow-v2
```

### 2. Rodando a API (Back-end)
Abra o terminal, navegue até a pasta `/server` e instale as dependências:
```bash
cd server
npm install
```
Configure as variáveis de ambiente:
1. Copie o arquivo `.env.example` para `.env`
2. Certifique-se de manter as variáveis padrão (`PORT=3333` e `DATABASE_URL="file:./dev.db"`)

Rode as migrações para criar o banco de dados e inicie o servidor:
```bash
npx prisma migrate dev
npm run dev
```
O servidor estará rodando em `http://localhost:3333`.

### 3. Rodando a Aplicação Web (Front-end)
Abra um **novo terminal** (mantendo o do servidor rodando), navegue até a pasta `/web` e instale as dependências:
```bash
cd web
npm install
```
Configure as variáveis de ambiente:
1. Copie o arquivo `.env.example` para `.env`
2. Mantenha a variável `VITE_API_URL=http://localhost:3333` apontando para o endereço correto do seu servidor.

Inicie a aplicação:
```bash
npm run dev
```
A aplicação estará disponível no endereço fornecido pelo Vite no terminal (geralmente `http://localhost:5173`).

## 🎨 Design e UI/UX

A aplicação Front-end foi rigorosamente desenvolvida para refletir a interface e identidade visual propostas no material base (Figma), garantindo proporções adequadas, interações contínuas, modals personalizados com fundo difuso (backdrop blur) e animações suaves CSS 3D nos *flips* dos cards de estudo.

---
Desenvolvido para o Desafio Fase 3 - Pós Graduação Start Dev da Rocketseat 💜
