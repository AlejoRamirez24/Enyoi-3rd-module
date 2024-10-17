import { Router } from "express";
import { userRouter } from "./users.router.js";

export const router = Router();


router.use("/users", userRouter);
