import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/jwt.middleware.js";
import { roleGuard } from "../middlewares/roleGuard.middleware.js";
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, 'uploads/') },
  filename: (req, file, cb) => { const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); 
    // Nombre único para cada archivo 
    }
})

const upload = multer({ storage: storage });

const userController = new UserController();
export const userRouter = Router();

userRouter.get('/', [verifyJWT, roleGuard(['user'])] ,userController.getAllUsers); 

userRouter.post('/login', userController.login);

userRouter.post('/uploadCV', [upload.single('archivo')],(req, res) => {
  if (!req.file)
    { 
      return res.status(400).send('No se ha subido ningún archivo.'); 
    } 
  res.send(`Archivo ${req.file.filename} subido con éxito.`); } );