import { Hotels } from "../models/hotels.model.js";
import { Rooms } from "../models/rooms.model.js";

export class HotelsController {

  create =  async (req, res) => {
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

  update = async (req, res, id) => {
    try {
      const existHotel = await Hotels.findByPk(id, {
        attributes : ["name", "location", "phone"],
        raw: true
      });

      if( !existHotel ) return res.status(404).json({message:`Hotel with id ${id} not found`});

      const hotel = req.body;
      const hotelUpdated = {...existHotel, ...hotel};

      await Hotels.update(hotelUpdated, {where: {id}});
      return res.status(200).json({message:"hotel updated"})

    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }

  getAll = async (_, res) => {
    try {
      const hotels = await Hotels.findAll();
      if(hotels.length === 0) return res.status(404).json({message:`Not hotels found`});
      return res.status(200).json({message: "hotels found", data:hotels})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
  }

  delete = async (req, res, id) => {
    try {
      const hotel = await Hotels.findByPk(id);
      if( !hotel ) return res.status(404).json({message: "hotel not found"});
      await Hotels.destroy({where: {id}});
      return res.status(200).json({message:'Hotel deleted'})
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }

  getHotelWithRooms = async (req, res, id) => {
    try {
      const hotel = await Hotels.findByPk(id, {
        include: {
          model: Rooms,
          as: 'rooms',
          attributes: ['number', 'available']
        }
      })
      if( !hotel ) return res.status(404).json({message: "hotel not found"});
      return res.status(200).json({message: "Hotel found", data: hotel})
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}

