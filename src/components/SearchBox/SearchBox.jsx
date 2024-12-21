import React from 'react'

const SearchBox = () => {
    return (
        <>
            <div className="search flex relative gap-3 items-center">
                <input type="text"
                    placeholder='Search a freashness.....'
                    className=' px-10 w-[100%] border-2 mt-2 p-2 rounded-full text-center' />
                <button className='border p-2 rounded-full px-4 bg-green-500 mt-2'>
                    Search
                </button>
            </div>
        </>
    )
}

export default SearchBox
