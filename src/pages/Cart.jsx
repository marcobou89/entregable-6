import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store/store'
import { getCartTrunk, setCart } from '../store/slices/cartslices'
import ItemCard from '../Components/Cart/ItemCard'
import "../style/Cart.css"
import { postPurchaseTrunk } from '../store/slices/purchases'

const url ="https://e-commerce-api-v2.academlo.tech/api/v1/cart"

const Cart = () => {
  const [loading, setloading] = useState(true)

const cart =useSelector(store=>store.cartslices)
const dispatch=useDispatch()

useEffect(() => {

  dispatch(getCartTrunk(setloading))
  
}, [])

console.log(cart);

const totalProducts = cart?.reduce((cv,item)=>cv+= item.quantity,0)

const totalPrice = cart?.reduce((cv,item)=>cv+= item.quantity*item.product?.price,0)

const handleBuy =()=>{

  dispatch(postPurchaseTrunk())
  dispatch(setCart([]))


}


  return (
    <div className='cart_div'>
      {
        loading? <div className='loading'><div class="loader"></div></div>
        :
        <>
         {
        cart?.map(prod=>(
          <ItemCard
          key={prod.id}
          prod={prod}
          />
        ))
      }

    <div>
            <ul>
                
                {
                  totalProducts ===0? <div className='empty'><h1>Cart Empty</h1></div>
                  :
                  <>
                <div className='item_cart'>
                  <div className='div_item_cart'>
                <li className='div_buttons car'><span>#Products: </span><span>{totalProducts}</span></li>
                <li className='div_buttons car'><span>Total: </span><span>${totalPrice}</span></li>
                <button className='button_filter ' onClick={handleBuy}>Buy all Products</button>
                
                </div>
                
                </div>
                  </>
                }
                
            </ul>
        </div>

        </>
      }



     
    </div>
  )
}

export default Cart