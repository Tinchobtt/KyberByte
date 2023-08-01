import ProductCard from "../../common/productCard/ProductCard";
import Box from '@mui/material/Box';
import { Skeleton } from "@mui/material";

const ItemList = ( {items} ) => {
    let arr = [1,2,3,4,5,6]
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: {xs: '1fr', sm: 'repeat(auto-fit, minmax(300px, 1fr))'},
            justifyItems: 'center',
            gridGap: '2rem', 
            margin: '4rem 0'
          }}>
            {
            items.length > 0 ? (
                items.map( (item)=> {
                    return <ProductCard key={item.id} item={item} />;
                })
            ) : (
                arr.map( (item)=> {
                    return <div key={item}>
                        <Skeleton variant="rounded" width={300} height={326} />
                        </div>
                })
            )
            }
        </Box>
    )
}

export default ItemList