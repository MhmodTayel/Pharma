import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../Assets/Images/slider(1).jpg'
import img2 from '../../Assets/Images/slider(2).png'
import styles from './Home.module.scss'
import Button from '@mui/material/Button';


export default function HomeSlider() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style, display: "block", position: "absolute",
          top: "50%", left: "2%", zIndex: "99999"
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style, display: "block", position: "absolute",
          top: "50%", right: "2%"
        }}
        onClick={onClick}
      />
    );
  }


  return (
    <div className="">
      <Slider {...settings} sx={{ width: '100%' }}>
        <div >
          <div className={styles.sliderImage}>
            <img src={img1} alt="Offer 1" className="img-fluid" />
            <div className={styles.offerDdetails}>
              <div className="container">
                <div className="col-md-9 col-lg-6">
                    <h2 className={styles.offerDiscount}>15% OFF ON</h2>
                    <h2 className={styles.offerProducts}>Medicine</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt. </p>
                      <Button variant="contained" className={styles.sliderButton}>Buy Now</Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className={styles.sliderImage}>
            <img src={img2} alt="Offer 1" className="img-fluid" />
            <div className={styles.offerDdetails}>
              <div className="container">
                <div className="col-md-9 col-lg-6">
                    <h2 className={styles.offerDiscount}>15% OFF ON</h2>
                    <h2 className={styles.offerProducts}>Medicine</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt. </p>
                      <Button variant="contained" className={styles.sliderButton}>Buy Now</Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
