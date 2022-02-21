import React from 'react';
import ProductItemCard from './../ProductCard/ProductCard'
import { getAllMed } from '../../services/userService';

function PopularMedicine() {
    const [popularMedicine , setPopularMedicine] = React.useState([]);

    React.useEffect(()=>{
        getAllMed().then(
            (res) => {
                setPopularMedicine(res.data.splice(0,9))
                console.log(res.data.splice(0,6))
            },
            (err) => {
                console.log(err)
            }
        )
    },[])

    return ( 
    <div className='container py-3'>
        <div className='row text-center'>
            <h3 className='fw-bold py-2'> Popular Products </h3>
            {popularMedicine.map((med, index) => {
                return (
                    <div className='col-md-4 mx-auto'>
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