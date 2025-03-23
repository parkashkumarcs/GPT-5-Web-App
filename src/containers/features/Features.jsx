import React from "react";
import "./features.css";
import neuran from '../../assets/neuran.mp4'

const Features = () => {
  const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      describe: 'The aims to improve user confidence by ensuring transparent, context-aware, and ethically aligned responses. This upgrade will refine trust-building mechanisms through better accuracy, reduced biases, and more human-like, reliable interactions.'
    },
    {
      title: 'Become the tended active',
      describe: 'The feature in GPT-5 focuses on improving responsiveness and engagement by making interactions more dynamic and context-aware. This upgrade ensures smoother, more intuitive conversations with better adaptability to user needs.'
    },
    {
      title: 'Message or am nothing',
      describe: 'It could emphasize the importance of clear, meaningful communication in GPT-5. This enhancement would ensure that responses are always relevant, purposeful, and engaging, avoiding empty or unhelpful replies.'
    },
    {
      title: 'Really boy law country',
      describe: 'it focuses on improving contextual understanding of legal, societal, and cultural discussions. This enhancement could ensure more accurate and nuanced responses regarding legal frameworks, national policies, and ethical considerations.'
    },
  ]
  return (
    <div className="gpt5__Features sec__padding" id="features">
      <div className="video-container">
          <video muted loop playsInline autoPlay className="video-bg">
            <source src={neuran}></source>
          </video>
        </div>
      <div className="gpt5__features-heading">
        <h1 className="txt__gradient-clr txt-case">
          The feature is now and you just need to realize it. Step into future
          today & make it Happen.
        </h1>
        <p>Request Fairly Access To Get Started </p>
        <div className="relative w-full h-screen overflow-hidden">
          <video muted loop playsInline autoPlay className="absolute top-0 left-0 w-full h-full object-cover">
            <source src={neuran}></source>
          </video>
        </div>
      </div>
      <div className="gpt5__features-data">
        {featuresData.map((item, index) => (
          <>
          <div className="text__bar"/>
          <h1>{item.title}</h1> 
          <p>{item.describe}</p>  
          </>       
        ))} 
      </div>
    </div>
  );
};

export default Features;
