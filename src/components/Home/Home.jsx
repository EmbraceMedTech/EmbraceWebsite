import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
// import classes from './Home.module.css';
import React from 'react'
import backgroundVideo from '../../assets/bv1.mp4'

import classes from './Home.module.css';

export default function Home() {
  return (
    <div className="home" id="home">
      <div className='overlay'></div>
      <video className="background_video" src={backgroundVideo} autoPlay loop muted />
      <div className='content'>
        <Title>Althia Medical</Title>
        <p>We've designed a new type of prosthetic socket to improve the lives of these patients.</p>
      </div>
    </div>
);
}
