import React from 'react'
import { useRef } from 'react'
import p3 from '../assets/p3.jpg'

function FoodCard() {
    const foodRef = useRef(null);

    const toggleSpinning = () => {
        if (foodRef.current) {
            foodRef.current.classList.toggle('animate-spin');
        }
  } 
  
     const toggleSpinStop = () => {
        if (foodRef.current) {
            foodRef.current.classList.remove('animate-spin');
        }
    } 

  return (
    <div className='w-full h-[100vh] flex items-center justify-center bg-pink-600'>
          <div className='h-[150px] w-[300px] rounded-3xl absolute  bg-white shadow-lg flex justify-center flex-col'>
              <h1 className='text-2xl'>Pizza</h1>
              <h1 className='text-gray-600'>Chicken pizza</h1>
              <h1 className='font-bold'>$8.60</h1>
              <button onMouseEnter={toggleSpinning} onMouseLeave={toggleSpinStop} className='hover:bg-red-600 cursor-pointer border-1 w-[90px] text-sm rounded-lg'>Order Now</button>
        
      </div>
      <div ref={foodRef} className='h-[120px] w-[120px] bg-yellow-600 relative rounded-[50%] ml-[210px]'>
        <img src={p3} className='rounded-[50%]' alt="" />
      </div>
    </div>
  )
}

export default FoodCard
