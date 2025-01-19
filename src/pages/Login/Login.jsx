import React from 'react'
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
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../App';


const Login = () => {

    const context = useContext(MyContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };


    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    //for password forgot 
    const forgotPassword = () => {
        context.opentoast('success','OTP sended successfully')
        navigate('/verify')

    }

    return (
        <div className='py-10 '>
            <div className="container">
                <div className="card shadow-md w-[500px] m-auto bg-white p-4">

                    <h4 className='text-center font-bold'>
                        Login to your Account
                    </h4>

                    <div className='w-full mt-4'>

                        <div className="sign-in-info mb-4 text-black">

                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '45ch' } }}
                                noValidate
                                autoComplete="off"
                                className='text-black' >

                                <TextField
                                    id="standard-basic"
                                    label="UserName / Email Id"
                                    variant="outlined"
                                    className='w-full text-black mt-2'
                                    name='email'
                                />

                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        endAdornment={

                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
                                                    }
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


                            <p className='ml-3 mt-4 hover:text-green-400 cursor-pointer'
                                onClick={forgotPassword}> Forgat Password ?
                            </p>


                            <div className="button flex justify-center">
                                <Button
                                    className='text-black border border-gray-500  px-4 bg-green-400 w-full'
                                    style={{ backgroundColor: 'rgb(59 255 59)' }}>LogIn
                                </Button>
                            </div>

                            <p className='mt-2 ml-3 text-gray-400 '>
                                Not Registered?
                                <Link
                                    to='/register'
                                    className='no-underline text-gray-600 ml-2 text-[16px] font-bold hover:text-green-500'>
                                    Sign Up
                                </Link>
                            </p>

                            <p className='text-center text-gray-400 '>
                                Or continue with Social Account
                            </p>

                            <div className="google-button text-center">

                                <Button
                                    className='text-black border border-black flex gap-4 px-4 w-full'>
                                    <FcGoogle style={{ fontSize: '30px' }} />
                                    <span>Sign in With Google</span>
                                </Button>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
