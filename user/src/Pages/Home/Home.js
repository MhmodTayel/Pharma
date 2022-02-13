import React from 'react'
import {Navbar , HomeSlider , PopularMedicine }  from '../../Components/index'
import './Home.module.scss'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HomeSlider/>
        <PopularMedicine/>
        
    </div>
  )
}
