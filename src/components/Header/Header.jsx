import React from 'react';
import Logo from '../../assets/logo.jpg'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from 'react';
import { MyContext } from '../../App';
import SearchBox from '../SearchBox/SearchBox.jsx';
import Top from '../Top/Top.jsx';
import Navigation from '../Navigation/Navigation.jsx';

import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import CartPanel from '../CartPanel/CartPanel.jsx';
import { IoCloseSharp } from "react-icons/io5";



const Header = () => {

    const context = useContext(MyContext)

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid #58f158`,
            backgroundColor: 'green',
            padding: '0 4px',
        },
    }));


    return (
        <>
            <div className="top">
                <Top />
            </div>

            <div className="header-1 border-b-2 p-2">
                <div className="container flex justify-between">

                    <div className="first w-[25%]">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="second w-[45%]">
                        <SearchBox />
                    </div>

                    <div className="third  w-[30%] flex justify-evenly items-center">
                        <ul className='flex gap-2 mt-3 '>
                            <Link to="/login"
                                className='text-black no-underline font-bold transition'>
                                <li className='text-[18px] border px-2 shadow-sm bg-green-300'>Login</li>
                            </Link>
                            <li>/</li>
                            <Link to="/register"
                                className='text-black no-underline font-bold transition'>
                                <li className='text-[18px] border px-2 shadow-sm bg-green-300'>Register</li>
                            </Link>
                        </ul>
                        <div className='flex gap-2'>

                            <Tooltip title="Cart" arrow>
                                <IconButton aria-label="cart"
                                    onClick={() => context.setOpenCartPanel(true)}>
                                    <StyledBadge badgeContent={1} color="primary">
                                        <IoCartOutline style={{ fontSize: '30px' }} />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Wish-list" arrow>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={1} color="primary">
                                        <CiHeart style={{ fontSize: '30px' }} />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>

                        </div>
                    </div>

                </div>
            </div>

            <Navigation />


            <Drawer 
            open={context.openCartPanel} onClose={context.toggleDrawer(false)}
             anchor={'right'}
                className='cart-pannel'>

                <div className="top-cart-page flex items-center justify-between py-3 px-4 gap-60 border-b border-b-gray-200">
                    <div className="cart-heading">
                        <h4 className='font-bold '>Shopping cart</h4>
                    </div>

                    <div className="close-button ">
                        <button className='' onClick={() => context.setOpenCartPanel(false)}>
                            <IoCloseSharp style={{ fontSize: '30px', color: "black" }} />
                        </button>
                    </div>
                </div>

                <CartPanel />

            </Drawer>
        </>
    );
}

export default Header;

