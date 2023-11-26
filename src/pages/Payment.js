import React, { useContext } from 'react'
import context from '../component/context/maincontext'
import car1 from '../image/car1.jpg'
const Payment = () => {
    const {myCar,user}=useContext(context)
  return (
    <div className='pt-20 w-4/5 m-auto flex gap-5'>
        <div  className='border-black border-solid border-2 flex-1'>
            <div className='text-2xl font-bold mb-10'>Product Details:</div>
            <div className='flex gap-5'>
                <div><img src={car1} alt="" className=' w-64'/></div>
                <div>
                    <div><b>Name:</b>{myCar.Name}</div>
                    <div><b>Price:</b>{myCar.Price}</div>
                    <div><b>Description:</b>{myCar.Description}</div>
                    <div><b>Brand:</b>Ferarri</div>
                    <div><b>Store Location:</b> Kathmandu, Baneshwor</div>
                    <div className='w-full h-1 bg-black my-10'></div>
                    <div className='text-xl'><b>User</b></div>
                    <div><b>Name:</b>{user.Name}</div>
                    <div><b>Email:</b>{user.Email}</div>
                    <div><b>Age:</b>{user.Age}</div>
                    <div><b>Location:</b>Kathmandu,Baneshwor</div>
                    <div className='text-3xl py-10'>Total Price: $ {myCar.Price}M</div>
                </div>
            </div>
        </div>
        <div className='w-1/5'>
            <p className='text-sm'>
                <b>Rules of Transaction:</b> <br />
                Products can be sold through various different means as stated previously like khalti,esewa,etc. But if needed 
                person can also rely on cash on hand approach of payment.
            </p>
        </div>
    </div>
  )
}

export default Payment