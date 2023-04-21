import { Router } from "express";
import { createEmpleado, 
         deleteEmpleado, 
         getEmpleado, getEmpleadoTareas, getEmpleados, updateEmpleado } from "../controllers/empleadosController.js";
import { validaCrea } from "../validators/empleados.js";

const router = Router();

router.get('/empleados', getEmpleados);
router.post('/empleados', validaCrea, createEmpleado);
router.put('/empleados/:id', updateEmpleado);
router.delete('/empleados/:id', deleteEmpleado);

router.get('/empleados/:id', getEmpleado);

router.get('/empleados/:id/tareas', getEmpleadoTareas); // principio de api res

export default router;