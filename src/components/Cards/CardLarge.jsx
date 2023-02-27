import React from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import "./CardLarge.css";
export const CardLarge = ({ cover, name, tag }) => {
  return (
    <>
      <div className="min-large-card-div">
        <img src={cover} alt="cover" className="card-large-img" />
        <div className="big-card-hov">
          <BsPlayCircle size={45} className="show" />
          <AiFillPlayCircle
            size={50}
            className="hide absolute -top-1 -left-1"
          />
        </div>
        {/* <div className="overlay absolute bottom-0 right-0 text-white">
          <div className="flex p-3">
            <AiOutlineHeart size={22} className="mx-3" />
            <BsThreeDots size={22} />
          </div>
        </div> */}
      </div>
      <div className="text">
        <h3 className="name-card-big-h">{name}</h3>
        <span className="name-ard-big-hi" style={{ fontSize: "small" }}>
          {tag}
        </span>
      </div>
    </>
  );
};
