import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';

export default function ToggleButtonTime() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const buttonStyle = {
    color: '#FFFF',
    borderColor: '#09B54E',
    px: 3,
    py: 1.5,
    textTransform: 'none',
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

  const renderButton = (value, time) => (
    <ToggleButton key={value} value={value} sx={buttonStyle}>
      <Typography variant="body1" fontWeight="bold">{time}</Typography>
    </ToggleButton>
  );

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Time Selection"
      sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
    >
      {renderButton('web', '15:40')}
      {renderButton('android', '16:00')}
      {renderButton('ios', '17:15')}
      {renderButton('web1', '18:30')}
      {renderButton('android1', '19:00')}
      {renderButton('ios1', '20:20')}
    </ToggleButtonGroup>
  );
}
