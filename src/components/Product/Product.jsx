// import classes from './Home.module.css';
import { Image } from '@mantine/core';
import React from 'react'

export default function Product() {
  return (
    <div className="product" id="product">
      <div className='content'>
        <div className='horizontal_stack'>
            <Image
            src='../../../assets/clab.jpeg'
            />
            <div>
                <h1 className='h1-intro'>Product</h1>
                <p>Product blurb</p>    
            </div>
        </div>
      </div>
    </div>
);
}
