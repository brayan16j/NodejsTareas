import express from "express";
import empleadosRoutes from './routes/empleadoRoutes.js'
import tareasRoutes from './routes/tareasRoutes.js'
import estadoRoutes from './routes/estadoRoutes.js'
import cors from "cors"; 

const whiteList = 'http://localhost:3000'
const app = express();
app.use(cors({origin: whiteList}))
// middlewares permite que cada vez que envien un dato en json el servidor pueda interpretarlo 
app.use(express.json());

app.use(empleadosRoutes);
app.use(tareasRoutes);
app.use(estadoRoutes);

export default app;