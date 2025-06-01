import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonTime() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="web">
                <div>
                    <p>15:40</p>
                </div>
            </ToggleButton>
            <ToggleButton value="android">
                <div>
                    <p>15:40</p>
                </div>
            </ToggleButton>
            <ToggleButton value="ios">
                <div>
                    <p>15:40</p>
                </div>
            </ToggleButton>
            <ToggleButton value="web1">
                <div>
                    <p>15:40</p>
                </div>
            </ToggleButton>
            <ToggleButton value="android1">
                <div>
                    <p>15:40</p>
                </div>
            </ToggleButton>
            <ToggleButton value="ios1">
                <div>
                    <p>15:40</p>
                </div>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
