import Dialog from '@mui/material/Dialog';
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import '../Location_Dropdown/LocationCss.css'
import { useState } from 'react';


const LocationDrop = () => {

    const [isOpenModel, setIsOpenModel] = useState(false)

    return (
        <>
            <div className="dropdown">
                <button className=" Button dropdown-button "
                    onClick={() => { setIsOpenModel(true) }} >
                    <span className='location-name'>Your Location
                        <span className='arrow'> <FaAngleDown /></span>
                    </span>
                    <span className='city-name'>Diva</span>

                </button>
            </div>

            <Dialog open={isOpenModel} className='location'>
                <h5> Choose your Delivery Location</h5>
                <p>Freshness Delivered Locally – Only Available in Selected Cities!</p>
                <button className='close'
                    onClick={() => {
                        setIsOpenModel(false) }}>

                    <IoCloseSharp style={{ fontSize: '30px' }} />

                </button>

                <div className="city-search">
                    <input type="text" placeholder='Select your area' />
                    <button> <CiSearch style={{ fontSize: '30px' }} />
                    </button>

                </div>

                <ul className='city-list'>
                    <li><button>Diva</button></li>
                    <li><button>Dombivili</button></li>
                    <li><button>Mumbai</button></li>
                    <li><button>Thakurli</button></li>
                    <li><button>Diva</button></li>
                    <li><button>Dombivili</button></li>
                    <li><button>Mumbai</button></li>
                    <li><button>Thakurli</button></li>
                    <li><button>Mumbai</button></li>
                    <li><button>Thakurli</button></li>
                    <li><button>Diva</button></li>
                    <li><button>Dombivili</button></li>
                    <li><button>Mumbai</button></li>
                    <li><button>Thakurli</button></li>
                    <li><button>Thakurli</button></li>
                    <li><button>Diva</button></li>
                    <li><button>Dombivili</button></li>
                    <li><button>Mumbai</button></li>
                    <li><button>Thakurli</button></li>
                    <li><button>Mumbai</button></li>
                    <li><button>Thakurli</button></li>
                    <li><button>Diva</button></li>
                    <li><button>Dombivili</button></li>
                    <li><button>Mumbai</button></li>
                    <li><button>Thakurli</button></li>
                </ul>

            </Dialog>
            
        </>
    )
}
export default LocationDrop
