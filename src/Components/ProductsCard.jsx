import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../style/ProductsCard.css"
import { useDispatch } from 'react-redux';
import { postProductsTrunk } from '../store/slices/cartslices';

const ProductsCard = ({prod}) => {
    
    const dispatch=useDispatch()


    const navigate=useNavigate()
    const handleDetail=()=>{
        
        navigate(`/product/${prod.id}`)
    
    }

    const handleAdd=()=>{
        dispatch(postProductsTrunk({
            "quantity": 1,
            "productId": prod.id
        }))
        
        // navigate(`add/${prod.id}`)

    }

    // console.log(prod);
  return (
        <div className='cart_app'>
        {
            <article className='div_product'>
                <figure className='figure_img'>
                <img className='img_product' src={prod?.images[0].url} alt={prod.title} />
                </figure>    
                <hr />            
                <h3>{prod?.title}</h3>
                <h3 className='price'>${prod?.price}</h3>
                <div className='div_buttons_card'>
                    <button className='button_filter'  onClick={handleDetail}>Detail</button>
                    <button className='button_filter' onClick={handleAdd}>Add to Card</button>
                </div>
            </article>
        }
        
        </div>
   
  )
}

export default ProductsCard