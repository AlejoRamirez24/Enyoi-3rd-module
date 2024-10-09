import { Hotels } from "../models/hotels.model.js";

export class HotelsController {

  createHotel =  async (req, res) => {
    try {
      const { name, location, phone } = req.body;
      if(!name || !location){
        return res.status(400).json({message: "Falta nombre o ubicacion"})
      }
      await Hotels.create({name,location, phone}) //Escribe en la base de datos
      return res.status(201).json({message: `hotel created with name: ${name}`})
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}