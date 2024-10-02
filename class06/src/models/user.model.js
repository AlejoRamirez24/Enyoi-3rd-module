import { Sequelize, DataTypes } from "sequelize"
import { sequelize } from "../config/db.js";


const Users = sequelize.define('Users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});


export default Users;