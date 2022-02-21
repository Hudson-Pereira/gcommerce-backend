import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const roleUserSeed = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      role: false,
    },
  });

  const roleAdminSeed = await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: {
      role: true,
    },
  });

  const adminSeed = await prisma.usuario.upsert({
    where: { email: "admin@seed.com" },
    update: {},
    create: {
      email: "admin@seed.com",
      nome: "AdminSeed",
      senha: "$2b$10$3TfMrWr6KdjDju0mk1bDpOaz3wd/EVt0.RnvavFqSfYA9.K9Xg29a",
      //senha: "admin"
      isAdmin: 2,
    },
  });

  const userSeed = await prisma.usuario.upsert({
    where: { email: "user@seed.com" },
    update: {},
    create: {
      email: "user@seed.com",
      nome: "UserSeed",
      senha: "$2b$10$mSs7Yq/oaXzRnXd5PCvtS.FH2LSIjajRSHHfqN4h8uoFHcrrThVxC",
      //senha: "user"
      isAdmin: 1,
    },
  });

  const produto1Seed = await prisma.produto.upsert({
    where: { id: 1 },
    update: {},
    create: {
      produto1: "29.14.1159",
      nome: "produto 1",
      descricao: "branca, regata, com desenho.",
      colecao: "verao",
      grife: "bobo",
      disponivel: 0,
    },
  });

  const produto2Seed = await prisma.produto.upsert({
    where: { id: 2 },
    update: {},
    create: {
      produto1: "29.14.1160",
      nome: "produto 2",
      descricao: "preta, manga curta, com desenho.",
      colecao: "primavera",
      grife: "nike",
      disponivel: 0,
    },
  });

  const produto3Seed = await prisma.produto.upsert({
    where: { id: 3 },
    update: {},
    create: {
      produto1: "29.14.1161",
      nome: "Produto 3",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

const produto4Seed = await prisma.produto.upsert({
    where: { id: 4 },
    update: {},
    create: {
      produto1: "29.14.1162",
      nome: "Produto 4",
      descricao: "verde, manga curta",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

const produto5Seed = await prisma.produto.upsert({
    where: { id: 5 },
    update: {},
    create: {
      produto1: "29.14.1163",
      nome: "Produto 5",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto6Seed = await prisma.produto.upsert({
    where: { id: 6 },
    update: {},
    create: {
      produto1: "29.14.1164",
      nome: "´Produto 6",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto7Seed = await prisma.produto.upsert({
    where: { id: 7 },
    update: {},
    create: {
      produto1: "29.14.1165",
      nome: "Produto 7",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto8Seed = await prisma.produto.upsert({
    where: { id: 8 },
    update: {},
    create: {
      produto1: "29.14.1166",
      nome: "Produto 8",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto9Seed = await prisma.produto.upsert({
    where: { id: 9 },
    update: {},
    create: {
      produto1: "29.14.1167",
      nome: "Produto 9",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto10Seed = await prisma.produto.upsert({
    where: { id: 10 },
    update: {},
    create: {
      produto1: "29.14.1168",
      nome: "Produto 10",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produto11Seed = await prisma.produto.upsert({
    where: { id: 11 },
    update: {},
    create: {
      produto1: "29.14.1169",
      nome: "Produto nao alterado em massa",
      descricao: "verde, manga comprida, sem desenho.",
      colecao: "inverno",
      grife: "lacoste",
      disponivel: 0,
    },
  });

  const produtoPreco1Seed = await prisma.produtosPrecos.upsert({
    where: { id: 1 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1159",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,
    },
  });

  const produtoPreco2Seed = await prisma.produtosPrecos.upsert({
    where: { id: 2 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1160",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,
    },
  });

  const produtoPreco3Seed = await prisma.produtosPrecos.upsert({
    where: { id: 3 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1161",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,    },
  });

const produtoPreco4Seed = await prisma.produtosPrecos.upsert({
    where: { id: 4 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1162",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,    },
  });

const produtoPreco5Seed = await prisma.produtosPrecos.upsert({
    where: { id: 5 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1163",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,    },
  });

  const produtoPreco6Seed = await prisma.produtosPrecos.upsert({
    where: { id: 6 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1164",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,    },
  });

  const produtoPreco7Seed = await prisma.produtosPrecos.upsert({
    where: { id: 7 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1165",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,    },
  });

  const produtoPreco8Seed = await prisma.produtosPrecos.upsert({
    where: { id: 8 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1166",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,    },
  });

  const produtoPreco9Seed = await prisma.produtosPrecos.upsert({
    where: { id: 9 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1167",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,    },
  });

  const produtoPreco10Seed = await prisma.produtosPrecos.upsert({
    where: { id: 10 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1168",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,    },
  });

  const produtoPreco11Seed = await prisma.produtosPrecos.upsert({
    where: { id: 11 },
    update: {},
    create: {
      codigo: 13,
      produtoid: "29.14.1169",
      promocaodesconto: 10,
      precoliquido1: 150,
      preco1: 100,
      limitedesconto:60,    },
  });

  console.log({ produto1Seed });
  console.log({ produto2Seed });
  console.log({ produto3Seed });
  console.log({ produto4Seed });
  console.log({ produto5Seed });
  console.log({ produto6Seed });
  console.log({ produto7Seed });
  console.log({ produto8Seed });
  console.log({ produto9Seed });
  console.log({ produto10Seed });
  console.log({ produto11Seed });
  console.log({ produtoPreco1Seed });
  console.log({ produtoPreco2Seed });
  console.log({ produtoPreco3Seed });
  console.log({ produtoPreco4Seed });  
  console.log({ produtoPreco5Seed });
  console.log({ produtoPreco6Seed });
  console.log({ produtoPreco7Seed });
  console.log({ produtoPreco8Seed });
  console.log({ produtoPreco9Seed });
  console.log({ produtoPreco10Seed });
  console.log({ produtoPreco11Seed });            
  console.log({ adminSeed });
  console.log({ userSeed });
  console.log({ roleAdminSeed });
  console.log({ roleUserSeed });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
