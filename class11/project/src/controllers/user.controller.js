import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export class UserController {

  getAllUsers(req, res) {
    return res.send('GET /users');
  }

  login(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    
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