import React from 'react'
import { CiSearch } from "react-icons/ci";
import '../SearchBox/SearchBoxcss.css'

const SearchBox = () => {
    return (
        <>
            <div className="search-bar">
                <input type="text"
                    className='search-input'
                    placeholder='Stock up on freshness and flavor—discover it here!' />
                <button> <CiSearch style={{ fontSize: '30px' }} /></button>
            </div>
        </>
    )
}

export default SearchBox
