import { useEffect, useState } from 'react';
import { products } from "../../../productMock";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {id} = useParams()

  useEffect(()=>{
    let prodSelect = products.find( prod => prod.id === +id);
    const tarea = new Promise((res, rej)=>{
      res(prodSelect)
    })
    tarea.then(res => setProduct(res))
  }, [id])

  return <ItemDetail product={product}/>
}

export default ItemDetailContainer