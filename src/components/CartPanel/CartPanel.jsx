import React from 'react'
import pd1 from '../../assets/pd3.webp'
import { AiOutlineDelete } from "react-icons/ai";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const CartPanel = () => {
    return (
        <div>

            <div >

                <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden">

                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-200 hover:scale-105 cursor-pointer  ">

                        <div className="img w-[30%] h-[100px] p-4">
                            <Link to='/productdetails/1' className='link transition-all'>
                            <img src={pd1} alt="" className='w-full' />
                            </Link>
                        </div>

                        <div className="info w-[70%] flex flex-col mt-4 ">
                            <h4 className='product-title font-bold'>
                                Fresh Apple
                            </h4>
                            <p className='flex items-center gap-4'>
                                <span className=''>Qty:1</span>
                                <span className=''>Price:60 Rs</span>
                            </p>
                        </div>

                        <div className="remove-product mr-[20px]">
                            <button >
                                <AiOutlineDelete style={{ fontSize: '30px' }} />
                            </button >
                        </div>

                    </div>



                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-200 hover:scale-105 cursor-pointer">

                        <div className="img w-[30%] h-[100px] p-4">
                            <Link to='/productdetails/1' className='link transition-all'>
                            <img src={pd1} alt="" className='w-full' />
                            </Link>
                        </div>

                        <div className="info w-[70%] flex flex-col mt-4 ">
                            <h4 className='product-title font-bold'>
                                Fresh Apple
                            </h4>
                            <p className='flex items-center gap-4'>
                                <span className='font-bold'>Qty:1</span>
                                <span className='font-bold'>Price:60 Rs</span>
                            </p>
                        </div>

                        <div className="remove-product mr-[20px]">
                            <button >
                                <AiOutlineDelete style={{ fontSize: '30px' }} />
                            </button >
                        </div>

                    </div>


                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-200 hover:scale-105 cursor-pointer">

                        <div className="img w-[30%] h-[100px] p-4">
                            <Link to='/productdetails/1' className='link transition-all'>
                            <img src={pd1} alt="" className='w-full' />
                            </Link>
                        </div>

                        <div className="info w-[70%] flex flex-col mt-4 ">
                            <h4 className='product-title font-bold'>
                                Fresh Apple
                            </h4>
                            <p className='flex items-center gap-4'>
                                <span className='font-bold'>Qty:1</span>
                                <span className='font-bold'>Price:60 Rs</span>
                            </p>
                        </div>

                        <div className="remove-product mr-[20px]">
                            <button >
                                <AiOutlineDelete style={{ fontSize: '30px' }} />
                            </button >
                        </div>

                    </div>


                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-200 hover:scale-105 cursor-pointer">

                        <div className="img w-[30%] h-[100px] p-4">
                            <Link to='/productdetails/1' className='link transition-all'>
                            <img src={pd1} alt="" className='w-full' />
                            </Link>
                        </div>

                        <div className="info w-[70%] flex flex-col mt-4 ">
                            <h4 className='product-title font-bold'>
                                Fresh Apple
                            </h4>
                            <p className='flex items-center gap-4'>
                                <span className='font-bold'>Qty:1</span>
                                <span className='font-bold'>Price:60 Rs</span>
                            </p>
                        </div>

                        <div className="remove-product mr-[20px]">
                            <button >
                                <AiOutlineDelete style={{ fontSize: '30px' }} />
                            </button >
                        </div>

                    </div>


                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-200 hover:scale-105 cursor-pointer">

                        <div className="img w-[30%] h-[100px] p-4">
                            <Link to='/productdetails/1' className='link transition-all'>
                            <img src={pd1} alt="" className='w-full' />
                            </Link>
                        </div>

                        <div className="info w-[70%] flex flex-col mt-4 ">
                            <h4 className='product-title font-bold'>
                                Fresh Apple
                            </h4>
                            <p className='flex items-center gap-4'>
                                <span className='font-bold'>Qty:1</span>
                                <span className='font-bold'>Price:60 Rs</span>
                            </p>
                        </div>

                        <div className="remove-product mr-[20px]">
                            <button >
                                <AiOutlineDelete style={{ fontSize: '30px' }} />
                            </button >
                        </div>

                    </div>


                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-200 hover:scale-105 cursor-pointer">

                        <div className="img w-[30%] h-[100px] p-4">
                            <Link to='/productdetails/1' className='link transition-all'>
                            <img src={pd1} alt="" className='w-full' />
                            </Link>
                        </div>

                        <div className="info w-[70%] flex flex-col mt-4 ">
                            <h4 className='product-title font-bold'>
                                Fresh Apple
                            </h4>
                            <p className='flex items-center gap-4'>
                                <span className='font-bold'>Qty:1</span>
                                <span className='font-bold'>Price:60 Rs</span>
                            </p>
                        </div>

                        <div className="remove-product mr-[20px]">
                            <button >
                                <AiOutlineDelete style={{ fontSize: '30px' }} />
                            </button >
                        </div>

                    </div>
                </div>

                <div className="order-summary w-full border-t border-gray-200 flex flex-col gap-4 py-4 border-b overflow-hidden">
                    <div className="flex justify-between px-4">
                        <span className="text-[20px] font-bold">1 Item</span>
                        <span className="text-[20px]">60Rs</span>
                    </div>
                    <div className="flex justify-between px-4">
                        <span className="text-[20px] font-bold">Shipping</span>
                        <span className="text-[20px]">40Rs</span>
                    </div>
                    <div className="total flex justify-between px-4 border-t border-gray-300 pt-4">
                        <span className="text-[20px] font-bold">Total (tax inc)</span>
                        <span className="text-[20px] font-bold">100Rs</span>
                    </div>
                </div>

                <div className="cart-buttons mt-4 flex justify-center gap-4">

                  
                        <Button className='border w-1/2  p-2  text-black ' style={{ backgroundColor: 'rgb(43 255 43)' }}>
                        <Link className='no-underline text-black'
                        to='/'
                        >View Cart </Link>
                        </Button>
                    

                        <Button className='border w-1/2  p-2  text-black ' style={{ backgroundColor: 'rgb(43 255 43)' }}>
                        <Link
                         className='no-underline text-black'
                        to='/checkout'
                        >CheckOut </Link>
                        </Button>

                
                </div>



            </div>
        </div>
    )
}

export default CartPanel
