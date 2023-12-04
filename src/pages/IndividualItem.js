import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import context from '../component/context/maincontext'
import car from '../image/car1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
const IndividualItem = () => {
  // const [myCar,setMyCar]=useState({Name:''})
  const navigate=useNavigate()
  const {cars,myCar,setMyCar}=useContext(context)
  const {id}=useParams()
  const FindingCar=async()=>{
    const car=await cars.find(res=>res._id===id)
    setMyCar(car)
    console.log("hello")
  }
  FindingCar()
  const handleBuy=(e)=>{
    e.preventDefault();
    navigate(`/car/payment/${myCar._id}`)

  }
  console.log(id)
  return (
    <div className='mt-20 w-4/5 pt-5 pl-5 mx-auto bg-gray-200 pb-10'>
    {cars.length===0?'Loading...':<div><div className='flex gap-10'>
      <img src={car} alt="" className='w-1/3'/>
      <div className='flex-1'>
      <div className=' font-bold text-2xl'>{myCar.Name}</div>
      <div className='flex text-xs'>{Array.from({ length: 5 }, (_, i) => (
            <div key={i}><FontAwesomeIcon icon={faStar}/></div>
        ))}</div>
        <div className='mt-2'>Brand: Ferrari</div>
        <div className='pt-10'><b>Initial Price:</b>${myCar.Price}</div>
        <div className='text-4xl pt-2 text-red-600'>$ {myCar.Price-myCar.Price*20/100}M</div>
        
        <button className='text-xl mt-10 bg-red-300 px-4 py-3 rounded-3xl text-white hover:scale-125 hover:bg-red-400 transition-all' onClick={handleBuy}>Buy Now</button>
      </div>
      <div className='text-xs pr-5 space-y-3'>
        <div><b>Delivery Location:</b> Baneshwor, Kathmandu</div>
        <div><b>Standard Delivery Time:</b> 3-4 Business Days</div>
        <div><b>Available Payment Method:</b><ul><li>Cash</li><li>FonePay</li><li>Khalti</li></ul></div>
        <div><b>Return Available:</b>Yes</div>
        <div><b>Return Days:</b> Under 5 days</div>
        <div><b>Sold By:</b><ul>
          <li className=' text-base'>Kuro Traders</li>
          <li>Kathmandu, Baneshwor</li>
          <li>+977 12345678</li>
          <li>Rating: <b>98%</b></li>
        </ul></div>
      </div>
    </div>
    <div className='w-2/3'>
      <h4 className='pt-10 font-bold text-xl'>Product Description:</h4>
      <div>{myCar.Description}</div>

    </div>
    </div>
    }
    </div>
  )
}

export default IndividualItem