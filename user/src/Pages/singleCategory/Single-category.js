import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getMedByCat } from "../../services/userService";
import ProductItemCard from '../../Components/ProductCard/ProductCard'


export default function SingleCategory() {
    const [data, setData] = useState({});
    const { cat } = useParams();

    const back = () => {
        window.history.back();
    };

    React.useEffect(() => {
        getMedByCat("test").then(
            (res) => {
                setData(res.data)
                console.log(res.data)
            },
            (err) => {
                console.log(err)
            }
        )
    }, [])

    return (
        <div className='container py-3'>
            <div className='row text-center'>
                <h3 className='fw-bold py-3'> Popular Products </h3>
                {data.map((med, index) => {
                    return (
                        <div key={index} className='col-md-3 d-flex align-items-center justify-content-center'>
                            <ProductItemCard medItem={med} />
                        </div>
                    )
                }
                )}

            </div>
        </div>
    );
}
