import React from 'react'
import MenuLinks from '../Components/MenuLinks'
import logoImg from '../assets/duaAsset 1logo 1.png'
import { Button } from '@mui/material'

function Home() {
    return (
        <div
            // Navbar
            style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px',
            }}>
            <img src={logoImg} alt="" />
            <div style={{display:'flex', textAlign:'end'}}>
                <div style={{
                    display: 'flex',
                    textAlign: 'center'
                }}>
                    <MenuLinks linkName="Home" url="Home" />
                    <MenuLinks linkName="Movies" url="Home" />
                    <MenuLinks linkName="Contact" url="Home" />
                </div>

                <Button>Login</Button>
                <Button>Register</Button>
            </div>
        </div>
    )
}

export default Home
