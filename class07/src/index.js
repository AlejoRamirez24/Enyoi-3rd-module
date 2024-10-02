import { Users }      from './models/users.model.js';
import { Pets }       from './models/pets.model.js';
import { router }     from './routes/router.js';
import { sequelize }  from './config/db.js';
import express        from 'express';

const port = 3000;
const app = new express();

app.use(express.json());
app.use('/api', router);

const launchServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync( {force: false} )
      .then(() => {
        console.log('Modelos sincronizados con la base de datos.');
      })
      .catch((error) => {
        console.error('Error al sincronizar modelos con la base de datos:', error);
      });
    app.listen(port, () => {
      console.log("Server running on port " + port);
    })
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

launchServer();