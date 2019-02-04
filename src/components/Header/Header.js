import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1>Welcome to Anthony Dunahee's Portfolio</h1>
        <img src='/images/headshot.jpg' className='headshot'/>
      </header>
    )
  }
}
