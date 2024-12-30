import React from 'react'
import { Link } from 'react-router-dom'
import pd1 from '../../assets/pd3.webp'
import { IoCloseSharp } from "react-icons/io5";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { IoBagCheckOutline } from "react-icons/io5";


const CartItem = () => {
  return (
    <div className="cart-item w-full flex  items-center gap-4  pb-4 border-b border-slate-300 pl-6 ">

    <div className='img w-[20%] rounded-md overflow-hidden mt-4   '>
        <Link to='/productdetails/1' className='group'>
            <img src={pd1} alt=""
                className='group-hover:scale-105 transition-all ' />
        </Link>
    </div>

    <div className="info w-[80%] relative flex  flex-col  gap-2">
        <button className='absolute left-[630px] text-black rounded-full border-b border-slate-300 p-1 bottom-[120px] hover:bg-slate-200'>
            <IoCloseSharp className='cursor-pointer' style={{ fontSize: '20px' }} />
        </button>

        <p className="name text-[18px] mb-[-1px] mt-4"> Apple</p>

        <div className="rating ml-[-6px] mb-2">
            <Stack spacing={1}
                className=''>
                <Rating name="size-medium" defaultValue={4} readOnly />
            </Stack>
        </div>

        <div className="flex items-center mt-[-6px]">
            <span className='flex items-center justify-center text-[18px] cursor-pointer'>
                Qunatity:1
            </span>
        </div>

        <p className='mt-2'>
            <span className=' text-[18px]'>60rs/Kg</span>
        </p>

    </div>

</div>
  )
}

export default CartItem
