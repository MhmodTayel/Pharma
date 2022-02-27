import * as React from "react";
import styles from './categories.module.scss'


export default function Categories() {

    return (
        <div className="my-5">
            <h1 className="text-center my-2">categories</h1>
            <div className="container d-flex w-100  justify-content-center">
                <div className="row">

                    {/* first row  */}
                    <div className="col-md-4 d-flex flex-column">
                        <div className={styles.imgDiv}>
                            <div className=" position-relative">
                                <div className="w-100  position-relative">
                                    <img src={require('../../Assets/Images/womwn-care.jpg')} className={styles.imgImg} alt='women-care' />
                                </div>
                                <div className={styles.cover}>
                                    <div className={styles.namingPositions}> <h3>Women Care</h3> </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className=" position-relative">
                                <div className="w-100 position-relative">
                                    <img src={require('../../Assets/Images/dermocosmatics-2.jpg')} alt='dermocosmatics' className={styles.imgImg} />
                                </div>
                                <div className={styles.cover}>
                                    <div className={styles.namingPositions}> <h3>Dermocosmatics</h3> </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className=" position-relative">
                                <div className="w-100 position-relative">
                                    <img src={require('../../Assets/Images/men-care-1.jpg')} alt='men-care-1'className={styles.imgImg}/>
                                </div>
                                <div className={styles.cover}>
                                    <div className={styles.namingPositions}> <h3>Men Care</h3> </div>

                                </div>
                            </div>
                        </div>

                        <div className={styles.imgDiv}>
                            <div className=" position-relative">
                                <div className="w-100 position-relative">
                                    <img src={require('../../Assets/Images/sexual-wellness.jpg')} alt='sexual-wellness' className={styles.imgImg} />
                                </div>
                                <div className={styles.cover}>
                                    <div className={styles.namingPositions}> <h3>Sexual Wellness</h3> </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second row  */}
                    <div className="col-md-4 d-flex flex-column">
                        <div className={styles.imgDiv}>
                            <div className=" position-relative">
                                <div className=" w-100 position-relative">
                                    <img src={require('../../Assets/Images/beauty-1.jpg')} alt='oral-care' className={styles.imgImg} />
                                </div>
                                <div className={styles.cover}>
                                    <div className={styles.namingPositions}> <h3>Oral Care</h3> </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.imgDiv}>
                            <div className=" position-relative">
                                <div className=" w-100 position-relative">
                                    <img src={require('../../Assets/Images/bath-body-1.jpg')} alt='bath-body' className={styles.imgImg} />
                                </div>
                                <div className={styles.cover}>
                                    <div className={styles.namingPositions}> <h3 className={styles.h3Font}>Bath Body</h3> </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.imgDiv}>
                            <div className=" position-relative">
                                <div className=" w-100 position-relative">
                                    <img src={require('../../Assets/Images/oral-care-1.jpg')} alt='oral-care' className={styles.imgImg} />
                                </div>
                                <div className={styles.cover}>
                                    <div className={styles.namingPositions}> <h3>Oral Care</h3> </div>

                                </div>
                            </div>
                        </div>

                        <div className={styles.imgDiv}>
                            <div className=" position-relative">
                                <div className=" w-100 position-relative">
                                    <img src={require('../../Assets/Images/contact-lenses-1.jpg')} alt='men-care-1' className={styles.imgImg} />
                                </div>
                                <div className={styles.cover}>
                                    <div className={styles.namingPositions}> <h3>Contact Lenses</h3> </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* third row */}
                    <div className="col-md-4  col-sm-12 d-flex flex-column">
                        <div className={styles.imgDiv}>
                            <a href="">
                                <div className="position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/baby-1.jpg')} alt='baby' className={styles.imgImg} />

                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Baby</h3> </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={styles.imgDiv}>
                            <a href="">
                                <div className="position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/hair-care.jpg')} alt='hair-care' className={styles.imgImg}/>
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}> <h3>Hair Care</h3> </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className={styles.imgDiv}>
                            <a href="">
                                <div className="w-100">
                                    <div className=" w-100">
                                        <img src={require('../../Assets/Images/personal-care-1.jpg')} alt='men-care-1' className={styles.imgImg} />
                                    </div>
                                    <div className={styles.cover}>
                                        <div className={styles.namingPositions}><h3>Personal Care</h3> </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </div >
        </div >
    );
}