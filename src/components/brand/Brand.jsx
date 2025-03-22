import React from 'react';
import './brand.css';
import {
  google,
  playstore,
  shopify,
  slack,
  vivo,
  dropbox,
  apple,
  atlassian,
  youtube,
  discord,
  facebook, 
  gemini,
  deepseek
} from './importImages'


const Brand = () => {
  return (
    <div className='brand__Section-container sec__padding'>
      <div className='brand__Image-container'>
        <img src= {google}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= { playstore}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {apple}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {shopify}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {slack}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {vivo}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {youtube}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {discord}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {facebook}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {deepseek}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {atlassian}></img>
      </div>
      <div className='brand__Image-container'>
        <img src= {gemini}></img>
      </div>
    </div>
  )
}

export default Brand