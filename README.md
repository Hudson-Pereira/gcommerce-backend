<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

```html
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
```

```html
<p align="center">
```

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 							**BACK-END**

## Description

Criação do projeto utilizando o NESTJS, um dos melhores frameworks para se trabalhar, ele utiliza Typescript, a linguagem de programação que vamos utilizar e pode ser executado em frameworks HTTP como expressJS ou Fastify. Também utilizando a integração do Prisma e Postgresql.

## Installation

Para iniciar com o NestJS devemos instalar a NestJS CLI de forma global:

```bash
npm i -g @nestjs/cli
```

Crie e abra uma pasta no VSCode onde você deseja que o repositório que vamos criar, fique armazenado. Para criar um novo projeto utilize o seguinte comando e onde está `project-name` mude para o nome do seu projeto.

```basic
nest new project-name
```

Logo após ele vai perguntar qual gerencador de pacotes queremos usar, pode utilizar o da sua preferência, nesse exemplo utilizaremos o `npm`.

Neste momento, foi criado uma nova pasta com o seu projeto, você deve garantir que a pasta que foi criada, esteja aberta no VSCode:

```basic
cd "my-nest-project"
```

Para testar se o seu projeto está rodando, entre com o comando:

```bash
npm run start:dev
```

Ele deverá por padrão em http://localhost:3000

Quando rodamos esse comando, automaticamente o NestJS gera a pasta `dist`, onde contém arquivos `.js`, `.map` e `.d.ts.

Explorando um pouco a estrutura do NestJS, percebemos que temos 5 arquivos que foram gerados automaticamente dentro da pasta src: 

![img](https://blueedtech.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mj_r__f7dzSt2HUbwjg%2Fuploads%2FSzHtCS9EudOxrUvSywZr%2Fimg10.PNG?alt=media&token=9e3d8e21-772e-4992-b3e2-90260bacd047)

São eles: 

- app.controller.spec.ts, 
- app.controller.ts, 
- app.module.ts, 
- app.service.ts 
- E dentro dessa aplicação temos o arquivo mais importante que é o "coração" do projeto o main.ts.



## Este Projeto Contém:

​                             `[Postgres+ NestJS + TypeScript + Prisma + JWT]` 

O projeto consiste em criar uma API que servirá para controle do Twitter, onde o usurio postará tweets e terá seguidores.

Respeitando o diagrama, os alunos devem desenvolver o schema prisma para montar o banco postgres, toda interação das tabelas é one to many.

 O JWT nesse projeto deve apenas servir de autenticação, ou seja apenas fornecendo um token valido na aplicação.

 Em nossos arquivos DTO é necessário que realizemos as validações por meio dos @Decorators.

Para este projeto foram criadas 7 pastas distintas dentro da pasta `src` são elas:

- Pasta Campos.
- Pasta Produto.
- Pasta ProdutosPrecos.
- Pasta Role.
- Pasta Usuario.
- Pasta Auth.
- Pasta Logs.

Para criação das pastas é necessario rodar o comando `nest g resource-nome da pasta` para criação de  cada uma delas, exemplo:

```javascript
nest g resource usuario
```

Com esse comando havera a criação da pasta no caso (usuario) e dentro dela terá todos os demais arquivos e pastas necessario para rodar o projeto desta pasta.

Rode o mesmo comando para criação das outras três pastas.

## Algumas Validações Importantes

Rode estes dois comandos:

```bash
npm i --save class-validator class-transformer
```

```bash
npm i --save helmet
```

 E faça as alterações necessarias para que seu codigo fique desta maneira:

```javascript
import { ValidationPipe } from '@nestjs/common'; //Para o class-validator funcionar
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet'; // Para o helmet funcionar

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //Para funcionar o class-validator
  app.use(helmet()); //Para funcionar o helmet
  await app.listen(3000);
}
bootstrap();

```

## Em Geral DTO:

**DTO** ( *Data Transfer Object* ) é usado para analisar e validar os dados da solicitação. DTOs sempre são usados com **controladores** . É um cenário comum quando o servidor da web deve validar os dados antes do processamento. O DTO pode otimizar e automatizar esse processo.

## Decoradores para validação

Há um conjunto de decoradores para validação de dados conveniente. Se você tiver necessidades especiais de validação, você sempre pode implementar seu próprio decorador (leia mais em avançado). Mas decoradores personalizados podem ser implementados. Leia em Avançado sobre isso.

​                                               `https://odi.gitbook.io/core/basics/dto`



## Prisma

Para que o prisma podesse ser utilizado instalei as seguintes dependencias:

```bash
npm install prisma --save-dev
```

```basic
npx prisma init
```

```bash
npm install @prisma/client
```

Este comando é para gerar a tabela do schema.prisma no banco do Postgre :

```bash
npx prrisma generate
```

Este é para dar um push na tabela:

```bash
npx prisma db push
```

Este comando é para testar se tudo esta certo e funcionando corretamente no prisma estudio ainda na versão beta:

```
npx prisma studio
```



## Rotas

**Temos 4 rotas principais:**

`/produto`

`/produtosprecos`

`/usuario`

`/auth`



**Dentro de cada rota temos um CRUD completo criado com os Decorators:**

 `@POst()` 	**Cada uma das rotas principais tem o seu:**

```javascript
  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.createPrisma(createProdutoDto);
  }
```

```javascript
  @Post()
  create(@Body() createProdutosprecoDto: CreateProdutosPrecosDto) {
    return this.produtosprecosService.createPrisma(createProdutosprecoDto);
  }
```

```javascript
  @Post()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }
```

```javascript
  @Post()
  async login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }
```



`@Get `() 	  ***cada rota principal tem o seu:***

```javascript
  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.produtoService.findAllPrisma();
  }
```

```javascript
  @Get()
  findAll() {
    return this.produtosprecosService.findAllPrisma();
  }
```

```javascript
  @Get()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  findAll() {
    return this.usuarioService.findAll();
  }
```

```javascript
  @Get()
  @UseGuards(AuthGuard())
  async checkLogin() {
    return "Usuário logado.";
  }
```



`@Get(':id')`  ***cada rota principal tem o seu:***

```javascript
  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.produtoService.findOnePrisma(+id);
  }	
```

```javascript
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.produtosprecosService.findOnePrisma(+id);
  }
```

```javascript
  @Get(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  findOne(@Param("id") id: string) {
    return this.usuarioService.findOne(+id);
  }
```





`@Patch(':id') ` 	**Cada uma das rotas principais tem o seu:**

```javascript
  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.updatePrisma(+id, updateProdutoDto);
  }
```

```javascript
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProdutosprecoDto: UpdateProdutosprecoDto
  ) {
    return this.produtosprecosService.updatePrisma(+id, updateProdutosprecoDto);
  }
```

```javascript
  @Patch(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  update(@Param("id") id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }
```



`@Delete`()  	**cada rota principal tem o seu:**

```javascript
  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.produtoService.removePrisma(+id);
  }
```

```javascript
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.produtosprecosService.removePrisma(+id);
  }
```

```javascript
  @Delete(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  remove(@Param("id") id: string) {
    return this.usuarioService.remove(+id);
  }
```



**Post  rota** `/produto`,  ** no  Thunder:**

​			 

- ​	**Esta rota serve para cadastrar um novo produto no G-Commerce, exemplo:** 

```javascript
  "produto1": "29.14.1159",      // String
  "nome": "BLUSA THOR MASCULINO",   // String
  "descricao":"Confortavel mas sem perder o estilo, a Blusa Deva é a peça ideal para compor looks do dia a dia ",  // String
  "colecao": "2201",  // String
  "grife": "JOHN JOHN MASC",  // String
  "disponivel": 0   // Bit (0 não, 1 sim)
```



**Post  rota** `/produtosprecos` , **no  Thunder:**

​			 

- ​	**Esta rota serve para cadastrar um novo preço para determinado produto no G-Commerce, exemplo:** 

```javascript
  "codigo": 13,    // Int
    "produtoid": "29.14.1159",    // String
  "preco1": 299.99,    // Float
  "limitedesconto": 0,   // Float
  "promocaodesconto": 0,   // Float
  "precoliquido1": 0     // Float
```



**Post  rota** `/usuario` , **no Thunder:**

​		 

- ​	**Usado para cadastrar um usuario para acessar o G-Commerce.**

```javascript
  "nome": "Bluemer", 	// String
  "email": "Bluemer@Bluemer", 	// String
  "senha": "Bluemer1234" 	// String
```



## JWT

Para que o jwt possa ser iniciado, fazer a criação manual da pasta `auth` dentro de `src`.

Este comando cria uma nova pasta e dentro dela, o novo AuthModule. Além disso, este módulo é importado por padrão no AppModule.

```bash
nest g m auth
```

Este comando cria a classe AuthService e fornece automaticamente este serviço dentro do AuthModule.

```bash
nest g s auth
```

Este comando cria a classe AuthController e a adiciona automaticamente à propriedade dos controladores no AuthModule.

```bash
nest g c auth
```

A aplicação agora está pronta para registrar usuários e autenticá-los com o JWT.



## SWAGGER

O Swagger é uma ferramenta que facilita os testes de sua api.

Para começar a implementar ele em sua api, tem de usar:

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

Após isso, abra a pasta `main.ts` e adicione as seguintes informações:

```bash
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle("Projeto Gerenciador de E-commerce")
    .setDescription(
      "O projeto consiste em um gerenciador para a administração de produtos que são vendidos em um e-commerce de roupas"
    )
    .addTag("users")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);		// -> Esse "api" é o nome que será passado na url para usar o swagger.

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

```

Após isso, apenas inicie seu projeto, utilizando:

```bash
npm run start:dev
```

Assim que for iniciada a sua api, basta entrar em `http://localhost:3000/api/` -> o "api" é configurado no `main.ts` caso queria mudar basta alterar onde foi passado logo a cima.

```bash
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle("Projeto Gerenciador de E-commerce")
    .setDescription(
      "O projeto consiste em um gerenciador para a administração de produtos que são vendidos em um e-commerce de roupas"
    )
    .addTag("users")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);		// -> Esse "api" é o nome que será passado na url para usar o swagger.

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
```

<img src="https://cdn.discordapp.com/attachments/478608140993167360/943654030234751037/unknown.png" alt="swagger" style="zoom:60%;" />		

Caso fique assim, tudo pronto, seu swagger está rodando perfeitamente!!



## Trabalho Realizado em Equipe:



## Desenvolvedores BackEnd:



###  Felipe Pereira de Padua  ->  Entre em contato por: 

**`Email:`**  fpadua18@gmail.com



### Hudson Oliveira Pereira ->  Entre em contato por: 

**`Email:`** hudson.o.pereira@gmail.com

### 

###  Carlos Eduardo Lima Galvão  ->  Entre em contato por: 

**`Email:`**  cegalvao13@gmail.com



## Desenvolvedores FrontEnd:



### Felipe Amaral Oliviera ->  Entre em contato por: 

**`Email:`** faoberilo@hotmail.com



### Bruno Daniel ->  Entre em contato por: 

**`Email:`** bruno.daniel@outlook.com

### 

#### Esperamos ter ajudado na compreensão básica de como funciona este G-Commerce e o que consta em suas dependencias internas.



