import React from 'react'
import { useState, useEffect } from 'react'

const Learn = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }

    
  

   

   
  return (
    <div>
          {/* {count} */}
          <button className='border-1 bg-green-600 rounded py-2 px-2' onClick={decrement}>Decrement</button>
          {count}
          <button className='border-1 bg-green-600 rounded py-2 px-2' onClick={increment}>Increment</button>
    </div>
  )
}

export default Learn
