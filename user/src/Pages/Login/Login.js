import React, { useState } from 'react'
import styles from './Login.module.scss'
import { Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from '../../services/userService';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useHistory, Link } from 'react-router-dom';

const validationSchema = yup.object({

  username: yup
    .string('Enter your email')
    .required('Email is required'),
  password: yup
    .string()
    .required('password is required')
});

export default function Login() {
  const history = useHistory();
  const [alert, setAlert] = useState(false)
  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => {
      window.clearTimeout(timer);
    };
  }, [alert]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      console.log(values, 'values')
      login(values).then(
        (res) => {
          if (res.data) {
            localStorage.setItem("token", res.data);
            console.log(res.data, '')
            history.push('/home')
          }
        },
        (err) => {
          console.log(err, 'err')
          return setAlert(true);
        }
      )
      actions.resetForm();
    },
  });
  return (
    <div class="container h-100">
      <div class="row h-100 my-5 d-flex justify-content-center align-items-center align-content-center ">
        <form class="col-md-9 h-100" onSubmit={formik.handleSubmit} >
          <div class='shadow-lg'>
            <div class="row">
              <div class="col-md-6 d-flex justify-content-center align-items-center">
                <div class={styles.AppFormLeft}>
                  <h1 className='my-5'>Login</h1>
                  <div class="form-group position-relative mb-4">
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
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonAddAltIcon className='text-primary' />                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div class="form-group position-relative mb-4">
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
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlinedIcon className='text-primary' />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div class="row  mt-4 mb-4">
                    <div class="col-md-6">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 text-right">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>

                  <button class="btn btn-primary btn-block shadow border-0 py-2 text-uppercase" type='submit'>
                    Login
                  </button>

                  <p class="text-center mt-5">
                    Don't have an account?
                    <span className={styles.link}><Link to='/register'> create an account</Link></span>
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div className={styles.imgbg}>
                  <div className={styles.layer}>
                    <div class="AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                      <h2 class="position-relative px-4 pb-3 mb-4">Welcome back to PharmaTic</h2>
                      <p className='h6'> A place you can order your medicen,start your order now from stores ,start your order now from stores</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {alert && <Stack sx={{ width: '50%' }} className='my-5' spacing={2}>
          <Alert variant="filled" severity="error">Error username Not Exist</Alert>
        </Stack>}
      </div >
    </div >
  )
}
