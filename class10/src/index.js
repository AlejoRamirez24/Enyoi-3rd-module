import  express  from 'express';
import { router } from './routes/router.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log('Server is running on port 3000');
});

