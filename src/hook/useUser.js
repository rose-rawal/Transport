import React, { useState } from 'react'
import { useEffect } from 'react'
import {getAllUser,getUser,postUser} from '../api/users'
const useUser = () => {
    const [users,setUsers]=useState([])
    const[loggedUser,setLoggedUser]=useState({})
    const [loaded,setLoaded]=useState(false)
//     useEffect(()=>{
//     getAllUser().then(userResponse=>{
//       setUsers(userResponse)
//       setLoaded(true)
//     })
//   },[])
  const fetchUsers=async ()=>{
    const users=await getAllUser()
    setUsers(users)
    setLoaded(true)
  }

  const fetchUser=async(details)=>{
    const user=await getUser(details)
    setLoggedUser(user)
    console.log(loggedUser)
    return user
  }
  const postUserz=async(details)=>{
    // console.log('object')
    const newUser=await postUser(details)
    return newUser
  }
  return {fetchUsers,loaded,fetchUser,postUserz}
}

export default useUser