import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10
    }
}

export default props =>
    <Grid container>
        <Grid item sm={3}>
            <LeftPane styles={styles} />
        </Grid>
        <Grid item sm={9}>
            <RightPane styles={styles} />
        </Grid>
    </Grid>
