# Teste Alliar Backend

Este projeto consiste em uma aplicação de cadastro de laboratórios e exames e em sua associação lab/exam utilizando como base o modelo de arquitetura de software MSC ( Model Service Controller ) visando desempenho, confiabilidade, escalonamento e manutenibilidade.

Foi desenvolvido com as tecnologias:
- Express;
- BodyParser;
- Nodemon;
- Dotenv;

## Antes de iniciar
- Clone o repositório: `git@github.com:rafaelveigasts/testeAlliar.git` .
- Instale as dependências com: `npm install` .
- Se deseja colaborar com o projeto crie uma branch a partir da branch `main` .
- Adicione as mudanças ao _stage_ do Git e faça um `commit` .
- Crie um novo `Pull Request`(PR).
 
## Após clonar o projeto

- Execute a query de criação do DB do arquivo `LabsDB.sql` em seu mysql workbench ou na extensão de preferência do VSCode.
- Altere as variáveis de ambiente do arquivo `.envExample`de acordo com sua máquina.
---Obs.: caso não seja possível conexão através das variáveis de ambiente insira seus dados no arquivo `connection.js`dentro da pasta `models`
- Inicie o servidor com `npm start` .
-- Se o servidor for iniciado com sucesso a seguinte menssagem aparecerá no seu terminal `Listening on port 3000
`.

## Features

### Cadastro de exame:

- A rota /exam está servida com o CRUD para um cadastro de exame, com nome, tipo e status ao efetuar o update ou delete ele efetuará as mudanças em cascata.

### Cadastro de laboratório:

- a rota /lab está servida com o CRUD para um cadastro de um laboratório, com nome, endereço e status ao efetuar o update ou delete ele efetuará as mudanças em cascata.

### Associações

- a rota /labexam está servida com um método CRUD que recebe o id do lab e o id do exame e efetua a associação.

 ## Testes   