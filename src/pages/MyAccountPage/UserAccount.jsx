import React, { useContext, useEffect, useState } from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import UserAccountSideBar from './UserAccountSideBar';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { editData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';

//this is account page 
const UserAccount = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        mobile: ""
    })
    const [userId, setUserId] = useState()

    const context = useContext(MyContext)
    const navigateTo = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        if (token === null) {
            navigateTo("/")
        }
    }, [context.isLogin])

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }


    useEffect(() => {
        if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
            setUserId(context?.userData?._id)
            setFormFields({
                name:context?.userData?.name,
                email:context?.userData?.email,
                mobile:context?.userData?.mobile
            })
        }
    }, [context?.userData])

    const validateValues = Object.values(formFields).every(el => el)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)

        if (formFields.name === "") {
            context.opentoast("error", "Please Provide Full Name")
            setIsLoading(false)
            return false
        }
        if (formFields.email === "") {
            context.opentoast("error", "Please Provide Email")
            setIsLoading(false)
            return false
        }
        if (formFields.mobile === "") {
            context.opentoast("error", "Please Provide Mobile No")
            setIsLoading(false)
            return false
        }

        editData(`/api/user/update-user-details/${userId}`, formFields, { withCredentials: true })
            .then((res) => {
               if(res!==false){
                console.log(res)
                context.opentoast("success",res?.message)
                setIsLoading(false)
               }
               else{
                context.opentoast("error",res?.message)
               }
            })


    };

    return (
        <div className='py-10 w-full'>
            <div className="container flex items-center gap-4">
                <div className="left w-[30%]">
                    <UserAccountSideBar />
                </div>

                <div className="left w-[70%]">
                    <div className="card shadow-xl rounded-xl p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="w-full p-3 flex flex-col items-center justify-center">
                                <div className="head flex flex-col items-center">
                                    <IoShieldCheckmarkOutline style={{
                                        fontSize: '100px'
                                    }} />
                                    <p className='mt-4 uppercase font-bold text-[20px]'>Personal Information</p>
                                </div>
                                <div className="full-name flex gap-4 w-[70%] mt-4 items-start justify-start">
                                    <TextField
                                        id="firstName"
                                        label="First Name "
                                        variant="outlined"
                                        className='w-full'
                                        name="name"
                                        value={formFields.name}
                                         disabled={isLoading === true ? true : false}
                                        onChange={onChangeInput}
                                    />

                                </div>

                                <div className="email flex gap-4 w-[70%] mt-4 items-start justify-start">
                                    <TextField
                                        id="email"
                                        label="Email "
                                        type="email"
                                        variant="outlined"
                                        className='w-full'
                                        name="email"
                                        value={formFields.email}
                                            disabled={true}
                                        onChange={onChangeInput}
                                    />
                                </div>
                                <div className="phone-number  gap-4 w-[40%] mt-4 items-start justify-start">
                                    <TextField
                                        label="Phone Number"
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    +91
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                        type="tel"
                                        name="mobile"
                                        value={formFields.mobile}
                                            disabled={isLoading === true ? true : false}
                                        onChange={onChangeInput}
                                    />

                                </div>

                                <div className="button mt-4 flex gap-4">
                                    <Button
                                        type="submit"
                                        style={{ backgroundColor: 'rgb(59 255 59)' }}
                                        disabled={!validateValues}
                                        className='border border-gray-500 px-4 w-full bg-green-400 text-black flex gap-3'
                                    >
                                        {
                                            isLoading === true ? <CircularProgress color="inherit" /> : "Save"
                                        }

                                    </Button>

                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAccount
