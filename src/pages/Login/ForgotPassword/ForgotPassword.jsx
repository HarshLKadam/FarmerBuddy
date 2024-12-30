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
import { MyContext } from '../../../App.jsx'

const ForgotPassword = () => {
    const context = useContext(MyContext);

    const [showPassword, setShowPassword] = useState(false);  

    const [showPassword2, setShowPassword2] = useState(false);  


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };


    
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword2 = (event) => {
        event.preventDefault();
    };

    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()


    return (
        <div className='py-10 '>
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto bg-white p-4">

                    <h4 className='text-center font-bold'>
                        Forgot Password
                    </h4>

                    <div className='w-full mt-4'>

                        <div className="sign-in-info mb-4 text-black">

                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
                                noValidate
                                autoComplete="off"
                                className='text-black' >



                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

                                    <OutlinedInput
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        label='password'
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
                                    />

                                </FormControl>

                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">

                                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>

                                    <OutlinedInput
                                        id="confirm-password"
                                        type={showPassword2 ? 'text' : 'password'}
                                        name='confirm-password'
                                        label='confirm-password'
                                        endAdornment={

                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword2 ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={handleClickShowPassword2}
                                                    onMouseDown={handleMouseDownPassword2}
                                                    onMouseUp={handleMouseUpPassword2}
                                                    edge="end"
                                                >
                                                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />

                                </FormControl>

                            </Box>

                            <div className="button flex justify-center mt-4">
                                <Button
                                    className='text-black border border-gray-500  px-4 bg-green-400 w-full'
                                    style={{ backgroundColor: 'rgb(59 255 59)' }}>Change Password
                                </Button>
                            </div>



                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
