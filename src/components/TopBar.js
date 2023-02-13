import React from "react";
import "../App.css";
import profilePic from "../assets/img.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import { RiMailAddLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="topBar">
      <img src={profilePic} alt="" />
      <h2>TechHub</h2>
      <div className="icons">
        <AiOutlineSearch />
        <MdOutlineLightMode />
        <RiMailAddLine />
      </div>
    </div>
  );
};

export default TopBar;
