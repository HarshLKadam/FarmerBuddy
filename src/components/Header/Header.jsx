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
import  Navigation  from '../Navigation/Navigation.jsx';

import { Link } from 'react-router-dom';


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
                            <Link to="/login"
                                className='text-black no-underline font-bold transition'>
                                <li className='text-[18px] border px-2 shadow-sm bg-green-300'>Register</li>
                            </Link>
                        </ul>
                        <div className='flex gap-2'>

                            <Tooltip title="Cart" arrow>
                                <IconButton aria-label="cart">
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
            
            <Navigation/>
        </>
    );
}

export default Header;

