import React from 'react';
import './article.css';


const Article = ({imageAddress, date, title}) => {
  return (
    <div className='gpt5__article-container'>
      <div className='gpt5__article-image-container'>
        <img src={imageAddress} />
      </div>
      <div className='gpt5__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Explore more article</p>
      </div>  
    </div>
  )
}

export default Article