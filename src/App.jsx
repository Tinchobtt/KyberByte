import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemList/itemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Cart from "./components/pages/cart/Cart";

function App() {
  //const [saludo, setSaludo] = useState('Bienvenido a KyberByte, el lugar donde encontraras cualquier componente electronico que busques!');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout /> }>
            <Route path="/" element={ <ItemListContainer /> }/>
            <Route path="/category/:categoryName" element={ <ItemListContainer /> }/>
            <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> }/>
            <Route path="/cart" element={ <Cart /> }/>
          </Route>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
