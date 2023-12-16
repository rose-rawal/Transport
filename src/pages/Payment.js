import React, { useContext, useState } from 'react'
import context from '../component/context/maincontext'
import car1 from '../image/car1.jpg'
import axios from 'axios'
import { getPayment } from '../api/cars'
const Payment = () => {
   
    const {myCar,user,setSuccess}=useContext(context)
    const handleCash=(e)=>{
        e.preventDefault();
        setSuccess(true);
        setTimeout(()=>{setSuccess(false)},3000)
    }
    const handleBuy=async(e)=>{
        e.preventDefault();
        // console.log(myCar)
        const payload={
  "return_url": 'http://localhost:3000/cart',
  "website_url": "http://localhost:3000",
  "amount": (myCar.Price-myCar.Price*20/100)*1000,
  "purchase_order_id": "test12",
  "purchase_order_name": "test",
  "customer_info": {
      "name": user.Name
  }
  
}

    try{
        const response=await getPayment(payload)
        console.log(response.data)
        if(response){
            window.location.href=`${response?.data?.payment_url}`
            // console.log(response?.data?.payment_url)
        }
    }
    catch(error){console.log('error:'+error)}
    }
  return (
    <div className='pt-20 w-4/5 m-auto flex gap-5 relative'>
    
        <div  className=' flex-1 p-5 bg-slate-100'>
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
                    <div className='text-3xl py-10'>Total Price: $ {myCar.Price-myCar.Price*20/100}M</div>
                    <div className='text-center'>
                        <h4 className='pb-4'>Pay Via:</h4>
                        <ul className='flex justify-between'>
                            <li><button className='px-4 py-2 bg-red-300 rounded-3xl hover:scale-125 hover:bg-red-400 transition-all' onClick={handleCash}>Cash</button></li>
                            <li><button className='px-4 py-2 bg-red-300 rounded-3xl hover:scale-125 hover:bg-red-400 transition-all' onClick={handleBuy}>Khalti</button></li>
                            
                        </ul>
                    </div>




                </div>
            </div>
        </div>
        <div className='w-1/5'>
            <p className='text-sm'>
                <b>Rules of Transaction:</b> <br />
                <ul>
                    <li>Products can be sold through various different means as stated previously like <b>khalti and esewa</b> But if needed 
                person can also rely on cash on hand approach of payment.</li>
                <li><b>Return Policy</b> of the items is according to sellers regulation so consider that before purchase.</li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default Payment