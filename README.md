# EventSync | Sistema de Gerenciamento de eventos

## Descrição do Sistema

A EventSync é uma aplicação web desenvolvida para facilitar o cadastro de eventos e o gerenciamento de inscrições de participantes. Usuários podem visualizar eventos disponíveis, realizar inscrições e acompanhar seu status. O sistema também permite o gerenciamento dos eventos por parte de administradores.

### Características principais:

- **Cadastro de Usuários**: Registro de participantes e organizadores
- **Gerenciamento de Eventos**: Criação e edição de eventos com título, descrição, data, horário, local e capacidade
- **Inscrições em Eventos**: Usuários podem se inscrever em eventos disponíveis
- **Status de Inscrição**: Acompanhamento de inscrições com status como confirmada, cancelada ou em lista de espera
- **Controle de Capacidade**: O sistema impede inscrições além da capacidade do evento
- **Histórico de Inscrições**: Cada usuário pode visualizar seu histórico de participação

## Estrutura de Pastas e Arquivos

```
./
├── .env.example           # Exemplo de variáveis de ambiente
├── .gitignore             # Arquivos ignorados pelo Git
├── assets/                # Arquivos estáticos
│   └── modelo-banco.pdf   # Diagrama do banco de dados
├── config/                # Arquivos de configuração
│   └── database.js        # Conexão com o banco de dados
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js  # Controlador da página inicial
├── db/                    # Pasta banco de dados
│   └── banco.sql          # Arquivo SQL
├── docs/                  # Documentação do projeto
│   └── wad.md             # Web Application Document
├── jest.config.js         # Configuração de testes
├── models/                # Definição dos modelos de dados
│   └── User.js            # Modelo de usuário
├── package-lock.json      # Versões exatas das dependências
├── package.json           # Dependências do projeto
├── readme.md              # Documentação do projeto (este arquivo)
├── rest.http              # Testes de API
├── routes/                # Definição das rotas do sistema
│   └── index.js           # Rotas principais
├── scripts/               # Scripts do frontend
├── server.js              # Arquivo principal que inicializa o servidor
├── services/              # Serviços auxiliares
│   └── userService.js     # Serviço para usuários
├── styles/                # CSS do frontend
└── tests/                 # Testes automatizados
```

## Modelo de Dados

O sistema utiliza um banco de dados relacional com as seguintes entidades principais:

- **Users**: Armazena informações dos participantes e administradores
- **Events**: Contém os dados dos eventos, como título, descrição, data, local e capacidade
- **Subscriptions**: Registra as inscrições dos usuários nos eventos, com status e data de inscrição

O diagrama do banco de dados está disponível em <a href="./assets/modelo-banco.pdf">`assets/banco-checkin.pdf`</a>.<br>

<img src="./assets/modelo-banco.svg">

O SQL se encontra NA PASTA DB

## Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- PostgreSQL (para o banco de dados)

### Passos para Execução

1. Clone o repositório:

```bash
git clone hgit@github.com:celsick/M2.git
cd inteli-assignments/Projectdb
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente: **(ainda não necessário).**

```bash
cp .env.example .env
# Edite o arquivo .env com seus dados de conexão ao banco
```

4. Crie o banco de dados: (**ainda não necessário).**

```bash
# Execute o SQL disponível na documentação para criar o schema
psql -U seu_usuario -d nome_do_banco -f schema.sql
```

5. Execute o servidor:

```bash
npm start
```

6. Acesse o sistema no navegador:

```
http://localhost:3000 ou http://127.0.0.1:3000/
```

## Funcionalidades Principais

- Cadastro de eventos
- Inscrição em eventos
- Cancelamento e histórico de inscrições
- Controle de capacidade dos eventos
- Visualização dos eventos disponíveis

## Tecnologias Utilizadas

- **Backend**: Node.js, Express
- **Banco de Dados**: PostgreSQL
- **Frontend**: HTML, CSS, JavaScript

## Testes

Para executar os testes, utilize o comando:

```bash
npm test
```

## Documentação Adicional

A documentação completa da arquitetura web está disponível em <a href="./docs/wad.md">`docs/wad.md`</a>.
