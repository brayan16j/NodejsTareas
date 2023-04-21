import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Tarea } from "./tareas.js";

export const Estado = sequelize.define('estado', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cambiosPermitidos: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: false
}); 

Estado.hasOne(Tarea, {
    foreignKey: 'idEstado',
    sourceKey: 'id'
});

Tarea.belongsTo(Estado, {
    foreignKey: 'idEstado',
    targetId: 'id'
});