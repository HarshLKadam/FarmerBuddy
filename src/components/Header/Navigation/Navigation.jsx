import React from 'react'
import '../Navigation/Navigationcss.css'
import { TbMenu2 } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav>
                <div className="navigation-bar">
                    <div className="part-1">
                        <button className="categories">
                            <span className='menu-icon'>  <TbMenu2 /></span>
                            <span >All Categories</span>
                            <span className='arrow-icon'><FaChevronDown /></span>
                        </button>
                    </div>

                    <div className="part-2">
                        <ul className='navbar-list'>
                            <li className="nav home">
                                <Link to='/'>
                                    <button>HOME</button>
                                </Link>
                            </li>
                            <li className="nav meats">
                                <Link to='/'>
                                    <button>MEAT</button>
                                </Link>
                            </li>
                            <li className="nav bakery">
                                <Link to='/'>
                                    <button>BAKERY</button>
                                </Link>
                            </li>
                            <li className="nav drink">
                            <Link to='/'>
                                    <button> DRINKS</button>
                                </Link>
                            </li>
                            <li className="nav grocery">
                            <Link to='/'>
                                    <button>  GROCERY</button>
                                </Link>
                            </li>
                            <li className="nav fruits">
                            <Link to='/'>
                                    <button> FRUITS</button>
                                </Link>
                            </li>
                            <li className="nav contact">
                            <Link to='/'>
                                    <button> CONTACT</button>
                                </Link>
                            </li>
                            <li className="nav contact">
                            <Link to='/'>
                                    <button> CONTACT</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </nav>


        </>
    )
}

export default Navigation
