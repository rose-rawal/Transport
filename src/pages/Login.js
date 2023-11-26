import React, { useContext, useState } from 'react'
import context from '../component/context/maincontext'

const Login = () => {
    const [detail,setDetail]=useState({})
    const [signDetail,setSignDetail]=useState({})
    const {loginValidation,signUpValidation,loginErr,signErr}=useContext(context)
    const [signUp,setSignUp]=useState(false)
    const handleChange=(e,param)=>{
        setDetail(n=>{return {...detail,[param]:e.target.value}})
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // setLoggedIn(true)
        loginValidation(detail)

    }
    const handleSignSubmit=(e)=>{
        e.preventDefault();
        signUpValidation(signDetail)
    }
    const handleSignChange=(e,param)=>{
        setSignDetail(n=>{return {...signDetail,[param]:e.target.value}})
        console.log(signDetail)
    }
    const handleButtonSign=(e)=>{
        e.preventDefault()
        setSignUp(!signUp)
    }
  return (
    <div className='pt-20'>
                                                           {/*Login*/}
    {!signUp?<div className='w-2/3 m-auto'>
        
        <h1 className=' text-center text-4xl font-extrabold pt-10 mb-10'>Login</h1>
        <form action=""  className='flex flex-col items-center text-lg gap-1 relative'>
        {loginErr && (<div className='text-center absolute -top-7 text-red-700'>Account Not Found</div>)}
        Name:<input type="text" onChange={e=>handleChange(e,'Name')} className=' border-solid border-2 border-red-400 w-1/4 h-12 rounded-2xl text-center mb-2' />
        Password:<input type="text" onChange={e=>handleChange(e,'Password')} className=' border-solid border-2 border-red-400 w-1/4 h-12 rounded-2xl text-center'/>
        <button type='Submit' className='bg-red-400 w-1/6 h-12 rounded-2xl font-extrabold text-white hover:scale-110 transition-all mt-10' onClick={handleSubmit}>Login</button>
        <button className='text-red-400 text-sm hover:underline mt-2' onClick={handleButtonSign}>Sign Up</button>
        </form>
    </div>
    
    :<div className='w-2/3 m-auto'>                         {/*SignUp */}
        <h1 className=' text-center text-4xl font-extrabold pt-10 mb-10'>SignUp</h1>
        <form action=""  className='flex flex-col items-center text-lg gap-1 relative'>
        {signErr && (<div className='text-center absolute -top-7 text-red-700'>Change Credentials</div>)}
        Name:<input type="text" onChange={e=>handleSignChange(e,'Name')} className=' border-solid border-2 border-red-400 w-1/4 h-12 rounded-2xl text-center mb-2' />
        Password:<input type="text" onChange={e=>handleSignChange(e,'Password')} className=' border-solid border-2 border-red-400 w-1/4 h-12 rounded-2xl text-center'/>
        Email:<input type="text" onChange={e=>handleSignChange(e,'Email')} className=' border-solid border-2 border-red-400 w-1/4 h-12 rounded-2xl text-center'/>
        Age:<input type="number" onChange={e=>handleSignChange(e,'Age')} className=' border-solid border-2 border-red-400 w-1/4 h-12 rounded-2xl text-center'/>
        <button type='Submit' className='bg-red-400 w-1/6 h-12 rounded-2xl font-extrabold text-white hover:scale-110 transition-all mt-10' onClick={handleSignSubmit}>Sign Up</button>
        <button className='text-red-400 text-sm hover:underline mt-2' onClick={handleButtonSign}>Login</button>
        </form>
    </div>}
    </div>
  )
}

export default Login