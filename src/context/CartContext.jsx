import { createContext, useState } from "react"
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, cant)=>{
        if(isInCart(product.id)){
            let newCart = cart.map( item => {
                if(item.id === product.id){
                    return {...item, quantity: cant}
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
        Swal.fire({
            title: '¿Desea borrar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Borrar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
                Swal.fire({
                    title: 'Carrito Borrado!',
                    confirmButtonColor: '#3085d6'
                })
            }
          })
    }

    const isInCart = (id)=>{
        return cart.some( item=> item.id === id)
    }

    const getTotalPrice = ()=>{
        let total = cart.reduce( (acum, item) =>{
            return acum + (item.precio * item.quantity);
        }, 0)
        return total;
    }

    const getTotalQuantity = ()=>{
        let total = cart.reduce( (acum, item) =>{
            return acum + item.quantity;
        }, 0)
        return total;
    }

    const getQuantityById = (id) =>{
        let product = cart.find( item => item.id === id );
        return product ? product.quantity : 1;
    }

    let data = {
        cart,
        setCart,
        addToCart,
        deleteFromCart,
        deleteUnit,
        clearCart,
        getTotalPrice,
        getTotalQuantity,
        getQuantityById
    }
    return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider