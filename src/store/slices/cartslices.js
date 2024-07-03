import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bearerToken from "../../utils/bearerToken";

const urlBase ="https://e-commerce-api-v2.academlo.tech/api/v1"

const cart =createSlice( {

    name:"cart",
    initialState: [],
    reducers:{

        setCart:(_state,action)=>action.payload,
        addCart:(state,{payload})=> [...state,payload],
        // addCart:(state,{payload})=>{state.push(payload)}
       
        delCart:(state,{payload})=>state.filter(
         (prod)=>prod.id!==payload),
         updCart:(state,{payload})=>{
            const{id,quantity}=payload
            return state.map((prod)=>prod.id===id?{...prod,quantity}:prod)
         },
    }
})

export const {setCart, addCart, delCart, updCart}=cart.actions

export default cart.reducer

export const getCartTrunk=(setloading)=>(dispatch)=>{
const url=`${urlBase}/cart`

axios.get(url,bearerToken())
.then(res=>{
    dispatch(setCart(res.data))
    console.log(res.data);
    setloading(false)    
})
.catch(err=>console.log(err))
.finally(()=>{
    setTimeout(() => {
        setloading(false)
    }, 1000);

})

}

export const postProductsTrunk=(data)=>(dispatch)=>{

const url=`${urlBase}/cart`

axios.post(url,data,bearerToken())
.then(res=>{
    dispatch(addCart(res.data))
    console.log(res.data)

})
.catch(err=>console.log(err))


}

export const deleteProductTrunk=(id)=>(dispatch)=>{

    const url=`${urlBase}/cart/${id}`
    axios.delete(url,bearerToken())

    .then(()=>{

        dispatch(delCart(id))
        console.log("delete success")

    })
    .catch(err=>console.log(err))
    
}

export const updateProductTrunk=(id,data)=>(dispatch)=>{
    const url=`${urlBase}/cart/${id}`
    axios.put(url,data,bearerToken())
    .then(res=>{

        dispatch(updCart(res.data))
        console.log(res.data)
    })
    .catch(err=>console.log(err))
}