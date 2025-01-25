import React, { useContext, useState } from 'react'
import user from '../../assets/user1.png'
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';

//this is side bar of user account where user account information is stored 
const UserAccountSideBar = () => {

    const [preview,setPreview]=useState([])
    const [uploading,setUploading]=useState(false) 

    const context=useContext(MyContext)

    let imageArray=[];
    let uniqueArray=[];
    let selectedImages=[];

    const formdata=new FormData()

    const onChangeFile = async (e, apiEndPoint) => {
        try{
            setPreview([])
            const files=e.target.files;
            console.log(files)
            setUploading(true)

            for(var i=0;i< files.length;i++){
                if( files[i] && (
                    files[i].type=='image/jpeg'||
                    files[i].type=='image/jpg' ||
                    files[i].type=='image/png' ||
                    files[i].type=='image/webp'   )
                ){
                    const file=files[i];
                    selectedImages.push[file]
                    formdata.append('avatar',file)  
                    
                }
                else{
                    context.opentoast("error","please add only valid JPG or PNG image file")
                    setUploading(false)
                    return false
                }
            }
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <div className="card shadow-xl rounded-xl p-4">
                <div className="w-full p-3 flex flex-col items-center justify-center">

                    <div className="w-[120px] h-[120px] rounded-full border  overflow-hidden relative flex items-center justify-center">
                        {
                            uploading===true ?  <CircularProgress color="inherit" />:

                            <img src={user} alt=""
                            className='w-full h-full object-cover' />
                        }
                       
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-full">
                            <FaCloudUploadAlt className="text-white text-[50px]" />
                            <input
                                type="file"
                                className="absolute top-0 left-0 w-full h-full opacity-0"
                                name="avatar"
                                accept='image/*'
                                onChange={(e) => {
                                    onChangeFile(e, '/api/user/avatarimage')
                                }}
                            />
                        </div>

                    </div>

                    <div className="name mt-4">
                        <div className="info flex flex-col">
                            <span>Farmer Buddy</span>
                            <span>farmer@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <ul className='flex flex-col gap-3 mt-2'>

                        <li className="w-full border p-2 rounded-lg">
                            <NavLink
                                to="/useraccount">
                                <Button className='px-20 w-full  text-black'>
                                    My Profile
                                </Button>
                            </NavLink>
                        </li>


                        <li className='w-full border p-2 rounded-lg'>
                            <NavLink to='/userlist'
                            >
                                <Button className='px-20 w-full  text-black'>
                                    My List
                                </Button>
                            </NavLink>
                        </li>

                        <li className='w-full border p-2 rounded-lg '>
                            <NavLink to='/order'
                            >
                                <Button className='px-20 w-full text-black'>
                                    My order
                                </Button>
                            </NavLink>
                        </li>

                        <li className='w-full  border p-2 '>
                            <NavLink >
                                <Button className='px-20 w-full text-black'>
                                    Log Out
                                </Button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserAccountSideBar
