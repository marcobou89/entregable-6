import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchaseTrunk} from '../store/slices/purchases'
import "../style/Purchases.css"

const Purchases = () => {

  const purchases= useSelector(store=>store.purchases)

  const dispatch=useDispatch()
  
  const [loading, setloading] = useState(true)
  

useEffect(() => {
 
  dispatch(getPurchaseTrunk(setloading))
  
}, [])
console.log(purchases);
console.log(loading);
const date=(prod)=>{

  return prod.split("",10)
  

}


  return (
    <div className='purchases'>
    
    {
      
      loading? <div className='loading'><div className="loader"></div></div>

      :
      <>
      <h1>My Purchases</h1>
      {
       
        purchases?.map((prod)=>(
          
            <div className='item_purchases' key={prod.id}>
          <figure>
              <h3>ID: {prod.id}</h3>
              <img src={prod.product.images[0].url} alt=""width={100} />
          </figure>    
              
          <div className='div_center'> 
              <h3>{date(prod.createdAt)}</h3>   
              <h3>{prod.product.title}</h3>
              <h3 className='quantity_purchases'>{prod.quantity}</h3>
          </div>   

              <h3>Total price: {prod.product.price*prod.quantity}</h3>
          
            </div>)
            )
      }
      </>
    }
     
      
    


    
    </div>
  )
}

export default Purchases