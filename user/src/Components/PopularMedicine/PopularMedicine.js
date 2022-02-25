import React from 'react';
import ProductItemCard from './../ProductCard/ProductCard'
import { getAllMed } from '../../services/userService';
import { newProductsContext } from '../../context/newProductsContext';

function PopularMedicine() {
    const [popularMedicine , setPopularMedicine] = React.useState([]);
    const { productsContext } = React.useContext(newProductsContext)
    console.log(productsContext)
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
    <div className='container py-3 px-0'>
        <div className='row text-center'>
            <h3 className='fw-bold py-3'> Popular Products {productsContext} </h3>
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