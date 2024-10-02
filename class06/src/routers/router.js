import { Router } from "express";
import { userRouter } from "./user.route.js";

export const router = Router();

router.use('/users', userRouter);