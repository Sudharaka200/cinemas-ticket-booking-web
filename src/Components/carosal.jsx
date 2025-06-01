import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography } from '@mui/material';

function Carosal() {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "https://static.toiimg.com/thumb/msid-119575221,width-1280,height-720,resizemode-4/119575221.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "https://images7.alphacoders.com/131/1319531.jpeg"
        },
        {
            name: "Random Name #3",
            description: "Another awesome slide",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSDBkVpgICcyhGr9VyqtOW-Ufha-hxZ2sDA&s"
        },
        {
            name: "Random Name #4",
            description: "Yet another carousel item!",
            image: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w1920-q80/marquee/1055055/27/24/29/asset_marquee_8280c194-799f-4a97-b7ee-4e562d49217d.jpg?format=webp"
        }
    ];

    return (
        <Carousel>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Carousel>
    );
}

function Item({ item }) {
    return (
        <Paper
            sx={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
                width:'100%',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                px: 5,
                py: 8,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    padding: 3,
                    borderRadius: 2,
                    maxWidth: '70%',
                }}
            >
                <Typography variant="h3" gutterBottom style={{fontWeight:'bold'}}>{item.name}</Typography>
                <Typography variant="body1" paragraph>{item.description}</Typography>
                <Button variant="contained" style={{backgroundColor: '#09B54E'}}>
                    Buy Ticket
                </Button>
            </Box>
        </Paper>
    );
}

export default Carosal;
