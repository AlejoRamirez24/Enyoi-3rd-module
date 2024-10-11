import { RoomTypes } from "../models/roomTypes.model.js"



export class RoomTypesController {
  create = async (req, res) => {

    const {name, capacity, beds} = req.body;
    if( !name || !capacity || !beds ) return res.status(400).json({message:'missing values'})

    const existType = await RoomTypes.findOne({where:{name}});
    if( existType ) return res.status(400).json({message:"type already exist"});

    await RoomTypes.create(req.body);
    return res.status(201).json({message: 'type created', data: req.body});
  }
}