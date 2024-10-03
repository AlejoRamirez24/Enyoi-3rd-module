# Clase: Conectar a MongoDB y Crear una Base de Datos

## 1. Conectar a MongoDB con Mongoose (40 minutos)

### Paso 1: Instalar Mongoose
```bash
npm install mongoose
```

### Paso 2: Configurar la conexión a MongoDB
1. Crea un archivo `config/database.js`:
```bash
 
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/miBaseDeDatos');
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
```


2. Llama a la función de conexión en `index.js`:
```bash
 
import express from 'express';
import connectDB from './config/database.js';

const app = express();
const PORT = 3000;

// Conectar a MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### Paso 3: Definir un modelo de Mongoose
1. Crea un archivo `models/user.js`:
```bash
 
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model('User', userSchema);

export default User;
```


### Paso 4: Crear una ruta para insertar un documento en la colección
1. Crea un controlador en `controllers/userController.js`:
```bash
 
import User from '../models/user.js';

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
```


2. Crea una ruta en `routes/userRoutes.js`:
```bash
 
import express from 'express';
import { createUser } from '../controllers/userController.js';

const router = express.Router();

// Ruta para crear un usuario
router.post('/users', createUser);

export default router;
```


3. Integra la ruta en `index.js`:
```bash
 
import express from 'express';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', userRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```


### Paso 5: Probar la API
- Realiza una solicitud POST a `/api/users` usando Postman o Insomnia con el siguiente cuerpo:
```bash
json
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```


- MongoDB creará automáticamente la base de datos `miBaseDeDatos` y la colección `users` cuando se inserte este primer documento.

## 2. Visualización de la Base de Datos (30 minutos)

### Opción 1: Usar MongoDB Compass
1. Instala MongoDB Compass desde la [página oficial](https://www.mongodb.com/try/download/compass).
2. Abre Compass y usa la URI de conexión:  
   ```bash
    mongodb://localhost:27017~/ 
   ```
3. Visualiza la base de datos `miBaseDeDatos` y la colección `users`.

### Opción 2: Usar Robo 3T
1. Instala Robo 3T desde la [página oficial](https://robomongo.org/download).
2. Conéctate a 
```bash
mongodb://localhost:27017~/ y visualiza las bases de datos.
```

### Recursos Adicionales  
- [Documentación de Mongoose](https://mongoosejs.com/docs/guide.html)
- [Documentación de MongoDB](https://docs.mongodb.com/manual/)
