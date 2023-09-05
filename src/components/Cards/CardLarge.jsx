import React from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from "react-lazy-load";
import "./CardLarge.css";
export const CardLarge = ({ cover, name, tag }) => {
  return (
    <>
      <LazyLoad>
        <div className="min-large-card-div">
          <img
            src={cover}
            alt="cover"
            className="card-large-img"
            effect="blur"
          />
        </div>
      </LazyLoad>

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
