import ProductCard from "../../common/productCard/ProductCard";
import Box from '@mui/material/Box';

const ItemList = ( {items} ) => {
    
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: {xs: '1fr', sm: 'repeat(auto-fit, minmax(300px, 1fr))'},
            justifyItems: 'center',
            gridGap: '2rem', 
            marginTop: '4rem'
          }}>
            {items.map( (item)=> {
                return <ProductCard key={item.id} item={item} />;
            })}
        </Box>
    )
}

export default ItemList