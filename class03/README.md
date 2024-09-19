# Clase: Introducción a los Frameworks y Express

## 1. Introducción a los Frameworks 

### Teoría

- **¿Qué es un framework?**
  - Definición: Un framework es una estructura o esqueleto predefinido que ayuda a desarrollar software de manera más eficiente.
  - **Biblioteca vs Framework**: Un framework dicta la arquitectura del software, mientras que una biblioteca te da herramientas sin imponer cómo usarlas.

- **Ventajas de usar un framework:**
  - Eficiencia y rapidez en el desarrollo.
  - Código reutilizable y organizado.
  - Mantenimiento y escalabilidad.
  - Soporte de la comunidad.

- **Ejemplos de frameworks populares:**
  - **JavaScript:** Express, React, Angular.
  - **Python:** Django, Flask.
  - **PHP:** Laravel.
  - **Java:** Spring.

- **Diferencias entre un framework y una librería:**
  - **Framework:** Define la estructura y el flujo de trabajo de una aplicación.
  - **Librería:** Proporciona funciones y utilidades específicas para tareas comunes.

### Práctica 

- **Discusión en grupo**: 
  - ¿Qué frameworks conocen? 
  - ¿Han utilizado alguno antes?
  - ¿Cuáles son las ventajas que han notado al usarlos?

---

## 2. Introducción a Express

### Teoría 

- **¿Qué es Express?**
  - Express es un framework minimalista de Node.js que permite construir aplicaciones web y APIs rápidamente.

- **Características clave de Express:**
  - Enrutamiento simple.
  - Soporte para middlewares.
  - Manejo de peticiones HTTP.

- **¿Por qué usar Express?**
  - Minimalista, pero flexible.
  - Gran integración con Node.js y su ecosistema.
  - Comunidad y soporte extensivo.

### Práctica 

- **Instalación de Express:**
  - Crear un proyecto nuevo:
    ```bash
    mkdir mi-proyecto-express
    cd mi-proyecto-express
    npm init -y
    npm install express
    ```

- **Configurar un servidor básico:**

    ```javascript
    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
      res.send('Hola Mundo desde Express!');
    });

    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
    ```

---

## 3. Middlewares en Express 

### Teoría 

- **¿Qué es un middleware?**
  - Es una función que tiene acceso al objeto de solicitud (req), al objeto de respuesta (res), y a la función next que se utiliza para ejecutar el siguiente middleware en la pila.
  
- **Ejemplos de middlewares comunes:**
  - Autenticación.
  - Manejo de errores.
  - Logging.

### Práctica

- **Crear un middleware personalizado** para registrar el método y la URL de cada petición:

    ```javascript
    app.use((req, res, next) => {
      console.log(`Método: ${req.method}, URL: ${req.url}`);
      next();
    });
    ```

---

## 4. Rutas y métodos HTTP

### Teoría 

- **Métodos HTTP en Express:**
  - **GET:** Obtener datos del servidor.
  - **POST:** Enviar datos al servidor.
  - **PUT:** Actualizar datos en el servidor.
  - **DELETE:** Eliminar datos en el servidor.

- **Definir rutas en Express:**
  - Usando `app.get`, `app.post`, `app.put`, `app.delete`, etc.

### Práctica 

- **Crear rutas básicas para manejar GET y POST:**

    ```javascript
    app.get('/usuarios', (req, res) => {
      res.send('Lista de usuarios');
    });

    app.post('/usuarios', (req, res) => {
      res.send('Usuario creado');
    });
    ```

---

## 5. Manejo de datos con Express 

### Teoría

- **¿Cómo manejar datos en Express?**
  - Express usa `req.body` para acceder a los datos enviados en el cuerpo de una petición.
  - Necesitamos usar `express.json()` para parsear datos JSON.

### Práctica

- **Manejo de datos con POST:**

    ```javascript
    app.use(express.json()); // Middleware para parsear JSON

    app.post('/usuarios', (req, res) => {
      const { nombre, edad } = req.body;
      res.send(`Usuario ${nombre}, edad ${edad}, creado exitosamente`);
    });
    ```

---

## Recursos adicionales

- [Express.js - Documentación oficial](https://expressjs.com/)