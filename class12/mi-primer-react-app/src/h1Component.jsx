import { useEffect, useState } from "react";
import MyComponent from "./MyComponent"

const H1Component = () => {
  const [contador, setContador] = useState(0);
  const [data, setData] = useState(null);

 

  useEffect(async() => {
    console.log('Componente montado');
    const data = await axios.post('https://jsonplaceholder.typicode.com/posts', 
      {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  )
    setData(data)
    // useEffect puede devolver una función para simular componentWillUnmount
    return () => {
      console.log('Componente desmontado');
    };
  }, []);

  useEffect(() => {
    console.log('Componente actualizado');
  }, [contador, data]);

  return (
    <div>
      <div>{data}</div>
      <h1>Contador desde H1: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <MyComponent />
    </div>
  )
}

export default H1Component
