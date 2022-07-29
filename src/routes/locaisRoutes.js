import express from "express";
import LocalController from "../controllers/locaisController.js";

const router = express.Router();

router
  .get("/locais", LocalController.listarLocais)
  .get("/locais/busca", LocalController.listarLocaisPorEstado)
  .get("/locais/:id", LocalController.listarLocalPorId)
  .post("/locais", LocalController.cadastrarLocal)
  .put("/locais/:id", LocalController.atualizarLocal)
  .delete("/locais/:id", LocalController.excluirLocal)

export default router; 