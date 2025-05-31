import React from 'react'
import MenuLinks from '../Components/MenuLinks'
import logoImg from '../assets/duaAsset 1logo 1.png'
import { Button } from '@mui/material'
import Carosal from '../Components/carosal'
import MovieCards from '../Components/movieCards'

function Home() {
    return (
        <>
            <div
                // Navbar
                style={{
                    display: 'flex', justifyContent: 'space-between', padding: '0 20px', position: 'absolute', zIndex: '10'
                }}>
                <img src={logoImg} alt="" />
                <div style={{ display: 'flex', textAlign: 'center' }}>
                    <div style={{
                        display: 'flex',
                        textAlign: 'end'
                    }}>
                        <MenuLinks linkName="Home" url="/" />
                        <MenuLinks linkName="Movies" url="Home" />
                        <MenuLinks linkName="Contact" url="Home" />
                    </div>

                    <Button>Login</Button>
                    <Button>Register</Button>
                </div>
            </div>
            <div>
                <Carosal />
            </div>
            <div>
                <h1>Now Showing</h1>
                <MovieCards />
            </div>
        </>
    )
}

export default Home
