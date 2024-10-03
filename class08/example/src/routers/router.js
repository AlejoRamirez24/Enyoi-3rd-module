import { Router } from "express";
import { userRouter } from "./user.router.js";

export const router = Router();

router.use('/users', userRouter);