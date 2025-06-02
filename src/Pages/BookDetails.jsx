import { Button } from '@mui/material'
import React from 'react'

function BookDetails() {
  return (
    <>
      <div>
        <div>
          <h1>Booking Details</h1>
          <h3>Schedule</h3>
        </div>
        <div>
          <h5>Movie Title</h5>
          <p>SPIDERMAN NO WAY HOME</p>
        </div>
        <div>
          <h5>Date</h5>
          <h5>Mon, 23 Oct 2023</h5>
        </div>
        <p>Tiket (3)</p>
        <a href="/payment">
          <Button style={{ backgroundColor: '#09B54E', color: '#FFF' }}>CheckOut Ticket</Button>
        </a>
      </div>
    </>
  )
}

export default BookDetails
