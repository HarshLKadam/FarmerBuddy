import React from 'react'
import { Link } from 'react-router-dom'
import pd1 from '../../assets/pd3.webp'
import { IoCloseSharp } from "react-icons/io5";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CartPage = () => {
    return (
        <div className='py-5 '>
            <div className="container w-[80%] max-w-[70%] flex ">

                <div className="left-part w-[70%]">
                    <h4 className='font-bold'>Your Cart</h4>
                    <p className='text-gray-500'>There are 2 products in your cart </p>

                    <div className="shadow-md rounded-md p-3">

                        <div className="cart-item w-full flex items-center gap-4 mt-3 ">

                            <div className='img w-[10%] rounded-md overflow-hidden'>
                                <Link to='/productdetails/1' className='group'>
                                    <img src={pd1} alt=""
                                        className='group-hover:scale-105 transition-all' />
                                </Link>
                            </div>

                            <div className="info w-[90%] relative">
                                <button className='absolute left-[740px] text-black rounded-full border p-1 bottom-[80px] hover:bg-slate-200'>
                                    <IoCloseSharp className='cursor-pointer' style={{ fontSize: '20px' }} />
                                </button>

                                <p className="name text-[18px]"> Apple</p>

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
                    </div>

                </div>



            </div>
        </div>
    )
}

export default CartPage
