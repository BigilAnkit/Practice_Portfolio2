import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

const AboutMe = () => {
  return (
    <div className='mt-[3rem] bg-black pb-[3rem]'>
        <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
            <div>
                <p className='headin_mini'>About me</p>
                <h1 className='headin_primary'>
                    Professional <span className='text-yellow-400'> Website </span>for your busniess</h1>
                    <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta eius quia adipisci? Voluptatibus sit sint fuga molestiae ullam. Perspiciatis aliquid in consequuntur perferendis numquam, beatae debitis? Expedita, libero doloribus!
                    </p>
                    <div className='mt-[2rem] space-x-3'>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
                            <p className='text-[18px] text-white'>FrontEnd Development</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
                            <p className='text-[18px] text-white'>BackEnd Development</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
                            <p className='text-[18px] text-white'>Web Development</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
                            <p className='text-[18px] text-white'>MERN Development</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
                            <p className='text-[18px] text-white'>Ract Development</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe