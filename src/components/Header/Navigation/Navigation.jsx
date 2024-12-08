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
                        
                    </div>
                </div>

                
            </nav>


        </>
    )
}

export default Navigation
