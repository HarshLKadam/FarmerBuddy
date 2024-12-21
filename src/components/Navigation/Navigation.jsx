import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { IoReorderThreeOutline } from "react-icons/io5";
import { LiaTruckSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import CategoryPannel from '../CategoryPannel/CategoryPannel';

const Navigation = () => {

    return (
        <>
            <div className="navigation border-b-2 pb-2">
                <div className="container flex items-center justify-between ">

                    <div className="part-1 mt-2 w-[20%]">
                    <CategoryPannel/>
                    </div>

                    <div className="part-2 w-[45%] mt-3">
                        <ul className='flex justify-between'>
                            <li className='list-none border-r-2 border-l-2 px-4'>
                                <Link to="/" className='no-underline font-bold text-[18px] text-black'><Button  sx={{ backgroundColor: '#58f158', color: 'black' }}>HOME </Button></Link>
                            </li>
                            <li className='list-none border-r-2 px-4'>
                                <Link to="/about" className='no-underline font-bold text-[18px] text-black'><Button  sx={{ backgroundColor: '#58f158', color: 'black' }}>ABOUT US </Button> </Link>
                            </li>
                            <li className='list-none border-r-2 px-4'>
                                <Link to="/contact" className='no-underline font-bold text-[px] text-black'><Button  sx={{ backgroundColor: '#58f158', color: 'black' }}>CONTACT US </Button></Link>
                            </li>
                            <li className='list-none border-r-2 px-4'>
                                <Link to="/contact" className='no-underline font-bold text-[px] text-black'><Button  sx={{ backgroundColor: '#58f158', color: 'black' }}>NEW </Button> </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="part3 flex  items-center justify-end gap-2 w-[35%]">
                        <LiaTruckSolid  style={{ fontSize: 30}} />
                        <p className='mt-3'> Free Delivery for Daily customers</p>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Navigation
