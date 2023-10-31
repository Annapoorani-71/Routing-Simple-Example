import React from 'react'
import "./Header.css"
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
function Content() {
  return (
    <div className='content'><Routes>
         <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
   
   </Routes> </div>
  )
}

export default Content