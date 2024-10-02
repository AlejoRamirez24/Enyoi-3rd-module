import Users from "../models/user.model.js";

export class UserController {
  getAllUsers(req, res){
    res.send("hola desde el controladro con clase")
  }

  getUserById(req, res) {
    const id = req.params.id
    res.status(201).send(`Obteniendo el usuario con id ${id}`)
  }

  createUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      if (!name || !email ) {
        return res.status(400).json({ message: "Faltan campos por llenar" });
      }
      const user = await Users.create({ name, email});
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}