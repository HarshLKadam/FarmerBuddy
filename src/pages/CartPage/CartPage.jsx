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
import CartItem from './CartItem';

const CartPage = () => {
    return (
        <div className='py-5 '>
            <div className="container w-[80%] max-w-[70%] flex gap-4">

                <div className="left-part w-[70%]">

                    <div className="shadow-xl rounded-md ">
                        <div className="py-2 px-3 border-b">
                            <h4 className='font-bold'>Your Cart</h4>
                            <p className='text-gray-500'>There are 2 products in your cart </p>
                        </div>

                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                      

                    </div>

                </div>

                <div className="right-part w-[30%] b border-slate-300 ">
                    <div className="shadow-xl rounded-md ">
                        <h4 className='font-bold pb-3 p-4 border-b border-slate-300'>CART TOTALS</h4>

                        <div className='flex flex-col mt-4 space-y-4'>
                          
                            <div className="subtotal flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Subtotal</p>
                                <p className='text-base font-semibold text-gray-800'>60Rs/KG</p>
                            </div>

                            
                            <div className="shipping flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Shipping</p>
                                <p className='text-base font-semibold text-gray-800'>40Rs</p>
                            </div>

                          
                            <div className="estimated-for flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Estimate For</p>
                                <p className='text-base font-semibold text-gray-800'>India</p>
                            </div>

                           
                            <div className="total flex justify-between items-center px-4  border-t border-gray-300 pt-2">
                                <p className='text-lg font-bold text-gray-900'>Total</p>
                                <p className='text-lg font-bold text-gray-900'>600Rs</p>
                            </div>
                        </div>

                        <div className="checkout p-2 pb-4">
                            <Button 
                            style={{backgroundColor:'rgb(43 255 43)'}}
                            className='flex gap-2 border font-bold text-black w-full'>
                            <IoBagCheckOutline style={{fontSize:'20px'}}/>
                               <span> CheckOut</span>
                                </Button>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default CartPage
