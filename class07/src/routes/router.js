import { Router } from "express";
import { usersRouter } from "./users.router.js";

export const router = Router();

router.use('/users', usersRouter);