import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import moment from "moment";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import CheckoutButton from "../checkoutButton/CheckoutButton";
import "./OrderDetails.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMedOrderAction } from "../../store/actions/orderAction";
import { deleteSavedOrder } from "../../services/userService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderDetails({ state, order }) {
  const orderStore = useSelector((state) => state.order);
  const location = useLocation();
  console.log(order);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();

  const handleUpdateOrder = () => {
    deleteSavedOrder(order.id).then((res) => {});
    order.medicines.forEach((med) => {
      if (!orderStore.some((medicine) => med._id == medicine._id))
        dispatch(addMedOrderAction(med));
    });
  };
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
            <div className="col-lg-6">
              <h5>Order Summary</h5>
              <p>
                <span> ID : </span> #{order.id}
              </p>
              <p>
                <span>Order Date : </span>
                {moment(order.createdAt).format("lll")}
              </p>
              {"cost" in order && (
                <p>
                  <span>Total :</span> {order.cost / 1000} EGP
                </p>
              )}
            </div>
            <div className="order-details-class">
              <h5>Order Details</h5>

              <div>
                {order.medicines.map((medicine, index) => {
                  return (
                    <div className="order-details-item" key={medicine.id}>
                      <div className="mx-2">{index + 1}</div>
                      <div className="imgWrapper">
                        <img
                          className="order-details-img"
                          src={require("../../Assets/Images/wireframe.jpg")}
                        />
                      </div>
                      <div>{medicine.name}</div>
                      {location.pathname == "/saved-orders" ? (
                        <div>x{medicine.reqQuantity}</div>
                      ) : (
                        <div>x{medicine.quantity}</div>
                      )}

                      {location.pathname == "/saved-orders" ? (
                        <div>{medicine.pharmPrice}</div>
                      ) : (
                        <div>{medicine.price}</div>
                      )}

                      {location.pathname == "/saved-orders" ? (
                        <div>{medicine.pharmPrice * medicine.reqQuantity}</div>
                      ) : (
                        <div>{medicine.amount_total}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {location.pathname == "/saved-orders" && (
            <>
              <Button color="secondary" onClick={handleUpdateOrder}>
                <Link className="order-details-link" to="/new-order">
                  Update
                </Link>
              </Button>
              <CheckoutButton
                newOrder={order.medicines}
                savedOrderId={order.id}
              />
            </>
          )}

          <Button onClick={state.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
