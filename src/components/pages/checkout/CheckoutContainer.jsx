import { useState } from 'react'
import Checkout from './Checkout'

const CheckoutContainer = () => {
    const [dataForm, setDataForm] = useState({
        name : '',
        email: ''
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        //Envio de data por AXIOS
    }
    const handleChange = (e)=>{
        setDataForm({...dataForm, [e.target.name]: e.target.value})
        //No hacer validaciones aca, mejor hacerlo cuando se envia el form o en el onBlur
    }

  return (<Checkout handleSubmit={handleSubmit} handleChange={handleChange}/>)
}

export default CheckoutContainer