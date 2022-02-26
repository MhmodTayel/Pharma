import React from 'react';
import ProductItemCard from './../ProductCard/ProductCard'
import { getAllMed } from '../../services/userService';
function PopularMedicine() {
    const [popularMedicine , setPopularMedicine] = React.useState([]);
    React.useEffect(()=>{
        getAllMed().then(
            (res) => {
                setPopularMedicine(res.data.splice(0,9))
            },
            (err) => {
                console.log(err)
            }
        )
    },[])

    return ( 
    <div className='container py-3 px-0'>
        <div className='row text-center'>
            <h3 className='fw-bold py-3'> Popular Products </h3>
            {popularMedicine.map((med, index) => {
                return (
                    <div key={index} className='col-xl-3 col-md-4 col-sm-6 g-0 d-flex align-items-center justify-content-center'>
                        <ProductItemCard medItem={med}/>
                    </div>
                    )
            }
            )}

        </div>
    </div> 
    );
}

export default PopularMedicine;