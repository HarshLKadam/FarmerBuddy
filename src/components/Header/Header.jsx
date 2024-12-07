import React from 'react';
import './headercss.css';
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from '../../assets/logo-removebg-preview.png';
import { Link } from 'react-router-dom';
import LocationDrop from '../Location_Dropdown/LocationDrop';

const Header = () => {
    return (
        <>
            <div className="header-wrapper">
                <div className="full-width-strip bg-color m">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center welcome ">
                            "Welcome to FarmerBuddy – Empowering Farmers, Connecting Communities!"
                        </p>
                    </div>
                </div>

                <div className="header">
                    <div className=' left-side'>
                        <Link to={'/'}>
                            <img src={Logo} alt="logo" className='logo' />
                        </Link>
                    </div>

                    <div className="middle">

                        <LocationDrop />


                        <div className="search-bar">
                            <input type="text"
                                className='search-input'
                                placeholder='Stock up on freshness and flavor—discover it here!' />
                            <button> <CiSearch style={{ fontSize: '30px' }} /></button>
                        </div>


                    </div>

                    <div className="right-side">

                        <div className="user">
                            <button className='user-profile'>
                                <FaRegUser style={{ fontSize: "25px", }} />
                            </button>
                        </div>

                        <div className="cart">
                            <button className="cart-button">
                            <AiOutlineShoppingCart style={{ fontSize: "25px", }}/>
                            </button>
                            <div className='cart-price'> 100 Rs</div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Header;

