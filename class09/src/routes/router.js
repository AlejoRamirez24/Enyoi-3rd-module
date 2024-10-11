import { Router } from "express";
import { hotelRouter } from "./hotels.route.js";
import { roomsRouter } from "./rooms.route.js";
import { roomTypesRoute } from "./roomTypes.route.js";


export const router = Router();

router.use("/hotels", hotelRouter);
router.use("/rooms", roomsRouter);
router.use("/roomtypes", roomTypesRoute)