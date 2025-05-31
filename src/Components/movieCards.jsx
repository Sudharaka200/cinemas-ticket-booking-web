import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

// Sample movie data (replace with your own or fetch from API)
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
  }
];

export default function MovieCards() {
  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {MovieSharp.map((movie, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={movie.image}
            title={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
