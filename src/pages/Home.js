import React, { useEffect, useState }  from 'react'
// import useUser from '../hook/useUser'
import UseCar from '../hook/useCar'
import {motion} from 'framer-motion'
import car from '../image/car1.jpg'

import Swiperz from '../component/Tweaks/Swiper'
const Home = () => {
  
  // const [cars,setCars]=useState([])
  // setInterval(()=>{console.log(all)},2000)
  // const {getCars}=UseCar()
  
  
  window.addEventListener('scroll',()=>{
    const expand=document.querySelector('.expand')
    const scroll=window.scrollY
    console.log(scroll)
    if(scroll){
      expand.style.transform=`scale(${scroll*2})`
    
    }


  })
 
  return (
    <div className='relative'>
    <div className='w-2 h-2 bg-black absolute -z-10 expand'></div>
    <div className='w-4/5 mx-auto pt-10'>
      <div className='flex relative'>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2,delay:0.7}}
        className='h-screen flex flex-col  justify-center'><h3 className='text-3xl'>One Solution to all the transport deals!!</h3>
          <p className='text-md w-4/5'>No need to search all over the internet for best servies and deals on Vehicles</p>
        </motion.div>
        <motion.div 
        initial={{x:500}}
        animate={{x:0}}
        className='flex items-center'><img src={car} alt=""/></motion.div>
      </div>
      <div><h1 className='text-3xl font-extrabold font-serif mb-20 text-red-400'>Hottest Deals</h1></div>
      
      <Swiperz type='hot'/>

      <div><h1 className='text-3xl font-extrabold font-serif mb-20 pt-20 text-red-400'>Most Popular</h1></div>
      
      <Swiperz type='popular'/>
      <div className='flex pt-20'>

      <div className='text-white text-2xl text-center pb-10 font-extrabold'>
        <h2>Find Your Perfect Partner</h2>
        <p className='text-sm font-extralight pb-10'>Looking for a perfect companion can be quite hard and we hope to make it a little easier.</p>
        <form action="" className='flex flex-col items-center text-xl'>
          <label htmlFor="" className='font-extralight'>Price </label>
          <input type="Number" className='text-black text-center w-48 h-8 text-2xl rounded-2xl mb-10' />
          <label htmlFor="" className='font-extralight'>Brand </label>
          <input type="text" className='text-black text-center w-48 h-8 text-2xl rounded-2xl mb-10' />
          <label htmlFor="" className='font-extralight'>Color </label>
          <input type="text" className='text-black text-center w-48 h-8 text-2xl rounded-2xl mb-10' />
          <button className='bg-white mt-4 px-14 py-1 rounded-2xl hover:scale-125 transition-all text-black'>Search</button>
        </form>
      </div>
      <div className='bg-white w-full'><h2 className='text-center'>Hello world</h2></div>
    
    </div>
    </div>
    </div>
  )
}

export default Home