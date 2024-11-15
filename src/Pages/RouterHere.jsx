import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Education from './Education'
import Projects from './Projects'
import About from './About'

const RouterHere = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      
    </div>
  )
}

export default RouterHere
