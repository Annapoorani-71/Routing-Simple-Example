import React from 'react'
import "./Header.css"
import Home from './Home'
import Contact from './Contact'
import { Link, Route,Routes } from 'react-router-dom';
function Header() {
  return (
    <div>
        <div className='heading1'>
            <h1>Food App</h1> 
      <ul className='link'>
        <li>
        
         <Link to="/" >Home</Link>
         <Link to="/contact" className='secondlink'>Contact</Link>
       </li>
     </ul>
     
        </div>
    </div>
  )
}


export default Header