import React from 'react'

const Section1 = () => {
return (
    <div className="Section1 h-auto w-full mt-3 bg-white relative z-0 ">
    <img src="../images/image 117.png" className="absolute inset-0 h-full w-full object-cover z-0" alt="bg"/>

    <div className="herosection flex  justify-evenly items-center relative z-10">

    <div className="leftSection flex flex-col justify-start items-center gap-3">
        <h1 className="header font-Mona font-bold text-md md:text-4xl text-start">Your Partner at <br/> Disability</h1>
        <p className="p font-Mona font-normal text-xs md:text-xl ml-4">Impact care seeks to provide good quality services for <br/>people with disabilities, ensuring that their individual <br/>requirements are met</p>
        <button className="appointment bg-slate-700 text-white p-2 rounded-lg text-xs md:text-xl ">Book an Appointment</button>
    </div>

    <div className="rightSection flex">
        <div className="heroimg">
        <img src="../images/hero photo.png" className="bg-white p-3" alt="herophoto"/>
        <img src="../icons/Component20.png" className="absolute bottom-40 -right-1 h-[30px] w-[30px] md:h-auto md:w-auto" alt="logoman"/>
        </div>
    </div>
    </div>
</div>
)
}

export default Section1
