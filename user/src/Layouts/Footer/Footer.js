import React from 'react'
import styles from './Footer.module.scss'
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
  return (
    <div>

      <div className={styles.bgFooter}>
        <div className="layer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="logo d-flex justify-content-center ">
                  <img src={require('../../Assets/Images/icon.png')} alt='medicen' className='my-3' />

                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-3 text-white">
                <h4 className="h2 text-primary my-4 ">PharmaTec </h4>
                <p className="text-muted"> <HomeIcon className='me-2' />1650 Lombard Street,<br />San Francisco, CA 94123<br />
                  <LocalPhoneIcon className='me-2' />+1 (415)876-3250
                  <br /><EmailIcon className='me-2' /> pharmatec@gmail.com
                </p>
                <div className='d-flex'>
                  <div className={styles.iconSpan}><FacebookSharpIcon /></div>
                  <div className={styles.iconSpan}>  <TwitterIcon /></div>
                  <div className={styles.iconSpan}><GoogleIcon /></div>
                  <div className={styles.iconSpan}> <InstagramIcon /></div>
                </div>
              </div>
              <div className="col-md-3 text-white">
                <h5 className="fw-bold my-4 ">Help </h5>
                <ul className={styles.footerMenu}>
                  <li className="footer-menu-li"><a className=" text-decoration-none text-muted"
                    href="#">Support</a></li>
                  <li className="footer-menu-li"><a className="text-decoration-none text-muted" href="#">Privacy
                    Policy</a></li>
                  <li className="footer-menu-li"><a className="text-decoration-none text-muted" href="#">Terms
                    &amp; Conditions</a></li>
                  <li className="footer-menu-li"><a className="text-decoration-none text-muted" href="#">Affiliate
                    Program</a></li>
                  <li className="footer-menu-li"><a className="text-decoration-none text-muted"
                    href="#">Careers</a></li>
                </ul>
              </div>
              <div className="col-md-3 text-white">
                <h5 className="fw-bold my-4 ">Support</h5>
                <ul className="footer-menu">
                  <li><a className="text-decoration-none text-muted" href="blog-post.html">Sunset in
                    Venice</a></li>
                  <li><a className="text-decoration-none text-muted" href="blog-post.html">Aerial View of
                    Village</a></li>
                  <li><a className="text-decoration-none text-muted" href="blog-post.html">Lighted Concrete
                    City</a></li>
                  <li><a className="text-decoration-none text-muted" href="blog-post.html">The Little
                    Ghost</a></li>
                  <li><a className="text-decoration-none text-muted" href="blog-post.html">Royal Oats ft.
                    Waldo</a></li>
                </ul>
              </div>
              <div className="col-md-3 text-white">
                <h5 className="fw-bold my-4 ">Information</h5>
                <div className="tag text-muted clearfix">
                  <a href="#" className={styles.tag}>Maskes</a>
                  <a href="#" className={styles.tag}>medicen</a>
                  <a href="#" className={styles.tag}>stores</a>
                  <a href="#" className={styles.tag}>World</a>
                  <a href="#" className={styles.tag}>maskes</a>
                  <a href="#" className={styles.tag}>medicen</a>
                  <a href="#" className={styles.tag}>doctors</a>
                  <a href="#" className={styles.tag}>medicen</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer last */}

      <div className={styles.lastFooter}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <p className=" text-muted fs-5">Copyright © 2022 <span className="ho-sp"> <a href="#"
                className="a-ho fs-5 fw-bold text-decoration-none  text-primary"> PharmaTec</a></span></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
