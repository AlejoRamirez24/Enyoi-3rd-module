import express from 'express';
import connectDB from './config/db.js';


const app = express();
const PORT = 3000;

// Conectar a MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});