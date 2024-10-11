import { Router } from "express";
import { RoomTypesController } from "../controllers/roomsTypes.controller.js";



const roomsTypeController = new RoomTypesController()

export const roomTypesRoute = Router();

roomTypesRoute.get('/');
roomTypesRoute.post('/', roomsTypeController.create );
roomTypesRoute.get('/:id');
