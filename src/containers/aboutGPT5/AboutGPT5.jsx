import React from 'react'
import './aboutGPT5.css'
import { Feature } from '../../components/components'

const AboutGPT5 = () => {
  return (
    <div className='gpt5__about-container sect__margin' id='aboutGPT5'>
      <div className='gpt5__about-feature'>
        <Feature/>
      </div>
      <div className='gpt5__about-heading'>
        <h1 className='txt__gradient-clr'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt5__feature-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default AboutGPT5