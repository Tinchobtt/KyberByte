import { Button } from "@mui/material"
import './ItemDetail.css'

const ItemDetail = ({product}) => {
  return (
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
          <div className="prod-stock">
            <span className="prod-item">{"Disponibles: " + product.stock}</span>
          </div>
          <div className="prod-buttons">
            <Button variant="contained" sx={{width: '100%', marginBottom: '1rem'}}>Comprar ahora</Button>
            <Button variant="outlined" sx={{width: '100%'}}>Agregar al carrito</Button>
          </div>
      </div>
      <div className="prod-desc">
        <h4>Descripcion</h4>
        <ul>
          <li>Pantalla: {product.descripcion?.pantalla || 0}</li>
          <li>Resolución: {product.descripcion?.resolución || 0}</li>
          <li>Procesador: {product.descripcion?.procesador || 0}</li>
          <li>Memoria RAM: {product.descripcion?.ram || 0}</li>
          <li>Almacenamiento interno: {product.descripcion?.memoria || 0}</li>
          <li>Placa de video: {product.descripcion?.video || 0}</li>
        </ul>
      </div>
    </div>
  )
}

export default ItemDetail