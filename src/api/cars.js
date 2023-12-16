import axiosInstance from "./axiosInstance";

const getAllCar=async()=>{
    const res=await axiosInstance.get('/car/allCar')
    return res.data
}
const getPayment=async(detail)=>{
    const res=await axiosInstance.post('/khalti-api',detail)
    return res.data
}
export {getAllCar,getPayment}