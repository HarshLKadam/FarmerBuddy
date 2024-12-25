import React, { useState } from 'react';
import SideBar from './SideBar/SideBar';
import Item from '../Home/ProductItem/Item';
import { Button } from '@mui/material';
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ProductListing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [itemView, setItemView] = useState('grid')

  return (
    <div className="py-8">
      <div className="container flex gap-3">

        <div className="sidebar w-[20%] h-full bg-green-200 p-3">
          <SideBar />
        </div>


        <div className="right w-[80%]">

          <div className="bg-green-300 w-full mb-3 rounded-md flex items-center justify-between p-3">
            <div className="flex items-center gap-3">
              <Button className="w-[30px] h-[40px] min-w-[40px] rounded-full"
                onClick={() => {
                  setItemView('grid')
                }}>
                <IoGrid style={{ fontSize: '20px', color: 'black' }} />
              </Button>

              <Button className="w-[30px] h-[40px] min-w-[40px] ml-[20px] rounded-full"
                onClick={() => {
                  setItemView('grid')
                }}>
                <CiGrid2H style={{ fontSize: '20px', color: 'black' }} />
              </Button>

              <span className="font-bold">There are 30 Products found</span>

            </div>

            <div className="sort">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='text-black border border-black rounded-full'
              >
                Sort By
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Price Low to high</MenuItem>
                <MenuItem onClick={handleClose}>Price High to Low </MenuItem>
                <MenuItem onClick={handleClose}>Name A to Z</MenuItem>
                <MenuItem onClick={handleClose}>Name Z to A</MenuItem>
              </Menu>
            </div>
          </div>


          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {
              itemView === 'grid' ?
                <>
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                </> 
                :
          }

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
