import React from 'react'
import pd1 from '../../assets/pd3.webp'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { BsCartPlus } from "react-icons/bs";
import QtyBox from './QtyBox';

const ProductDetails = () => {
    return (
        <div className='p-20 '>
            <div className="box p-10 border border flex gap-20">

                <div className="img rounded-lg w-[40%]">
                    <img src={pd1} className='w-[800px] h-[400px] rounded-2xl ' alt="" />
                </div>

                <div className="right-info flex flex-col gap-3 w-[60%]">
                    <div className="p-name">
                        <h1 className='font-bold'>Apple</h1>
                    </div>
                    <div className="rating">
                        <Stack spacing={1}
                            className=''>
                            <Rating name="size-large" defaultValue={4} readOnly />
                        </Stack>
                    </div>
                    <div className="price">
                        <h3>60Rs/Kg</h3>
                    </div>
                    <div className="info">
                        <p className='text-[22px]'>
                            Apples are nutritious fruits rich in fiber, vitamins, and antioxidants, available in various varieties like Fuji, Gala, and Granny Smith. They are versatile, widely consumed fresh, or used in baking, cooking, and beverages.
                        </p>
                    </div>
                    <div className="qty">
                        <QtyBox />
                    </div>
                    <div>
                        <div className="buttons mt-4">

                            <button className='border border-gray-400 py-2 px-10 bg-green-300 rounded-xl mt-2  hover:bg-green-500 flex gap-4'><BsCartPlus style={{ fontSize: '30px' }} /> <p className='font-bold text-[20px] '>Add to cart</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
