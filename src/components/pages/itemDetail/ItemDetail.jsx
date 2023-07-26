import { Button } from "@mui/material";
import './ItemDetail.css';
import { ToastContainer } from "react-toastify";

const ItemDetail = ({product, onAdd, counter, addCounter, subtractCounter}) => {
  return (
    <>
    <div className="prod-container">
      <div className="prod-title">
        <h3>{product.title}</h3>
      </div>
      <div className="prod-media">
        <img src={product.img} className="prod-img" alt={product.title} />
      </div>
      <div className="prod-data">
          <div className="prod-precio">
            <span className="prod-item">{"$ " + product.precio?.toLocaleString('es-ES') || 0}</span>
          </div>
          <div className="prod-counter">
            <button className="prod-counter-btn" onClick={subtractCounter}>-</button>
            <span className="prod-counter-num">{counter}</span>
            <button className="prod-counter-btn" onClick={addCounter}>+</button>
          </div>
          <div className="prod-stock">
            {
              product.stock > 0 ? (
                <span className="prod-item">{"Disponibles: " + product.stock}</span>
              ) : (
                <span className="prod-item">No hay stock</span>
              )
            }
          </div>
          <div className="prod-buttons">
            <Button variant="contained" sx={{width: '100%', marginBottom: '1rem'}}>Comprar ahora</Button>
            <Button disabled={product.stock > 0 ? false : true} variant="outlined" sx={{width: '100%'}} onClick={()=>onAdd(counter)}>Agregar al carrito</Button>
          </div>
      </div>
      <div className="prod-desc">
        <h4>Descripcion</h4>
        {
          Object.keys(product).length > 0 &&
          <ul>
              <li>Pantalla: {product.descripcion.pantalla}</li>
              <li>Resolución: {product.descripcion.resolución }</li>
              <li>Procesador: {product.descripcion.procesador}</li>
              <li>Memoria RAM: {product.descripcion.ram }</li>
              <li>Almacenamiento interno: {product.descripcion.memoria}</li>
              <li>Placa de video: {product.descripcion.video}</li>
          </ul> 
        }
      </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default ItemDetail