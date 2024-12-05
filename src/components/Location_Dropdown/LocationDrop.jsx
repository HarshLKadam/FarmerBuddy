import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import '../Location_Dropdown/LocationCss.css'

const LocationDrop = () => {
    return (
        <>
            <div className="dropdown">
                <button className=" Button dropdown-button">
                    <span className='location-name'>Your Location 
                        <span className='arrow'> <FaAngleDown /></span>
                    </span>
                    <span className='city-name'>Diva</span>

                </button>
            </div>
        </>
    )
}
export default LocationDrop
