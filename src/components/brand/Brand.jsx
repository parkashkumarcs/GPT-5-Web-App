import React from 'react';
import './brand.css';
import {
  amazon,
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
          <a href="https://www.amazon.com"><img src= {amazon}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://play.google.com"><img src= {playstore}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://www.apple.com"><img src= {apple}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://www.shopify.com"><img src= {shopify}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://www.slack.com"><img src= {slack}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://www.vivo.com"><img src= {vivo}></img></a>
      </div>
      <div className='brand__Image-container'>
      <a href="https://www.youtube.com"><img src= {youtube}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://www.discord.com"><img src= {discord}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://www.facebook.com"><img src= {facebook}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://www.deepseek.com"><img src= {deepseek}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://www.atlassian.com"><img src= {atlassian}></img></a>
      </div>
      <div className='brand__Image-container'>
        <a href="https://gemini.google.com"><img src= {gemini}></img></a>
      </div>
    </div>
  )
}

export default Brand