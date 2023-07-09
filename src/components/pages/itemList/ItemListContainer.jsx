import { useEffect, useState } from "react"
import { products } from "../../../productMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    
    const {categoryName} = useParams()

    useEffect( ()=>{
        let filterProducts = products.filter( item => item.categoria === categoryName)
        const data = new Promise((resolve, reject)=>{
            resolve(categoryName === undefined ? products : filterProducts);
        });

        data
            .then( response => setItems(response))
            .catch( err => {setError(err)});
    }, [categoryName]);

    return <ItemList items={items} />
}

export default ItemListContainer