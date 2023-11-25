import React from 'react'
import context from './maincontext'
import { useState } from 'react'
import useUser from '../../hook/useUser'
const Context = ({children}) => {
    const [loggedIn,setLoggedIn]=useState(false)
    const {fetchUser,postUser}=useUser()
    const loginValidation=async(details)=>{
        try{
            const response=await fetchUser(details)
            if(!response[0])
            console.log("User Not Found")
            else{
                setLoggedIn(true)
            }
            
        }catch(err){
            console.log(err)
        }
    }
    const signUpValidation=async(signDetail)=>{
        console.log(signDetail)
        try{
            const response=await postUser(signDetail)
            console.log(response)
        }catch(err)
        {
            console.log(err)
        }
    }
  return (
    <context.Provider value={{loggedIn,setLoggedIn,loginValidation,signUpValidation}}>
    {children}
    </context.Provider>
  )
}

export default Context