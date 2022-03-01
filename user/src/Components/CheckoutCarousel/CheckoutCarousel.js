import React from 'react';
import  CarouselCard  from "./../CarouselCard/CarouselCard";
import { getAllMed } from '../../services/userService';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './CheckoutCarousel.scss'

function CheckoutCarousel() {
    const [Medicine , setMedicine] = React.useState([]);
    const [settings, setSettings] = React.useState(
        {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1 
                  }
                }
              ]
        })


        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", position: "absolute", left: "-12px",zIndex:"99999",
                padding:'25px', backgroundColor:'#fff' , borderRadius:'50%', border:"1px solid rgb(223 223 223)"
                }}
                onClick={onClick}
              />
            );
          }
          function SampleNextArrow (props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style,display: "block",position:"absolute", right: "-12px", zIndex:"99999",
                padding:'25px', backgroundColor:'#fff' , borderRadius:'50%', border:"1px solid rgb(223 223 223)"
              }}
                onClick={onClick}
              />
            );
          }


    React.useEffect(()=>{
        getAllMed().then(
            (res) => {
                setMedicine(res.data.splice(0,9))
                console.log("Checkout")
            },
            (err) => {
                console.log(err)
            }
        )
    },[])
    return ( 
        <>
          <Slider {...settings} className="py-4">
                {
                    Medicine.map((med, index) => {
                        return (
                            <CarouselCard key={med.id} 
                            medicine={med}
                            />
                        )})                
                }
            </Slider>
        </>
     );
}

export default CheckoutCarousel;