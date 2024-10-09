import { router } from "./routes/router.js";
import express    from "express";
import { config } from "dotenv";
import { sequelize } from "./config/db.js";

config();

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use("/api", router)

const launchServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({force:false})
      .then(()=> {
      console.log('Modelos sincronizados con la base de datos.');
      })
      .catch((error) => {
        console.error('Error al sincronizar modelos con la base de datos:', error);
      });
    app.listen(PORT, ()=>{
      console.log("Server running on port "+PORT);
    })
  } catch (error) {
    console.error("Error: ", error);
  }
}

launchServer();