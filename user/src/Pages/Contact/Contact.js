import { Navbar } from '../../Components/index'
import './Contact.css'
import * as React from 'react';
import { createMessage } from '../../services/userService';
import { useFormik } from 'formik';
import Footer from '../../Layouts/Footer/Footer';


export default function Contact() {

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            userName: "",
            message: ""
        },

        validate() {
            const errors = {};
            if (formik.touched.email && !formik.values.email) {
                errors.email = "Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
            ) {
                errors.email = "Invalid email address";
            }
            if (formik.touched.name && !formik.values.name) {
                errors.name = "Required";

            } else if (formik.values.name.length < 2) {
                errors.name = "min length is 3";
            }
            else if (formik.values.name.length > 10) {
                errors.name = "max length is 10";
            }
            
            if (formik.touched.userName && !formik.values.userName) {
                errors.userName = "Required";

            } else if (formik.values.userName.length < 2) {
                errors.userName = "min length is 3";
            }
            else if (formik.values.userName.length > 10) {
                errors.name = "max length is 10";
            }
            if (formik.touched.message && !formik.values.message) {
                errors.message = "Required";

            } else if (formik.values.message.length <= 10) {
                errors.message = "min length is 10";
            }
          
            return errors;
        },
       
        onSubmit(values) {
            console.log(values)
            createMessage(values)

        }
    });

    return (
        <>
            <Navbar />
            <section className="contact" id="contact" >
                <div className="container">
                    <div className="heading text-center">
                        <h2>Contact
                            <span> Us </span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            <br />incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="title">
                                <h3>Contact detail</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            </div>
                            <div className="content">

                                <div className="info">
                                    <i className="fas fa-mobile-alt"></i>
                                    <h4 className="d-inline-block">PHONE :
                                        <br />
                                        <span>+12457836913 , +12457836913</span></h4>
                                </div>

                                <div className="info">
                                    <i className="far fa-envelope"></i>
                                    <h4 className="d-inline-block">EMAIL :
                                        <br />
                                        <span>example@info.com</span></h4>
                                </div>

                                <div className="info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h4 className="d-inline-block">ADDRESS :<br />
                                        <span>6743 last street , Abcd, Xyz</span></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">

                            <form onSubmit={formik.handleSubmit} >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" placeholder="Name"
                                            name="name"
                                            onChange={formik.handleChange}
                                            value={formik.values.name} />
                                               {formik.touched.name && formik.errors.name ? 
                                            <span style={{color:'red',fontSize:13}}>{formik.errors.name}</span> : null}
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" placeholder="UserName"
                                            name="userName"
                                            onChange={formik.handleChange}
                                            value={formik.values.userName} />
                                            {formik.touched.userName && formik.errors.userName ? 
                                            <span style={{color:'red',fontSize:13}}>{formik.errors.userName}</span> : null}
                                    </div>
                                    <div className="col-sm-12">
                                        <input type="email" className="form-control" placeholder="Email"
                                            name="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email} />
                                            {formik.touched.email && formik.errors.email ? 
                                            <span style={{color:'red',fontSize:13}}>{formik.errors.email}</span> : null}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" id="comment" placeholder="Message"
                                        name="message"
                                        onChange={formik.handleChange}
                                        value={formik.values.message} ></textarea>
                                             {formik.touched.message && formik.errors.message ? 
                                            <span style={{color:'red',fontSize:13}}>{formik.errors.message}</span> : null}
                                        
                                </div>
                                <button className="btn btn-block my-2" type="submit">Send Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}