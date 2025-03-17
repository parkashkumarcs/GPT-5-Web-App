import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import gptLogo from '../../assets/ChatGPT-Logo.png';


const Navbar = () => {
  return (
    <div className='gpt5__navbar'>
      <div className='gpt5__navbar_links'>
          <div className='gpt5__logo-container'>
            <img src={gptLogo}></img>
            <span>GPT-5</span>
          </div>
          <div className='gpt5__links-container'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#home'>What is GPT-5</a></p>
            <p><a href='#home'>Open AI</a></p>
            <p><a href='#home'>Case Studies</a></p>
            <p><a href='#home'>Libarary</a></p>
          </div>
      </div>
    </div>
  )
}

export default Navbar