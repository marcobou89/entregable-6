import React, { useState } from 'react'
import { postProductsTrunk } from '../../store/slices/cartslices';
import { useDispatch } from 'react-redux';
import "/Users/usuario/Desktop/REACT/entregable-6/src/style/Character.css"


const Character = ({prod}) => {
  
    const [quantity, setQuantity] = useState(1)
  console.log(prod);
    const dispatch=useDispatch()

  const handleLess=()=>{
    
        if (quantity>1) {
            setQuantity(quantity-1)
        }


  
}

  const handleAddCart=()=>{

    dispatch(postProductsTrunk({
        "quantity": quantity,
        "productId": prod?.id
    }))
    setQuantity(1)
  }


  const handlePlus=()=>{
    
        setQuantity(quantity+1)
       
  
}
console.log(prod?.id);
  
    return (
    <div className='card_character'>
        <div className='title_character' >
            <h3>{prod?.brand}</h3>
            <h2>{prod?.title}</h2>
            <p>{prod?.description}</p>
        </div>

        <div className='div_price'>
            <div className='price'>
            <h3>Price</h3>
            <h1>${prod?.price}</h1>
            </div>

        <div className='buttons_product'>
            <div>
              <h3>Quantity</h3>
              <div className='buttons_inter'>
              <button className='button_ch' onClick={handleLess}>-</button>
              <p className='button_ch'>{quantity}</p>
              <button className='button_ch' onClick={handlePlus}>+</button>  
              </div>
            </div>
        </div>

        </div>


        <button className='button_add_cart' onClick={handleAddCart}>Add to Cart</button>



    </div>
  )
}

export default Character