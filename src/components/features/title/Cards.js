import React from 'react'
import {HiArrowRight} from 'react-icons/hi'
const Cards = ({title,dec,icon}) => {
  return (
    <div className='w-full px-12 h-80 py-10 rounded-lg 
    shadow-shadowOne flex group items-center bg-gradient-to-r from-bodyColor to-[#202327] group 
    hover:bg-gradient-to-r hover:from-black hover:to-[#1e2024] transition-colors
    duration-100
    '>

    <div className='h-72 overflow-y-hidden '>
    <div className='flex flex-col gap-6 translate-y-10 group-hover:translate-y-0 transition-fransform duration-500
     
    '
    >
          <div>
        <span className='text-5xl text-designColor'>{icon}</span>
    </div>
    <div className='flex flex-col gap-6'>
        <h2 className='text-2xl font-titleFont font-bold text-gray-300'>
            {title}
        </h2>
        <p className='base'>
            {dec}
        </p>
        <span className='text-2xl text-designColor'>
            <HiArrowRight/>
        </span>
    </div>
    </div>    
    </div>
  
    </div>
    
  )
}

export default Cards