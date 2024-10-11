import { Router } from "express";
import { RoomsController } from "../controllers/room.controller.js";


const roomController = new RoomsController();

export const roomsRouter = Router();

roomsRouter.post('/', roomController.create);
roomsRouter.get('/', roomController.getAll);
roomsRouter.delete('/:id', ( req, res ) => roomController.delete( req , res, req.params.id ));


