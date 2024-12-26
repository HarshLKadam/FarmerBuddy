import React from 'react'
import pd3 from '../../../assets/pd3.webp'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { BsCartPlus } from "react-icons/bs";

const ListItem = () => {
    return (
        <div>
            <div className="item  border p-4 shadow-md cursor-pointer transition-all ease-in-out  flex gap-10 ">
                <div className="image">
                    <img src={pd3} width='250px' className=' max-w-[300px] h-[250px]' alt="" />
                </div>
                <div className="info">
                    <h5 className='text-gray-500'>Fruits</h5>
                    <h4 className='font-bold'>Apple</h4>
                    <p>
                        Apples are nutritious fruits rich in fiber, vitamins, and antioxidants, available in various varieties like Fuji, Gala, and Granny Smith. They are versatile, widely consumed fresh, or used in baking, cooking, and beverages.
                    </p>
                    <h4 className='font-bold'>60Rs/Kg</h4>
                    <div className="buttons mt-4">
                  
                        <button className='border border-gray-400 py-2 px-10 bg-green-300 rounded-mg mt-2  hover:bg-green-500 flex gap-4'><BsCartPlus style={{ fontSize: '30px' }} /> <p>Add to cart</p></button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default ListItem
