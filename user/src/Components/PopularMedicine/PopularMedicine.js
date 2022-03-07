import React from 'react';
import ProductItemCard from './../ProductCard/ProductCard'
import { getAllMed } from '../../services/userService';
import styles from './../../index.module.scss'


function PopularMedicine() {
    const [popularMedicine , setPopularMedicine] = React.useState([]);
    React.useEffect(()=>{
        getAllMed().then(
            (res) => {
                setPopularMedicine(res.data.splice(0,8))
            },
            (err) => {
                console.log(err)
            }
        )
    },[])

    return ( 
    <div className='container py-5'>
        <div className='row'>
            <h3 className={styles.heading} ><span className='fw-bold py-3 ms-3'>Popular Medicine </span></h3>
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