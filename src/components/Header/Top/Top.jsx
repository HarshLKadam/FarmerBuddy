import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => {
    return (
        <div className="top-strip  border-b-2 bg-green-400 ">
            <div className="container  flex justify-between">
                <div>
                    <p className='font-bold text-[18px]'>
                        Welcome to Farmer-Buddy
                    </p>
                </div>

                <div>
                    <ul className='flex items-center gap-4 '>
                        <li className='list-none text-black'>
                            <Link to="/help-center"
                                className='text-black no-underline  transition font-bold text-[16px]'>Help Center</Link>
                        </li>
                        <li className='list-none text-black '>
                            <Link to=".order-tracking"
                                className='text-black no-underline transition font-bold text-[16px]'>Order Tracking</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Top
