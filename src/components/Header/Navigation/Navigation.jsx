import React, { useState } from 'react'
import '../Navigation/Navigationcss.css'
import { TbMenu2 } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navigation = () => {

     const [isOpen,setIsOpen]=useState(false)

    return (
        <>
            <nav>
                <div className="navigation-bar">
                    <div className="part-1">
                        <div className="cate-wrapper">
                            <button className="categories" onClick={()=>setIsOpen(true)}>
                                <span className='menu-icon'>  <TbMenu2 /></span>
                                <span >All Categories</span>
                                <span className='arrow-icon'><FaChevronDown /></span>
                            </button>
                            <div className={`all ${isOpen ? 'block' : ''}`}>
                            <button className='close' onClick={()=>setIsOpen(false)}><IoCloseSharp style={{ fontSize: '30px' }} /></button>
                              <ul>
                                <li><Link to='/'><button className='list-btn first'>Fruits</button></Link></li>
                                <li><Link to='/'><button className='list-btn'>Vegitables</button></Link></li>
                                <li><Link to='/'><button className='list-btn'>Meat and Eggs</button></Link></li>
                                <li><Link to='/'><button className='list-btn'>Bakery</button></Link></li>
                                <li><Link to='/'><button className='list-btn'>Grocery</button></Link></li>
                                <li><Link to='/'><button className='list-btn'>Drinks</button></Link></li>
                              </ul>
                            </div>
                        </div>
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
