import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, useMediaQuery, useTheme } from '@mui/material';

// Sample movie data
const MovieSharp = [
  {
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    image: "https://image.tmdb.org/t/p/w500/8h58NStOeXtfLOcAfeUQv0t1Ikh.jpg"
  },
  {
    title: "Interstellar",
    description: "A science fiction epic exploring space and time.",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "The Dark Knight",
    description: "A gritty take on the Batman saga.",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "Tenet",
    description: "A time-bending espionage thriller.",
    image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg"
  },
  {
    title: "Dunkirk",
    description: "A gripping World War II evacuation story.",
    image: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg"
  },
];

export default function MovieCards() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getGridColumns = () => {
    if (isSmallScreen) return 'repeat(1, 1fr)'; // 1 column on small screens
    if (isMediumScreen) return 'repeat(2, 1fr)'; // 2 columns on medium screens
    return 'repeat(4, 1fr)'; // 4 columns on large screens
  };

  return (
    <>
    <a href="/theater">
      <Box
      display="grid"
      gridTemplateColumns={getGridColumns()}
      gap={2}
      padding={2}
      sx={{ maxWidth: '1200px', margin: '0 auto' }}
    >
      {MovieSharp.map((movie, index) => (
        <Card key={index} sx={{ maxWidth: 300, margin: '0 auto' }}>
          <CardMedia
            sx={{ height: 200 }}
            image={movie.image}
            title={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" textAlign="center">
              {movie.title}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: '#09B54E' }}>
              Buy Ticket
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
    </a>
    </>
  )};