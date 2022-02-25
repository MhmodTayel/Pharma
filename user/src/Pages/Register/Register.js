import styles from './Register.module.scss'
import { Button, TextField, toggleButtonClasses } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import { register } from '../../services/userService';
import { Link, useHistory } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const validationSchema = yup.object({
  pharmacyName: yup
    .string('Enter your email')
    .matches(/^[a-zA-Z]{3,}/g, 'pharmacyName should be more than 3 ')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .max(50)
    .email('Enter a valid email')
    .required('Email is required'),
  username: yup
    .string('username your email')
    .min(3)
    .max(20)
    .matches(/^[a-zA-Z]{3,}[!@#$&()-`.+,"]/g, 'Username should have special character (!@#$&()-`.+,) ')
    .required('username is required'),
  pharmacistPhonNumber: yup
    .string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    .min(11, 'toshort')
    .max(12, 'tolong')
    .required('pharmacistPhonNumber number is required'),
  address: yup
    .string()
    .max(100)
    .required('adress number is required'),
  password: yup
    .string()
    .max(20)
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "password must contain Uper,Lower case number")
    .min(8, 'password should be of minimum 8 characters length')
    .required('password is required')
});



export default function Register() {
  const history = useHistory()
  const [show, setShow] = useState(true)
  const [hide, setHide] = useState(false)
  const formik = useFormik({
    initialValues: {
      pharmacyName: '',
      email: '',
      username: '',
      pharmacistPhonNumber: '',
      address: '',
      password: '',

    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      register(values).then(
        (res) => {
          console.log(res)
        },
        (err) => {
          console.log(err)
        })
      actions.resetForm();
      history.push('/login')
    },
  });
  return (

    <div className={styles.app}>
      <div className={styles.intro_viewer}>
        {/* {hide ? <h2 className={styles.h2hide}>Welcome to PharmaTic</h2> : null} */}
        {show ? <h2 className={styles.h2}>Welcome to PharmaTic</h2> : null}
        {show ? <p className={styles.p}>place you can order yor medicen,start your order now from stores </p> : null}
        {show ? <div className={styles.imgdiv, styles.none}>
          <img className={styles.img} src='https://www.campusreel.org/assets/Admission%20Officers.svg' />
        </div> : null}
      </div>
      <div>
        {hide ? <form className={styles.form} onSubmit={formik.handleSubmit} >
          <h3 className={styles.h3}>Register</h3>
          <div className='d-flex my-2'> 
          <TextField
          className='w-50 mx-2'
            variant="standard"
            fullWidth
            id="pharmacyName"
            name="pharmacyName"
            label="Pharmacy Name"
            value={formik.values.pharmacyName}
            onChange={formik.handleChange}
            error={formik.touched.pharmacyName && Boolean(formik.errors.pharmacyName)}
            helperText={formik.touched.pharmacyName && formik.errors.pharmacyName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle className='text-primary' />
                </InputAdornment>
              ),
            }}
          />
          {/* username */}
          <TextField
            className="w-50"
            variant="standard"
            fullWidth
            id="username"
            name="username"
            label="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonAddAltIcon className='text-dark' />
                </InputAdornment>
              ),
            }}
          />
          </div>
          {/*email*/}
          <div className='d-flex my-2'>
          <TextField
            className="w-50 mx-2"
            variant="standard"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon className='text-dark' />
                </InputAdornment>
              ),
            }}
          />
          {/* pharmacistPhonNumber */}
          <TextField
            className="w-50"
            variant="standard"
            fullWidth
            id="pharmacistPhonNumber"
            name="pharmacistPhonNumber"
            label="Phone Number"
            value={formik.values.pharmacistPhonNumber}
            onChange={formik.handleChange}
            error={formik.touched.pharmacistPhonNumber && Boolean(formik.errors.pharmacistPhonNumber)}
            helperText={formik.touched.pharmacistPhonNumber && formik.errors.pharmacistPhonNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon className='text-dark' />
                </InputAdornment>
              ),
            }}
          />
          </div>
          {/* address */}
          <TextField
            className="my-2 mx-2"
            variant="standard"
            fullWidth
            id="address"
            name="address"
            label="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon className='text-dark' />
                </InputAdornment>
              ),
            }}
          />
          {/* password */}
          <TextField
            className="my-2 h3 w-100 mx-2 "
            variant="standard"
            fullWidth
            id="password"
            name="password"
            label="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon className='text-dark' />
                </InputAdornment>
              ),
            }}
          />
          <div className='butt d-flex  justify-content-center'>
            <Button className={styles.butreg} variant="contained" fullWidth type="submit">
              Register
            </Button>
          </div>
        </form> : null}


        <div className={styles.btn}>
          <button onClick={() => setShow(!show) & setHide(!hide)} id='btnnnn' className={styles.button}>
            <svg xmlnsdc='http://purl.org/dc/elements/1.1/' xmlnscc='http://creativecommons.org/ns#' xmlnsrdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlnssvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape" version='1.1' x='0px' y='0px' viewBox="0 0 100 125">
              <g transform="translate(0,-952.36218)">
                <path style={{ fontSize: 'medium', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 'normal', fontStretch: 'normal', textIndent: '0', textAlign: 'start', textDecoration: 'none', lineHeight: 'normal', letterSpacing: 'normal', wordSpacing: 'normal', textTransform: 'none', direction: 'ltr', blockprogression: 'tb', writingMode: 'lr-tb', textAnchor: 'start', baselineShift: 'baseline', opacity: '1', color: '#fff', fill: '#fff', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none', strokeWidth: '4', marker: 'none', visibility: 'visible', display: 'inline', overflow: 'visible', enableBackground: 'accumulate', fontFamily: 'Sans-inkscape-font-specification:Sans' }} d="M 67.90625 25.96875 A 2.0002 2.0002 0 0 0 66.65625 29.46875 L 86.84375 48 L 8 48 L 7.8125 48 C 6.7651593 48.049 5.8571564 49.04635 5.90625 50.09375 C 5.955344 51.14105 6.9526789 52.0493 8 52 L 86.84375 52 L 66.65625 70.5 A 2.0022756 2.0022756 0 1 0 69.34375 73.46875 L 93.34375 51.46875 A 2.0002 2.0002 0 0 0 93.34375 48.5 L 69.34375 26.5 A 2.0002 2.0002 0 0 0 67.90625 25.96875 z " transform="translate(0,952.36218)" />
              </g>
            </svg>
          </button>
        </div>
        {hide ? <footer className={styles.lastfooter}>
          <div>
            <p className={styles.pFooter}>Or Signup with</p>
            <a className={styles.aFooter} href="#"><FacebookIcon /></a>
            <a className={styles.aFooter} href="#"><InstagramIcon /></a>
            <a className={styles.aFooter} href="#"><GoogleIcon /></a>
            {/* <button className={styles.loginbtn}> <Link className='text-white  text-decoration-none' to='/login'>login</Link></button> */}
          </div>

        </footer> : null}
      </div>
    </div>

  )
}