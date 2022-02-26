import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getSavedOrders } from "../../services/userService";
import moment from "moment";
export default function SavedOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getSavedOrders().then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        {orders.map((order) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  #{order.id} , {moment(order.createdAt).format("lll")}{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>

          );
        })}
      </div>
    </>
  );
}
