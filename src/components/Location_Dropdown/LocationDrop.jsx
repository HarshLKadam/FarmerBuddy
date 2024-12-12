import Dialog from '@mui/material/Dialog';
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import '../Location_Dropdown/LocationCss.css'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../App';



const LocationDrop = () => {

    const context = useContext(MyContext)

    const [isOpenModel, setIsOpenModel] = useState(false);

    const[selectedCity,setSelectedCity]=useState(null);
    const[cityList,setCityList]=useState([]);

    const selectCity = (index) => {
        setSelectedCity(index)
        alert(index)
        setIsOpenModel(false)
    }

    useEffect(()=>{
        setCityList(context.cityList)
    },[])

    const filterCityList=(e)=>{
        const keyword=e.target.value.toLowerCase()
        if(keyword!==""){
            const list=cityList.filter((items)=>{
                return items.toLowerCase().includes(keyword)
            })
            setCityList(list)
        }  
        else{
            setCityList(context.cityList)
        }
    }

    return (
        <>
            <div className="dropdown">
                <button className=" Button dropdown-button "
                    onClick={() => { setIsOpenModel(true) }} >
                    <span className='location-name'>Your Location
                        <span className='arrow'> <FaAngleDown /></span>
                    </span>
                    <span className='city-name'>{selectedCity}</span>

                </button>
            </div>

            <Dialog open={isOpenModel} className='location'>
                <h5> Choose your Delivery Location</h5>
                <p>Freshness Delivered Locally – Only Available in Selected Cities!</p>
                <button className='close'
                    onClick={() => {
                        setIsOpenModel(false)
                    }}>

                    <IoCloseSharp style={{ fontSize: '30px' }} />

                </button>

                <div className="city-search">
                    <input type="text" placeholder='Select your area' onChange={filterCityList}/>
                    <button> <CiSearch style={{ fontSize: '30px' }} />
                    </button>

                </div>

                <ul className='city-list'>
                    {
                        cityList && cityList.length !== 0 &&
                        cityList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <button onClick={() => selectCity(index)}
                                        className={`${selectedCity ===index ? 'active':''}`}>{item}</button>
                                </li>
                            );
                        })
                    }
                </ul>

            </Dialog>

        </>
    )
}
export default LocationDrop