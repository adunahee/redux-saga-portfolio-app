import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

export default class Header extends Component {
  render() {
    return (
      <Grid container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={8}
      >
        <Grid item
          xs={12}>
          <Typography variant='h3'>Anthony Dunahee's Portfolio</Typography>
        </Grid>
        <Grid item>

          <Grid container
            direction='row'
            alignItems='flex-start'
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
                  <Typography variant='h4'>
                    Welcome! </Typography>
                </Grid>

                <Grid item>
                  <Typography variant='h5'>
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
