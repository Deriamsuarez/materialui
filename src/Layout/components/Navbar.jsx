import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
const Navbar = ({title}) => {

    const navigate = useNavigate()
  return (
    
          <AppBar position="static" color="primary">
            <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
            <ArrowBackIosIcon onClick={navigate(-1)}/>
               <Typography variant="h6" color="inherit" component="div">
                {title}
              </Typography> 
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
    
  )
}

export default Navbar