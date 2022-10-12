import { Box, TextField, Typography,  InputAdornment, IconButton, Button } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Stack } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {

const navigate = useNavigate()    
    const style = {
        stackPrincipal: {
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center'
        },
        boxSecond: {
          border: '2px solid black',
          width: 350,
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '0.8em',
          padding: '2em',
          gap: '2em'
        }
    
      }
    
  return (
    <div>
        <Stack spacing={8} sx={style.stackPrincipal}>
            <Box sx={style.boxSecond}>
                <Typography variant='h4'> Forget Password</Typography>
            <Box>
                <Typography variant='body'> Don't worry, we will do ourt best to help you </Typography>
            </Box>
            
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
    
              fullWidth id="outlined-basic" label="Outlined" variant="outlined"
            />
             <Button fullWidth variant='contained' color="primary" >Send</Button>
             <Button onClick={()=>navigate('/')}variant="text" color="primary" sx={{ alignSelf: 'center' }}>Back to Sing In</Button>
            </Box>
        </Stack>
    </div>
  )
}
export default ForgetPassword
