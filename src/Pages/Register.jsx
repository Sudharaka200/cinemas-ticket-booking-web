import React from 'react'
import { Button, TextField } from '@mui/material'
import logoImg from '../assets/duaAsset 1logo 1.png'
import MenuLinks from '../Components/MenuLinks'

function Register() {
    return (
        <div>
            <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 20px',
            position: 'absolute',
            zIndex: '10',
            width: '95%',
            backgroundColor:'black'
          }}
        >
          <a href="/">
            <img src={logoImg} alt="Logo" />
          </a>

          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <MenuLinks linkName="Home" url="/" />
              <MenuLinks linkName="Movies" url="/movie" />
              <MenuLinks linkName="Contact" url="/contact" />
            </div>

            <a href="/login" style={{ marginLeft: 'auto' }}>
              <Button style={{ backgroundColor: '#09B54E', color: '#FFF' }}>Login</Button>
            </a>
          </div>
        </div>
            <div style={{ padding: '100px 550px' }}>
                <h1 style={{ textAlign: 'center' }}>Create an account</h1>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField id="outlined-basic" label="Username" variant="outlined" style={{ marginTop: '10px' }} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{ marginTop: '10px' }} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{ marginTop: '10px' }} />
                    <TextField id="outlined-basic" label="Re-type Password" variant="outlined" style={{ marginTop: '10px' }} />
                    <Button style={{ backgroundColor: '#09B54E', color: '#FFF', marginTop: '10px' }}>Login</Button>
                </div>
                <div style={{ display: 'flex', textAlign: 'center' }}>
                    <p>have an account ?</p>
                    <a href="/login" style={{ textDecoration: 'none', color: '#09B54E', marginLeft: '10px' }}>
                        <p>Login Here</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Register
