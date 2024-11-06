/*
  Warnings:

  - You are about to drop the `tarefas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tarefas";

-- CreateTable
CREATE TABLE "Tarefas" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "custo" TEXT NOT NULL,
    "dataLimite" TIMESTAMP(3) NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "Tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tarefas_titulo_key" ON "Tarefas"("titulo");
