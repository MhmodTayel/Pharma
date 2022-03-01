import React from "react";
import styles from './CardCarousel.module.scss'

function CarouselCard(props) {
    return (
            <div className="card max-width-250 mx-1"> 
                <div className={styles.card}>
                    <div className="img-container">
                        <img src={props.medicine.image} className="card-img-top" alt="avatar" />
                        <div className="card-layer d-flex justify-content-center align-items-center">

                        </div>
                    </div>
                    <div className="card-body px-0 text-center">
                        <h5 className={styles.title}>{props.medicine.name}</h5>
                        <h6 className={styles.price}>{props.medicine.storePrice} EGP</h6>
                    </div>
                </div>
            </div>
    );
}

export default CarouselCard;