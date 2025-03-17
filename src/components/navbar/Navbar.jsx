import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import gptLogo from "../../assets/ChatGPT-Logo.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#home">What is GPT-5?</a>
    </p>
    <p>
      <a href="#home">Open AI</a>
    </p>
    <p>
      <a href="#home">Case Studies</a>
    </p>
    <p>
      <a href="#home">Libarary</a>
    </p>
  </>
);

const Navbar = () => {
  const [togleMenu, setTogleMenu] = useState(false);
  return (
    <div className="gpt5__navbar">
      <div className="gpt5__navbar_links">
        <div className="gpt5__logo-container">
          <img src={gptLogo}></img>
          <span>GPT-5</span>
        </div>
        <div className="gpt5__links-container">
          <Menu />
        </div>
      </div>
      <div className="gpt5__sign-container">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt5__navbar-menu">
        {togleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setTogleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setTogleMenu(true)}
          />
        )}
        {togleMenu && (
          <div className="gpt5__menu-container scale-up">
            <div className="gpt5__menu-links_container">
              <Menu />
            </div>
            <div className="gpt5__menu-sign_container">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
