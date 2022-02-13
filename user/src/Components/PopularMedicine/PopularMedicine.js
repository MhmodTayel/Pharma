import ProductItemCard from './../ProductCard/ProductCard'


function PopularMedicine() {
    return ( 
    <div className='container py-3'>
        <div className='row text-center'>
            <h3 className='fw-bold'> Popular Products </h3>
            <div className='col-md-4 mx-auto'>
                <ProductItemCard/>
            </div>
        </div>
    </div> 
    );
}

export default PopularMedicine;