import React from 'react';
import './headercss.css';
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from '../../assets/logo-removebg-preview.png';
import { Link } from 'react-router-dom';
import LocationDrop from '../Location_Dropdown/LocationDrop';
import SearchBox from './SearchBox/SearchBox';
import Navigation from './Navigation/Navigation';



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

                        <SearchBox />
                    </div>

                    <div className="right-side">

                        <div className="user">
                            <button className='user-profile'>
                                <FaRegUser style={{ fontSize: "25px", }} />
                            </button>
                        </div>

                        <div className="cart">
                            <button className="cart-button">
                                <AiOutlineShoppingCart style={{ fontSize: "25px", }} />
                            </button>
                            <div className='cart-price'> 100 Rs</div>
                        </div>
                    </div>
                </div>
                
                <nav>
                    <Navigation/>
                </nav>
               
            </div>
        </>
    );
}

export default Header;

