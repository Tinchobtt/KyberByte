import { Badge, IconButton } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <IconButton aria-label="cart" sx={{mr: 2}}>
        <Badge badgeContent={4}  color='primary'>
            <ShoppingCartIcon sx={{color: '#000'}}/>
        </Badge>
    </IconButton>
  )
}

export default CartWidget