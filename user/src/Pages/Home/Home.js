import React, {useState} from 'react'
import {Navbar , HomeSlider , PopularMedicine , Categories, Newsletter }  from '../../Components/index'
import Footer from '../../Layouts/Footer/Footer'
import './Home.module.scss'
import {newProductsContext} from '../../context/newProductsContext'



export default function Home() {
  const [newProductsAmount,setnewProductsAmount ] = useState('heba')
  return (
    <div>
      <newProductsContext.Provider value={{newProductsAmount , setnewProductsAmount}}>
        <Navbar/>
        <HomeSlider/>
        <PopularMedicine/>
        <Categories/>
        <Newsletter />
        <Footer/>
      </newProductsContext.Provider>
    </div>
  )
}
