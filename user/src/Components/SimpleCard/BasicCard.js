import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import OrderDetails from "../OrderDetails/OrderDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { deleteSavedOrder } from "../../services/userService";
export default function BasicCard({ order, orders, setOrders }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const newOrders = orders.filter((ord) => ord._id != order._id);

    deleteSavedOrder(order.id).then((res) => {
      setOrders(newOrders);
    });
  };

  return (
    <>
      {open && <OrderDetails state={{ open, handleClose }} order={order} />}
      <Card sx={{ minWidth: 360, maxWidth: 650 }}>
        <CardContent>
          <div className="d-flex justify-content-between align-items-center">
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: 15, color: "#2c456a" }}
            >
              Order Number
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: 16, color: "orange" }}
            >
              #{order.id}
            </Typography>
            {!("inProgress" in order) && (
              <div>
                <IconButton aria-label="delete" onClick={handleDelete}>
                  <DeleteIcon color="error" />
                </IconButton>
              </div>
            )}
          </div>

          <hr />
          <div className="row">
            <Typography
              className="col"
              variant="h6"
              component="div"
              sx={{ fontSize: 15, color: "#2c456a" }}
            >
              Date - Time
            </Typography>
            <Typography
              className="col"
              variant="h6"
              component="div"
              sx={{ fontSize: 14 }}
            >
              {moment(order.createdAt).format("DD/MM/YYYY - hh:mm A")}
            </Typography>
          </div>
          <div className="row">
            <Typography
              className="col"
              variant="h6"
              component="div"
              sx={{ fontSize: 15, color: "#2c456a" }}
            >
              Number of items
            </Typography>
            <Typography
              className="col"
              variant="h6"
              component="div"
              sx={{ fontSize: 14 }}
            >
              {order.numberOfCat}
            </Typography>
          </div>
          {"inProgress" in order && (
            <div className="row">
              <Typography
                className="col"
                variant="h6"
                component="div"
                sx={{ fontSize: 15, color: "#2c456a" }}
              >
                Status
              </Typography>
              <Typography
                className="col"
                variant="h6"
                component="div"
                sx={{
                  fontSize: 14,
                  color: order.inProgress ? "#FED653" : "green",
                }}
              >
                {order.inProgress ? "In progress" : "Confirmed"}
              </Typography>
            </div>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
