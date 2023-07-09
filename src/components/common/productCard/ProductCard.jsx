import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


const ProductCard = ( {item} ) => {

  return (
    <Card sx={{ width: 300}}>
      <Link to={`/itemDetail/${item.id}`} style={{textDecoration: 'none'}}  >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.img}
            alt={item.title}
            sx={{objectFit: 'contain', height: '200px', padding: '1rem'}}
          />
          <CardContent sx={{height: '80px', borderTop: '1px solid rgba(0, 0, 0, .1)'}}>
            <Typography gutterBottom variant="h5" component="div" sx={{color: '#000'}}>
              {"$ " + item.precio.toLocaleString('es-ES')}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: '#62626C'}}>
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Button size="small" color="primary">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard