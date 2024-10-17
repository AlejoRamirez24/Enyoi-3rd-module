import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

// Middleware para verificar el token JWT 
export const verifyJWT = (req, res, next) => { 
  const auth = req.headers['authorization'];
  const token = auth && auth.split(' ')[1];
  console.log(token);
  if (!token) { 
    return res.status(403).send({ 
      auth: false, 
      message: 'No token provided.' }); 
    }
  
  jwt.verify(token, process.env.JWT_SECRET , (err, decoded) => { 
    if (err) { 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' }); 
    }
  // Si el token es válido, guardamos la información del usuario decodificado en req.user
  req.user = decoded;
  next();
  
  }); }
  
