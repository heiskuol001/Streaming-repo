import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
      <>
          <div className="h-[100vh] w-[100%] bg-blue-400">
              <div className="h-[50px] w-[100%] bg-pink-500">
                  <ul>
                      <li className="inline-block p-3 text-white font-bold"><Link to='/FoodCard'>FoodCard</Link></li>
                      <li className="inline-block p-3 text-white font-bold"><Link to='/GehgehForm'>GehgehForm</Link></li>
                      <Link to='/'><li className="inline-block p-3 text-white font-bold">HomePage</li></Link>
                  </ul>
              </div>
         </div>
      </>
  )
}

export default HomePage
