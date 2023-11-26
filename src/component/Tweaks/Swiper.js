import React,{useContext, useEffect, useState} from 'react'
import UseCar from '../../hook/useCar'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow ,Pagination ,Navigation} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import context from '../context/maincontext';
import car1 from '../../image/car2.jpg'
import car0 from '../../image/car3.jpg'
import car2 from '../../image/car4.jpg'
import car3 from '../../image/car5.jpg'
import car4 from '../../image/car2.webp'

const Swiperz = ({type}) => {
    const {cars}=useContext(context);
    const car=[car1,car2,car3,car4,car0]
  return (
    <div>
        <div className="container w-full">
            
            {cars.length!==0?
            <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={3}
  coverflowEffect={{
    rotate: 0,
    stretch: -10,
    depth: 100,
    modifier: 2.5,
  }}
  pagination={{el:'swiper-pagination',clickable:true}}
  navigation={{
    nextEl:'swiper-button-next',
    prevEl:'swiper-button-prev',
    clickable:true
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}

  className='swiper_container w-full'
>{

type==='hot'?

    cars.filter((n, i) => n.Price >= 100).map((n, i) => (
  <SwiperSlide key={n._id}>
    <div className='screen_swiper relative rounded-xl overflow-hidden'>
      <img src={car[i % 5]} alt="acnac" className='h-full' />
      <div className='absolute bottom-2 right-5 text-white text-3xl font-bold hover:text-red-500'>{n.Name}</div>
      <div className='absolute top-3 -left-16 px-20 py-3 bg-red-700 text-white -rotate-45'>20% off</div>
    </div>
  </SwiperSlide>
))
    :
    cars.map((n,i)=>(<SwiperSlide key={n._id} >
    <div className=' screen_swiper relative rounded-xl overflow-hidden'><img src={car[i%5]} alt="acnac" className='h-full' />
    <div className='absolute bottom-2 right-5 text-white text-3xl font-bold hover:text-red-500'>
      <div className=' text-right'>{n.Name}</div>
      <p className=' text-lg'>${n.Price}M</p>
    </div>
        
    </div></SwiperSlide>))
}
  
 
    
  {/* <div className="slider-controller">
    <div className="swiper-button-prev slider-arrow">
        <ion-icon name='arrow-back-outline' ></ion-icon>
    </div>
    <div className="swiper-button-next slider-arrow">
        <ion-icon name='arrow-forward-outline' ></ion-icon>
    </div>
    <div className="swiper-pagination"></div>
  </div> */}
</Swiper>:<div className='screen_swiper text-center font-extrabold text-3xl'>
Loading...
</div>}
        </div>
        
    </div>
  )
}

export default Swiperz