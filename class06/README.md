# Clase 3: Conexión a Bases de Datos con Sequelize y Express

## Objetivos
- Comprender qué es Sequelize y cómo facilita la interacción con bases de datos SQL.
- Configurar Sequelize en un proyecto Express.
- Conectar la aplicación a una base de datos MySQL y realizar operaciones básicas.


## 1. Teoría: ¿Qué es Sequelize? (30 minutos)


### ¿Qué es un ORM?
- **ORM** (Object-Relational Mapping) es una técnica de programación que permite convertir datos entre el sistema de tipos utilizado en un lenguaje de programación orientado a objetos y la estructura de una base de datos relacional.


### ¿Qué es Sequelize?
- **Sequelize** es un ORM (Object-Relational Mapping) para Node.js que permite interactuar con bases de datos SQL (como MySQL, PostgreSQL, SQLite, etc.) utilizando modelos y objetos de JavaScript en lugar de escribir consultas SQL manualmente.

### Ventajas de usar Sequelize
- **Abstracción:** Permite realizar operaciones con bases de datos sin necesidad de escribir consultas SQL.
- **Portabilidad:** Funciona con varios sistemas de gestión de bases de datos (MySQL, PostgreSQL, SQLite, MariaDB).
- **Soporte para migraciones:** Sequelize permite realizar cambios en la base de datos de forma estructurada a través de migraciones.
- **Funciones integradas:** Sequelize soporta validaciones, asociaciones entre tablas, y más.

### Conceptos clave
- **Modelos:** Representan las tablas de la base de datos.
- **Migraciones:** Cambios estructurales en la base de datos, como agregar o eliminar tablas.
- **Consultas:** Operaciones que recuperan, actualizan, eliminan o crean registros en la base de datos.

### Flujo básico de trabajo con Sequelize
1. Definir modelos que representan tablas.
2. Realizar consultas a la base de datos usando los métodos de Sequelize (por ejemplo, `findAll()`, `create()`).
3. Ejecutar migraciones para modificar la estructura de la base de datos.

## 3. Práctica: Configuración de Sequelize en un Proyecto Express (90 minutos)

### Paso 1: Instalar Sequelize y MySQL2
1. **Instalar Sequelize y MySQL2** (el paquete que Sequelize utiliza para conectarse a MySQL):
   ```bash
   npm install sequelize mysql2
   ```
2. **Crear la estructura del proyecto**:
   ```bash
   my-express-api/
    ├── config/
    │   └── database.js        # Configuración de la base de datos
    ├── models/
    │   └── user.js            # Modelo de usuario
    ├── routes/
    │   └── userRoutes.js      # Definición de rutas
    ├── controllers/
    │   └── userController.js  # Controlador de usuarios
    ├── index.js               # Punto de entrada de la aplicación
    └── package.json           # Información del proyecto y dependencias
   ```

### Paso 2: Configurar la conexión a la base de datos
1. **Crear un archivo de configuración de la base de datos** (`config/database.js`):
   ```javascript
   const { Sequelize } = require('sequelize');

   const sequelize
      = new Sequelize ({ 
        database: 'my_database',
        username: 'root',
        password: 'password', 
        host: 'localhost',
        dialect: 'mysql'
    });

    module.exports = sequelize;
    ```

2. **Importar la configuración en el archivo principal** (`index.js`):

    ```javascript
    const sequelize = require('./config/database');
    ```
3. **Probar la conexión a la base de datos**:
    ```javascript
    sequelize.authenticate()
        .then(() => {
            console.log('Conexión establecida con la base de datos.');
        })
        .catch((error) => {
            console.error('Error al conectar con la base de datos:', error);
        });
    ```
4. **Sincronizar los modelos con la base de datos**:
    ```javascript
    const User = require('./models/user');

    sequelize.sync()
        .then(() => {
            console.log('Modelos sincronizados con la base de datos.');
        })
        .catch((error) => {
            console.error('Error al sincronizar modelos con la base de datos:', error);
        });
    ```

### Paso 3: Definir un modelo de usuario

1. **Crear un modelo de usuario** (`models/user.js`):
   ```javascript
   const { Sequelize, DataTypes } = require('sequelize');
   const sequelize = require('../config/database');

   const User = sequelize.define('User', {
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

   module.exports = User;
   ```
### Paso 4: Sincronizar la base de datos

1. **Ejecutar el archivo principal** (`index.js`) para sincronizar los modelos con la base de datos:
   ```bash
   node index.js
   ```
2. **Verificar que los modelos se hayan sincronizado correctamente**:
    - Comprobar que la tabla `Users` se haya creado en la base de datos.

### Paso 5: Crear un CRUD básico con Sequelize

#### 1. Crear rutas en `routes/userRoutes.js`:
```javascript
import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

// Ruta para crear un usuario
router.post('/users', createUser);

// Ruta para obtener todos los usuarios
router.get('/users', getUsers);

export default router;
```

#### 2. Crear controladores en `controllers/userController.js`:
```javascript
import User from '../models/user.js';

// Controlador para crear un usuario
export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para obtener todos los usuarios
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
```
#### 3. Importar las rutas en `index.js`:
```javascript
import userRoutes from './routes/userRoutes.js';

app.use(express.json());
app.use(userRoutes);
```
#### 4. Probar las rutas con Postman:
- Enviar una solicitud POST a `http://localhost:3000/users` con un cuerpo JSON que contenga `name` y `email` para crear un usuario.
- Enviar una solicitud GET a `http://localhost:3000/users` para obtener todos los usuarios.


## Recursos Adicionales
- [Documentación oficial de Sequelize](https://sequelize.org/master/)
- [Tutorial de Sequelize en la documentación de Express](https://expressjs.com/en/guide/database-integration.html#sequelize)


