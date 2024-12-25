import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryPannel = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{
                width: 300,
                backgroundColor: '#f9f9f9',
                height: '100%',
                padding: 2,
                boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
             <ul className='flex flex-col gap-3'>
                <li className='bg-green-500 p-2 rounded-2xl text-center' ><Link className='text-black no-underline text-[20px] font-bold'> Home</Link></li>
                <li className='bg-green-500 p-2 rounded-2xl text-center' ><Link className='text-black no-underline text-[20px] font-bold'> Grocery</Link></li>
                <li className='bg-green-500 p-2 rounded-2xl text-center' ><Link className='text-black no-underline text-[20px] font-bold'> Fruits</Link></li>
                <li className='bg-green-500 p-2 rounded-2xl text-center' ><Link className='text-black no-underline text-[20px] font-bold'> Vegitables</Link></li>
                <li className='bg-green-500 p-2 rounded-2xl text-center' ><Link className='text-black no-underline text-[20px] font-bold'> Drinks</Link></li>
             </ul>
            </List>
        </Box>
    );

    return (
        <div>
            <Button
                onClick={toggleDrawer(true)}
                sx={{
                    backgroundColor: '#58f158',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        backgroundColor: '#45c745',
                        transform: 'scale(1.05)',
                    },
                    transition: 'all 0.3s ease',
                }}
            >
                <IoReorderThreeOutline style={{ fontSize: 40 }} />
                Shop by Categories
            </Button>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: { borderRadius: '0 8px 8px 0', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' },
                }}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default CategoryPannel;
