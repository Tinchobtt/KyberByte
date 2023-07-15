import { ConstructionOutlined } from "@mui/icons-material";
import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, cant)=>{
        if(isInCart(product.id)){
            let newCart = cart.map( item => {
                if(item.id === product.id){
                    return {...item, quantity: item.quantity + cant}
                }else{
                    return item;
                }
            })
            setCart(newCart);
        }else{
            let productCart = {...product, quantity: cant}
            setCart([...cart, productCart])
        }
    }
    const deleteFromCart = (id)=>{
        let newCart = cart.filter( item => item.id !== id);
        setCart(newCart)
    }
    const deleteUnit = (product)=>{
        let newCart = cart.map( item => {
            if(item.id === product.id){
                return {...item, quantity: item.quantity - 1}
            }else{
                return item;
            }
        })
        setCart(newCart)
    }
    const clearCart = ()=>{
        setCart([])
    }
    const isInCart = (id)=>{
        return cart.some( item=> item.id === id)
    }

    let data = {
        cart,
        addToCart,
        deleteFromCart,
        deleteUnit,
        clearCart
    }
    return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider