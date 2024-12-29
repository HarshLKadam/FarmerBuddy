import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { BsCartPlus } from "react-icons/bs";
import QtyBox from './QtyBox';
import Button from '@mui/material/Button';


//this is product page which contains information

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
                    <Button className='flex text-black gap-4 border px-4 py-3'
                    style={{backgroundColor:'rgb(43 255 43)'}}>
                        <BsCartPlus style={{ fontSize: '24px' }} />
                        <span>Add to Cart</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductContent
