import React from 'react'
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

const ItemTab = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
   <div className='flex justify-around '>
    
    <div className=" ">
        <div className="">
        <h4>Popular Products</h4>
        </div>
    </div>

    <div>
       <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 400, sm: 600 },
        bgcolor: 'background.paper',
        color:'black'
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
         
        }}
      >
        <Tab label="Fruits" />
        <Tab label="Vegitable" />
        <Tab label="grocery" />
        <Tab label="Home snacks" />
        <Tab label="Daily Stappels" />
        <Tab label="juices" />
      </Tabs>
    </Box>
    </div>
    </div>
  )
}

export default ItemTab
