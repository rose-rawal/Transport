import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faHeart, faThumbsUp} from '@fortawesome/free-regular-svg-icons'
const WhyUs = () => {
  return (
    <div className='flex justify-between gap-3 pb-10'>
        <div className='flex-1 text-center hover:shadow-lg hover:shadow-white'>
          <h4 className='text-xl font-bold pb-5'>Easy Finding</h4>
          <FontAwesomeIcon icon={faThumbsUp} className='text-6xl pb-10'></FontAwesomeIcon>
          <p className='px-9'>Our Main goal is to provide people with the most optimal and best car on their budget limit. 
          We hope everyone has the vehicles they prefer and complements their lifestyle witout the need of overexerting
          their pocket at any instance of time.</p>
        </div>
        <div className='flex-1 text-center hover:shadow-lg hover:shadow-white'>
          <h4 className='text-xl font-bold pb-5'>Best Service</h4>
          <FontAwesomeIcon icon={faChartLine} className='text-6xl pb-10'></FontAwesomeIcon>
          <p className='px-9 pb-5'>Our website provides a lot of various different services aside from just buying and selling cars. Many 
          such provided by us is trustworthy and smooth as well as nicely implemented such that there will be no gap and 
          problems to be encountered and if in any case such problem arises our hardworking team will abruptly deal with it.</p>
        </div>
        <div className='flex-1 text-center hover:shadow-lg hover:shadow-white'>
          <h4 className='text-xl font-bold pb-5'>Best Consultation</h4>
          <FontAwesomeIcon icon={faHeart} className='text-6xl pb-10'></FontAwesomeIcon>
          <p className='px-9'>Buying a car is major thing so not to make a mistake in such a vital point we offer free
          consultation services to all the customers. This helps people to plan out their goal to make the whole deal a 
          lot easier and possible than it would be otherwise.</p>
        </div>
      </div>
  )
}

export default WhyUs