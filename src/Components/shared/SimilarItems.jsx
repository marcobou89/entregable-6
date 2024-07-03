import React, { useEffect } from 'react'
import useFetch from '../../hook/useFetch'
import ProductsCard from '../ProductsCard'

const SimilarItems = ({category}) => {

    const [productSimilar, getProducts]=useFetch()

    useEffect(() => {
    
    getProducts("/products")

    }, [])
    
    

    {/* {productsSilimar?.filter(prod=>prod.category.id===category.id).map(product=>(
                <ProductsCard product={product}/>
             ))} */}

    




  return (
    <div>
        <h1 className='Title_similar'>Similar Items</h1>
        <div className='similar'>
        
            
            {
                productSimilar?.filter(produ=>produ?.category.name===category).map(prod=>(
                    <ProductsCard key={prod.id} prod={prod}/>
                 ))

            }
        </div>
    
    </div>
  )
}

export default SimilarItems