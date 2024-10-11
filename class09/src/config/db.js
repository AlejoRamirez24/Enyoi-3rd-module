import { Sequelize } from "sequelize";
import { config } from "dotenv";
import { Hotels } from "../models/hotels.model.js";
import { Rooms } from "../models/rooms.model.js";
import { RoomTypes } from "../models/roomTypes.model.js";

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

Hotels.initial(sequelize);
Rooms.initial(sequelize);
RoomTypes.init(sequelize);

Hotels.associate(sequelize.models);
Rooms.associate(sequelize.models);
RoomTypes.associate(sequelize.models)

export { sequelize }