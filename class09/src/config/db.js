import { Sequelize } from "sequelize";
import { config } from "dotenv";
import { Hotels } from "../models/hotels.model.js";

config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env



const sequelize = new Sequelize ({
  dialect: 'mysql',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
},
)

Hotels.initial(sequelize)

export { sequelize }