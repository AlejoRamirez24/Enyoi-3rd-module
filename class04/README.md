# Clase 1: Introducción a APIs REST con Express

## Objetivos
- Comprender qué es una API REST.
- Conocer las ventajas de usar Express para construir APIs.
- Configurar un proyecto básico de Express y crear rutas.




## 1. Teoría 

### ¿Qué es una API REST?
- **Definición de API:**
  - Una Interfaz de Programación de Aplicaciones (API) permite que diferentes aplicaciones se comuniquen entre sí.
  
- **REST (Representational State Transfer):**
  - Un conjunto de principios arquitectónicos para diseñar servicios web escalables.
  
- **Principios REST:**
  - **Recursos:** Todo en una API REST se considera un recurso que puede ser identificado por una URL.
  - **Métodos HTTP:**
    - **GET:** Recuperar datos.
    - **POST:** Crear un nuevo recurso.
    - **PUT:** Actualizar un recurso existente.
    - **DELETE:** Eliminar un recurso.
  
- **Ejemplos de APIs REST:**
  - Twitter API, GitHub API, Google Maps API.

### ¿Por qué usar Express?
- **Ventajas de Express:**
  - Minimalista y flexible, ideal para construir aplicaciones y APIs.
  - Middleware para manejar solicitudes y respuestas.
  - Fácil enrutamiento y manejo de errores.
  
- **Características clave de Express:**
  - **Middleware:** Funciones que se ejecutan durante el ciclo de vida de la solicitud.
  - **Enrutamiento:** Facilita la creación de rutas HTTP.

## 3. Configuración del Proyecto
- **Guía rápida sobre la configuración:**
  1. **Instalación de Node.js:** Asegúrate de que Node.js y npm estén instalados.
  ```bash
    node -v
    npm -v
    ```
  2. **Crear un nuevo proyecto:**
     ```bash
     mkdir api-rest-express
     cd api-rest-express
     npm init -y
     npm install express
     ```

## 4. Práctica 

### Crear la estructura del proyecto 
- Crear un archivo `index.js` en la raíz del proyecto.

### Configurar Express 
- Importar Express y configurar el servidor:
  ```javascript
  const express = require('express'); ó import express from 'express';
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
  });


### Crear rutas básicas 
- Crear rutas para responder a las solicitudes GET:
  ```javascript
  app.get('/', (req, res) => {
      res.send('¡Hola, mundo!');
  });

  app.get('/api/users', (req, res) => {
      res.json([{ id: 1, name: 'John Doe' }]);
  });
  ```

### Probar las rutas con Postman 
- **Ejercicio:** 
  - Crear una solicitud GET a `http://localhost:3000/api/users` y verificar la respuesta.

### Enrutador
- Crear un enrutador para manejar las rutas:
  ```javascript
  const router = express.Router();

  router.get('/', (req, res) => {
      res.send('¡Hola, mundo!');
  });

  app.use('/api', router);
  ```
  ## 5. Recursos Adicionales
- [Express.js](https://expressjs.com/)
- [Express.js - Routing](https://expressjs.com/en/guide/routing.html)
- [Postman](https://www.postman.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

