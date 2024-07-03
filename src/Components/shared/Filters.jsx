import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../store/slices/slices'
import useFetch from '../../hook/useFetch'
import { get, useForm } from 'react-hook-form'
import "../shared/Filters.css"


const Filters = ({nameCategory,setNameCategory,setvalue}) => {

const [categories,getCategories]=useFetch()




  useEffect(() => {
  getCategories("categories")
}, [])


console.log(categories);
console.log(nameCategory);





//     const categories=useSelector(store=>store.products)

// const dispatch=useDispatch()

// useEffect(() => {
//   dispatch(setProducts("categories"))
// }, [])


const textInput =useRef()
const textInput2=useRef()


// const handleChange=(event)=>{
//   event.preventDefault()
// setvalue([textInput.current.value,textInput2.current.value])
// textInput.current.value=""
// textInput2.current.value=""


const handleSubmit=(event)=>{
event.preventDefault()
setvalue({min:textInput.current.value,
  max:textInput2.current.value || Infinity,
}
  )
  
  
}
// const {handleSubmit, register}=useForm()

// const submit=(data)=>{
// setInputPrice({

// min:data.min,
// max:data.max || Infinity 
// console.log(data);
// })
// }
const [show, setshow] = useState(true)

const handleClick=()=>{
setshow(!show)

}


return (
    <div className='filter'>

        <div>
        <a className='logo_filter' onClick={handleClick} href="#"><img src=".\filtrar.png" alt="" /></a>
          
           
            <details  className='filter1'>
            <summary>Price</summary>
            <form className='form_filter' onSubmit={handleSubmit}>
              <div className='div_label'>
              <label className='label_filter' htmlFor="">From</label>
              <input className='input_filter' id='min' ref={textInput} type="number" />
              </div>

              <div className='div_label'>
              <label  className='label_filter' htmlFor="">To</label>
              <input className='input_filter' id='max' ref={textInput2} type="number" />
              </div>
              <button className='button_filter'>Filter price</button>
            </form>
          </details>

          <div>
            <details className='filter1'>
              <summary>Categories</summary>
              <select className='select_filter' name="" value={nameCategory} onChange={sele=>setNameCategory(sele.target.value)}>
                <option value="">All</option>
                {

                  categories?.map((category) => <option key={category.id} name={category.name} id="">{category.name}</option>)

                }
                </select>
            </details> 
          </div>

         

          
        </div>

    </div>
  )
}

export default Filters