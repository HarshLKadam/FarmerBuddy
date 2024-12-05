import React from 'react';
import './headercss.css';
import { CiSearch } from "react-icons/ci";
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
                    <div className="right-side">
                        <LocationDrop />
                        <div className="search-bar">
                            <input type="text"
                                placeholder='Stock up on freshness and flavor—discover it here!'/>
                            <button> <CiSearch style={{ fontSize: '40px'}}/></button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Header;

