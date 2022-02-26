import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getMedByCat } from "../../services/userService";

export default function SingleCategory() {
  const [details,setDetails] = useState({});
  const { cat } = useParams();

  const back = () => {
    window.history.back();
  };

  React.useEffect(() => {
    getMedByCat("test")
      .then((res) => {
        setDetails(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <button className="back btn btn-outline-danger" onClick={() => back()}>
        {" "}
        back
      </button>

      <h1>test test test </h1>
      <hr />
    </div>
  );
}
