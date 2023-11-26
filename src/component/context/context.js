import React from 'react'
import context from './maincontext'
import { useState,useEffect } from 'react'
import useUser from '../../hook/useUser'
import UseCar from '../../hook/useCar'
const Context = ({children}) => {
    const {getCars}=UseCar()
    const [cars,setCars]=useState([])
    const [myCar,setMyCar]=useState({Name:''})
    const [user,setUser]=useState({Name:''})
useEffect(() => {
  const fetchData = async () => {
    try {
      const abc = await getCars();
      setCars(abc);
    //   console.log(abc);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);

    
    
    const [loggedIn,setLoggedIn]=useState(false)
    const [loginErr,setLoginErr]=useState(false)
    const [signErr,setSignErr]=useState(false)
    const {fetchUser,postUserz}=useUser()
    
    const loginValidation=async(details)=>{
        try{
            const response=await fetchUser(details)
            if(!response[0]){
            setLoginErr(true)
            setTimeout(()=>{
                setLoginErr(false)
            },4000)
            }
            else{
                setUser(response[0])
                setLoggedIn(true)
            }
            
        }catch(err){
            console.log(err)
        }
    }
    const signUpValidation=async(signDetail)=>{
        
            const {Name,Password,Email,Age}=signDetail
            const emailValidation=/[a-zA-Z]+[.][a-zA-Z]+/
            
            const validation=emailValidation.test(Email)
            console.log(validation)
            if(!Name || !Password || !Email || !Age || Password.length<5 || Age<18){
                setSignErr(true)
                setInterval(()=>{
                    setSignErr(false)
                },4000)
                return 0

            }
            else{
            const response=await postUserz(signDetail)
            console.log(response.err)
            if(response.err === "already user")
            {
                console.log("hello")
                setSignErr(true)
                setInterval(()=>{
                    setSignErr(false)
                },4000)
            }
        }
       
    }
    
    
  return (
    <context.Provider value={{loggedIn,setLoggedIn,loginValidation,signUpValidation,loginErr,setLoginErr,signErr,setSignErr,cars,myCar,setMyCar,user}}>
    {children}
    </context.Provider>
  )
}

export default Context