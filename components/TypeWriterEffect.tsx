import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A React Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A Next JS Developer',
        1000,
        'A Mern Stack Developer',
        1000,
        'A Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold'
      repeat={Infinity}
    />
  )
}

export default TypeWriterEffect