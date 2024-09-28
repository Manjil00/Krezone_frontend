import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//ICONS
import { FaArrowRightLong } from "react-icons/fa6";


const Section5 = () => {

     //Caraseoul responsive
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    
return (
    <div className="Section4 h-auto w-full bg-white mt-8 p-5">
    <div className="Appointement flex justify-center items-center gap-2">
    <img src="../icons/heartmonitor.png" className="w-[40px] h-[30px] md:h-auto md:w-auto" alt="testimonials"/>
    <p className="font-Mona text-sm md:text-3xl text-customBlue">OUR BLOGS</p>
    </div>
    <h1 className="stories text-black font-Mona font-bold  text-sm md:text-4xl text-center ">Latest Blogs & Articles</h1>

    <Carousel responsive={responsive}  swipeable={true} className='mt-5 p-3 gap-4  bg-white'>

    <div className="card1 h-auto w-[90%] md:w-[350px] bg-beige rounded-xl mx-2 mb-5">
                    <img src='../images/blogImg.png' className='w-full h-[100px] md:w-auto md:h-auto' alt='Card1' />
                    <h1 className="fitness font-Mona font-bold text-sm md:text-2xl p-1 md:m-2 ">Adaptive Sports: Breaking <br /> Barriers in Physical Fitness</h1>
                    <h2 className="fitness font-Mona font-normal text-xs md:text-lg p-2">Lorem Ipsun is simply dummy text of <br /> the printing and typesetting industry </h2>
                    <div className="ViewDetails flex justify-center items-center gap-4 m-4 font-Mona font-normal text-xs md:text-lg p-2 cursor-pointer">
                        <h2 className='txt '>View Details </h2>
                        <FaArrowRightLong />
                    </div>
                </div>

        <div className="card2 h-auto w-[90%] md:w-[350px] bg-beige rounded-xl mx-2 mb-5">
                    <img src='../images/blogImg.png' className='w-full h-[100px] md:w-auto md:h-auto' alt='Card1' />
                    <h1 className="fitness font-Mona font-bold text-sm md:text-2xl p-1 md:m-2 ">Adaptive Sports: Breaking <br /> Barriers in Physical Fitness</h1>
                    <h2 className="fitness font-Mona font-normal text-xs md:text-lg p-2">Lorem Ipsun is simply dummy text of <br /> the printing and typesetting industry </h2>
                    <div className="ViewDetails flex justify-center items-center gap-4 m-4 font-Mona font-normal text-xs md:text-lg p-2 cursor-pointer">
                        <h2 className='txt '>View Details </h2>
                        <FaArrowRightLong />
                    </div>
                </div>

                <div className="card3 h-auto w-[90%] md:w-[350px] bg-beige rounded-xl mx-2 mb-5">
                    <img src='../images/blogImg.png' className='w-full h-[100px] md:w-auto md:h-auto' alt='Card1' />
                    <h1 className="fitness font-Mona font-bold text-sm md:text-2xl p-1 md:m-2 ">Adaptive Sports: Breaking <br /> Barriers in Physical Fitness</h1>
                    <h2 className="fitness font-Mona font-normal text-xs md:text-lg p-2">Lorem Ipsun is simply dummy text of <br /> the printing and typesetting industry </h2>
                    <div className="ViewDetails flex justify-center items-center gap-4 m-4 font-Mona font-normal text-xs md:text-lg p-2 cursor-pointer">
                        <h2 className='txt '>View Details </h2>
                        <FaArrowRightLong />
                    </div>
                </div>

                <div className="card4 h-auto w-[90%] md:w-[350px] bg-beige rounded-xl mx-2 mb-5">
                    <img src='../images/blogImg.png' className='w-full h-[100px] md:w-auto md:h-auto' alt='Card1' />
                    <h1 className="fitness font-Mona font-bold text-sm md:text-2xl p-1 md:m-2 ">Adaptive Sports: Breaking <br /> Barriers in Physical Fitness</h1>
                    <h2 className="fitness font-Mona font-normal text-xs md:text-lg p-2">Lorem Ipsun is simply dummy text of <br /> the printing and typesetting industry </h2>
                    <div className="ViewDetails flex justify-center items-center gap-4 m-4 font-Mona font-normal text-xs md:text-lg p-2 cursor-pointer">
                        <h2 className='txt '>View Details </h2>
                        <FaArrowRightLong />
                    </div>
                </div>
    </Carousel>
    </div>


)
}

export default Section5;
