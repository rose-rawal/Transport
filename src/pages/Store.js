import React, { useContext } from 'react'
import context from '../component/context/maincontext'
import Item from './mini/Item'

const Store = () => {
    const {cars}=useContext(context)
  return (
    <div className='pt-20 w-4/5 m-auto'>
        <div className='flex justify-center py-5 mb-10'><input type="text" placeholder='Search' className='w-3/4 text-center border-solid border-black border-2 h-10 rounded-3xl '/></div>
        {cars.length===0?'Loading':
        (<div className='flex gap-5 flex-auto flex-wrap justify-between'>
            {cars.map((n,i)=><Item data={n} i={i} key={i}/>)}
        </div>)}
    </div>
  )
}

export default Store