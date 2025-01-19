import React, { useContext } from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

import { postData } from '../../utils/api';
import { MyContext } from '../../App';

import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const context = useContext(MyContext)
  const navigateTo=useNavigate()

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value
      }
    })
  }

  const validateValues = Object.values(formFields).every(el => el)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    if (formFields.name === "") {
      context.opentoast("error", "Please Provide UserName")
    }
    if (formFields.email === "") {
      context.opentoast("error", "Please Provide Email")
    }
    if (formFields.password === "") {
      context.opentoast("error", "Please Provide password")
    }
    postData('/api/user/register', formFields)
      .then((res) => {

        if (res?.error !== true) {
          context.opentoast("success", res?.message)
          setIsLoading(false)
          localStorage.setItem("userEmail",formFields.email)
          setFormFields({
            name: "",
            email: "",
            password: ""
          })
          navigateTo('/verify')

        }
        else{
          context.opentoast("error", res?.message)
          setIsLoading(false)
        }
      })
  };

  return (
    <div className='py-10 '>
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto bg-white p-4">
          <h4 className='text-center font-bold'>Register with your New Account </h4>

          <form onSubmit={handleSubmit} className='w-full mt-4'>
            <div className="sign-in-info mb-4 text-black">
              <Box
                component="div"
                sx={{ '& > :not(style)': { m: 1, width: '45ch' } }}
                autoComplete="off"
                className='text-black'
              >
                <TextField
                  id="standard-basic 1"
                  label="Full Name"
                  name="name"
                  value={formFields.name}
                  disabled={isLoading === true ? true : false}
                  variant="outlined"
                  className='w-full text-black mt-2'
                  onChange={onChangeInput}
                />

                <TextField
                  id="standard-basic 2"
                  label="Email Id"
                  name="email"
                  value={formFields.email}
                  variant="outlined"
                  className='w-full text-black mt-2'
                  onChange={onChangeInput}
                />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formFields.password}
                    onChange={onChangeInput}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={showPassword ? 'hide the password' : 'display the password'}
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>

              <div className="button flex justify-center">
                <Button
                  type="submit"
                  disabled={!validateValues}
                  style={{ backgroundColor: 'rgb(59 255 59)' }}
                  className='border border-gray-500 px-4 w-full bg-green-400 text-black flex gap-3'
                >
                  {
                    isLoading === true ? <CircularProgress color="inherit" /> : "Sign Up"
                  }

                </Button>

              </div>

              <p className='mt-2 ml-3 text-gray-400 '>Do You Already Have an Account?
                <Link to='/login'
                  className='no-underline text-gray-600 ml-2 text-[16px] font-bold hover:text-green-500'>Log In </Link>
              </p>

              <p className='text-center text-gray-400 '>Or continue with Social Account </p>

              <div className="google-button text-center">
                <Button
                  className='text-black border border-black flex gap-4 px-4 w-full'
                >
                  <FcGoogle style={{ fontSize: '30px' }} />
                  <span>Sign in With Google</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
