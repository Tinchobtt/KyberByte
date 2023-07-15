import { Badge, IconButton } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  return (
    <IconButton aria-label="cart" sx={{mr: 2}}>
        <Badge badgeContent={cart.length}  color='primary'>
            <ShoppingCartIcon sx={{color: '#000'}}/>
        </Badge>
    </IconButton>
  )
}

export default CartWidget