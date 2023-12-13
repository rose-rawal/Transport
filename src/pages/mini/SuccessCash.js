import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import context from '../../component/context/maincontext'
const SuccessCash = () => {
  const {setSuccess}=useContext(context)
  const handleCash=(e)=>{
    e.preventDefault();
    setSuccess(false)
  }
  return (
    <div className='absolute z-50 w-full h-full bg-black-50 flex  justify-center'>
    <div className='bg-white mt-32 px-24 py-4 h-48 flex flex-col justify-between rounded-xl'>
      <h2 className='text-2xl'>Success</h2>
      <motion.div
      initial={{color:"black"}}
      whileInView={{color:"green",scale:2}}
      transition={{delay:1,duration:1}}
      className=' text-center'
      ><FontAwesomeIcon icon={faCheck} className='text-5xl'/></motion.div>
      <button onClick={handleCash} className=' underline'>Done</button>
    </div>
    </div>
  )
}

export default SuccessCash