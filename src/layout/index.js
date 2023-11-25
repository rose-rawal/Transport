import React from 'react'
import route from '../routes'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate()
  return (
    <div className='flex justify-between bg-red-400'>
        <h1 className='text-3xl font-bold text-white pl-5 py-4'>TpOrT</h1>
        <div className='w-1/2 '>
            <ul className='flex w-full font-mono text-xl h-full'>
                {route.map(n=>(
                    <li key={n.path} onClick={(e)=>{e.preventDefault();navigate(n.path)}}
                    className='hover:bg-red-600 h-full text-center cursor-pointer px-3 flex-1 pt-4'
                    >{n.name}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Header