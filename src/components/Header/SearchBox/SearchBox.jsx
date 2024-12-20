import React from 'react'
import Button from '@mui/material/Button';

const SearchBox = () => {
    return (
        <>
            <div className="search flex relative gap-3 items-center">
                <input type="text"
                    placeholder='Search a freashness'
                    className=' px-10 w-[100%] border-2 mt-2 p-2' />
                <Button
                    sx={{ backgroundColor: '#58f158', color: 'black' }}
                    variant="contained"
                >
                    Search
                </Button>
            </div>
        </>
    )
}

export default SearchBox
