import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getMedByCat } from '../../services/userService';


export default function SingleCategory() {
    const [setDetails] = useState({});
    const { cat } = useParams();

    const back = () =>{
        window.history.back()
    }

    console.log(cat);
    

    React.useEffect(()=>{
        getMedByCat(cat)
        .then((res) => {setDetails(res.data)
        console.log(res.data,'test for response direct');})
        .catch((err) => console.log(err));
        console.log(setDetails , 'test for setDetails');
}, []);


    return (
        <div>

                <button className="back btn btn-outline-danger" onClick={() => back()}> back</button>

            <h1>test test test </h1>
            <hr />


        </div>
    );
}
