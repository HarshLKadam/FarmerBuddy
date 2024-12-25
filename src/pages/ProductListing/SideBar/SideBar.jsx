import React from 'react'
import CategoryPannel from '../../../components/CategoryPannel/CategoryPannel'
import { Link } from 'react-router-dom'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './SideBar.css'; // Import your custom CSS

const SideBar = () => {
    return (
        <div>
            <div className="categories">

                <div className="categorywise ">
                    <h4 className='font-bold'>Shop By Category</h4>
                    <ul>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Fruits" />
                            <FormControlLabel control={<Checkbox />} label="Vegitables" />
                            <FormControlLabel control={<Checkbox />} label="Dairy Products" />
                            <FormControlLabel control={<Checkbox />} label="Grocery" />
                            <FormControlLabel control={<Checkbox />} label="Drinks" />
                        </FormGroup>
                    </ul>
                </div>
                <div className="box mt-2">
                    <div className="Price  ">
                        <h4 className='font-bold'>Filter by Price</h4>
                        <div className="slider mt-4">
                            <RangeSlider className="custom-slider" />
                        </div>
                        <div className="pt-4 pb-2 flex gap-3">
                            <span className='font-bold'> From:Rs:{100}</span>
                            <span className='font-bold'> TO: Rs:{500}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
