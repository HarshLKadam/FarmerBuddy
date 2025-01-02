import React from 'react'
import UserAccountSideBar from './UserAccountSideBar'
import CartItem from '../CartPage/CartItem'

const ListPage = () => {
    return (
        <div className='py-10 w-full'>
            <div className="container flex items-center gap-4">
                <div className="left w-[30%]">
                    <UserAccountSideBar />
                </div>

                <div className="left w-[70%]">
                    <div className="shadow-xl rounded-md ">
                        <div className="py-2 px-3 border-b">
                            <h4 className='font-bold'>Your Cart</h4>
                            <p className='text-gray-500'>There are 2 products in your cart </p>
                        </div>
                        <div className="cart">
                            <CartItem/>
                            
                        </div>

                    </div>
                </div>
            </div>
            </div>
            )
}

            export default ListPage
