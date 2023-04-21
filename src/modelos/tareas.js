import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js"; // siempre anotar con .js el archivo

export const Tarea = sequelize.define('tareas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
            const date = this.getDataValue('fechaCreacion');
            return date ? new Date(date).toISOString().substring(0, 10) : null;
        }
    },
    fechaInicioTarea: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
            const date = this.getDataValue('fechaInicioTarea');
            return date ? new Date(date).toISOString().substring(0, 10) : null;
        }
    },
    fechaFinalizacion: {
        type: DataTypes.DATE,
        allowNull: false,
        get() {
            const date = this.getDataValue('fechaFinalizacion');
            return date ? new Date(date).toISOString().substring(0, 10) : null;
        }
    }
    //idEmpleado
    //idEstado
},{
    timestamps: false
})