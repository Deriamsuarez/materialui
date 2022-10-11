
import { Box, Button, Divider, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material"
import { fontSize, width } from "@mui/system"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import React, { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

function App() {

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const style = {
    stackPrincipal: {
      // border: '2px dashed black',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    },
    boxSecond: {
      border: '2px solid black',
      width: 350,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '0.8em',
      padding: '2em',
      gap: '1.5em'
    }

  }


  return (
    <Stack spacing={8} sx={style.stackPrincipal} >
      <Box sx={style.boxSecond}>
        <Typography variant='h4'>Sign in</Typography>
        <Box sx={{ width: '100%' }}>
          <Typography variant='body'>welcome back friend you've been missed alot</Typography>
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

        <OutlinedInput

          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <Button fullWidth variant='contained' color="primary" >Sign In</Button>
        <Button variant="text" color="primary" sx={{ alignSelf: 'flex-end' }}>Forget password?</Button>
        <Box sx={{ width: '100%' }}>
          <Divider sx={{ width: '100%' }}>OR</Divider>
        </Box>
        <Button startIcon={<GoogleIcon />} fullWidth variant='outlined' color="error" >Sign in with Google</Button>
        <Button startIcon={<FacebookIcon/>} fullWidth variant="outlined" color="info" sx={{ alignSelf: 'flex-end' }}>Sign in with Facebook</Button>
      </Box>
    </Stack>
  )
}

export default App
