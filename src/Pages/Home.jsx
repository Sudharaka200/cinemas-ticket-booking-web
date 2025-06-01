import React from 'react'
import MenuLinks from '../Components/MenuLinks'
import logoImg from '../assets/duaAsset 1logo 1.png'
import { Button } from '@mui/material'
import Carosal from '../Components/carosal'
import MovieCards from '../Components/movieCards'
import Footer from '../Components/Footer'

function Home() {
    return (
        <>
            <div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0 20px',
                        position: 'absolute',
                        zIndex: '10',
                        width: '95%'
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


                <div>
                    <Carosal />
                </div>
                <div style={{ padding: '40px', alignItems: 'center' }} >
                    <h1 style={{ textAlign: 'center' }}>Now Showing</h1>
                    <MovieCards />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home
