import { Badge, IconButton } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const {getTotalQuantity} = useContext(CartContext)
  let total = getTotalQuantity() > 0 ? getTotalQuantity() : 0;
  return (
    <IconButton aria-label="cart" sx={{mr: 2}}>
        <Badge badgeContent={total}  color='primary'>
            <ShoppingCartIcon sx={{color: '#000'}}/>
        </Badge>
    </IconButton>
  )
}

export default CartWidget