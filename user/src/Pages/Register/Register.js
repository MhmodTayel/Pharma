import React from 'react'
import styles from './Register.module.scss'
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import Particles from "react-tsparticles";
import { register } from '../../services/userService';
import { Redirect } from 'react-router-dom';


const particlesInit = (main) => {
  console.log(main);

};

const particlesLoaded = (container) => {
  console.log(container);
};

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
      alert(JSON.stringify(values, null, 6));
      actions.resetForm();

    },
  });


  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#1d243d",
            },
          },
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 350,
                duration: 2,
                opacity: 0.6,
                size: 30,
              },
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 150,
                duration: 0.3,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 700,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className='container'>
        <div className='row'>
          <div className={styles.card}>
            <div className='mt-4'>
              <h4 className='text-center text-white'>Pharmatic</h4>
              <h6 className='text-center text-white'>Register now to have an account</h6>
              <h6 className='text-center text-white '>find your order faster</h6>

              <form onSubmit={formik.handleSubmit}>
                {/* pharmacyName */}
                <TextField
                  className='bg-light text-white'
                  // variant="standard"
                  className="my-2 text-white"
                  fullWidth
                  id="pharmacyName"
                  pharmacyName="pharmacyName"
                  label="Pharmacy Name"
                  value={formik.values.pharmacyName}
                  onChange={formik.handleChange}
                  error={formik.touched.pharmacyName && Boolean(formik.errors.pharmacyName)}
                  helperText={formik.touched.pharmacyName && formik.errors.pharmacyName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle className='text-white' />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* username */}
                <TextField
                  className="my-2"
                  // variant="standard"
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
                        <PersonAddAltIcon className='text-white' />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* email */}
                <TextField
                  className="my-2"
                  // variant="standard"
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
                        <EmailIcon className='text-white' />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* pharmacistPhonNumber */}
                <TextField
                  className="my-2"
                  // variant="standard"
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
                        <PhoneIcon className='text-white' />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* address */}
                <TextField
                  className="my-2"
                  // variant="standard"
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
                        <HomeIcon className='text-white' />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* password */}
                <div className='w-100 d-flex'>
                  <TextField
                    className="my-2 h3 w-100 me-2 "
                    // variant="standard"
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
                          <LockIcon className='text-white' />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {/* button */}
                <div className='butt d-flex  justify-content-center'>
                  <Button className={styles.btn}variant="contained" fullWidth type="submit">
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}