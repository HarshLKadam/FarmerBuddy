import React, { useContext, useEffect, useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { uploadImage } from '../../utils/api.js';

//this is side bar of user account where user account information is stored 
const UserAccountSideBar = () => {

    const [preview, setPreview] = useState([])
    const [uploading, setUploading] = useState(false)

    const context = useContext(MyContext)

    useEffect(()=>{     
        const userAvatar=[]
        userAvatar.push(context?.userData?.avatar)
        setPreview(userAvatar)
    },[context?.userData])

    const onChangeFile = async (e, apiEndPoint) => {
        try {
            setPreview(null); // Reset preview
            const files = e.target.files;
            console.log('Files:', files);

            const formdata = new FormData();
            const selectedImages = [];

            setUploading(true);

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                if (
                    file &&
                    (file.type === 'image/jpeg' ||
                        file.type === 'image/jpg' ||
                        file.type === 'image/png' ||
                        file.type === 'image/webp')
                ) {
                    selectedImages.push(file);
                    formdata.append('avatar', file);

                    await uploadImage(apiEndPoint, formdata)
                        .then((res) => {
                            console.log('Response:', res);

                            const avatarUrl = res?.images?.[0];

                            if (avatarUrl) {
                                setPreview(avatarUrl); // Set the avatar URL to the preview state
                            } else {
                                context.opentoast('error', 'Avatar URL not received.');
                            }
                        })
                        .catch((error) => {
                            console.error('API Error:', error);
                            context.opentoast('error', 'Failed to upload image.');
                        });
                } else {
                    context.opentoast('error', 'Please add only valid JPG, JPEG, PNG, or WEBP image files.');
                    setUploading(false);
                    return false;
                }
            }

            setUploading(false);
        } catch (error) {
            console.error('Error:', error);
            setUploading(false);
        }
    };

    return (
        <div>
            <div className="card shadow-xl rounded-xl p-4">
                <div className="w-full p-3 flex flex-col items-center justify-center">

                    <div className="w-[120px] h-[120px] rounded-full border  overflow-hidden relative flex items-center justify-center">
                        {
                            uploading === true ? <CircularProgress color="inherit" /> :

                                <img src={preview} alt=""
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
                            <span>{context?.userData?.name}</span>
                            <span>{context?.userData?.email}</span>
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
