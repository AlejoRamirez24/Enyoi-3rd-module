import H1Component from "./h1Component"
import MyComponent from "./MyComponent"
import { Route, Router, Routes } from "react-router-dom"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<MyComponent/>} />
      <Route path="/otro" element={<H1Component/>} />
      {/* <h1>¡Hola Mundo!</h1>
      <h1>Hola</h1>
      <MyComponent />
      <MyComponent /> */}
    </Routes>
  )
}

export default App
