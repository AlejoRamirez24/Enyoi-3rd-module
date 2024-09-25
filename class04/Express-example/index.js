import express from "express" // ESM

const app = express();
const port = 3000;
const router = express.Router();
const router2 = express.Router();

app.use(express.json())
app.use('/api', router)
app.use('/api2', router2)


app.listen( port, () => {
  console.log(`Server running on http://localhost:${port}/api`);
} )

router.get("/", ( _, res) =>{
  res.send("Hola desde ruta raiz 1 ")
})

router.get("/users/", ( _, res) =>{
  res.json([{id:1, name: "Alejo"}, {id:2, name:"Ana"}]);
})

router2.get('/', (_,res) => {
  console.log("Hola desde ruta raiz 2");
  res.send("Hola desde ruta raiz 2")
})

router.delete('/', (req, res) =>{
  res.send("Objeto eliminado")
})