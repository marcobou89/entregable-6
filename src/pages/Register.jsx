import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hook/useAuth'

const Register = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit=(data)=>{
    console.log(data);
    useAuth('/users',data)
   

    reset({
      fistName:"",
      lastName:"",
      email:"",
      password:"",
      phone:"",
    }
    
    )
  }

  return (
    <div className='login'>

    <div className='form_login'>
        <form onSubmit={handleSubmit(submit)}>

        <div className='div_input_form'>
              <label htmlFor="firstName">fistName</label>
              <input className='imput_form' {...register("firstName")} type="text" id="firstName" />
          </div>

          <div className='div_input_form'>
              <label htmlFor="lastName">lastName</label>
              <input className='imput_form' {...register("lastName")}  type="text" id="lastName"  />
          </div>
          
          <div className='div_input_form'>
              <label htmlFor="email">email</label>
              <input className='imput_form' {...register("email")}  type="email" id="email" autoComplete='current-email' />
          </div>
          <div className='div_input_form'>
              <label htmlFor="password">password</label>
              <input className='imput_form' {...register("password")}  name="password" id="password" type="password" />

              {/* autoComplete='current-password'  */}
          </div>
          <div className='div_input_form'>
              <label htmlFor="phone">phone</label>
              <input className='imput_form' {...register("phone")}  type="number" id="phone"/>
          </div>
          <div className='div_button_form'>
          <button className='button_filter'>Register</button>
          </div>
        



        </form>

    </div>
    </div>
  )
}

export default Register