import React from 'react'
import { Link } from 'react-router-dom'
import "../shared/NavBar.css"


const NavBar = () => {
  return (
    <div>
        <div className='navBar'>
            <h1><Link className='link_h1' to={"/"}>E-Commerce</Link></h1>
            
    
            <ul className='nav'>
                <li className='itemNav'><Link className='link_h1'  to={"/Login"}><img className='img_nav' src=".\user.png" alt="" /></Link></li>
                <li className='itemNav'><Link className='link_h1' to={"/Purchases"}><img className='img_nav' src=".\purchases.png" alt="" /></Link></li>
                <li className='itemNav'><Link className='link_h1' to={"/Cart"}><img className='img_nav' src=".\cart.png" alt="" /></Link></li>
            </ul>
    
        
        
        </div>
    </div>
  )
}

export default NavBar