import React from 'react'
import PaymentImg from '../assets/🦆 icon _check circle_.png'
import { Button } from '@mui/material'

function Payment() {
    return (
        <div>
            <div style={{alignItems:'center', textAlign:'center'}}>
                <h1>Paymenet Success</h1>
                <img src={PaymentImg} alt="" />
                <div>
                    <a href="/">
                        <Button >Back To Home</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Payment
