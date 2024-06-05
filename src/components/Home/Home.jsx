import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
// import classes from './Home.module.css';
import React from 'react'
import backgroundVideo from '../../assets/background_video.mp4'

export default function Home() {
  return (
    <div className="home">
      <div className='overlay'></div>
      <video className="background_video" src={backgroundVideo} autoPlay loop muted />
      <div className='content'>
        <h1 className='h1-intro'>Althia</h1>
        <p>Intro blurb</p>
      </div>
    </div>
);
}