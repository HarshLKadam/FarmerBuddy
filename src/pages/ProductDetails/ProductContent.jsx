import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { BsCartPlus } from "react-icons/bs";
import QtyBox from './QtyBox';

const ProductContent = () => {
    return (
        <div className='flex flex-col gap-2'>
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
                        <button className='py-3 px-8 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 hover:shadow-md transition-all duration-200 flex items-center gap-3'>
                            <BsCartPlus style={{ fontSize: '24px' }} />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default ProductContent
