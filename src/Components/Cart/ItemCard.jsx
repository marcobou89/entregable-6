import React from 'react'
import { useDispatch } from 'react-redux';
import "../Cart/ItemCard.css"
import { deleteProductTrunk, updateProductTrunk } from '../../store/slices/cartslices';


const ItemCard = ({prod}) => {


const handlePlus=()=>{
dispatch(updateProductTrunk(prod.id,{
    "quantity":prod.quantity+1
}))
}

const handleLess=()=>{
    if (prod.quantity>1) {
        dispatch(updateProductTrunk(prod.id,{
            "quantity":prod.quantity-1
        }))
    }

}

const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch(deleteProductTrunk(prod.id))
    }


console.log(prod);


    return (
        <div className='item'>
        <article className='itemCart'>
        
           
        <figure>
            <img src={prod.product?.images[0].url} alt={prod.product?.title} width={50} /> 
        </figure>
        
        
        <span className='div_buttons'>
            <h3>{prod?.product?.title}</h3>
            <div className='button_item'>
                <button className='button_ch' onClick={handlePlus}>+</button>
                <p className='button_ch'>{prod.quantity}</p>
                <button className='button_ch' onClick={handleLess}>-</button>
            </div>
        </span>

        <button className='button_filter' onClick={handleDelete}>Delete</button>
    
        </article>
        <div className='div_total'>
            <span>Total</span>
            <h3>${prod.product?.price * prod.quantity}</h3>
        </div>
        
    
    </div>
  )
}

export default ItemCard