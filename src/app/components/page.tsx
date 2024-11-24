import React from 'react'
import Image from 'next/image'
import logo from '../favicon.ico'
  
const Card = () => {
  return (
    <div className='flex justify-around my-12 flex-col items-center md:flex-wrap md:flex-row lg:flex-nowrap'>

    <div className='flex flex-col mb-6 sm:my-3 w-fit md:mx-12 border-4 border-gray-600 rounded-xl justify-center p-6'>
      <Image
      src={logo}
      alt='Product Image'
      width={220}
      height={220}
      />
    <h3 className='my-2 font-bold text-slate-700'>THE `NEXT` GEN PRODUCT</h3>
    <h5 className='text-center font-extrabold text-2xl text-green-600'>$ 4.99</h5>
    <button className='border-2 m-4 py-1 hover:bg-slate-400 hover:text-slate-800 rounded-lg bg-black text-white text-lg font-semibold border-gray-600'>Buy Now</button>
    </div>
    
    <div className='flex flex-col my-6 sm:my-3 w-fit md:mx-12 border-4 border-gray-600 rounded-xl justify-center p-6'>
      <Image
      src={logo}
      alt='Product Image'
      width={220}
      height={220}
      />
    <h3 className='my-2 font-bold text-slate-700'>THE `NEXT` GEN PRODUCT</h3>
    <h5 className='text-center font-extrabold text-2xl text-green-600'>$ 2.16</h5>
    <button className='border-2 m-4 py-1 hover:bg-slate-400 hover:text-slate-800 rounded-lg bg-black text-white text-lg font-semibold border-gray-600'>Buy Now</button>
    </div>

    <div className='flex flex-col mt-6 sm:my-3 w-fit md:mx-12 border-4 border-gray-600 rounded-xl justify-center p-6'>
      <Image
      src={logo}
      alt='Product Image'
      width={220}
      height={220}
      />
    <h3 className='my-2 font-bold text-slate-700'>THE `NEXT` GEN PRODUCT</h3>
    <h5 className='text-center font-extrabold text-2xl text-green-600'>$ 8.49</h5>
    <button className='border-2 m-4 py-1 hover:bg-slate-400 hover:text-slate-800 rounded-lg bg-black text-white text-lg font-semibold border-gray-600'>Buy Now</button>
      </div>
    
    </div>
  )
}

export default Card