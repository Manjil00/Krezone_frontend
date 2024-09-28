import React from 'react'

//COMPONENTS
import Section4 from './Section4'
import Section5 from './Section5'

const Section45 = () => {
return (
<div className="Section45 relative h-auto w-full bg-white mt-2">
    <img src='../images/Rectangle 32.png' className='hidden md:block relative z-0' alt='bgRectangle'/>

    <div className="2Sections relative md:absolute inset-0 h-full w-full object-cover z-1 mt-20">
    <Section4/>
    <Section5/>
    </div>

</div>
)
}

export default Section45;
