import React from 'react'
import CategoryPannel from '../../../components/CategoryPannel/CategoryPannel'
import { Link } from 'react-router-dom'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

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

                <div className="Price ">
                    <h4 className='font-bold'>Filter by Price</h4>
                    <RangeSlider />
                </div>
            </div>
        </div>
    )
}

export default SideBar
