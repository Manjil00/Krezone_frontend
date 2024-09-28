import React from 'react'


//ICONs
import { PiNumberSquareOneFill } from "react-icons/pi";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";


const Section4 = () => {
return (
    <div className="Section4 h-auto w-full bg-white flex justify-evenly items-center mt-8 p-5">
    <div className="leftSec flex flex-col gap-5">
    <div className="Appointement flex justify-center items-center">
    <img src="../icons/heartmonitor.png" className="w-[40px] h-[30px] md:h-auto md:w-auto" alt="testimonials"/>
    <p className="font-Mona text-sm md:text-3xl text-customBlue">APPOINTMENT</p>
    </div>
    <h1 className="stories text-black font-Mona font-bold  text-sm md:text-4xl ">Wanna Book An Appointement</h1>
    <p className="text-black font-Mona text-sm md:text-2xl ">At Impact Disability Support Service, we're here to help you <br/>every step of the way. Making an appointement is simple and <br/> easy</p>
    

    <div className="AppointmentWays flex">
    <PiNumberSquareOneFill className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'/>
    <div className="how ml-3">
    <h1 className='text-sm md:text-xl font-bold font-Mona '>Initial Contact</h1>
    <p className='text-xs md:text-lg font-normal font-Mona '>Reach out via phone or our website's contact form.</p>
    </div>
    </div>
    <div className="AppointmentWays flex">
    <PiNumberSquareTwoFill className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'/>
    <div className="how ml-3">
    <h1 className='text-sm md:text-xl font-bold font-Mona '>Appointment Schedule</h1>
    <p className='text-xs md:text-lg font-normal font-Mona '>Reach out via phone or our website's contact form.</p>
    </div>
    </div>
    <div className="AppointmentWays flex">
    <PiNumberSquareThreeFill className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'/>
    <div className="how ml-3">
    <h1 className='text-sm md:text-xl font-bold font-Mona '>Service Delivery</h1>
    <p className='text-xs md:text-lg font-normal font-Mona '>Reach out via phone or our website's contact form.</p>
    </div>
    </div>

    <div className="btn flex justify-center items-center">
    <button className="book btnWatch bg-customBlue text-white rounded-lg text-center
    h-[40px] md:h-[50px] w-[200px] md:w-[250px] gap-3 text-sm md:text-xl font-Mona font-normal p-3">Book An Appointment</button>
    </div>
    

    </div>

    <div className="Doc">
    <img src="../images/doctor.png" className="hidden lg:block" alt="videoplayer"/>
    </div>
</div>
)
}

export default Section4;
