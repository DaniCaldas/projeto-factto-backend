import { Router } from "express";
import { Controller } from "../controller/TarefasController.js"

export const router = Router();
const controller = new Controller();

router.get("/tarefas", controller.listTarefas);
router.post("/tarefas", controller.createTarefa);
router.delete('/tarefas/:id', controller.excluirTarefa);
router.delete('/limpar', controller.deletarTudo);
router.patch('/tarefas/:id', controller.editarTarefa);