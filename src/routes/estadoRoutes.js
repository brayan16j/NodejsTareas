import { Router } from "express";
import { createEstado, deleteEstado, getEstado, getEstados, updateEstado } from "../controllers/estadoController.js";
import { validaEstado } from "../validators/validaEstados.js";

const router = Router();

router.get('/estado', getEstados);
router.get('/estado/:id', getEstado);
router.post('/estado', validaEstado, createEstado);
router.put('/estado/:id', updateEstado);
router.delete('/estado/:id', deleteEstado);

export default router;