import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/common/itemListContainer/itemListContainer";

function App() {
  const [saludo, setSaludo] = useState('Bienvenido a KyberByte, el lugar donde encontraras cualquier componente electronico que busques!');


  return (
    <>
      <Navbar />
      <ItemListContainer greeting={saludo}/>
    </>
  )
  
}

export default App
