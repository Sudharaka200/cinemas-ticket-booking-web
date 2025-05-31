import { Button } from '@mui/material'
import React from 'react'

function MenuLinks(props) {
  return (
    <div>
        <div style={{
            display:'flex', textDecoration:'none', padding:'20px',backgroundColor:'none'
        }}>
            <a href={props.url} className='link' style={{textAlign:'end', textDecoration: 'none'}}>{props.linkName}</a>
        </div>
    </div>
  )
}

export default MenuLinks
