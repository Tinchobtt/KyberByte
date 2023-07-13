import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  //const [saludo, setSaludo] = useState('Bienvenido a KyberByte, el lugar donde encontraras cualquier componente electronico que busques!');
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}
export default App
