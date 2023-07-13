import { useEffect, useState } from 'react';
import { products } from "../../../productMock";
import { useNavigate, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
    let prodSelect = products.find( prod => prod.id === +id);
    const tarea = new Promise((res, rej)=>{
      res(prodSelect)
    })
    tarea.then(res => setProduct(res))
  }, [id])

  const onAdd = (cant)=>{
    navigate('/cart')
  }

  return <ItemDetail product={product} onAdd={onAdd}/>
}

export default ItemDetailContainer