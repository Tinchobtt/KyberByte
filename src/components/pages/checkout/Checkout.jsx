import { Button, TextField } from "@mui/material"
import './Checkout.css';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = ({data}) => {
  const {cart, getTotalPrice} = useContext(CartContext)
  let {handleSubmit, handleChange, handleBlur, touched, values, errors, isSubmitting, orderID} = data;
  return (
    <>
    {orderID ? (
        <div className="msg-container">
          <div className="msg">
            <h3>Compra finalizada!</h3>
            <p>Su codigo de compra es: {orderID}</p>
            <Button variant="outlined" className="backLink"><Link to={'/'} >Seguir comprando</Link></Button>
          </div>
        </div>
      ) : (
        <div className="checkout-container">
          <form onSubmit={handleSubmit}>
            <TextField  
              type="text"
              label="Nombre" 
              variant="outlined"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              helperText={errors.name && touched.name && errors.name}
              value={values.name}
              error={errors.name && touched.name ? true : false}
            />
            <TextField  
              type="text"
              label="Email" 
              variant="outlined"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              helperText={errors.email && touched.email && errors.email}
              value={values.email}
              error={errors.email && touched.email ? true : false}
            />
            <TextField  
              type="number"
              label="phone" 
              variant="outlined"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              helperText={errors.phone && touched.phone && errors.phone}
              value={values.phone}
              error={errors.phone && touched.phone ? true : false}
            />
            <Button disabled={isSubmitting} type="submit" variant="contained" sx={{maxWidth: '200px'}} className="input-submit">Finalizar compra</Button>
          </form>
          <div className="purchaseDetail">
            <h3>Detalle de compra</h3>
            <div className="productDetails">
            {
              cart.map( item =>{
                return (
                  <div key={item.id} className="productDetail">
                    <img src={item.img} alt={item.title} />
                    <h4>{item.title}</h4>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                )
              })
            }
            </div>
            <div className="finalPrice">
              <h3>{`$ ${getTotalPrice().toLocaleString('es-ES')}`}</h3>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default Checkout