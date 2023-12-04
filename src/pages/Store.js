import React, { useContext, useState } from 'react'
import context from '../component/context/maincontext'
import Item from './mini/Item'
import {motion} from 'framer-motion'
const Store = () => {
    const {cars}=useContext(context)
    const [search,setSearch]=useState('')
  return (
    <div className='pt-20 w-4/5 m-auto flex gap-5 justify-between'>
        
        
        <div className='flex-1'>
        <div className='flex justify-center py-5 mb-10'><input type="text" placeholder='Search' onChange={e=>{e.preventDefault();setSearch(e.target.value)}} className='w-3/4 text-center border-solid border-black border-2 h-10 rounded-3xl '/></div>
        {cars.length===0?'Loading':
        (<div className='flex gap-5 flex-auto flex-wrap justify-between'>
            {cars.filter(n=>n.Name.toLowerCase().startsWith(search )).map((n,i)=><Item data={n} i={i} key={i}/>)}
        </div>)}

        </div>
        <motion.div initial={{x:200}} animate={{x:0}} transition={{delay:1}} className=' h-screen w-64 bg-slate-200 mt-32 text-center px-5 flex flex-col justify-between pb-5 border-2 border-solid border-red-300 rounded-2xl shadow-xl shadow-black'>
          <h3 className='text-2xl py-5 text-red-500'>Notice!!</h3>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>Why not think for a minute for your initial Purchase?</motion.p>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1.2}}>If you buy now!?</motion.p>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1.4}}>20% off on all purchases until the offer for the festive moment of our Grand Opening !!</motion.p>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:1.6}}>Exclusive offer and Once in a lifetime Opportunity!!</motion.p>
          
        </motion.div>
    </div>
  )
}

export default Store