# Clase 2: CORS y Árbol de Trabajo (Estructura de Proyecto)

## Objetivos
- Comprender qué es CORS y su importancia en las aplicaciones web.
- Aprender cómo organizar la estructura de carpetas y archivos (árbol de trabajo) en un proyecto Express.
- Implementar CORS en una API de Express y organizar el proyecto de manera estructurada.


## 1. Teoría: CORS 

### ¿Qué es CORS?
- **Cross-Origin Resource Sharing (CORS)** es un mecanismo de seguridad que permite controlar qué recursos de un servidor pueden ser solicitados desde dominios distintos al del servidor.

### ¿Por qué es importante CORS?
- Los navegadores tienen una política de seguridad llamada **Same-Origin Policy** que restringe las solicitudes HTTP entre sitios diferentes.
- CORS permite a los servidores definir qué dominios pueden acceder a los recursos, controlando así el intercambio de datos de manera segura.

### Componentes de CORS
- **Headers HTTP:**
  - `Access-Control-Allow-Origin`: Indica qué dominios están permitidos.
  - `Access-Control-Allow-Methods`: Especifica qué métodos HTTP (GET, POST, etc.) están permitidos.
  - `Access-Control-Allow-Headers`: Define qué cabeceras personalizadas pueden enviarse en las solicitudes.
  - `Access-Control-Allow-Credentials`: Permite el uso de cookies y otras credenciales.
  
### Ejemplo de uso
- Una aplicación frontend en `http://frontend.com` realiza una petición a un backend en `http://api.backend.com`. Si no se permite el CORS, el navegador bloqueará la solicitud.

### Configuraciones comunes de CORS
1. **Permitir todos los orígenes:**
   ```javascript
   app.use(cors());  // Permite solicitudes desde cualquier dominio
  ```
  
2. **Permitir un origen específico:**
   
   ```javascript
   app.use(cors({
     origin: 'http://frontend.com'
   }));
   ```
3. **Permitir varios orígenes:**
   ```javascript
    app.use(cors({
      origin: ['http://frontend.com', 'http://otrofrontend.com']
    }));
    ```
4. **Permitir credenciales:**
    ```javascript
    app.use(cors({
      origin: 'http://frontend.com',
      credentials: true
    }));
    ```
5. **Permitir métodos y cabeceras específicas:**
    ```javascript
    app.use(cors({
      origin: 'http://frontend.com',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type']
    }));
    ```
## 2. Practica: Implementación de CORS en una API de Express 
- **Instalación de CORS:**
  ```bash
  npm install cors
  ```
- **Implementación de CORS en Express:**
  ```javascript
  const express = require('express');
  const cors = require('cors');
  const app = express();

  app.use(cors());

  app.get('/api', (req, res) => {
    res.json({ message: 'CORS configurado correctamente' });
  });

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
  ```

## 3. Teoría: Árbol de Trabajo en Proyectos Express (30 minutos)

### ¿Qué es el Árbol de Trabajo en un Proyecto?
- El **árbol de trabajo** en un proyecto se refiere a la estructura de carpetas y archivos que organiza el código de forma coherente para facilitar su mantenimiento y escalabilidad.

### Organización básica de un proyecto Express
Una estructura típica en un proyecto Express podría incluir:

- **config/**: Archivos de configuración, como configuración de base de datos o variables de entorno.
- **controllers/**: Archivos que contienen la lógica de las operaciones del sistema.
- **routes/**: Definiciones de las rutas (endpoints) de la API.
- **middlewares/**: Archivos que contienen funciones de middleware personalizadas.
- **models/** (opcional, si usas una base de datos): Archivos que definen los modelos de datos.

### Ejemplo de estructura de proyecto
```bash
my-express-api/
│
├── config/
│   └── db.js           # Configuración de la base de datos
│
├── controllers/
│   └── userController.js  # Controladores que gestionan la lógica de usuarios
│
├── middlewares/
│   └── authMiddleware.js   # Middleware de autenticación
│
├── models/
│   └── userModel.js     # Modelos de datos (opcional)
│
├── routes/
│   └── userRoutes.js    # Definición de rutas de usuarios
│
├── index.js             # Punto de entrada de la aplicación
├── package.json         # Información del proyecto y dependencias
└── .env                 # Variables de entorno (opcional)
```

### Ventajas de una estructura organizada
- **Mantenimiento:** Facilita la localización y modificación de archivos.
- **Escalabilidad:** Permite añadir nuevas funcionalidades de forma ordenada.
- **Colaboración:** Facilita el trabajo en equipo al seguir una estructura común.

## 4. Práctica: Crear un Árbol de Trabajo para un Proyecto Express

### Ejercicio 1: Crear la estructura de carpetas
- Crea la siguiente estructura de carpetas en tu proyecto Express:
  ```bash
  my-express-api/
  │
  ├── config/
  │   └── db.js
  │
  ├── controllers/
  │   └── userController.js
  │
  ├── middlewares/
  │   └── authMiddleware.js
  │
  ├── models/
  │   └── userModel.js
  │
  ├── routes/
  │   └── userRoutes.js
  │
  ├── index.js
  ├── package.json
  └── .env
  ```
- Crea un archivo index.js en la raíz del proyecto:
  ```javascript
  const express = require('express');
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
  ```

### Ejercicio 2: Crear una ruta y un controlador
- Crea una ruta GET /users en userRoutes.js y un controlador getUsers en userController.js:
```javascript
// userRoutes.js
import express from 'express';
import { getUsers } from '../controllers/userController.js';

const router = express.Router();

// Definir la ruta GET /users
router.get('/', getUsers);

export default router;
```

- Crea un controlador userController.js en la carpeta controllers:
```javascript
// userController.js
export const getUsers = (req, res) => {
  res.json({ message: 'Obtener todos los usuarios' });
};
```
### Probar la API con la estructura creada
- Ejecuta tu servidor Express con `node index.js` y prueba la ruta GET /users en tu navegador o Postman.

## Recursos Adicionales
- [MDN Web Docs: Same-Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
- [MDN Web Docs: Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Express CORS Middleware](https://expressjs.com/en/resources/middleware/cors.html)


