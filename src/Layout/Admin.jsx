import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Navi from './components/Navi'

const Admin = () => {

 const [title, setTitle] = useState(null)

  return (
    <Stack sx={{
       height: '100vh',   
     }}>
    <Navbar  title={title} />
    <Outlet context={[setTitle]}/> 
    <Navi/>
   </Stack>
  )
}

export default Admin