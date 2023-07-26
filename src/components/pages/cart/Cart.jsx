import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom";
import './Cart.css'
import { Button } from "@mui/material";

const Cart = () => {
  const {cart, deleteFromCart, clearCart, getTotalPrice} = useContext(CartContext);

  let total = getTotalPrice();

  if(cart.length === 0){
    return <div style={{display: 'block', textAlign: 'center', margin: '2rem'}}>
       Carrito Vacio
     </div>
  }
  return (
    <>
    <div className="cartContainer">
      {
        cart.map( prod => {
          let total = prod.precio * prod.quantity;
          return (
          <div className="cart-item" key={prod.id}>
            <div className="cart-item-img">
              <Link to={`/itemDetail/${prod.id}`}>
                <img src={prod.img} alt={prod.title} />
              </Link>
            </div>
            <div className="cart-item-title">
              <span>{prod.title}</span>
            </div>
            <div className="cart-item-quantity">
              <span>Cantidad: {prod.quantity}</span>
            </div>
            <div className="cart-item-delete">
              <button onClick={()=>deleteFromCart(prod.id)}>Delete</button>
            </div>
            <div className="cart-item-price">
              <span>{`$ ${total && total?.toLocaleString('es-ES')}`}</span>
            </div>
          </div>
          )
        })
      }
    </div>
      {
      cart.length > 0 && (
        <div className="cartControl">
                <div className="clear-btn">
                  <Button variant="outlined" onClick={clearCart}>Limpiar carrito</Button>
                </div>
                <div className="cartCheckout">
                  <span className="cartFinalPrice">{`$ ${total && total.toLocaleString('es-ES')}`}</span>
                  <Button variant="contained" sx={{marginLeft: '1rem'}}><Link to={'/checkout'} className="cartBuyBtn">Finalizar Compra</Link></Button>
                </div>
        </div>
      )}
    </>
  )
}

export default Cart