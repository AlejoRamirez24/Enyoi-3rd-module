import { Router } from "express";
import { check, validationResult } from "express-validator";
import { UserController } from "../controllers/users.controller.js";
import { expressjwt } from 'express-jwt';
import { config } from "dotenv";
import roleGuard from "../middleware/jwt.middleware.js";
import jwt from 'jsonwebtoken';

export const userRouter = Router();

const userController = new UserController();


userRouter.post("/", [check('email').isEmail(), check('password').isString()], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  userController.createUser(req, res);
})

userRouter.get("/",expressjwt({secret: process.env.JWT_SECRET, algorithms:['HS256']}), (req, res) => {
  const token = req.headers.authorization.split(' ')[1];  
  roleGuard(['admin'], token)(req, res, () => {
    userController.getUsers(req, res);
  });
}

);

userRouter.post("/login", userController.login);

//userRouter.get(ruta, middleware , funcion que se ejecuta cuando llamo la ruta)