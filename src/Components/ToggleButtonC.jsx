import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonC() {
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

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="City Selection"
      sx={{ gap: 1, flexWrap: 'wrap' }}
    >
      <ToggleButton value="web" sx={buttonStyle}>
        Colombo
      </ToggleButton>
      <ToggleButton value="android" sx={buttonStyle}>
        Kurunegala
      </ToggleButton>
      <ToggleButton value="ios" sx={buttonStyle}>
        Kandy
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
