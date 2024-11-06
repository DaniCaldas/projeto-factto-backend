-- CreateTable
CREATE TABLE Tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(191) NOT NULL,
    custo VARCHAR(191) NOT NULL,
    dataLimite TIMESTAMP(3) NOT NULL,
    ordem INTEGER NOT NULL,
    
    CONSTRAINT Tarefas_titulo_key UNIQUE (titulo)
);

