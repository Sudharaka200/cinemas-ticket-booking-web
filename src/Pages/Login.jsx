import { Button, TextField } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div>
      <div style={{padding:'100px 550px'}}>
        <h1 style={{ textAlign: 'center' }}>Login to your account</h1>
        <div style={{display:'flex', flexDirection:'column'}}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
