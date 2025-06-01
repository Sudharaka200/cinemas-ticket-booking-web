import React from 'react'
import { Button, TextField } from '@mui/material'

function Register() {
    return (
        <div>
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
