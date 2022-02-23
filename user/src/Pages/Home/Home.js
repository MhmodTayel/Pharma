import React from 'react'
import {Navbar , HomeSlider , PopularMedicine , Categories }  from '../../Components/index'
import Footer from '../../Layouts/Footer/Footer'
import './Home.module.scss'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HomeSlider/>
        <PopularMedicine/>
        <Categories/>
        <Footer/>
    </div>
  )
}
