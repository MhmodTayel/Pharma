import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import moment from "moment";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderDetails({ state, order }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Dialog
        fullWidth="true"
        fullScreen={fullScreen}
        open={state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={state.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>Order Summary</DialogTitle> */}
        <DialogContent>
          <div className="row bg-light rounded">
            <div className="">
              <p>
                <span> ID : </span> #{order.id}
              </p>
              <p>
                <span>Order Date : </span>
                {moment(order.createdAt).format("lll")}
              </p>
              <p>
                <span>Total :</span> {order.cost / 1000} EGP
              </p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={state.handleClose}>Disagree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
