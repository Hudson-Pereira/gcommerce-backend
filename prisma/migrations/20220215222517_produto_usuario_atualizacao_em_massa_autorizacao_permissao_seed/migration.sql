-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "produto1" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "colecao" TEXT NOT NULL,
    "grife" TEXT NOT NULL,
    "disponivel" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProdutosPrecos" (
    "id" SERIAL NOT NULL,
    "codigo" INTEGER NOT NULL,
    "produtoid" TEXT NOT NULL,
    "preco1" DOUBLE PRECISION NOT NULL,
    "limitedesconto" INTEGER NOT NULL,
    "promocaodesconto" INTEGER NOT NULL,
    "precoliquido1" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProdutosPrecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "role" BOOLEAN NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "isAdmin" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_id_key" ON "Produto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_produto1_key" ON "Produto"("produto1");

-- CreateIndex
CREATE UNIQUE INDEX "ProdutosPrecos_id_key" ON "ProdutosPrecos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_id_key" ON "Usuario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "ProdutosPrecos" ADD CONSTRAINT "ProdutosPrecos_produtoid_fkey" FOREIGN KEY ("produtoid") REFERENCES "Produto"("produto1") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_isAdmin_fkey" FOREIGN KEY ("isAdmin") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
