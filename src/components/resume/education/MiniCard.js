import React from 'react'

const MiniCard = ({title, subtitle, result,dec}) => {
  return (
    <div className='w-full h-1/3 group flex'>
      <div className='w-10 h-[6px] mt-16 relative bg-black '>
        <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center
        items-center bg-black bg-opacity-60 group-hover:bg-gray-100  duration-300'></span>
      </div>
      <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300
      rounded-lg px-10 flex flex-col justify-center pag-10 shadow-shadowOne'>
        <div className='flex justify-between items-center'>
           <div>
          <h3 className='text-2xl font-semibold group-hover:text-white duration-300'>{title}</h3>
          <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>{subtitle}</p>
        </div>
        <div>
          <p className='w-20 h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex 
          justify-center items-center shadow-shadowOne text-sm font-medium'>{result}</p>
        </div>
        </div>
        <div className='mt-7'>
    <p className=' text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>{dec}</p>
        </div>
      </div>
      </div>
  )
}

export default MiniCard