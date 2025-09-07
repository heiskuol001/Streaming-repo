import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className='bg-blue700 flex items-center justify-evenly'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Product</Link>
    </nav>
  )
}

export default NavBar
