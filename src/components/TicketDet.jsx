import { Box, CardMedia, Typography, Button } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
// import { useOutletContext } from 'react-router-dom'


const style = {
    boxSecond: {
      border: '2px solid black',
      width: '100%',
      height: 500,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '0.8em',
      padding: '2em',
      gap: '1em'
    }

  }


  const TicketDet = () => {
    //  const [setTitle] =  useOutletContext()

    // setTitle('Ticket')
  return (
   <Box sx={style.boxSecond}>
         <CardMedia
        sx={{ width: "140px" }}
        component="img"
        alt="qr"
        image="qr-code.png"
      />
      <Typography variant='h5'> Scan at Cinema Entrance</Typography>
      <Box>
        <Button onClick={()=>navigate('/')} color="primary" sx={{ alignSelf: 'flex-start' }}><RestoreIcon/>Re Scheduale</Button>
        <Button onClick={()=>navigate('/')} color="primary" sx={{ alignSelf: 'flex-start' }}><DownloadIcon/>Dowload</Button>
      </Box>
      <Typography sx={{alignSelf:'flex-start'}}>Tickets</Typography>
      <Typography sx={{alignSelf:'flex-start'}}>Cinema</Typography>
      <Typography sx={{alignSelf:'flex-start'}}>Movie Title</Typography>
      <Box sx={{display:'flex', gap:'3em', alignSelf:'flex-start'}}>
        <Typography>Date</Typography>
        <Typography>Seat</Typography>
      </Box>
      <Box sx={{display:'flex', gap:'3em', alignSelf:'flex-start'}}>
        <Typography>Start</Typography>
        <Typography>End</Typography>
      </Box>
   </Box>
   
  )
}

export default TicketDet