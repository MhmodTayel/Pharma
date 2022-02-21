import React from 'react'
import styles from './Login.module.scss'
import { Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login'; import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from '../../services/userService';


const validationSchema = yup.object({

  username: yup
    .string('Enter your email')
    .required('Email is required'),
  password: yup
    .string()
    .required('password is required')
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      console.log(values , 'values')
      login(values).then(
        (res) => {
          console.log(res , 'res')
           localStorage.setItem("token" , res.data);
        },
        (err) => {
          console.log(err , 'err')
        }
      )
      actions.resetForm();
      alert(JSON.stringify(values, null, 2));

    },
  });


  return (

    <div className={'container', styles.bg}>
      <div className='row w-100'>
        <div className={'col-md-6'}>
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
                  id="username"
                  name="username"
                  label="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
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
                  <Button variant="contained" type='submit' endIcon={<LoginIcon />}>
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
