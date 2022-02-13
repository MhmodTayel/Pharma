import React from "react";
import { Search, Card } from "../../Components";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

export default function NewOrder() {
  const orderStore = useSelector((state) => state.order);

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <div>
      <Search />
      {/* <div className="d-flex flex-wrap">
      {orderStore.map((medicine, id) => {
            return <Card med={medicine} />;
          })}
      
      </div> */}
      <div className="container">
        <div className="row">
        {orderStore.map((medicine, id) => {
            return <div className="col-lg-4 my-3">
              <Card  med={medicine} />
              
          </div>
          })}
          

        </div>

      </div>
      
    </div>
  );
}
