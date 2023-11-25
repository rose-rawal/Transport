import axiosInstance from "./axiosInstance";

const getAllCar=async()=>{
    const res=await axiosInstance.get('/car/allCar')
    return res.data
}
export {getAllCar}