import React from 'react'

//ICONS
import { PiGooglePlayLogoFill } from "react-icons/pi";

const Section3 = () => {
return (
    <div className="Section3 h-auto w-full bg-darkBeige flex justify-evenly items-center mt-8 p-5">
    <div className="leftSec flex flex-col gap-5">
    <div className="testemonials flex justify-center items-center">
    <img src="../icons/heartmonitor.png" className="w-[40px] h-[30px] md:h-auto md:w-auto" alt="testimonials"/>
    <p className="font-Mona text-sm md:text-3xl text-customBlue">TESTOMONIAL</p>
    </div>
    <h1 className="stories text-black font-Mona font-bold  text-sm md:text-4xl ">Our Success Stories</h1>
    <p className="text-black font-Mona text-sm md:text-2xl ">Discover the experience and success <br/>stories shared by those who care</p>
    <div className="btnWatch bg-customBlue rounded-lg text-center flex justify-center items-center
    h-[50px] w-[100px] md:w-[200px] gap-3 text-sm md:text-xl font-Mona font-semibold  ">
    <PiGooglePlayLogoFill />
    <button className="watch ">Watch</button>
    </div>
    </div>

    <div className="videoPlayer">
    <img src="../images/Video player.png" className="" alt="videoplayer"/>
    </div>
</div>
)
}

export default Section3
