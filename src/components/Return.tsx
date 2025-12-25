import React from 'react'
import { BiArrowBack, BiHome } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'

function Return() {
    const navigate = useNavigate()
  return (
    <div className='absolute left-5 top-5 flex gap-2 text-dark dark:text-light'>
        <Link to={'/'} className='p-1 border-2 border-dark dark:border-light rounded-md hover:scale-105'>
            <BiHome className='text-2xl'/>
        </Link> 
        <button className='p-1 border-2 border-dark dark:border-light rounded-md hover:cursor-pointer hover:scale-105'
        onClick={() => navigate(-1)}
        >
            <BiArrowBack className='text-2xl' />
        </button>
    </div>
  )
}

export default Return