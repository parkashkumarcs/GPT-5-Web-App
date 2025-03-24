import React from "react";
import "./possibility.css";
import neuranBG from "../../assets/neuranBG.png";

const Possibility = () => {
  return (
    <div className="gpt5__possibility sec__padding">
      <div className="gpt5__possibility-image">
        <img src={neuranBG}></img>
      </div>
      <div className="gpt5__possibility-content">
        <h3>Request Early Access To Get Started</h3>
        <h1 className="txt__gradient-clr">
          The Possibilities Are Beyond Your Imagination
        </h1>
        <p>
          GPT-5 unlocks limitless possibilities, from hyper-intelligent
          assistants that understand emotions to real-time code generation and
          ultra-personalized learning experiences. It enhances human creativity,
          automates complex tasks, and revolutionizes industries with smarter
          decision-making and deep contextual awareness.
        </p>
        <h3>Request Early Access To Get Started</h3>
      </div>
    </div>
  );
};

export default Possibility;
