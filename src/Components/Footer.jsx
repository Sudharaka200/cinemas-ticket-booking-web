import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#09B54E', // or theme.palette.primary.main
        color: '#fff',
        py: 4,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Cinema Booking
        </Typography>
        <Typography variant="body2">
          © {new Date().getFullYear()} Cinema Booking. All rights reserved.
        </Typography>
        <Box mt={2}>
          <Link href="#" color="inherit" underline="hover" sx={{ mr: 2 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Terms of Service
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
