import axios from "axios"
import { useState } from "react"
const urlBase= "https://e-commerce-api-v2.academlo.tech/api/v1"

const useFetch = () => {
  
const [categories, setCategories] = useState()

const getCategories=(path,setloading)=>{

    const url=`${urlBase}/${path}`

    axios.get(url)
    .then(res=>{
        setCategories(res.data)
        setloading(false)
    })
    .catch(err=>console.log(err))
}

return [categories,getCategories]






}

export default useFetch