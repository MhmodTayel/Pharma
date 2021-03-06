import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProductDialog from "./../PorductDialog/ProductDialog";
import styles from "./productCard.module.scss";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { addMedOrderAction } from "../../store/actions/orderAction";
import swal from "sweetalert";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 33,
    top: 50,
    width: "50px",
    height: "50px",
    textAlign: "center",
    fontWieght: "400",
    backgroundImage: "linear-gradient(to right top, #F2A71B , #ffeb00)",
    boxShadow: "0 2px 6px 0 rgba(0,0,0,0.4) !important",
    fontSize: "12px",
    color: "#f5ffff",
    borderRadius: "50%",
  },
}));

export default function ProductItemCard(props) {
  const orderStore = useSelector((state) => state.order);

  const [openDialog, setOpenDialog] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleCart = () => {
    const medObj = props.medItem;
    medObj.reqQuantity = 1;
    const result = orderStore.some((medicine) => medicine.id == medObj.id);
    if (!result) {

      dispatch(addMedOrderAction(medObj));
      swal({
        title: "Add to Order",
        text: `${medObj.name} has added to order`,
        icon: "success",
        button: false,
        timer: 2000,
      });
    }
  };

  return (
    <StyledBadge
      badgeContent={`${props.medItem.discount}% OFF`}
      className={styles.discount}
    >
      <Card sx={{ maxWidth: 265, my: 2, textAlign: "left" }}>
        <div className={styles.imageContainer}>
          <CardMedia
            component="img"
            alt="Product Image"
            sx={{ maxHeight: 200, width: "auto" }}
            image={props.medItem.image}
          />
        </div>
        <CardContent sx={{ pt: 1, pb: 0 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className={styles.title}
          >
            {props.medItem.name}
          </Typography>
          {props.medItem?.categories?.map((cat, indx) => (
            <Typography key={indx} variant="p" className={styles.category}>
              {cat}.
            </Typography>
          ))}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className={styles.price}
          >
            {props.medItem.storePrice} EGP
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", pb: 1 }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{ px: 3 }}
            className={styles.button}
            onClick={handleClickOpen}
          >
            <VisibilityIcon className={styles.icon} />
            Quick View
          </Button>
          <ProductDialog
            medItem={props.medItem}
            open={openDialog}
            handleCloseDialog={() => handleClose(false)}
          />
          <Button
            variant="contained"
            size="small"
            onClick={handleCart}
            className={styles.button}
            disabled={orderStore.some((medicine) => medicine.id == props.medItem.id)}
          >
            <ShoppingCartIcon className={styles.icon} />
          </Button>
        </CardActions>
      </Card>
    </StyledBadge>
  );
}
