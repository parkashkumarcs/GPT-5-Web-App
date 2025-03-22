import React from "react";
import "./aboutGPT5.css";
import { Feature } from "../../components/components";

const title1 = "What is GPT5?";
const title2 = "Chatbots";
const title3 = "Knowledgebase";
const title4 = "Education";

const description1 =
  "GPT-5 (Generative Pre-trained Transformer 5) is the anticipated next-generation AI language model from OpenAI, expected to be more advanced in reasoning, creativity, and contextual understanding. It will likely feature improved accuracy, multimodal capabilities (text, images, audio), and better efficiency for real-world applications. However, as of now, OpenAI has not officially released GPT-5.";

const description2 = "Chatbots are AI-powered programs that simulate human conversation, assisting users through text or voice interactions for customer support, automation, and information retrieval.";
const description3 = "A knowledge base is a centralized repository of information, designed to store, organize, and retrieve data for self-service support, learning, and decision-making.";
const description4 = "AI education involves learning about artificial intelligence concepts, including machine learning, neural networks, and data science, to develop and apply intelligent systems in various fields.";

const AboutGPT5 = () => {
  return (
    <div className="gpt5__about-container sect__margin" id="aboutGPT5">
      <div className="gpt5__about-feature">
        <Feature title = {title1} description = {description1}/>
      </div>
      <div className="gpt5__about-heading">
        <h1 className="txt__gradient-clr">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt5__feature-container">
        <Feature title = {title2} description = {description2}/>
        <Feature title = {title3} description = {description3}/>
        <Feature title = {title4} description = {description4}/>
      </div>
    </div>
  );
};

export default AboutGPT5;
