import { useEffect, useState } from 'react';
import { products } from "../../../productMock";
import { useParams } from 'react-router-dom';

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

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.precio}</p>
    </div>
  )
}

export default ItemDetailContainer