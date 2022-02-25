import * as React from "react";
import styles from './categories.module.scss';
import { Link } from "react-router-dom";



export default function Categories() {

    return (
        <div className="my-3">
            <h1 className="text-center my-2">Categories</h1>
            <div className="container d-flex w-100  justify-content-center">
                <div className="row">

                    {/* first row  */}
                    <div className="col-md-4 d-flex flex-column">
                        <Link to={`/category/womencare`}>
                            <div className="my-2">
                                <div className=" position-relative">
                                    <div className="w-100  position-relative">
                                        <img src={require('../../Assets/Images/womwn-care.jpg')} className="w-100" alt='women-care' />
                                        <div className={styles.namingPositions}> <h3>Women Care</h3> </div>
                                    </div>
                                    <div className={styles.cover}></div>
                                </div>
                            </div>
                        </Link>

                        <Link to={`/category/dermocosmatics`}>
                            <div className="my-2">
                                <div className=" position-relative">
                                    <div className="w-100 position-relative">
                                        <img src={require('../../Assets/Images/dermocosmatics-2.jpg')} alt='dermocosmatics' className="w-100" />
                                        <div className={styles.namingPositions}> <h3>Dermocosmatics</h3> </div>
                                    </div>
                                    <div className={styles.cover}></div>
                                </div>
                            </div>
                        </Link>

                        <Link to={`/category/mencare`}>
                            <div className="my-2">
                                <div className=" position-relative">
                                    <div className="w-100 position-relative">
                                        <img src={require('../../Assets/Images/men-care-1.jpg')} alt='men-care-1' className="w-100" />
                                        <div className={styles.namingPositions}> <h3>Men Care</h3> </div>
                                    </div>
                                    <div className={styles.cover}></div>

                                </div>
                            </div>
                        </Link>

                        <Link to={`/category/sexualwellness`}>
                            <div className="my-2">
                                <div className=" position-relative">
                                    <div className="w-100 position-relative">
                                        <img src={require('../../Assets/Images/sexual-wellness.jpg')} alt='sexual-wellness' className="w-100" />
                                        <div className={styles.namingPositions}> <h3>Sexual Wellness</h3> </div>
                                    </div>
                                    <div className={styles.cover}></div>

                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* second row  */}
                    <div className="col-md-4 d-flex flex-column">

                        <Link to={`/category/oralcare`}>
                            <div className="my-2">
                                <div className=" position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/beauty-1.jpg')} alt='oral-care' className=" w-100" />
                                        <div className={styles.namingPositions}> <h3>Oral Care</h3> </div>
                                    </div>
                                    <div className={styles.cover}></div>

                                </div>
                            </div>
                        </Link>

                        <Link to={`/category/bathbody`}>
                            <div className="my-2">
                                <div className=" position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/bath-body-1.jpg')} alt='bath-body' className="w-100" />
                                        <div className={styles.namingPositions}> <h3 className={styles.h3Font}>Bath Body</h3> </div>
                                    </div>
                                    <div className={styles.cover}></div>

                                </div>
                            </div>
                        </Link>

                        <Link to={`/category/oralcare`}>
                            <div className="my-2">
                                <div className=" position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/oral-care-1.jpg')} alt='oral-care' className=" w-100" />
                                        <div className={styles.namingPositions}> <h3>Oral Care</h3> </div>
                                    </div>
                                    <div className={styles.cover}></div>

                                </div>
                            </div>
                        </Link>

                        <Link to={`/category/contactlenses`}>
                            <div className="my-3">
                                <div className=" position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/contact-lenses-1.jpg')} alt='men-care-1' className="w-100" />
                                        <div className={styles.namingPositions}> <h3>Contact Lenses</h3> </div>
                                    </div>
                                    <div className={styles.cover}></div>

                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* third row */}
                    <div className="col-md-4  col-sm-12 d-flex flex-column">

                        <div className={styles.imgDiv}>
                            <a href=""> </a>
                                <div className="position-relative">
                                    <div className=" w-100 position-relative">
                                        <img src={require('../../Assets/Images/baby-1.jpg')} alt='baby' className={styles.imgImg} />

                                        <Link to={`/category/baby`}>
                                            <div className="my-2">
                                                <a href="">
                                                    <div className="position-relative">
                                                        <div className=" w-100 position-relative">
                                                            <img src={require('../../Assets/Images/baby-1.jpg')} alt='baby' className="w-100" />
                                                            <div className={styles.namingPositions}> <h3>Baby</h3> </div>

                                                        </div>
                                                        <div className={styles.cover}></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </Link>

                                        <Link to={`/category/haircare`}>
                                            <div className="my-2">
                                                <a href="">
                                                    <div className="position-relative">
                                                        <div className=" w-100 position-relative">
                                                            <img src={require('../../Assets/Images/hair-care.jpg')} alt='hair-care' className="w-100" />
                                                            <div className={styles.namingPositions}> <h3>Hair Care</h3> </div>
                                                        </div>
                                                        <div className={styles.cover}></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </Link>


                                        <Link to={`/category/personalcare`}>
                                            <div className="my-4">
                                                <a href="">
                                                    <div className="position-relative">
                                                        <div className=" w-100 position-relative">
                                                            <img src={require('../../Assets/Images/personal-care-1.jpg')} alt='men-care-1' className=" w-100" />
                                                            <div className={styles.namingPositions}><h3>Personal Care</h3> </div>
                                                        </div>
                                                        <div className={styles.cover}></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                        </div >
                    </div >
                </div>
                </div>
                </div>
                );
}