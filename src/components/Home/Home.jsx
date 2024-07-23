import { Title } from '@mantine/core';
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
        <Title>Embrace Medical</Title>
        <p>Improve the lives of amputees</p>
      </div>
    </div>
);
}
