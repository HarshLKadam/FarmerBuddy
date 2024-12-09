import React from 'react'
import '../Navigation/Navigationcss.css'
import { TbMenu2 } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

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
                            <li className="nav home">HOME</li>
                            <li className="nav meats">MEAT</li>
                            <li className="nav makery">BAKERY</li>
                            <li className="nav beverage">DRINKS</li>
                            <li className="nav blog">GROCERY</li>
                            <li className="nav fruits">FRUITS</li>
                            <li className="nav contact">CONTACT</li>
                            <li className="nav about">ABOUT</li>
                        </ul>
                    </div>
                </div>

                
            </nav>


        </>
    )
}

export default Navigation
