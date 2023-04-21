import { Router } from "express";
import { cambiarEstadoTarea, createTareas, deleteTarea, getTarea, getTareas, getTareasByCategoria, updateTarea, updateTareaEstado } from "../controllers/tareasController.js";
import { validaTarea } from "../validators/validaTareas.js";
const router = Router();

router.get('/tareas', getTareas);
router.get('/tareas/categoria', getTareasByCategoria);
router.post('/tareas', validaTarea, createTareas);
router.put('/tareas/:id', updateTarea);
//router.put('/tareas/:id/estado', updateTareaEstado);
router.put('/tareas/:id/estado', cambiarEstadoTarea);
router.delete('/tareas/:id', deleteTarea);
router.get('/tareas/:id', getTarea);

export default router;