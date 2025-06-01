import { Button, TextField } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div>
      <div style={{padding:'100px 550px'}}>
        <h1 style={{ textAlign: 'center' }}>Login to your account</h1>
        <div style={{display:'flex', flexDirection:'column'}}>
          <TextField id="outlined-basic" label="Email" variant="outlined" style={{marginTop:'10px'}} />
          <TextField id="outlined-basic" label="Password" variant="outlined" style={{marginTop:'10px'}} />
          <Button style={{backgroundColor:'#09B54E', color:'#FFF', marginTop:'10px'}}>Login</Button>
        </div>
        <div style={{display:'flex', textAlign:'center'}}>
          <p>Don’t have an account ?</p>
          <a href="/register" style={{textDecoration:'none', color:'#09B54E', marginLeft:'10px'}}>
            <p>Register Here</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
