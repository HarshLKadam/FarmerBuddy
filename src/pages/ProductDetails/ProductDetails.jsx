import React from 'react'
import pd1 from '../../assets/pd3.webp'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BsCartPlus } from "react-icons/bs";
import ProductImage from './productImage';


import QtyBox from './QtyBox';
import ProductContent from './ProductContent';

const ProductDetails = () => {
    return (
        <div className='p-10 '>
            <div className="box p-10 border  flex gap-20">

                <div className="img rounded-lg w-[40%]">
                    {/* <img src={pd1} className='w-[800px] h-[400px] rounded-2xl ' alt="" /> */}
                    <ProductImage/>
                </div>
                <div className="right-info flex flex-col gap-3 w-[60%]">
                    <ProductContent/>
                </div>
            </div>

            <div className="user-review border">
                <div className="box p-10">
                    <div className="review-button mb-4 border w-1/6 text-center py-2 px-8 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 hover:shadow-md transition-all duration-200 flex items-center gap-3">
                        <h3>Reviews</h3>
                    </div>
                    <h4 className='font-bold bg-green-200 p-2 w-1/2'>Customer Questions and answers</h4>

                    <div className="scroll w-[80%] max-h-[300px] overflow-y-scroll overflow-x-hidden mt-4 ">

                        <div className=" reviews flex w-full  items-center justify-between mt-2 ">
                            <div className="info w-[80%] flex items-center gap-4 border pb-4 pl-2 shadow-xl rounded-md">

                                <div className=" img w-[80px] overflow-hidden 
                                rounded-full">
                                    <img src={pd1} alt="" className='w-full' />
                                </div>

                                <div className="w-[60%] mt-4 ">
                                    <h4 className='text-[16px]'>Harsh Kadam</h4>
                                    <h5 className='text-[12px] mb-0'>2024-12-01</h5>
                                    <p className='mt-2 mb-0'>Absolutely love the freshness and crunch of these apples! They taste just like they were picked right off the tree. Highly recommend for health-conscious buyers!</p>
                                </div>

                                <div className="rating">
                                    <Stack spacing={1}
                                        className=''>
                                        <Rating defaultValue={4} readOnly />
                                    </Stack>
                                </div>

                            </div>
                        </div>

                        <div className=" reviews flex w-full  items-center justify-between mt-4 ">
                            <div className="info w-[80%] flex items-center gap-4 border pb-4 pl-2 shadow-xl rounded-md">

                                <div className=" img w-[80px] overflow-hidden 
                                rounded-full">
                                    <img src={pd1} alt="" className='w-full' />
                                </div>

                                <div className="w-[60%] mt-4 ">
                                    <h4 className='text-[16px]'>Harsh Kadam</h4>
                                    <h5 className='text-[12px] mb-0'>2024-12-01</h5>
                                    <p className='mt-2 mb-0'>Absolutely love the freshness and crunch of these apples! They taste just like they were picked right off the tree. Highly recommend for health-conscious buyers!</p>
                                </div>

                                <div className="rating">
                                    <Stack spacing={1}
                                        className=''>
                                        <Rating defaultValue={4} readOnly />
                                    </Stack>
                                </div>

                            </div>
                        </div>

                        <div className=" reviews mt-4 flex w-full  items-center justify-between ">
                            <div className="info w-[80%] flex items-center gap-4 border pb-4 pl-2 shadow-xl rounded-md">

                                <div className=" img w-[80px] overflow-hidden 
                                rounded-full">
                                    <img src={pd1} alt="" className='w-full' />
                                </div>

                                <div className="w-[60%] mt-4 ">
                                    <h4 className='text-[16px]'>Harsh Kadam</h4>
                                    <h5 className='text-[12px] mb-0'>2024-12-01</h5>
                                    <p className='mt-2 mb-0'>Absolutely love the freshness and crunch of these apples! They taste just like they were picked right off the tree. Highly recommend for health-conscious buyers!</p>
                                </div>

                                <div className="rating">
                                    <Stack spacing={1}
                                        className=''>
                                        <Rating defaultValue={4} readOnly />
                                    </Stack>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="review-form  mt-4 p-2">
                        <h4>Add Your Review </h4>
                        <Box
                            // component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                            noValidate
                            autoComplete="off">

                            <form className='w-full mt-4'>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Add your review"
                                    multiline
                                    rows={5}
                                    fullWidth
                                    className='w-[500px]'
                                    style={{width:'500px'}}
                                />
                            </form>

                        </Box>

                        <div className="rating mt-2 ml-2">
                            <Stack spacing={1}
                                className=''>
                                <Rating defaultValue={4} />
                            </Stack>
                        </div>

                        <div className="submit mt-4 ml-2">
                            <button className=' mb-4 border w-1/8 text-center py-2 px-8 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 hover:shadow-md transition-all duration-200 flex items-center gap-2'>Submit Review</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails
