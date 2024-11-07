import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating } from '@mui/material';
import logo from './logo.jpg';
const HeaderComponent = () => {
  const [open, setOpen] = useState(false);  // State for dialog visibility
  const [rating, setRating] = useState(0);  // State for rating value

  // Function to open the rating dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the rating dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to submit the rating
  const handleSubmit = () => {
    console.log('Rating submitted:', rating);
    setOpen(false);
  };

  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ borderBottom: '4px solid #ff9800', zIndex: 1201 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo Section */}
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
          <Typography variant="h6" color="textPrimary">
            Virtual Labs
          </Typography>
        </Box>

        {/* Rate Me Button */}
        <Button variant="contained" onClick={handleOpen} sx={{ backgroundColor: '#007bff' }}>
          Rate Me
        </Button>
        
        {/* Rating Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Rate Us</DialogTitle>
          <DialogContent>
            <Typography>Rate your experience out of 5 stars:</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
