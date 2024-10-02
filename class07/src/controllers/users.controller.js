import { Users } from "../models/users.model.js";

export class UsersController {
  getUsers = (req, res) => {
    res.send('GET /users');
  }

  getUserById = async (id, res) => {
    try {
      const user = await Users.findByPk(id);
      if (!user){
        return res.status(404).json({message:"Usuario no encontrado"})
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({message:error.message})
    }
  }

  updateUser = async (req, res, id) => {
    try {
      const user = await findUser(id);
      if (!user){
        return res.status(404).json({message:"Usuario no encontrado"})
      }
      await user.update(req.body);
      return res.status(200).json({message:"Usuario actualizado"});
      
    } catch (error) {
      
    }
  }

  createUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      if (!name || !email){
        return res.status(400).json({message:"Falta nombre o email"})

      }
      await Users.create({ name, email });
      return res.status(201).json({message:"Usuario creado"});

      } catch (error) {
        return res.status(500).json({message:error.message})
    }
  }

  deleteUser = async (id, res) => {
    try {
      console.log(id);
      const user = await Users.findByPk(id);
      if (!user){
        return res.status(404).json({message:"Usuario no encontrado"})
      }
      await user.destroy();
      return res.status(200).json({message:"Usuario eliminado"});
    } catch (error) {
      
    }
  }
}

const findUser = async (id) => {
  const user = await Users.findByPk(id);
  if (!user){
    return false;
  }
  return user;
}