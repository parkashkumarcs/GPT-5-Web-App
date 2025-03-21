import React from "react";
import "./header.css";
import users from "../../assets/users.png";
import botImage from "../../assets/bot.png";
const Header = () => {
  return (
    <div className="gpt5__header sec__padding" id="home">
      <div className="gpt5__header-content ">
        <h1 className="txt__gradient-clr">
          Let's build something amazing with GPT-5 OpenAI
        </h1>
        <p className="gpt5__description">
          GPT-5 is the latest iteration of OpenAI's generative AI models,
          designed to unify advanced reasoning capabilities with exceptional
          language understanding. It builds on the strengths of its
          predecessors, offering enhanced performance in tasks like natural
          language processing, complex problem-solving, and creative content
          generation. GPT-5 aims to push the boundaries of artificial
          intelligence, moving closer to the goal of creating a more generalized
          AI system.
        </p>
        <div className="gpt5__header-input">
          <input type="email" placeholder="enter email address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt5__header-users">
          <img src={users}></img>
          <p>
          100 millions plus people requested access a visit in last 24 hours
        </p>
        </div>
      </div>
      <div className="gpt5__header-image">
            <img src={botImage}></img>
        </div>
    </div>
  );
};

export default Header;
