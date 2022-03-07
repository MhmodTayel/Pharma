import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Card.module.scss";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import moment from "moment";
import { typography } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { removeMedOrderAction, editQuantityMedOrderAction } from "../../store/actions/orderAction";

export default function MedCard({ med }) {
  const [alignment, setAlignment] = React.useState("add");

  // const handleChange = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };
  const [count, setCount] = React.useState(med.reqQuantity || 1);
  const dispatch = useDispatch();
  const changeQuantity = (v) => {
    dispatch( editQuantityMedOrderAction ({quantity: v, id: med.id}) )

    setCount(Math.max(1, count + v))};

  const handleNumChange = (e) => {
    setCount(e.target.value);
  };

  const handleDelete = () => {
    dispatch(removeMedOrderAction(med.id));
  };
  return (
    <Card sx={{ maxWidth: 600 }} className={styles.cardScale}>
      <CardContent>
        <div className="d-flex justify-content-between align-items-center">
          <Typography gutterBottom variant="h5" component="div">
            {med.name}
          </Typography>
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        </div>
        <div className="d-flex align-items-center">
          <Typography gutterBottom component="div" color="#2c456a">
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
            <ToggleButton value="add" disabled={med.reqQuantity>=med.quantity} onClick={() => changeQuantity(1)}>
              <AddIcon />
            </ToggleButton>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              value={count}
              onChange={handleNumChange}
              disabled
              type="number"
              className={styles.quantityInput}
              label="No"
            />
            {/* <input type="number" className={styles.quantityInput} min="0" max="10"></input> */}
            <ToggleButton
              value="remove"
              disabled={count == 0}
              onClick={() => changeQuantity(-1)}
            >
              <RemoveIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Typography color="#2c456a" fontSize="medium" className="pt-3">
            Pharmcy Price:{" "}
            <span className="text-muted fw-bold">{med.storePrice} EGP</span>
          </Typography>
          <Typography color="#2c456a" fontSize="medium" className="pt-3">
            Price: <span className="text-muted fw-bold">{med.pharmPrice} EGP</span>
          </Typography>
        </div>
        <hr />
        <Typography color="#2c456a" fontSize="medium">
          Total:{" "}
          <span className="text-muted fw-bold">{med.storePrice * count} EGP</span>
        </Typography>
        {/* <Typography color="#2c456a" fontSize="medium">
          Expiration Date:{" "}
          <span className="text-muted fw-bold">
            {moment(med.expDate).format("MMM YYYY")}
          </span>
        </Typography> */}
      </CardContent>
    </Card>
  );
}
