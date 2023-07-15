import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import './Cart.css'

const Cart = () => {
  const {cart, addToCart, deleteFromCart, deleteUnit, clearCart} = useContext(CartContext)

  return (
    // <div style={{display: 'block', textAlign: 'center', margin: '2rem'}}>
    //   Carrito Vacio
    // </div>
    <>
    <div className="cartContainer">
      {
        cart.map( prod => {
          return (
          <div className="cart-item" key={prod.id}>
            <div className="cart-item-img">
              <img src={prod.img} alt={prod.title} />
            </div>
            <div className="cart-item-title">
              <span>{prod.title}</span>
            </div>
            <div className="cart-item-quantity">
              <button onClick={deleteUnit}>-</button>
              <span>{prod.quantity}</span>
              <button onClick={()=>addToCart(prod, 1)}>+</button>
            </div>
            <div className="cart-item-delete">
              <button onClick={()=>deleteFromCart(prod.id)}>Delete</button>
            </div>
            <div className="cart-item-price">
              <span>{`$ ${prod.precio?.toLocaleString('es-ES') || 0}`}</span>
            </div>
          </div>
          )
        })
      }
    </div>
    <div className="cartControl">
      {
          cart.length === 0? '' : <button onClick={clearCart}>Clear cart</button>
      }
    </div>
    </>
  )
}

export default Cart