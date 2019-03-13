import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default props =>
  <AppBar position="static">
    <Toolbar>
    <Typography variant="h6" color="inherit">
            News
    </Typography>
    </Toolbar>
  </AppBar>
