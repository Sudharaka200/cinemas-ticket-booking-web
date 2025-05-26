import React from 'react'
import MenuLinks from '../Components/MenuLinks'
import logoImg from '../assets/duaAsset 1logo 1.png'
import { Button } from '@mui/material'

function Home() {
    return (
        <div
            // Navbar
            style={{
                display: 'flex',
            }}>
            <img src={logoImg} alt="" />
            <div style={{
                display: 'flex',
                textAlign:'center'
            }}>
                <MenuLinks linkName="Home" url="Home" />
                <MenuLinks linkName="Movies" url="Home" />
                <MenuLinks linkName="Contact" url="Home" />
                <MenuLinks linkName="Home" url="Home" />
                <MenuLinks linkName="Home" url="Home" />
            </div>

            <Button>Login</Button>
            <Button>Register</Button>
        </div>
    )
}

export default Home
