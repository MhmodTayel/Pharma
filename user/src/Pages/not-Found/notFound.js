import React from "react";
import { Navbar } from "../../Components";
import Footer from "../../Layouts/Footer/Footer";

export default function notFound() {
    return (
        <>
            <Navbar/>
            <div className=" w-100 d-flex mt-1 justify-content-center">
                <img className="w-75" src={require('../../Assets/Images/not-found.png')} />
            </div>
            <Footer/>

        </>
    );
}
