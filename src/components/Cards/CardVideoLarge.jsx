import React from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import "./CardLarge.css";
export const CardVideoLarge = ({ cover, name, tag }) => {
  return (
    <>
      <div className="min-large-card-div">
        <img src={cover} alt="cover" className="card-large-img" />

        <div className="big-card-hov-large2">
          <BsPlayCircle size={45} className="show2" />
        </div>
      </div>

      <div className="text">
        <h3 className="name-card-big-h ml-2">
          <span>{name}</span> -
          <span
            className="name-ard-big-hi "
            style={{ fontSize: "small", color: "grey", marginLeft: "2px" }}
          >
            {tag}
          </span>
        </h3>
      </div>
    </>
  );
};
