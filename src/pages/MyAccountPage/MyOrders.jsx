import React from 'react';
import UserAccountSideBar from './UserAccountSideBar';
import pd3 from '../../assets/pd3.webp'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { useState } from 'react';

const MyOrders = () => {
    const [showTable, setShowTable] = useState(null);
    const showProductDetails = (val) => {
        if(showTable===1){
            setShowTable(null)
        }
        else{
            setShowTable(val)
        }
    }

    return (
        <div className="py-10 w-full relative">
            <div className="container flex items-center gap-4">
                <div className="left w-[20%]">
                    <UserAccountSideBar />
                </div>

                <div className="right w-[70%] absolute top-[60px] right-[70px]">
                    <div className="shadow-xl rounded-md">
                        <div className="py-2 px-3 border-b">
                            <h4 className="font-bold">Your Orders</h4>
                            <p className="text-gray-500">There are 2 products in your Order</p>
                        </div>

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3"></th>
                                        <th scope="col" className="px-6 py-3">Product Name</th>
                                        <th scope="col" className="px-6 py-3">Payment Id</th>
                                        <th scope="col" className="px-6 py-3">Fruits</th>
                                        <th scope="col" className="px-6 py-3">Total Amount</th>
                                        <th scope="col" className="px-6 py-3">Order Status</th>
                                        <th scope="col" className="px-6 py-3">Order Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            <button
                                                className="w-10 h-10 p-2 rounded-full border flex items-center justify-center"
                                                onClick={() => showProductDetails(1)}
                                            >
                                                {
                                                    showTable===1? <FaChevronUp />:<FaChevronDown />
                                                }
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple</td>
                                        <td className="px-6 py-4">12234</td>
                                        <td className="px-6 py-4">Fruits</td>
                                        <td className="px-6 py-4">60Rs</td>
                                        <td className="px-6 py-4">Delivered</td>
                                        <td className="px-6 py-4">02/01/25</td>
                                    </tr>

                                   
                                    {showTable === 1 && (
                                        <>
                                            <tr className="bg-gray-100  dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="col" className="px-6 py-3">Product Id</th>
                                                <th scope="col" className="px-6 py-3">Product Name</th>
                                                <th scope="col" className="px-6 py-3">Product Image</th>
                                                <th scope="col" className="px-6 py-3">Quantity</th>
                                                <th scope="col" className="px-6 py-3">Price</th>
                                                <th scope="col" className="px-6 py-3">Total Price</th>
                                            </tr>
                                            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">1234</td>
                                                <td className="px-6 py-4">Apple</td>
                                                <td className="px-6 py-4">
                                                    <img src={pd3} alt="Product" className="w-[50px] h-[50px] object-cover" />
                                                </td>
                                                <td className="px-6 py-4">2</td>
                                                <td className="px-6 py-4">60Rs</td>
                                                <td className="px-6 py-4">120Rs</td>
                                            </tr>
                                        </>
                                    )}
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
