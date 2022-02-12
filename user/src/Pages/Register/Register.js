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

const validationSchema = yup.object({
  name: yup
    .string('Enter your email')
    .matches(/^[a-zA-Z]{3,}/g, 'name should be more than 3 ')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  username: yup
    .string('Enter your email')
    .matches(/^[a-zA-Z]{3,}[!@#$&()-`.+,"]/g, 'Username should have special character (!@#$&()-`.+,) ')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    .min(11, 'toshort')
    .max(11, 'tolong')
    .required('phone number is required'),
  address: yup
    .string()
    .required('adress number is required'),
  Password: yup
    .string()
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,"password must contain Uper,Lower case number")
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  Repassword: yup
    .string()
    .oneOf([yup.ref('Password'), null], 'RePassword must match')
    .required('repassword is required')
});

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      phone: '',
      address: '',
      Password: '',
      Repassword: ''

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 7));
    },
  });

  return (

    <div className={styles.bg}>
      <div className='container-fluid'>
        <div className='row'>
          <div className=' ms-5 col-lg-5  col-md-6 col-sm-12  border-1 rounded-3 p-4 bg-light mt-5'>
            <div className='mt-5'>
              <h5 className='text-center text-primary my-3'> Register Now!!</h5>
              <form onSubmit={formik.handleSubmit}>
                {/* name */}
                <TextField
                  className='bg-light'
                  variant="standard"
                  className="my-2"
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* username */}
                <TextField
                  className="my-2"
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
                        <PersonAddAltIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* email */}
                <TextField
                  className="my-2"
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
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* phone */}
                <TextField
                  className="my-2"
                  variant="standard"
                  fullWidth
                  id="phone"
                  name="phone"
                  label="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* address */}
                <TextField
                  className="my-2"
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
                        <HomeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* password */}
                <div className='w-100 d-flex'>
                  <TextField
                    className="my-2 h3 w-50 me-2 "
                    variant="standard"
                    fullWidth
                    id="Password"
                    name="Password"
                    label="Password"
                    type="Password"
                    value={formik.values.Password}
                    onChange={formik.handleChange}
                    error={formik.touched.Password && Boolean(formik.errors.Password)}
                    helperText={formik.touched.Password && formik.errors.Password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    className={"my-2 h3 w-50"}
                    variant="standard"
                    fullWidth
                    id="Repassword"
                    name="Repassword"
                    label="Repassword"
                    type="password"
                    value={formik.values.Repassword}
                    onChange={formik.handleChange}
                    error={formik.touched.Repassword && Boolean(formik.errors.Repassword)}
                    helperText={formik.touched.Repassword && formik.errors.Repassword}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {/* button */}
                <div className='butt d-flex  justify-content-center'>
                  <Button className='w-25 my-5' variant="contained" fullWidth type="submit">
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
