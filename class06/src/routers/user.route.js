import { Router } from "express";
import { UserController } from "../controllers/users.controller.js";

const userController = new UserController

export const userRouter = Router();



userRouter.get('/',userController.getAllUsers );
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUser);