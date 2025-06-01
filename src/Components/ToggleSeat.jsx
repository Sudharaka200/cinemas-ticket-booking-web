import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export default function ToggleSeat() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <div>
                    <div>
                        <ToggleButton value="web">A1</ToggleButton>
                        <ToggleButton value="android">A2</ToggleButton>
                        <ToggleButton value="ios">A3</ToggleButton>
                        <ToggleButton value="web">A4</ToggleButton>
                        <ToggleButton value="android">A5</ToggleButton>
                        <ToggleButton value="ios">A6</ToggleButton>
                        <ToggleButton value="web">A7</ToggleButton>
                        <ToggleButton value="android">A8</ToggleButton>
                        <ToggleButton value="ios">A9</ToggleButton>
                        <ToggleButton value="ios">A10</ToggleButton>
                    </div>

                    <div>
                        <ToggleButton value="web">A1</ToggleButton>
                        <ToggleButton value="android">A2</ToggleButton>
                        <ToggleButton value="ios">A3</ToggleButton>
                        <ToggleButton value="web">A4</ToggleButton>
                        <ToggleButton value="android">A5</ToggleButton>
                        <ToggleButton value="ios">A6</ToggleButton>
                        <ToggleButton value="web">A7</ToggleButton>
                        <ToggleButton value="android">A8</ToggleButton>
                        <ToggleButton value="ios">A9</ToggleButton>
                        <ToggleButton value="ios">A10</ToggleButton>
                    </div>

                    <div>
                        <ToggleButton value="web">A1</ToggleButton>
                        <ToggleButton value="android">A2</ToggleButton>
                        <ToggleButton value="ios">A3</ToggleButton>
                        <ToggleButton value="web">A4</ToggleButton>
                        <ToggleButton value="android">A5</ToggleButton>
                        <ToggleButton value="ios">A6</ToggleButton>
                        <ToggleButton value="web">A7</ToggleButton>
                        <ToggleButton value="android">A8</ToggleButton>
                        <ToggleButton value="ios">A9</ToggleButton>
                        <ToggleButton value="ios">A10</ToggleButton>
                    </div>

                    <div>
                        <ToggleButton value="web">A1</ToggleButton>
                        <ToggleButton value="android">A2</ToggleButton>
                        <ToggleButton value="ios">A3</ToggleButton>
                        <ToggleButton value="web">A4</ToggleButton>
                        <ToggleButton value="android">A5</ToggleButton>
                        <ToggleButton value="ios">A6</ToggleButton>
                        <ToggleButton value="web">A7</ToggleButton>
                        <ToggleButton value="android">A8</ToggleButton>
                        <ToggleButton value="ios">A9</ToggleButton>
                        <ToggleButton value="ios">A10</ToggleButton>
                    </div>

                    <div>
                        <ToggleButton value="web">A1</ToggleButton>
                        <ToggleButton value="android">A2</ToggleButton>
                        <ToggleButton value="ios">A3</ToggleButton>
                        <ToggleButton value="web">A4</ToggleButton>
                        <ToggleButton value="android">A5</ToggleButton>
                        <ToggleButton value="ios">A6</ToggleButton>
                        <ToggleButton value="web">A7</ToggleButton>
                        <ToggleButton value="android">A8</ToggleButton>
                        <ToggleButton value="ios">A9</ToggleButton>
                        <ToggleButton value="ios">A10</ToggleButton>
                    </div>

                    <div>
                        <ToggleButton value="web">A1</ToggleButton>
                        <ToggleButton value="android">A2</ToggleButton>
                        <ToggleButton value="ios">A3</ToggleButton>
                        <ToggleButton value="web">A4</ToggleButton>
                        <ToggleButton value="android">A5</ToggleButton>
                        <ToggleButton value="ios">A6</ToggleButton>
                        <ToggleButton value="web">A7</ToggleButton>
                        <ToggleButton value="android">A8</ToggleButton>
                        <ToggleButton value="ios">A9</ToggleButton>
                        <ToggleButton value="ios">A10</ToggleButton>
                    </div>
                </div>
            </ToggleButtonGroup>
            <div>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 4, md: 4 }}>
                        <p>Total</p>
                        <h1>RM 56.86</h1>
                    </Grid>
                    <Grid size={{ xs: 4, md: 4 }}>
                        <p>Seat</p>
                        <h1>C8, C9, C10</h1>
                    </Grid>
                    <Grid size={{ xs: 4, md: 4 }}>
                        <div>
                            <a href="">
                                <Button>Back</Button>
                            </a>
                            <a href="/book-details">
                                <Button style={{ backgroundColor: '#09B54E', color: '#FFF' }}>Book Now</Button>
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>

    );
}
