import { Router } from "express";
import { hotelRouter } from "./hotelsRouter.js";


export const router = Router();

router.use("/hotels", hotelRouter)