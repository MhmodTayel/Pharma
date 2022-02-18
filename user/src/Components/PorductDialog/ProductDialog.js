import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


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
        onClose={props.handleCloseDialog}
        aria-labelledby="customized-dialog-title"
        open={props.open} >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={props.handleCloseDialog}>
        </BootstrapDialogTitle>
{/* 
        <DialogContent >
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent> */}

        <div className='container'>
          <div className='row'>
            <div className='col-md-6'> 
            <img src={props.image} className ='img-fluid'/>
            </div>
            <div className='col-md-6'>
            <div className='dialogContent'>
              <h3 className='fw-bolder'>{props.name} </h3>
              <hr/>
              <h3 className='fw-bolder'>{props.price}</h3>
              <p> 
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
               magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
               aliquip ex ea commodo consequat
              </p>
            </div>
            </div>
          </div>
        </div>
        
        <DialogActions>

          <Button autoFocus onClick={props.handleCloseDialog}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}