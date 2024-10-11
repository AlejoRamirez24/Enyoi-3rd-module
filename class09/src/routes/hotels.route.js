import { Router } from "express";
import { HotelsController } from "../controllers/hotel.controller.js";

const hotelController = new HotelsController()

export const hotelRouter = Router();

hotelRouter.post('/', hotelController.create );
hotelRouter.patch('/:id', (req, res) => hotelController.update(req, res, req.params.id));
hotelRouter.get('/', hotelController.getAll);
hotelRouter.delete("/:id", (req, res) => hotelController.delete(req, res, req.params.id));
hotelRouter.get("/rooms/:id", (req, res) => hotelController.getHotelWithRooms(req, res, req.params.id));