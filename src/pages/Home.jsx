import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store/store'
import { getProduct } from '../store/slices/slices'
import ProductsCard from '../Components/ProductsCard'
import NavBar from '../Components/shared/NavBar'
import Filters from '../Components/shared/Filters'
import  "../style/Home.css"

const Home = ({setProductId}) => {

  const [filterName, setfilterName] = useState("")
  const [nameCategory, setNameCategory] = useState("")
  const [value, setvalue] = useState({

    min:0,
    max:Infinity,
  })
  
 
  
  console.log(value);

    const url="https://e-commerce-api-v2.academlo.tech/api/v1/products"

    const products=useSelector(store=>store.products)

const dispatch=useDispatch()
const [loading, setloading] = useState(true)

    useEffect(() => {
    
    
       dispatch(getProduct("products",setloading)) 

    }, [filterName,nameCategory])
    



const textInput = useRef()

const handleChange=()=>{
setfilterName(textInput.current.value.trim().toLowerCase())
}

const cbFilter=(prod)=>{

  const name=prod.title.toLowerCase().includes(filterName)

  const price= +prod.price<= +value.max && +prod.price >= +value.min

  const catego=prod?.category.name.includes(nameCategory)

  return name&&price&&catego

//  if (filterName) {
//   return prod.title.toLowerCase().includes(filterName)
//  }else if (nameCategory) {
//   return prod?.category.name.includes(nameCategory)
//  }else if(value){
//   return +prod.price<= +value.value1 && +prod.price>= +value.value
//  }else{
//   return true
//  }

}

// const cbFilter=(prod)=>{
//    return prod.title.toLowerCase().includes(filterName)
// console.log(prod);
//  }

console.log(products);

  return (
    <div className='home'>

      {
        loading? <div className='loading'><div className="loader"></div></div>
        :

        <>
        <div className='filters'>
        
      <Filters
      nameCategory={nameCategory}
      setNameCategory={setNameCategory}
      setvalue={setvalue}/>
      
      </div >
      <div className='div_products'>
            <div className='input_div'> 
                  <input className='input_search' ref={textInput} onChange={handleChange} type="text" placeholder='What are you looking for? 🔎' />
            </div>
          
      <div className='products'>
        

        {

        products?.filter(cbFilter).map((products)=>(
            <ProductsCard
            key={products.id}
            prod={products}
            setProductId={setProductId}
            />
            
        ))
        
      }
        </div>
        </div>
        
        </>



      }





      



      

    </div>
  )
}

export default Home