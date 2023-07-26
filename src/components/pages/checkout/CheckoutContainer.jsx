import { useContext, useState } from 'react'
import Checkout from './Checkout'
import { useFormik } from 'formik'
import * as Yup from 'Yup';
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import { doc, addDoc, updateDoc, collection, serverTimestamp } from "firebase/firestore";

const CheckoutContainer = () => {
    // const [dataForm, setDataForm] = useState({
    //     name : '',
    //     email: ''
    // })

    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     //Envio de data por AXIOS
    // }
    // const handleChange = (e)=>{
    //     setDataForm({...dataForm, [e.target.name]: e.target.value})
    //     //No hacer validaciones aca, mejor hacerlo cuando se envia el form o en el onBlur
    // }

    //USANDO FORMIK
    const {cart, setCart, getTotalPrice} = useContext(CartContext)
    const [orderID, setOrderID] = useState(0);

    const {handleSubmit, handleChange, handleBlur, touched, values, errors, isSubmitting} = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''
        },
        onSubmit: (values, action)=>{
            let order = {
                buyer: {
                    name: values.name,
                    email: values.email,
                    phone: values.phone
                },
                items: cart,
                total: getTotalPrice(),
                date: serverTimestamp()
            }
            //Guardando nueva orden
            const ordersCollection = collection(db, 'orders');
            addDoc(ordersCollection, order).then( res => setOrderID(res.id))

            //Actualizando los productos
            cart.forEach(prod => {
                let refDoc = doc(db, 'products', prod.id);
                updateDoc(refDoc, {stock: prod.stock - prod.quantity})
            });
            setCart([])
            action.resetForm()
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Este campo es obligatorio.').min(5).max(15),
            email: Yup.string().email('El email es invalido').required('Este campo es obligatorio.'),
            phone: Yup.number().required('Este campo es obligatorio.'),
        })
    })

    let data = {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        errors,
        values,
        isSubmitting,
        orderID
    }

  return <Checkout data={data}/>
}

export default CheckoutContainer