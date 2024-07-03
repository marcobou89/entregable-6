import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch'
import SimilarItems from '../Components/shared/SimilarItems'
import Character from '../Components/ProductInfo/Character'
import Carrousel_Slider from '../Components/shared/Carrousel_Slider'
import "../style/Product.css"



const urlBase = "https://e-commerce-api-v2.academlo.tech/api/v1/products/"
const Product = () => {
  
  const [loading, setloading] = useState(true)
//  const pararams=useParams()
  useParams
 const {id} =useParams()

 const [productInfo, getProductInfo]=useFetch()

 useEffect(() => {
  getProductInfo(`/products/${id}`,setloading)
  
}, [id])
 
console.log(productInfo);



  return (
    <div >
      {

        loading? <div className='loading'><div className="loader"></div></div>
        :
        <>
        <div className='div_principal'>
          <Carrousel_Slider
          prod={productInfo}/>

        <Character
        prod={productInfo}
        />

      </div>

      <div>
      <SimilarItems
      category={productInfo?.category?.name}/>
      
      </div>
      </>
        
      }
      
    </div>
  )
}

export default Product