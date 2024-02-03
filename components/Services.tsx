import React from 'react'
import ServicesCard from './Helper/ServicesCard'

const Services = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#0b0c13]'>
        <div className='text-center'>
        <p className='heading_mini'>Popular Services</p>
        <h1 className='heading_primary'>My Special <span className='text-yellow-300'>Services</span> For You
        </h1>
        </div>  
        <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
            <div>
                <ServicesCard title='React Website' num='01'/>
            </div>
            <div>
                <ServicesCard title='Next JS Website' num='02'/>
            </div>
            <div>
                <ServicesCard title='Fullstack Website' num='03'/>
            </div>
            <div>
                <ServicesCard title='Node Js Api' num='04'/>
            </div>
            <div>
                <ServicesCard title='MERN WebApp' num='05'/>
            </div>
            <div>
                <ServicesCard title='Bug Fixing' num='06'/>
            </div>
        </div>
    </div>
  )
}

export default Services