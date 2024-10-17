import express from 'express';
import multer from 'multer';
import path from 'path';

    const app = express();

    // Configuración de Multer 
    const storage = multer.diskStorage({ destination: (req, file, cb) => { cb(null, 'uploads/'); 
    // Carpeta donde se guardarán los archivos 
    },
    filename: (req, file, cb) => { const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); 
    // Nombre único para cada archivo 
    } });

    const upload = multer({ storage: storage });

    // Ruta para manejar la carga del archivo 
    app.post('/uploadfile', upload.single('archivo'), (req, res) => { if (!req.file) { return res.status(400).send('No se ha subido ningún archivo.'); } res.send(`Archivo ${req.file.filename} subido con éxito.`); });

    // Iniciar el servidor 
    app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000'); }); 