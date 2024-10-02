import { Sequelize } from "sequelize";
import { config } from "dotenv";


config()

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port:DB_PORT,
})


sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados con la base de datos.');
    })
    .catch((error) => {
        console.error('Error al sincronizar modelos con la base de datos:', error);
    });
    
export { sequelize }