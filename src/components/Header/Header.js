import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

export default class Header extends Component {
  render() {
    const headers = { color: '#e8e8e3'};
    return (
      <Grid container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={8}
      >
        <Grid item
          xs={12}>
          <Typography variant='h2' 
          style={headers}>
          Anthony Dunahee's Portfolio</Typography>
        </Grid>
        <Grid item>

          <Grid container
            direction='row'
            alignItems='center'
            justify='center'
            spacing={8}
          >
            <Grid item>
              <img src='/images/headshot.jpg'
                alt="headshot of Anthony"
                className='headshot'
                style={{
                  height: '150px',
                  width: '150px'
                }} />
            </Grid>

            <Grid item xs={8}>
              <Grid container
                direction='column'>

                <Grid item>
                  <Typography variant='h4'
                    style={headers}>
                    Welcome! </Typography>
                </Grid>

                <Grid item>
                  <Typography variant='h5'
                    style={headers}>
                    I am an aspiring full stack developer, and excited to share with you some of my recent work.</Typography>
                </Grid>

              </Grid>

            </Grid>
          </Grid>
        </Grid>


      </Grid>
    )
  }
}
