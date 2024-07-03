import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bearerToken from "../../utils/bearerToken";


const urlBase= "https://e-commerce-api-v2.academlo.tech/api/v1"

const purchases=createSlice({
    name:"purchases",
    initialState:[],
    reducers:{
        setPurchase:(_state,action)=>action.payload,
        addPurchase:(state,{payload})=>[payload,...state]

    }
 })
 export const {setPurchase, addPurchase}=purchases.actions


export default purchases.reducer



export const getPurchaseTrunk=(setloading)=>(dispatch)=>{
    const url=`${urlBase}/purchases`
    axios.get(url,bearerToken())
   .then(res=>{
    dispatch(setPurchase(res.data))
    setloading(false)
    
})
   
    .catch(err=>console.log(err))
    
        
    
}


export const postPurchaseTrunk=()=>(dispatch)=>{
    const url=`${urlBase}/purchases`
    axios.post(url,{},bearerToken())
    .then(res=>{
        dispatch(addPurchase(res.data))
        console.log(res.data)
    })
    .catch(err=>console.log(err))

}