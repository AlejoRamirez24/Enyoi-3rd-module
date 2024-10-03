import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";

const usersController = new UsersController

export const userRouter = Router();

userRouter.post('/', usersController.createUser )