import axiosInstance from "./axiosInstance";
const getAllUser=async ()=>{
    const res= await axiosInstance.get('allUser')
    return res.data
}
const getUser=async(details)=>{
    const res=await axiosInstance.post('findUser',{...details})
    return res.data
}
const postUser=async(details)=>{
    const res=await axiosInstance.post('setUser',{...details})
    return res.data
}
export {getAllUser,getUser,postUser}