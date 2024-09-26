import express from 'express';
import cors from 'cors';
import router from './src/routes/userRoutes.js';


const app = express();
const port = 3000;

app.use(express.json())
app.use("/users", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
