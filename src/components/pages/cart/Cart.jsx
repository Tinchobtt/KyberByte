import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart, addToCart, deleteFromCart, deleteUnit, clearCart, getTotalPrice} = useContext(CartContext);

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
              <img src={prod.img} alt={prod.title} />
            </div>
            <div className="cart-item-title">
              <span>{prod.title}</span>
            </div>
            {/* <div className="cart-item-quantity">
              <button onClick={()=>deleteUnit(prod)}>-</button>
              <span>{prod.quantity}</span>
              <button onClick={()=>addToCart(prod, 1)}>+</button>
            </div> */}
            <div className="cart-item-delete">
              <button onClick={()=>deleteFromCart(prod.id)}>Delete</button>
            </div>
            <div className="cart-item-price">
              <span>{`$ ${total?.toLocaleString('es-ES') || 0}`}</span>
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
                  <button onClick={clearCart}>Clear cart</button>
                </div>
                <div className="cartCheckout">
                  <span className="cartFinalPrice">{`$ ${total.toLocaleString('es-ES') || 0}`}</span>
                  <button className="cartFinalPrice-btn"><Link to={'/checkout'}>Finalizar Compra</Link></button>
                </div>

        </div>
      )}
    </>
  )
}

export default Cart