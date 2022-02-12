import React from 'react'
import styles from './Login.module.scss'
import { Button, TextField, FormControlLabel, Checkbox} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';import 
{ useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});


export default function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={'container', styles.bg}>
      <div className='row w-100'>
        <div className={'col-md-6'}>
          {/* <img src={require('../../Assets/Images/medbackground.png')} alt='medicen' className="w-75  vh-100 mx-5" /> */}
        </div>
        <div className={' col-lg-6 col-md-12 col-sm-12 my-5'}>
          <div className={styles.card}>
            <div>
              <h1 className={'text-primary text-center my-5'}> Login Now</h1>

              <form onSubmit={formik.handleSubmit}>
                <TextField
                  className="logintext-field my-3"
                  variant="standard"
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  className="logintext-field my-3 h3"
                  variant="standard"
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <div className='d-flex justify-content-around'>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                  <a href='#'>forgot your password?</a>
                </div>
                <div className=' d-flex  justify-content-center'>
                  <Button variant="contained" endIcon={<LoginIcon />}>
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
