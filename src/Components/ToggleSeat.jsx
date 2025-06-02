import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export default function ToggleSeat() {
  const [selectedSeats, setSelectedSeats] = React.useState([]);

  const handleChange = (event, newSeats) => {
    setSelectedSeats(newSeats);
  };

  const rows = 6;
  const columns = 10;
  const seatPrice = 18.95; // sample price per seat

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mt: 4 }}>
        {[...Array(rows)].map((_, rowIndex) => (
          <ToggleButtonGroup
            key={rowIndex}
            value={selectedSeats}
            onChange={handleChange}
            aria-label={`row-${rowIndex + 1}`}
            sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
          >
            {[...Array(columns)].map((_, colIndex) => {
              const seatLabel = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
              return (
                <ToggleButton
                  key={seatLabel}
                  value={seatLabel}
                  sx={{
                    width: 50,
                    height: 50,
                    borderColor: '#09B54E',
                    color: '#000',
                    '&.Mui-selected': {
                      backgroundColor: '#09B54E',
                      color: '#fff',
                    },
                  }}
                >
                  {seatLabel}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        ))}
      </Box>

      <Box sx={{ mt: 4, px: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <p>Total</p>
            <h1>RM {(selectedSeats.length * seatPrice).toFixed(2)}</h1>
          </Grid>
          <Grid item xs={12} md={4}>
            <p>Seat</p>
            <h1>{selectedSeats.join(', ') || 'None selected'}</h1>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <a href="/">
                <Button variant="outlined">Back</Button>
              </a>
              <a href="/book-details">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#09B54E', color: '#FFF' }}
                  disabled={selectedSeats.length === 0}
                >
                  Book Now
                </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
