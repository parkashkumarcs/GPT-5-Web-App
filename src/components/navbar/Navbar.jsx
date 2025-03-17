import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import gptLogo from '../../assets/ChatGPT-Logo.png';


const Navbar = () => {
  return (
    <div className='gpt5__navbar'>
      <div className='gpt5__navbar_links'>
          <div className='gpt5_logo-container'>
            <img src={gptLogo}></img>
            <span>GPT-5</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar