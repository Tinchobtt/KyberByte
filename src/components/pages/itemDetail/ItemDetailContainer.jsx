import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { CartContext } from '../../../context/CartContext';
import { toast } from 'react-toastify';
import { getDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig'

const ItemDetailContainer = () => {
  const {addToCart, getQuantityById} = useContext(CartContext)
  const {id} = useParams();
  let inital = getQuantityById(id);
  
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(inital);

  useEffect(()=>{
    let productsCollection = collection(db, 'products');
    let productRef = doc(productsCollection,  id);
    getDoc(productRef).then( res => {
      let product = {...res.data(), id: res.id};
      setProduct(product);
    })
  }, [id])

  const onAdd = (cant)=>{
    addToCart(product, cant)
  }

  const addCounter = ()=>{
    counter < product.stock ? setCounter(counter + 1) : 
      toast.warn('Alcanzó la cantidad maxima de este producto!', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
  }

  const subtractCounter = ()=>{
    counter > 1 && setCounter(counter - 1);
  }

  return (<ItemDetail 
    product={product} 
    onAdd={onAdd} 
    counter={counter} 
    addCounter={addCounter} 
    subtractCounter={subtractCounter}
    />)
}

export default ItemDetailContainer