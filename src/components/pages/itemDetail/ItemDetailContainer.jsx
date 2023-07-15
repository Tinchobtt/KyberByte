import { useContext, useEffect, useState } from 'react';
import { products } from "../../../productMock";
import { useNavigate, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { CartContext } from '../../../context/CartContext';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(1);

  const {id} = useParams();
  const navigate = useNavigate()

  const {addToCart} = useContext(CartContext)

  useEffect(()=>{
    let prodSelect = products.find( prod => prod.id === +id);
    const tarea = new Promise((res, rej)=>{
      res(prodSelect)
    })
    tarea.then(res => setProduct(res))
  }, [id])

  const onAdd = (cant)=>{
    addToCart(product, cant)
    //navigate('/cart')
  }

  const addCounter = ()=>{
    setCounter(counter + 1);
  }
  const subtractCounter = ()=>{
    setCounter(counter - 1);
  }

  return (<ItemDetail product={product} onAdd={onAdd} counter={counter} addCounter={addCounter} subtractCounter={subtractCounter}/>)
}

export default ItemDetailContainer