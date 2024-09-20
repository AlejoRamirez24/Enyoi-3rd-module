const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
})

app.use(express.json());

app.get('/', ( req, res) =>{
  res.send('Hello World');
})

app.post('/', (req, res) => {
  const { name, age, email } = req.body;
  const newAge = age + 10;
  res.send(`Your name is ${name}, you are ${newAge} years old, and your email is ${email}`);
}
)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
})


