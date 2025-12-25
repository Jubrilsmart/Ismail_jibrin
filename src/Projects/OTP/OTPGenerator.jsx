// import './pg.css'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Return from '../../components/Return';

function OTPGenerator() {
  const [timer, setTimer] = useState(0);
  const [startCountDown, setCountDown] = useState(false);
  const [otp, setOtp] = useState(null);
  const [timerElement, setTimerElement] = useState(false)
  const ref = useRef(null);

  useEffect(() => {
    if (timer <= 0) {
      ref.current.disabled = false;
      setCountDown(false)
      return;
    }

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, startCountDown]);

  const handleClick = () => {
    ref.current.disabled = true;
    setTimer(5)
    setCountDown(true);
    setOtp(getOTP());
    setTimerElement(true);
  }

  function getOTP() {
    const otp = []
    for (let i = 0; i < 6; i++) {
      const randomNum = Math.floor(Math.random() * 9)
      otp.push(randomNum)
    }
      return otp.join('')
  }


  return (
    <div className="absolute inset-0 flex justify-center items-center bg-light dark:bg-dark dark:text-light">
      <Return />
      <div className=' size-70 text-center space-y-10'>
        <h1 id="otp-title" className='text-5xl font-bold'>
          OTP Generator
        </h1>
        <h2 id="otp-display" className='text-2xl font-sans'>
          {otp ? otp : "Click 'Generate OTP' to get a code"}
        </h2>
        <p id="otp-timer" aria-live="assertive" className='text-xl'>
          {timerElement ? (timer > 0 ? `Expires in: ${timer} seconds` : "OTP expired. Click the button to generate a new OTP.") : ''}
        </p>
        <button ref={ref} id="generate-otp-button" onClick={handleClick}
        className='bg-blue-500 px-2 py-1 rounded-md text-xl hover:cursor-pointer hover:bg-blue-600'
        >
          Generate OTP
        </button>
      </div>
    </div>
  )
};

export default OTPGenerator