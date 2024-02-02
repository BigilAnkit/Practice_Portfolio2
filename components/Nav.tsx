import React from 'react'

const Nav = () => {
  return (
    <div className='fixed w-[100%] z-[1000] bg-gray-800'>
    <div className='flex items-center h-[12vh] justify-between w-[80%] mx-auto'>
        <div className='font-logo text-white text-[18px]'>
            <span className='text-[30px] md:text-[40px] text-yellow-400'>WD</span>
            Warriors
        </div>
        <ul className='md:flex hidden items-center space-x-10'>
            <li><a className='nav_link' href="#">Home</a></li>
            <li><a className='nav_link' href="#">About</a></li>
            <li><a className='nav_link' href="#">Services</a></li>
            <li><a className='nav_link'href="#">Blog</a></li>
            <li><a className='nav_link' href="#">Contact</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Nav