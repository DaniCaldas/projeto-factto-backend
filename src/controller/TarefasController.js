import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class Controller {
    async listTarefas(req, res){
        try {
            const tarefas = await prisma.tarefas.findMany();
            res.status(200).send(tarefas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createTarefa(req, res){
        try {
            const {titulo, custo, dataLimite} = req.body;   
            const ordem = Math.floor(Math.random() * (800 - 1 + 1)) + 1;
            
            const verificaTitulo = await prisma.tarefas.findUnique({
                where:{
                    titulo: titulo
                }
            });
            
            if(verificaTitulo){
                return res.status(409).json({verificaTitulo});
            }
            const tarefa = await prisma.tarefas.create({
                data: {
                    titulo,
                    custo,
                    dataLimite,
                    ordem
                }
            });
            res.status(201).send(tarefa)
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async excluirTarefa(req, res){
        try {
            const { id } = req.params;
            var idTarefa = Number(id);
            await prisma.tarefas.delete({
                where: { id: idTarefa}
            });
            res.status(204).send("excluido com sucesso!");
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async editarTarefa(req, res){
        try {
            const { id } = req.params;
            const { titulo, custo, dataLimite } = req.body;
            const idTarefa = Number(id);

            const verificaTitulo = await prisma.tarefas.findFirst({
                where:{
                    titulo: titulo
                }
            });

            if(verificaTitulo && verificaTitulo.id != idTarefa){
                return res.status(409).send("titulo ja existe");
            }else{
                await prisma.tarefas.update({
                    where: { id: idTarefa},
                data: {
                    titulo,
                    custo,
                    dataLimite
                }
            });
            res.status(200).send("atualizado com sucesso!");
        }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletarTudo(req, res) {
        try {
            await prisma.tarefas.deleteMany();
            res.status(200).send("tudo limpo");
        } catch (error) {
            res.status(400).send("error: " + error.message);
        }
    }
}