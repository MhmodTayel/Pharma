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
            } else if (formik.values.name.length <= 4) {
                errors.name = "min length is 3";
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
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" placeholder="UserName"
                                            name="userName"
                                            onChange={formik.handleChange}
                                            value={formik.values.userName} />
                                    </div>
                                    <div className="col-sm-12">
                                        <input type="email" className="form-control" placeholder="Email"
                                            name="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" id="comment" placeholder="Message"
                                        name="message"
                                        onChange={formik.handleChange}
                                        value={formik.values.message} ></textarea>
                                </div>
                                <button className="btn btn-block" type="submit">Send Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}