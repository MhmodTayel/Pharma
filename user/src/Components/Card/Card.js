import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styles from "./Card.module.scss";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import { typography } from '@mui/system';

export default function ImgMediaCard() {
  const [alignment, setAlignment] = React.useState('add');

// const handleChange = (event, newAlignment) => {
//   setAlignment(newAlignment);
// };
  const [count, setCount] = React.useState(0);

  const changeQuantity = (v) =>
    setCount( Math.max(0, count+ v));

  const handleNumChange=(e)=> {

    setCount(e.target.value)
    console.log(e.target)
  }  
  return (
    <Card sx={{ maxWidth: 400 }}>
      
      <CardContent>
        <Typography className="d-flex justify-content-between align-items-center">
        <Typography gutterBottom variant="h5" component="div">
          Melga
        </Typography>
        <IconButton aria-label="delete">
          <DeleteIcon color='error'/>
        </IconButton>
        </Typography>
        <div className='d-flex align-items-center'>
        <Typography gutterBottom  align="subtitle1" component="div" color="#2c456a">
            Quantity
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            size="small"
            exclusive
            // onChange={handleChange}
            className={styles.groupSize}
           
          >
            
            <ToggleButton value="add" onClick={()=>changeQuantity(1)}><AddIcon /></ToggleButton>
            <TextField id="demo-helper-text-misaligned-no-helper" value={count} onChange={handleNumChange} disabled type="number" className={styles.quantityInput}  label="No" />
            {/* <input type="number" className={styles.quantityInput} min="0" max="10"></input> */}
            <ToggleButton value="remove"  onClick={()=>changeQuantity(-1)}><RemoveIcon /></ToggleButton>
            
          </ToggleButtonGroup>
        </div>
        <Typography className="d-flex justify-content-between align-items-center">
          <Typography color="#2c456a" fontSize="medium" className='pt-3'>Pharmcy Price: <span className='text-muted fw-bold'>333$</span></Typography>
          <Typography color="#2c456a" fontSize="medium" className='pt-3'>Price: <span className='text-muted fw-bold'>33$</span></Typography>
        </Typography>
        <hr />
        <Typography color="#2c456a" fontSize="medium">Total: <span className='text-muted fw-bold'>0</span></Typography>
        <Typography color="#2c456a"fontSize="medium">Expiration Date: <span className='text-muted fw-bold'>12/7</span></Typography>

      </CardContent>
      
    </Card>
  );
}

