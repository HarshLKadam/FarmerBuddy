import React, { useState } from 'react';

const OtpBox = ({ length, onChange }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));

    const handleChange = (value, index) => {
        if (isNaN(value)) return; 

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

       
        if (onChange) {
            onChange(newOtp.join(''));
        }

      
        if (value && index < length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    return (
        <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }} className="otp-box">
            {otp.map((data, index) => (
                <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-[45px] h-[45px] text-center text-[17px] border border-slate-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400 "
                />
            ))}
        </div>
    );
};

export default OtpBox;
