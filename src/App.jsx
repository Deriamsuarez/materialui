import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import ForgetPassword from "./components/ForgetPassword"
import Sign from "./components/Sign"
import TicketDet from "./components/TicketDet"
import Admin from "./Layout/Admin"


function App() {
return (
  
 <Routes>
    <Route path='/' element={<Sign/>}/>
    <Route path='/forget_password' element={<ForgetPassword/>}/>
    <Route element={<Admin/>}> 
    <Route path='/ticket' element={<TicketDet/>}/>
   
</Route>
  </Routes> 
  )
}

export default App
