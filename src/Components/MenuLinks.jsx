import { Button } from '@mui/material'
import React from 'react'

function MenuLinks(props) {
  return (
    <div>
        <div style={{
            display:'flex'
        }}>
            <a href={props.url} className='link'>{props.linkName}</a>
        </div>
    </div>
  )
}

export default MenuLinks
