import React, { useState } from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const Navi = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ width: '100%' }}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Cinema" icon={<VideoCameraBackIcon />} />
      <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon/>} />
      <BottomNavigationAction label="MyTicket" icon={<ConfirmationNumberIcon/>} />
    </BottomNavigation>
  </Box>
);
  
}

export default Navi