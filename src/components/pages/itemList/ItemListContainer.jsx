import { useEffect, useState } from "react"
import { products } from "../../../productMock";
import ItemList from "./itemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    
    useEffect( ()=>{
        const data = new Promise((resolve, reject)=>{
            resolve(products);
        });

        data
          .then( response => setItems(response))
          .catch( err => {setError(err)});

    }, []);

    return <ItemList items={items} />
}

export default ItemListContainer