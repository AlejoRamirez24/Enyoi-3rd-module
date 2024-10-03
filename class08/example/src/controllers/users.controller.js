import User from '../models/users.model.js';

export class UsersController {
  createUser = async (req, res) => {
    try {
      console.log("En metodo crear");
      
      const user = new User(req.body);
      await user.save();
      res.status(201).json({message: "User created"});
    } catch (error) {
      res.status(400).json({message:error.message});
    }
  }
}