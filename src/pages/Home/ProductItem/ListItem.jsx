import React from 'react'
import pd3 from '../../../assets/pd3.webp'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { BsCartPlus } from "react-icons/bs";


//this is page used to lisitng the items in row 

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

                        <button className='py-3 px-8 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 hover:shadow-md transition-all duration-200 flex items-center gap-3'>
                            <BsCartPlus style={{ fontSize: '24px' }} />
                            <Link to={'/productdetails/1'}><span>Add to Cart</span></Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default ListItem
