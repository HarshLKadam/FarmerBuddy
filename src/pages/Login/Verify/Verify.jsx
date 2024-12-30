import React, { useState } from 'react';
import { HiOutlineShieldCheck } from "react-icons/hi2";
import OtpBox from '../../../components/OtpBox/OtpBox';
import Button from '@mui/material/Button';

const Verify = () => {
    const [otp, setOtp] = useState("");

    const handleOtpChange = (value) => {
        setOtp(value);
        console.log("Current OTP:", value);
    };

    const VerifyOTP=(e)=>{
        e.preventDefault();
        alert(otp)
    }

    return (
        <div className='py-10'>
            <div className="container">
                <div className="card shadow-md w-[400px] m-auto bg-white p-4 flex">
                    <h4 className='text-center font-bold flex justify-center gap-4 items-center'>
                        <p><HiOutlineShieldCheck style={{ fontSize: '40px' }} /></p>
                        <p>Verify OTP</p>
                    </h4>

                    <p className='text-center mb-4 text-green-500'>OTP send to
                        <span className='font-bold text-[18px] ml-2'>farmer@gmail.com</span>
                    </p>


                    <form onSubmit={VerifyOTP}>
                        <OtpBox length={6} onChange={handleOtpChange} />

                        <div className="flex items-center justify-center">
                            <Button
                                type='submit'
                                className='w-full text-black bg-green-500 mt-4 border border-slate-500'
                                style={{
                                    backgroundColor: 'rgb(59 255 59)'
                                }}
                            >
                                Verify OTP
                            </Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Verify;
