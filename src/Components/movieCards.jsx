import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import MovieImg from '../assets/image 4.png';

// Sample movie data
const MovieSharp = [
  {
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    image: MovieImg
  },
  {
    title: "Interstellar",
    description: "A science fiction epic exploring space and time.",
    image: MovieImg
  },
  {
    title: "The Dark Knight",
    description: "A gritty take on the Batman saga fafaaf.",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "Tenet",
    description: "A time-bending espionage thrillerv dadad.",
    image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg"
  },
  {
    title: "Dunkirk",
    description: "A gripping World War II evacuation story adaadad.",
    image: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg"
  },
];

export default function MovieCards() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getGridColumns = () => {
    if (isSmallScreen) return 'repeat(1, 1fr)';
    if (isMediumScreen) return 'repeat(2, 1fr)';
    return 'repeat(4, 1fr)';
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      padding="50px"
    >
        <Box
          display="grid"
          gridTemplateColumns={getGridColumns()}
          gap={4}
          padding={2}
          sx={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {MovieSharp.map((movie, index) => (
            <Card key={index} sx={{ maxWidth: 300, margin: '0 auto' }}>
              <CardMedia
                sx={{ height: 300 }}
                image={movie.image}
                title={movie.title}
              />
              <CardContent style={{backgroundColor:'black', color:'#FFF'}}>
                <Typography gutterBottom variant="h6" component="div" textAlign="center">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" style={{color:'#FFF'}}>
                  {movie.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', backgroundColor:'black' }}>
                <a href="/theater" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ backgroundColor: '#09B54E' }}>
                  Buy Ticket
                </Button>
                </a>
              </CardActions>
            </Card>
          ))}
        </Box>
    </Box>
  );
}
