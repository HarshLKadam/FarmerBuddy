import React from 'react'
import user from '../../assets/user1.png'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import UserAccountSideBar from './UserAccountSideBar';

//this is account page 
const UserAccount = () => {

    return (
        <div className='py-10 w-full'>
            <div className="container flex items-center gap-4">
                <div className="left w-[30%]">
                    <UserAccountSideBar/>
                </div>

                <div className="left w-[70%]">
                    <div className="card shadow-xl rounded-xl p-4">
                        <div className="w-full p-3 flex flex-col items-center justify-center">
                            <div className="head flex flex-col items-center">
                                <IoShieldCheckmarkOutline style={{
                                    fontSize: '100px'
                                }} />
                                <p className='mt-4 uppercase font-bold text-[20px]'>Personal Information</p>
                            </div>
                            <div className="full-name flex gap-4 w-[70%] mt-4 items-start justify-start">
                                <TextField
                                    id="firstName"
                                    label="First Name "
                                    variant="outlined"
                                    className='w-full' />
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    className='w-full' />

                            </div>

                            <div className="email flex gap-4 w-[70%] mt-4 items-start justify-start">
                                <TextField
                                    id="email"
                                    label="Email "
                                    variant="outlined"
                                    className='w-full' />
                            </div>
                            <div className="phone-number  gap-4 w-[40%] mt-4 items-start justify-start">
                                <TextField
                                    label="Phone Number"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                +91
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    type="tel"
                                />

                            </div>

                            <div className="button mt-4 flex gap-4">
                                <Button
                                    className='border  px-4  text-black'
                                    style={{ backgroundColor: 'rgb(43 255 43)' }}>
                                    Save me
                                </Button>

                                <Button
                                    className='border  px-4  text-black'
                                    style={{ backgroundColor: 'rgb(43 255 43)' }}>
                                   Cancel
                                </Button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAccount
