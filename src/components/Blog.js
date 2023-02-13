import React from "react";
import { BsBook } from "react-icons/bs";

const Blog = ({title, publishedAt, description, urlToImage}) => {
  return (
    <div className="blog">
      <div className="blogInfo">
        <h1>{title}</h1>
        <div className="blogDetails">
          <h4>{publishedAt}</h4>
          <div className="readTime">
            <BsBook />
            <p>3min read</p>
          </div>
        </div>
        <p>
          {description}
        </p>
        <button className="btn">READ MORE</button>
      </div>
      <div className="blogImage">
        <img src={urlToImage} alt="" />
      </div>
    </div>
  );
};

export default Blog;
