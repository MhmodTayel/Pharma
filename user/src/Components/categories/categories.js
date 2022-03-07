import * as React from "react";
import styles from './categories.module.scss'
import style from "./../../index.module.scss";
import { Link } from "react-router-dom";


export default function Categories() {

    return (
        <div className="py-3">
            <div className="container py-2 d-flex w-100  justify-content-center">
                <div className="row">
                    <h3 className={style.heading}><span className='fw-bold py-5 ps-3'>Categories</span></h3>
                    {/* first row  */}
                    <div className="col-md-4 d-flex flex-column">
                        <div className={styles.imgDiv}>
                            <Link to='/category/cold'>
                                <div className="position-relative">
                                    <div className="w-100  position-relative">
                                        <img src={require('../../Assets/Images/womwn-care.jpg')} className={styles.imgImg} alt='women-care' />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Women Care</h3> </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.imgDiv}>
                            <Link to='/category/cold'>
                                <div className=" position-relative">
                                    <div className="w-100 position-relative">
                                        <img src={require('../../Assets/Images/dermocosmatics-2.jpg')} alt='dermocosmatics' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Dermocosmatics</h3> </div>

                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.imgDiv}>
                            <Link to='/category/cold'>
                                <div className=" position-relative">
                                    <div className="w-100 position-relative">
                                        <img src={require('../../Assets/Images/men-care-1.jpg')} alt='men-care-1' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Men Care</h3> </div>

                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.imgDiv}>
                            <Link to='/category/cold'>
                                <div className=" position-relative">
                                    <div className="w-100 position-relative">
                                        <img src={require('../../Assets/Images/sexual-wellness.jpg')} alt='sexual-wellness' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Sexual Wellness</h3> </div>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* second row  */}
                    <div className="col-md-4 d-flex flex-column">
                        <div className={styles.imgDiv}>
                            <Link to='/category/cold/Toothache'>
                                <div className=" position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/beauty-1.jpg')} alt='oral-care' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Oral Care</h3> </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.imgDiv}>
                            <Link to='/category/cold/Toothache'>
                                <div className=" position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/bath-body-1.jpg')} alt='bath-body' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3 className={styles.h3Font}>Bath Body</h3> </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.imgDiv}>
                            <Link to='/category/cold/Toothache'>
                                <div className=" position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/oral-care-1.jpg')} alt='oral-care' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Oral Care</h3> </div>

                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.imgDiv}>
                            <Link to='/category/cold/Toothache'>
                                <div className=" position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/contact-lenses-1.jpg')} alt='men-care-1' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Contact Lenses</h3> </div>

                                    </div>
                                </div>
                            </Link>
                        </div>


                    </div>

                    {/* third row */}
                    <div className="col-md-4  col-sm-12 d-flex flex-column">
                        <div className={styles.imgDiv}>
                            <Link to='/category/cold/Headache'>
                                <div className="position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/baby-1.jpg')} alt='baby' className={styles.imgImg} />

                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Baby</h3> </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.imgDiv}>
                            <Link to="/category/cold/Headache">
                                <div className="position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/hair-care.jpg')} alt='hair-care' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Hair Care</h3> </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.imgDiv}>
                            <Link to="/category/cold/Headache">
                                <div className="w-100">
                                    <div className=" w-100">
                                        <img src={require('../../Assets/Images/personal-care-1.jpg')} alt='men-care-1' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}><h3>Personal Care</h3> </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </div >
        </div >
    );
}