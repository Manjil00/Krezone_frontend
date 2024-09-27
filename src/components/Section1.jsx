import React from 'react'

const Section1 = () => {
return (
<div className="Section1 h-auto w-full mt-3 md:mt-8 bg-white relative z-[-1] ">
    <img src="../images/image 117.png" className="absolute inset-0 h-full w-full object-cover z-0" alt="bg"/>

    <div className="herosection grid grid-cols-1 md:grid-cols-3 relative bg-white">

    <div className="leftSection flex flex-col justify-start items-start ml-16 mt-5 gap-5 z-0 bg-white">
        <h1 className="header font-Mona font-bold text-md md:text-4xl text-start">Your Partner at <br/> Disability</h1>
        <p className="p font-Mona font-normal text-xs md:text-xl">Impact care seeks to provide good quality services for <br/>people with disabilities, ensuring that their individual <br/>requirements are met</p>
        <button className="appointment bg-slate-700 text-white p-2 rounded-lg text-xs md:text-xl ">Book an Appointment</button>
    </div>

    <div className="rightSection flex bg-white z-0">
        <div className="heroimg">
        <img src="../images/hero photo.png" className="bg-white ml-60 p-3 md:block hidden h-auto w-auto z-0" alt="herophoto"/>
        <img src="../images/mobileframe.png" className="bg-white ml-5 p-3 md:hidden block h-auto w-auto z-0" alt="herophoto"/>
        <img src="../icons/Component20.png" className="absolute bottom-40 -right-1 h-[30px] w-[30px] md:h-auto md:w-auto z-0" alt="logoman"/>
        </div>
    </div>
    </div>
</div>
)
}

export default Section1
