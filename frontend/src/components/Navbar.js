import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Subsidy Distribution System
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Apply for Subsidy</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
