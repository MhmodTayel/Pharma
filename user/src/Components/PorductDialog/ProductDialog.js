import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './productDialog.module.scss'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  return (
    <div>
      <BootstrapDialog
        maxWidth={"md"}
        onClose={props.handleCloseDialog}
        aria-labelledby="customized-dialog-title"
        open={props.open} >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={props.handleCloseDialog}>
        </BootstrapDialogTitle>
        <div className='container'>
          <div className='row pb-3'>
            <div className='col-md-6'>
              <img src={props.medItem.image} className='img-fluid w-100' />
            </div>
            <div className='col-md-6'>
              <div className='dialogContent'>
                <h4 className='fw-bolder text-capitalize'>{props.medItem.name} </h4>
                <h6 className='border-bottom pb-3 text-muted text-capitalize'>From: {props.medItem.companyProvider} </h6>
                <h5 className={styles.price}> EPG {props.medItem.pharmPrice}</h5>
                <p className='text-muted mb-0'>
                  {props.medItem.description}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
               <div className='py-3 mb-0'> 
                  <div>
                      <span className={styles.property}>Type : </span> <span className={styles.description}>{props.medItem.type}</span>
                  </div>
                  <div>
                      <span className={styles.property}>Available Quantity : </span> <span className={styles.description}>{props.medItem.quantity}</span>
                  </div>
                    <div>  
                      <span className={styles.property}>Concentration : </span> <span className={styles.description}>{props.medItem.concentration}</span>
                  </div>
                  <div>  
                      <span className={styles.property}>Categories : </span> 
                        {props.medItem?.categories?.map((cat, indx) =>
                        <span className={styles.description}>{cat}</span>
                      )}
                  </div>
               </div>
               <Button variant="contained" sx={{ backgroundColor: '#4ebbe9' , width:'100%'}}><ShoppingCartIcon sx={{ mx: 1, fontSize: 20 }} /> Add to cart</Button>

              </div>
            </div>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}
