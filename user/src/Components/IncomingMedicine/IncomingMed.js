import ProductItemCard from './../ProductCard/ProductCard'
import * as React from 'react';

export default function IncomingMed(props) {  
    return (  
        <div className='row'>
            {props.meds.map((med, index) => {
                return (
                    <div key={index} className='col-md-3 col-sm-6 g-0 d-flex align-items-center justify-content-center'>
                        <ProductItemCard medItem={med}/>
                    </div>
                    )
                }
                )}
        </div>
     
    )
}
