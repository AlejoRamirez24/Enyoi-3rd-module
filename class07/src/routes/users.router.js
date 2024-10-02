import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";

const usersController = new UsersController();

export const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:id', (req, res) => usersController.getUserById(req.params.id, res));
usersRouter.post('/', usersController.createUser);
usersRouter.delete('/:id', (req, res) => usersController.deleteUser(req.params.id, res));
usersRouter.put('/:id', (req, res) => usersController.updateUser(req, res, req.params.id));