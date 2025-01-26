import React, { useContext } from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { fetchDataFromApi, postData } from '../../utils/api';
import { MyContext } from '../../App';


//this is user account header component 

const MyAccount = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const context = useContext(MyContext)
    const navigateTo=useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        setAnchorEl(null);

        fetchDataFromApi(`/api/user/logout`, { withCredentials: true })
            .then((res) => {
                console.log(res)
                if (res?.error !== true) {
                    localStorage.removeItem("accessToken", res?.data?.accessToken)
                    localStorage.removeItem("refreshToken", res?.data?.refreshToken)
                    context.setisLogin(false)
                    navigateTo('/')
                }
            })

    }

    return (
        <>
            <Button className='myaccount flex items-center pr-4 px-10 border rounded-md py-1 text-black gap-2 '
                onClick={handleClick}>
                <div className='w-[40px] h-[40px] min-w-[40px] rounded-full
                     text-black flex font-thin'>
                    <MdOutlineAccountCircle
                        style={{
                            fontSize: '45px',
                            color: 'rgb(92, 90, 90)',
                        }}
                        className='font-thin' />
                </div>

                <div className="info flex flex-col ">
                    <span className="text-[16px] font-[400] mt-2 mb-0 text-left justify-start">
                        {
                            context.userData?.name
                        }
                    </span>
                    <p className=" text-gray-600 lowercase text-left justify-start">
                        {
                                context.userData?.email       
                        }
                    </p>
                </div>


            </Button>

            <Menu
                className='mt-[-6px] p-4 opacity-95 '
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 80,
                                height: 80,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.green',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link
                    className='no-underline text-black'
                    to='/useraccount'>
                    <MenuItem onClick={handleClose}>
                        <MdOutlineAccountCircle
                            style={{
                                fontSize: '30px',
                                color: 'rgb(92, 90, 90)',
                            }}
                            className='font-thin mr-2' /> My Account
                    </MenuItem>
                </Link>

                <MenuItem onClick={handleClose}>
                    <IoBagCheckOutline style={{ fontSize: '30px' }}
                        className='mr-2' /> Order
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <CiHeart style={{ fontSize: '30px' }}
                        className='mr-2' /> My List
                </MenuItem>
                <MenuItem onClick={logout}>
                    <IoMdLogOut style={{ fontSize: '30px' }}
                        className='mr-2' />
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default MyAccount
