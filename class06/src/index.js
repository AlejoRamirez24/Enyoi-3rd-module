import express from "express";
import { sequelize } from "./config/db.js";
import { router } from "./routers/router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", router);

const launchServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, ()=>{
      console.log("Server running onport " + port);
    })
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

launchServer();