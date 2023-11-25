import React, { useEffect, useState } from 'react'
import { getAllCar } from '../api/cars'
const UseCar = () => {
    const [car,setCar]=useState([])
    const getCars=async()=>{
        try{
            const carUser=await getAllCar()
            setCar(carUser)
            return carUser

        }catch(err){
            console.log(err)
        }
    }
  return {getCars,setCar,car}
}

export default UseCar