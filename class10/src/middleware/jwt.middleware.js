import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();
// Guard para verificar si el usuario tiene un rol específico
const roleGuard = (requiredRoles, token) => {
  if (!token) {
    return (req, res) => {
      res.status(401).json({ message: "Unauthorized" });
    };
  }
  return (req, res, next) => {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken);
    
    const userRole = decodedToken.role;
    console.log(userRole);
    console.log(requiredRoles);
    
    
    if (requiredRoles.includes(userRole)) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
};

// Exportar el middleware con ES6 modules
export default roleGuard;