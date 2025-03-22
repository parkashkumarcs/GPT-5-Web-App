import React from 'react';
import './feature.css';


const Feature = ({title, description}) => {
  return (
    <div className='gpt5__features-container'>
      <div className='gpt5__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt5__feature-description'>
      <p>{description}</p>
      </div>
    </div>
  )
}

export default Feature