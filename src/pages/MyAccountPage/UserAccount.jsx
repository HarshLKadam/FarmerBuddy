import React from 'react'
import user from '../../assets/user1.png'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useState } from 'react';

//this is account page 
const UserAccount = () => {

    return (
        <div className='py-10 w-full'>
            <div className="container flex items-center gap-4">
                <div className="left w-[30%]">
                    <div className="card shadow-xl rounded-xl p-4">
                        <div className="w-full p-3 flex flex-col items-center justify-center">

                            <div className="w-[120px] h-[120px] rounded-full border  overflow-hidden relative">
                                <img src={user} alt=""
                                    className='w-full h-full object-cover' />

                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-full">
                                    <FaCloudUploadAlt className="text-white text-[50px]" />
                                    <input
                                        type="file"
                                        className="absolute top-0 left-0 w-full h-full opacity-0"
                                    />
                                </div>

                            </div>

                            <div className="name mt-4">
                               <div className="info flex flex-col">
                                <span>Farmer Buddy</span>
                                <span>farmer@gmail.com</span>
                               </div>
                            </div>
                        </div>
                        <div className="list">
                            <ul className='flex flex-col gap-3 mt-2'>
                                <li className='w-full border p-2 rounded-lg'>
                                    <Button className='px-20 w-full text-black'>
                                        Personal information
                                        </Button>
                                </li>

                                <li className='w-full border p-2 rounded-lg'>
                                    <Button className='px-20 w-full  text-black'>
                                        My List
                                        </Button>
                                </li>

                                <li className='w-full border p-2 rounded-lg '>
                                    <Button className='px-20 w-full text-black'>
                                        My order
                                        </Button>
                                </li>

                                <li className='w-full  border p-2 '>
                                    <Button className='px-20 w-full text-black'>
                                       Log Out
                                        </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
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

                            <div className="phone-number flex gap-4 w-[40%] mt-4 items-start justify-start">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAccount
