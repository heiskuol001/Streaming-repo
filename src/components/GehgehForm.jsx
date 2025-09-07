import React from 'react'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function GehgehForm() {
  const formRef = useRef(null)

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.style.zIndex = '100'
      
    }
  }
  return (
    <div className='h-[100vh] w-full flex items-center justify-center bg-gray-600 '>
      <form className='h-[90%] w-[90%] bg-white shadow-2xl rounded-2xl flex gap-2 absolute' action="">
        <div className='h-[100%] w-[50%] flex items-center flex-col border-r-1'>
          <p className='text-center font-bold mt-6'> Hello! Welcome to GehGeh University</p>
          <p className='text-[8px]'>Don't have an account yet?</p>
          <button className='border-1 rounded-lg w-[65px] mt-1 text-[12px] hover:bg-gray-700 hover:cursor-pointer hover:text-white '>Sign Up</button>
        </div>
        <div className='h-[100%] w-[50%] flex items-center justify-center flex-col gap-4 text-[12px]'>
          <h1 className='font-bold'>Sign In</h1>
          <p className='text-[7px] font-bold'>University of Wisdom and Understanding</p>
          <table className='table-auto border-collapse border border-black w-[80%] h-[40px] text-[6px]'>
            <tr>
              <td rowSpan={2} className='px-1 border-r-1 text-center'><FontAwesomeIcon icon={faUser} /></td>
              <td><label htmlFor="name">Name</label></td>
            </tr>
            <tr>
              <td><input className='border-t-1 w-full border-0 focus:outline-0 h-[23px]' placeholder='Enter your name' type="text" /></td>
            </tr>
          </table>
           <table className='table-auto border-collapse border border-gray-600 w-[80%] h-[40px] text-[6px]'>
            <tr>
              <td rowSpan={2} className='px-1 border-r-1 text-center'><FontAwesomeIcon icon={faLock} /></td>
              <td><label htmlFor="name">Password</label></td>
            </tr>
            <tr>
              <td><input className='border-t-1 w-full focus:outline-0 h-[23px]' placeholder='Enter your name' type="password" /></td>
            </tr>
          </table>
          <button onMouseEnter={handleSubmit} className='border-1 w-[80%] text-[8px] text-center p-1 hover:bg-red-600 hover:cursor-pointer hover:text-white'>sign in</button>
        </div>
      </form>
      <form ref={formRef} className='h-[100px] w-[100px] bg-yellow-500 rounded-[50%] relative z-[-1]' action="">
        <FontAwesomeIcon icon={faCheck} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[30px]' />
      </form>
    </div>
  )
}

export default GehgehForm
