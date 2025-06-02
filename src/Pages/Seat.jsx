import React from 'react'
import ToggleSeat from '../Components/ToggleSeat'
import MenuLinks from '../Components/MenuLinks'
import logoImg from '../assets/duaAsset 1logo 1.png'
import { Button } from '@mui/material'

function seat() {
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
        <h1>Seat</h1>
        <ToggleSeat />
      </div>
    </>
  )
}

export default seat;