import React from 'react'

const Footer = () => {
return (
    <div className='footer flex flex-col md:flex-row justify-between items-start md:items-center gap-5  mx-5 md:mx-20 mt-12 bg-white'>
        <div className="Navigation">
        <ul className=" cursor-pointer text-sm md:text-base font-Mona">
        <li className='font-Mona text-xl md:text-2xl font-semibold'>NAVIGATION</li>
        <li className='text-start md:text-center mt-2'>Home</li>
        <li  className='text-start md:text-center mt-2'>Services</li>
        <li  className='text-start md:text-center mt-2'>Referral</li>
        <li  className='text-start md:text-center mt-2'>About Us</li>
        <li  className='text-start md:text-center mt-2'>Contact Us</li>
        </ul>
        </div>

        <div className="WHAT WE DO">
        <ul className=" cursor-pointer text-sm md:text-base font-Mona">
        <li className='font-Mona text-xl md:text-2xl font-semibold'>WHAT WE DO</li>
        <li className='text-start md:text-center mt-2'>Household Task</li>
        <li  className='text-start md:text-center mt-2'>Assist-Travel/Transport</li>
        <li  className='text-start md:text-center mt-2'>Group/Center Activity</li>
        <li  className='text-start md:text-center mt-2 mb-0 md:mb-8'>Participate Community</li>
        </ul>
        </div>

        <div className="LEGAL">
        <ul className=" cursor-pointer text-sm md:text-base font-Mona">
        <li className='font-Mona text-xl md:text-2xl font-semibold'>LEGAL</li>
        <li className='text-start md:text-center mt-2 '>General Info</li>
        <li  className='text-start md:text-center mt-2'>Privacy Policy</li>
        <li  className='text-start md:text-center mt-2 mb-0 md:mb-20 '>Terms Of Service</li>
        </ul>
        </div>

        <div className="TALK TO US ">
        <ul className=" cursor-pointer text-sm md:text-base font-Mona">
        <li className='font-Mona text-xl md:text-2xl font-semibold'>TALK TO US</li>
        <li className='text-start md:text-center mt-2'>logo.support@logo.com</li>
        <li  className='text-start md:text-center mt-2 mb-0 md:mb-32'>+66 2399 1145</li>
        </ul>
        </div>
    </div>
)
}

export default Footer;
