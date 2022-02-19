import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import lizard from '../../Assets/Images/contemplative-reptile.jpg'
import ProductDialog from './../PorductDialog/ProductDialog'


export default function ProductItemCard(props) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Card sx={{ maxWidth: 345 , my:3 }}>
      <CardMedia
        component="img"
        alt="Product Image"
        height="140"
        image={props.medItem.image}
      />
      <CardContent sx={{ pt: 1 , pb:0}}>
      {props.medItem?.categories?.map((cat, indx) =>
           <Typography variant="p" color="text.secondary" sx={{textTransform:'uppercase',fontWeight: 'medium'}}>{cat}.</Typography> 
      )}

      <Typography variant="p" color="text.secondary" sx={{textTransform:'uppercase',fontWeight: 'medium'}}></Typography>

        <Typography gutterBottom variant="h6" component="div" sx={{ mb:0 , py:1 }}>
          {props.medItem.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: 'Bold' , color:'#4ebbe9'}}> 
          EPG {props.medItem.storePrice}
        </Typography>

      </CardContent>
      <CardActions sx={{ display: 'flex' ,justifyContent:'space-around' , pb:2}}>
        <Button variant="contained" size="small" sx={{backgroundColor:'#4ebbe9'}} onClick={handleClickOpen}><VisibilityIcon sx={{mx:1 , fontSize:20 }}  /> 
        Quick View
        </Button>
         <ProductDialog 
         medItem={props.medItem}
         open={openDialog}  
         handleCloseDialog={() => handleClose(false)} 
         image={lizard}
         name={"Medicine"}
         price={"22$"}
         />

        <Button variant="contained" size="small" sx={{backgroundColor:'#4ebbe9'}}><ShoppingCartIcon sx={{mx:1 , fontSize:20}}/> Add to cart</Button>
      
      </CardActions>
    </Card>
  );
}
