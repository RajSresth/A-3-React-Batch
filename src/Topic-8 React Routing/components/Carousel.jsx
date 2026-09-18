import React from 'react'

const Carousel = ({name,image}) => {
  return (
    <div className="w-full max-w-250 h-120">
        <img src={image} alt="" className='w-full h-full object-cover object-center' />
    </div>
  )
}

export default Carousel