import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/slices"; 
import cartslices from "./slices/cartslices";
import purchases from "./slices/purchases";
const store=configureStore({

    reducer:{
        products,
        cartslices,
        purchases

       
    }
})
export default store;