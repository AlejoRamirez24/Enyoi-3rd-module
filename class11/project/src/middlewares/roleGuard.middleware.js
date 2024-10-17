export const roleGuard = (roles) => {
  return (req, res, next) => { // Verifica si el usuario tiene un rol permitido 
  if (!req.user || !roles.includes(req.user.role)) { 
      return res.status(403).send({ message: 'Acceso denegado. No tienes el rol adecuado.' });
    }
    next(); 
  }; 
}
  
