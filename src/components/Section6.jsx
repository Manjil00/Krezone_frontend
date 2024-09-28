import React from 'react'

const Section6 = () => {
return (
    <div className='referORAppoint bg-white h-auto w-full p-6 md:mt-20'>

        <h1 className='text-center text-black font-Mona font-bold text-xl md:text-4xl '>Overcome Ignorance and <br/>Fight and Equality</h1>

        <div className="btns flex justify-center items-center mt-3 gap-8 md:gap-16">
            <button className="book h-auto w-auto  p-3 border-[1px] border-black
        text-black hover:text-white bg-white hover:bg-slate-700 rounded-xl">
                Book an Appointment
            </button>

            <button className="refer h-auto w-auto  p-3 border-[1px] border-black
        text-black hover:text-white bg-white hover:bg-slate-700 rounded-xl">
                Refer Someone
            </button>

        </div>
    </div>
)
}

export default Section6;
