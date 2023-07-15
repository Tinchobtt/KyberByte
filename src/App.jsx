import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import CartContextProvider from "./context/CartContext";

function App() {
  //const [saludo, setSaludo] = useState('Bienvenido a KyberByte, el lugar donde encontraras cualquier componente electronico que busques!');
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}
export default App
