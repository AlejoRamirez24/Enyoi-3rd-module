import { Router } from "express";
import { HotelsController } from "../controllers/hotel.controller.js";

const hotelController = new HotelsController()

export const hotelRouter = Router();

hotelRouter.post('/', hotelController.createHotel )