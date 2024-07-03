import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const urlBase= "https://e-commerce-api-v2.academlo.tech/api/v1"

const products=createSlice({

    name:"cart",
    initialState:[],
    reducers:{
        setProducts:(_state,action)=>action.payload

    }
    
})

export default products.reducer

export const{setProducts}=products.actions

export const getProduct=(path,setloading)=>(dispatch)=>{
    const url=`${urlBase}/${path}`
    axios.get(url)
    .then(res=>{
        dispatch(setProducts(res.data))
        setloading(false)
})
    .catch(err=>console.log(err))
    .finally(()=>{
        setTimeout(() => {
            setloading(false)
        }, 1000);
    
    })
}
