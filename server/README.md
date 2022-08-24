# ⚠️🏗️ Projeto Node.js em construção 🚧⚠️


[x] Setup da estrutura

    [x] Typescript
    [x] ts-node-dev

[x] Configurando Prisma

[x] Rota de feedback

[x] Envio de e-mail através do Mailtrap

[x] Princípios do SOLID

    [x] Single Responsability Principle
    [x] Liskov substitution principle
    [x] Dependency Inversion Principle

[x] Aplicando SOLID na aplicação

[x] Configurando Jest

[x] Testes unitários na aplicação

## Comandos:

npm init -y
npm i typescript @types/node ts-node-dev -D
npx tsc --init
npx tsc

> npm run dev

npm i express
npm i -D @types/express

npm i prisma -D
npm i @prisma/client
npx prisma init
npx prisma migrate dev

> npx prisma studio

npm install nodemailer
npm install @types/nodemailer -D

npm install jest -D
npx jest --init
npm install ts-node -D
npm i @types/jest -D

npm i -D @swc/core @swc/jest

> npm run test

npm i cors
npm i @types/cors -D

## Tecnologias

Node.js

Banco de dados:
Desenvolvimento: SQLite
Produção: PostgreSQL

ORM: Prisma

Testes unitários: Jest


## SOLID

1. Single Responsibility Principle
- Cada classe tem uma responsabilidade única;

2. Open/Closed Principle
- As classes da aplicação devem ser abertas para extensão mas fechadas para modificação;

3. Liskov Substitution Principle
- Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;

4. Interface Segregation Principle
- Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar

5. Dependency Inversion Principle
- Dependa de abstrações e não de implementações




...

DATABASE_URL="postgresql://postgres:postgres@postgres:5432/Todo?schema=public"

- [x] Criar rota callback
- [x] Autenticação usuário recebendo o código
- [x] Cadastro de mensagem
- [x] Configuração websocket
- [x] Retornar 3 últimas mensagens