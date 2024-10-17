### Cargar varios middlewares en un mismo endpoint en Express

En Express, puedes aplicar varios middlewares a un mismo endpoint pasando los middlewares como una lista de funciones antes del controlador del endpoint. Aquí tienes un ejemplo:

  ```javascript
    const express = require('express'); const app = express();

    // Middleware 1 function 
    middleware1(req, res, next) { console.log('Middleware 1 ejecutado'); next(); // Pasa al siguiente middleware 
    }

    // Middleware 2 function 
    middleware2(req, res, next) { console.log('Middleware 2 ejecutado'); next(); // Pasa al siguiente middleware o controlador 
    }

    // Controlador function 
    controlador(req, res) { res.send('Endpoint alcanzado después de middlewares'); }

    // Aplicar varios middlewares a un mismo endpoint 
    app.get('/ruta', [middleware1, middleware2], controlador);

    // Iniciar el servidor 
    app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000'); }); 
  ```

En este ejemplo, los middlewares middleware1 y middleware2 se ejecutan en orden antes de que se ejecute el controlador. Ambos deben llamar a next() para continuar el flujo hacia el siguiente middleware o controlador.

### Subida de archivos en Express usando multer

Para manejar la subida de archivos en Express, puedes utilizar el middleware multer. A continuación te muestro cómo configurarlo para manejar la carga de archivos:

Instalar multer:
``` npm install multer ```

Configurar y usar multer:
  ```javascript
    const express = require('express'); 
    const multer = require('multer'); 
    const path = require('path');

    const app = express();

    // Configuración de Multer 
    const storage = multer.diskStorage({ destination: (req, file, cb) => { cb(null, 'uploads/'); 
    // Carpeta donde se guardarán los archivos. Asegúrate de que la carpeta exista en tu proyecto
    },
    filename: (req, file, cb) => { const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); 
    // Nombre único para cada archivo 
    } });

    const upload = multer({ storage: storage });

    // Ruta para manejar la carga del archivo 
    app.post('/uploadfile', upload.single('archivo'), (req, res) => { if (!req.file) { return res.status(400).send('No se ha subido ningún archivo.'); } res.send(`Archivo ${req.file.filename} subido con éxito.`); });

    // Iniciar el servidor 
    app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000'); }); 
  ```





Formulario HTML para subir archivos:
```html

<form action="http://127.0.0.1:3000/uploadfile" method="POST" enctype="multipart/form-data">
  <input type="file" name="archivo">
  <button type="submit">Subir archivo</button>
</form>