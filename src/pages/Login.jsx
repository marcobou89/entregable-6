import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hook/useAuth'
import "../style/Login.css"



const Login = () => {

  const [token, setToken] = useState()


  useEffect(() => {
    setToken(localStorage.getItem("token"))  
  
  }, [])
  
console.log(token);

  const url=  "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"

const {handleSubmit,register,reset} =useForm()

const submit = async( data)=>{

  await useAuth("/users/login",data)

  reset({
    email:"",
    password:""
  })
setToken(localStorage.getItem("token"))
}

const handleToken=()=>{
localStorage.removeItem("token")
setToken(null)
}



  return (
    <div className='login'>

    {
      
      token? <><h1>you are loged in</h1>
              <button className='button_filter' onClick={handleToken}>Logout</button> </>                                
      :
      <>
      <div className='form_login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(submit)}>
      <div className='div_input_form'>
      <label htmlFor="email">Email </label>
      <input className='imput_form' {...register("email")}id="email" type="email" />
      </div>
      <div className='div_input_form'>
      <label htmlFor="password">Password </label>
      <input className='imput_form' {...register("password")}id='password' type="password" />
      </div>
      <div className='div_button_form'>
      <button className='button_filter'>login</button>
      </div>
    </form>
    <p>if you are not register yet, <Link to={"/register"}>register here</Link></p>
    </div>
    </>
  
      }



  </div>
    
  )
}

export default Login