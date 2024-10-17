import jwt from 'jsonwebtoken';
import {config} from 'dotenv';

config();

export class UserController {
  constructor() {
    this.users = [];
  }

  createUser(req, res) {
    const { email, password } = req.body;
    const user = { email, password };
    this.users.push(user);    
    res.status(201).json({message: "user created", data : user});
  }

  getUsers(req, res) {
    const users = [{id:1, name: "Alejo"}, {id:2, name:"Ana"}];
    res.status(200).json({message: "users found", data : users});
  }


  login(req, res) {
    const { email, password } = req.body;
    const users = [{email: "alejo@alejo.com", password: "1234", role: "admin"}, {email: "ana@ana.com", password: "1234", role: "user"}];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      const token = jwt.sign(user, process.env.JWT_SECRET,  { expiresIn: '1h' })
      res.status(200).json({message: "user found", data : user, token});
    } else {
      res.status(404).json({message: "user not found"});
    }
  }
}