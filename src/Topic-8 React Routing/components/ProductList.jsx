import React from 'react'

const ProductList = ({id,images,title, price, description, category}) => {
    
    const customizedDescription = () => description.length > 5 ? description.split(" ").slice(0,5).join(" "): description
    
  return (
    <div className='relative w-65 h-75 p-5 rounded-lg border-2 border-gray-200 bg-white'>
        <div className='w-full h-[65%] border-2 border-gray-200 rounded-lg'>
            <img src={images[0]} alt="" className='w-full h-full object-contain'/>
        </div>

        <div>
            <div className='font-semibold tracking-wide'>{title}</div>
            <div className='truncate'>{customizedDescription()}</div>
            <div className='font-semibold'>&#36;{price} /-</div>
            <div className='absolute top-5 right-5 bg-black text-white font-medium tracking-wide capitalize text-sm px-3 py-0.5 rounded-md'>{category}</div>
        </div>
    </div>
  )
}

export default ProductList