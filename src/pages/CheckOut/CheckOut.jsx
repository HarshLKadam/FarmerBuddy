import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoBagCheckOutline } from "react-icons/io5";

const CheckOut = () => {
    return (
        <div className='py-10 '>
            <div className="container flex item-center gap-5">
                <div className="left w-[70%]">
                    <div className="card bg-white shadow-xl p-5 rounded-md w-full">
                        <h3>Billing Details</h3>

                        <form action="" className='w-full mt-2 '>

                            <div className="flex items-center gap-6 pb-4">

                                <div className="text w-[50%] mt-2">
                                    <TextField
                                        id="fullName"
                                        label="Full Name"
                                        variant="outlined"
                                        className='w-full'
                                        size='small'
                                    />
                                </div>

                                <div className="email w-[50%] mt-2">
                                    <TextField
                                        id="email"
                                        label="email"
                                        variant="outlined"
                                        className='w-full'
                                        size='small'
                                    />
                                </div>

                            </div>

                            <h6 className='text-gray-500 font-bold'>Street Address *</h6>
                            <div className="flex flex-col pb-4">

                                <div className="street-name w-[100%] mt-2">
                                    <TextField
                                        id="streetName"
                                        label="house number and street name"
                                        variant="outlined"
                                        className='w-full'
                                        size='small'
                                    />
                                </div>

                                <div className="apartment w-[100%] mt-4">
                                    <TextField
                                        id="email"
                                        label="Apartment, suite, unit, etc (optional)"
                                        variant="outlined"
                                        className='w-full'
                                        size='small'
                                    />
                                </div>

                            </div>

                            <h6 className='text-gray-500 font-bold'>Town/City *</h6>
                            <div className=" pb-2">
                                <div className="city w-[50%] mt-4">
                                    <TextField
                                        id="city"
                                        label="City"
                                        variant="outlined"
                                        className='w-full'
                                        size='small'
                                    />
                                </div>

                            </div>

                            <h6 className='text-gray-500 font-bold'>State *</h6>
                            <div className=" pb-4">
                                <div className="state w-[50%] mt-4">
                                    <TextField
                                        id="state"
                                        label="State"
                                        variant="outlined"
                                        className='w-full'
                                        size='small'
                                        defaultValue={'Maharshtra'}
                                    />
                                </div>

                            </div>

                            <h6 className='text-gray-500 font-bold'>Postcode/ZIP *</h6>
                            <div className=" pb-2">
                                <div className="zipcode w-[50%] mt-4">
                                    <TextField
                                        id="zipcode"
                                        label="ZIP code / Post Code"
                                        variant="outlined"
                                        className='w-full'
                                        size='small'     
                                    />
                                </div>
                            </div>

                            <div className=" pb-2 flex gap-4">
                                <div className="phone-no w-[50%] mt-4">
                                    <TextField
                                        id="phone-no"
                                        label="Phone No"
                                        variant="outlined"
                                        className='w-full'
                                        size='small'     
                                    />
                                </div>
                                <div className="country w-[50%] mt-4">
                                    <TextField
                                        id="country"
                                        label="Country"
                                        variant="outlined"
                                        className='w-full'
                                        size='small'    
                                        defaultValue={'India'} 
                                    />
                                </div>
                            </div>

                        </form>

                    </div>
                </div>

                <div className="right-part w-[30%] b border-slate-300 ">
                    <div className="shadow-xl rounded-md ">

                        <h4 className='font-bold pb-3 p-4 border-b border-slate-300'>Your Order</h4>
                        <div className="subtotal flex justify-between items-center px-4 border-b">
                                <p className='text-base font-semibold text-gray-700'>Product</p>
                                <p className='text-base font-semibold text-gray-800'>SubTotal</p>
                            </div>

                        <div className='flex flex-col mt-4 space-y-4  scroll max-h-[250px] overflow-y-scroll'>
                            
                            <div className="shipping flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Apple (1)</p>
                                <p className='text-base font-semibold text-gray-800'>40Rs</p>
                            </div>
           
                            <div className="estimated-for flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Tommato (1)</p>
                                <p className='text-base font-semibold text-gray-800'>60Rs</p>
                            </div>

                            <div className="shipping flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Apple (1)</p>
                                <p className='text-base font-semibold text-gray-800'>40Rs</p>
                            </div>
            
                            <div className="estimated-for flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Tommato (1)</p>
                                <p className='text-base font-semibold text-gray-800'>60Rs</p>
                            </div>

                            <div className="shipping flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Apple (1)</p>
                                <p className='text-base font-semibold text-gray-800'>40Rs</p>
                            </div>
              
                            <div className="estimated-for flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Tommato (1)</p>
                                <p className='text-base font-semibold text-gray-800'>60Rs</p>
                            </div>

                            <div className="shipping flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Apple (1)</p>
                                <p className='text-base font-semibold text-gray-800'>40Rs</p>
                            </div>

                            <div className="estimated-for flex justify-between items-center px-4">
                                <p className='text-base font-semibold text-gray-700'>Tommato (1)</p>
                                <p className='text-base font-semibold text-gray-800'>60Rs</p>
                            </div>

                        </div>
                        
                        <div className="total flex justify-between items-center px-4  border-t border-gray-300 pt-2">
                                <p className='text-lg font-bold text-gray-900'>Total</p>
                                <p className='text-lg font-bold text-gray-900'>100Rs</p>
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

export default CheckOut
