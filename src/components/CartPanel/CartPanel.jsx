import React from 'react'
import pd1 from '../../assets/pd3.webp'
import { AiOutlineDelete } from "react-icons/ai";

const CartPanel = () => {
    return (
        <div>

            <div className="">

                <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden ">

                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-400">

                        <div className="img w-[30%] h-[100px] p-4">
                            <img src={pd1} alt="" className='w-full' />
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



                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-400">

                        <div className="img w-[30%] h-[100px] p-4">
                            <img src={pd1} alt="" className='w-full' />
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


                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-400">

                        <div className="img w-[30%] h-[100px] p-4">
                            <img src={pd1} alt="" className='w-full' />
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


                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-400">

                        <div className="img w-[30%] h-[100px] p-4">
                            <img src={pd1} alt="" className='w-full' />
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


                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-400">

                        <div className="img w-[30%] h-[100px] p-4">
                            <img src={pd1} alt="" className='w-full' />
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


                    <div className="cart-items w-full flex gap-2 items-center pb-2 border-b border-gray-400">

                        <div className="img w-[30%] h-[100px] p-4">
                            <img src={pd1} alt="" className='w-full' />
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

                <div className="bottom-info">
                    
                </div>

            </div>
        </div>
    )
}

export default CartPanel
