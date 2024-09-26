import express from 'express'
import cors from 'cors'
const app = express();
const PORT = 3000;
const allowedOrigins = ['http://127.0.0.1:5500/api'];



app.use(cors({
  // origin: 'http://127.0.0.1:5500'
  origin: 'http://127.0.0.1:5501'


}));

app.get('/api', (req, res) => {
  res.json({ message: 'CORS configurado correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});