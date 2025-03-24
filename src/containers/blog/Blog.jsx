import React from "react";
import "./blog.css";

import { Article } from "../../components/components";
import { image1, image2, image3, image4, image5 } from "./ImagesLibrary";

const Blog = () => {
  return (
    <div className="gpt5__blog sec__padding">
      <div className="gpt5__blog-heading">
        <h1 className="txt__gradient-clr">
          A lot is happing, We are blogging about it.
        </h1>
      </div>
      <div className="gpt5__blog-container">
        <div className="gpt5__blog-container_groupA">
          <Article
            imageAddress={image1}
            date="March, 24, 2025"
            title="GPT-5 and Open AI is the future. Let's explore it how it work?"
          />
        </div>
        <div className="gpt5__blog-container_groupB">
          <Article
            imageAddress={image2}
            date="March, 24, 2025"
            title="GPT-5 and Open AI is the future. Let's explore it how it work?"
          />
          <Article
            imageAddress={image3}
            date="March, 24, 2025"
            title="GPT-5 and Open AI is the future. Let's explore it how it work?"
          />
          <Article
            imageAddress={image4}
            date="March, 24, 2025"
            title="GPT-5 and Open AI is the future. Let's explore it how it work?"
          />
          <Article
            imageAddress={image5}
            date="March, 24, 2025"
            title="GPT-5 and Open AI is the future. Let's explore it how it work?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
