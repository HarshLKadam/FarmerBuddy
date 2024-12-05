import React from 'react';
import './headercss.css';

import Logo from '../../assets/logo-removebg-preview.png';
import { Link } from 'react-router-dom';

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
            <div className="container">
                <div className='row'>
                    <div className='logo-wrapper col-sm-3'>
                        <Link to={'/'}>
                        <img src={Logo} alt="logo" className='logo' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Header;

