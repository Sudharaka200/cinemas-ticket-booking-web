import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Typography } from '@mui/material';

export default function ToggleButtonDate() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const buttonStyle = {
    color: '#FFFF',
    borderColor: '#09B54E',
    textTransform: 'none',
    px: 2,
    py: 1.5,
    '&:hover': {
      borderColor: '#09B54E',
      backgroundColor: 'rgba(9, 181, 78, 0.1)',
    },
    '&.Mui-selected': {
      color: '#FFFF',
      backgroundColor: '#09B54E',
      borderColor: '#09B54E',
      '&:hover': {
        backgroundColor: '#0cae4a',
      },
    },
  };

  const renderButton = (value, date, day) => (
    <ToggleButton value={value} sx={buttonStyle}>
      <Box textAlign="center">
        <Typography variant="body1" fontWeight="bold">
          {date}
        </Typography>
        <Typography variant="body2">{day}</Typography>
      </Box>
    </ToggleButton>
  );

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Date Selection"
      sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
    >
      {renderButton('web', '22 Oct', 'Mon')}
      {renderButton('android', '23 Oct', 'Tue')}
      {renderButton('ios', '24 Oct', 'Wed')}
      {renderButton('web1', '25 Oct', 'Thu')}
      {renderButton('android1', '26 Oct', 'Fri')}
      {renderButton('ios1', '27 Oct', 'Sat')}
    </ToggleButtonGroup>
  );
}
