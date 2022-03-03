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
                <h4 className="h2 text-primary my-4 ">Pharma </h4>
                <p className="text-muted"> <HomeIcon className='me-2' />1650 Lombard Street,<br />San Francisco, CA 94123<br />
                  <LocalPhoneIcon className='me-2' />+1 (415)876-3250
                  <br /><EmailIcon className='me-2' /> pharma@gmail.com
                </p>
                <div className={styles.allIcons}>
                  <div className={styles.iconSpanFac}><FacebookSharpIcon /></div>
                  <div className={styles.iconSpantw}>  <TwitterIcon /></div>
                  <div className={styles.iconSpanGo}><GoogleIcon /></div>
                  <div className={styles.iconSpanin}> <InstagramIcon /></div>
                </div>
              </div>
              <div className="col-md-3 text-white">
                <h5 className="fw-bold my-4 ">Help </h5>
                <ul className={styles.footerMenu}>
                  <li className="footer-menu-li"><a className=" text-decoration-none my-2 text-white"
                    href="#">Support</a></li>
                  <li className="footer-menu-li"><a className="text-decoration-none my-2 text-white" href="#">Privacy
                    Policy</a></li>
                  <li className="footer-menu-li"><a className="text-decoration-none my-2 text-white" href="#">Terms
                    &amp; Conditions</a></li>
                  <li className="footer-menu-li"><a className="text-decoration-none my-2 text-white" href="#">Affiliate
                    Program</a></li>
                  <li className="footer-menu-li"><a className="text-decoration-none my-2 text-white"
                    href="#">Careers</a></li>
                </ul>
              </div>
              <div className="col-md-3 text-white">
                <h5 className="fw-bold my-4 ">Products</h5>
                <ul className="footer-menu list-unstyled">
                  <li><a className="text-decoration-none text-white" href="blog-post.html">Medicines
                    </a></li>
                  <li><a className="text-decoration-none text-white" href="blog-post.html">Vitamins&Supplements</a></li>
                  <li><a className="text-decoration-none text-white" href="blog-post.html">All Products
                   </a></li>
                  <li><a className="text-decoration-none text-white" href="blog-post.html">Doctor Equipment
                    </a></li>
                  <li><a className="text-decoration-none text-white" href="blog-post.html">Doctor Equipment
                    </a></li>
                </ul>
              </div>
              <div className="col-md-3 text-white">
                <h5 className="fw-bold my-4 ">Payments</h5>
                <div className={styles.alltags}>
                  <p className='text-white'>Secure Payments</p>
                  <img src={require('../../Assets/Images/visa.png')} alt='women-care' />
                  <img src={require('../../Assets/Images/card_3.png')} className="ms-2" alt='women-care' />
                  <img src={require('../../Assets/Images/card_4.png')} className="ms-2" alt='women-care' />
                  <img src={require('../../Assets/Images/card_5.png')} className="ms-2" alt='women-care' />
                </div>
                <h6 className='my-2'>Powred by <span className='text-primary'> stripe</span></h6>
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
              <p className={styles.lastFooterP}>Copyright © 2022 <span className="ho-sp"> <a href="#"
                className=" fw-bold text-decoration-none text-primary"> Pharma</a></span></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
