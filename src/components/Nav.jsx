import React, { useState } from 'react';


import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS

const Nav = () => {

const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
<nav className="flex justify-between px-6 py-1 relative z-100  bg-white">
    <div className="flex justify-center items-center ">
    <img src="../images/LOGO.png" className="cursor-pointer" alt="LOGO"/>

    </div>
    <div className={`fixed min-h-[30vh] left-0 top-[50px] w-full p-5 flex flex-col md:static md:flex bg-white md:bg-transparent md:min-h-fit md:w-auto gap-9 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
        <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-base font-Mona">
        <li className="hover:font-semibold">Home</li>
        <li className="hover:font-semibold">Services</li>
        <li className="hover:font-semibold">Referral</li>
        <li className="hover:font-semibold">About Us</li>
        <li className="hover:font-semibold ml-5 rounded-lg bg-slate-700 text-center text-white p-[8px] w-[200px] md:w-auto">Book an Appointment</li>
        </ul>
    </div>
    <div>
        <button onClick={toggleNavMenu} className="md:hidden">
            {
            isNavOpen ? <RxCross1 className="text-2xl text-black" /> :
            <RxHamburgerMenu className={`text-2xl text-black  ${isNavOpen ? 'hidden' : 'block'}`} />
            }
        </button>
    </div>
</nav>
)
}

export default Nav;
