import { Hotels } from "../models/hotels.model.js";
import { Rooms } from "../models/rooms.model.js"


export class RoomsController {

  create = async (req, res) => {
    try {
      const { number, available, hotelId } =req.body;

      if( !number || !available || !hotelId ) return res.status(400).json({message:"missing values"});

      const existHotel = await Hotels.findByPk(hotelId, {
        include: {
          model: Rooms,
          as: 'rooms',
          attributes: ['number', 'available']
        }
      });
      if( !existHotel ) return res.status(400).json({message: `hotel with id: ${hotelId} does not exist`});
      let numberExists = false
      if(existHotel.rooms && existHotel.rooms.length > 0) {
        existHotel.rooms.forEach(room => {
          if(room.number === number) numberExists = true
          console.log(numberExists);
          
        });
        if ( numberExists ) return res.status(400).json({message:"room already exists"})
      }
      await Rooms.create(req.body);
      return res.status(201).json({message:"room created"})

    } catch (error) {
      return res.status(500).json({message:error.message})
    }
  }

  getAll = async ( _, res ) => {
    const rooms = await Rooms.findAll();
    if(rooms.length === 0 ) return res.status(404).json({message: 'rooms not exists'})
    return res.status(200).json({data:rooms})
  }

  delete = async ( _, res, id ) => {
    try {
      const existsRoom = await Rooms.findByPk(id);
      if(!existsRoom) return res.status(404).json({message: "room not found"});
      await Rooms.destroy( {where: { id } } )
      return res.status(200).json({message: "room destroy"})
    } catch (error) {
      return res.status(500).json({message:error.message})
    }
  }

}