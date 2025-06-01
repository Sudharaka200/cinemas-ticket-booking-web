import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuLinks from '../Components/MenuLinks'
import Grid from '@mui/material/Grid';
import logoImg from '../assets/duaAsset 1logo 1.png'
import MovieImg from '../assets/image 2.png'
import { Button } from '@mui/material'
import ToggleButtonC from '../Components/ToggleButtonC';
import ToggleButtonDate from '../Components/ToggleBUttonDate';
import ToggleButtonTime from '../Components/ToggleButtonTime';

export default function Theater() {
    return (
        <>
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
            <div style={{ padding: '50px' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 6, md: 8 }}>
                            <h1>Theater</h1>
                            <div>
                                <ToggleButtonC />
                            </div>
                            <h1>Date</h1>
                            <div>
                                <ToggleButtonDate />
                            </div>
                            <h1>Time</h1>
                            <div>
                                <ToggleButtonTime />
                            </div>
                            <div>
                                <h1>IOI Putrajaye</h1>
                                <h3>28 October 2023</h3>
                                <h3>15:40</h3>
                                <p>*Seat selection can be done after this</p>
                                <a href="/Seat" style={{ marginLeft: 'auto' }}>
                                    <Button style={{ backgroundColor: '#09B54E', color: '#FFF' }}>Proceed</Button>
                                </a>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 6, md: 4 }}>
                            <img src={MovieImg} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}
