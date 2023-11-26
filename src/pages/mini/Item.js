import React from 'react'
import car1 from '../../image/car1.jpg'
import car2 from '../../image/car2.jpg'
import car3 from '../../image/car3.jpg'
import car4 from '../../image/car4.jpg'
import car5 from '../../image/car5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { faStar } from '@fortawesome/free-regular-svg-icons'
const Item = ({data,i}) => {
    const car=[car1,car2,car3,car4,car5]
    const navigate=useNavigate()
  return (
    <div className='h-60 bg-gray-300 mb-5 hover:scale-125 transition-all' onClick={e=>{e.preventDefault();navigate(`/car/${data._id}`)}}>
        <div className='w-60 h-32 overflow-hidden'>
            <img src={car[i%5]} alt={data.Name} />
        </div>
        <div className='flex justify-between p-3'><h4 className='font-bold'>{data.Name}</h4>
        <h5>$ {data.Price}M</h5></div>
        <div className='flex px-3'>{Array.from({ length: 5 }, (_, i) => (
            <div key={i}><FontAwesomeIcon icon={faStar}/></div>
        ))}</div>
    </div>
  )
}

export default Item