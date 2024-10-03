import express from 'express';
import connectDB from './config/db.js';
import  {router} from './routers/router.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
