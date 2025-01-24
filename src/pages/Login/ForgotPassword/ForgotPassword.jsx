import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../../App.jsx'
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../../utils/api.js';

const ForgotPassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

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

    const context = useContext(MyContext);
    const navigateTo = useNavigate()

    const [formFields, setFormFields] = useState({
        email: localStorage.getItem("userEmail"),
        newPassword: '',
        confirmPassword: ''
    })

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }

    // const validateValues = Object.values(formFields).every(el => el)

    const handleSubmit = (e) => {

        e.preventDefault()

        setIsLoading(true)

        if (formFields.newPassword === "") {
            context.opentoast("error", "Please Provide new password")
            setIsLoading(false)
            return false
        }
        if (formFields.confirmPassword === "") {
            context.opentoast("error", "Please Provide confirm password")
            setIsLoading(false)
            return false
        }
        if (formFields.confirmPassword !== formFields.newPassword) {
            context.opentoast("error", "New Password and Confirm Password not match")
            setIsLoading(false)
            return false
        }

        postData(`/api/user/reset-password`, {
            email: localStorage.getItem("userEmail"),
            ...formFields
           }
        ).then((res) => {
            if (res?.error === false) {
                console.log(res)
                localStorage.removeItem("userEmail")
                localStorage.removeItem("actionType")
                setIsLoading(false)
                context.opentoast("success", res?.message)
                navigateTo('/login')
            }
            else {
                context.opentoast("error", res?.message)
            }
        })

    };

    return (
        <div className='py-10'>
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto bg-white p-4">
                    <h4 className='text-center font-bold'>Forgot Password</h4>
                    <form
                        className='w-full mt-4'
                        onSubmit={handleSubmit}    >
                        <div className="sign-in-info mb-4 text-black">
                            <Box
                                component="div"
                                sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
                                className='text-black'>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        name='newPassword'
                                        label='new password'
                                        onChange={onChangeInput}
                                        disabled={isLoading === true ? true : false}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    onMouseUp={handleMouseUpPassword}
                                                    edge="end">
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
                                        name='confirmPassword'
                                        label='confirm password'
                                        onChange={onChangeInput}
                                        disabled={isLoading === true ? true : false}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword2 ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={handleClickShowPassword2}
                                                    onMouseDown={handleMouseDownPassword2}
                                                    onMouseUp={handleMouseUpPassword2}
                                                    edge="end">
                                                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>
                            <div className="button flex justify-center mt-4">
                                <Button
                                    type="submit"
                                    // disabled={!validateValues}
                                    style={{ backgroundColor: 'rgb(59 255 59)' }}
                                    className='border border-gray-500 px-4 w-full bg-green-400 text-black flex gap-3'
                                >
                                    {
                                        isLoading === true ? <CircularProgress color="inherit" /> : "Change Password"
                                    }

                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ForgotPassword
