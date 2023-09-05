import React from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./CardSmall.css";
const CardSmall = ({ cover, name, tag, i, show }) => {
  return (
    <>
      <div className="card-small-main-div" key={i}>
        {show && <div className="show-card-small">{i + 1}</div>}
        <div className="img-img-card-small">
          <LazyLoadImage
            src={cover}
            alt="cover"
            className="img-card-sm"
            effect="blur"
          />
          {/* <div className="overlay icon absolute top-3 left-2 text-white ">
            <BsPlayCircle size={45} className="show" />
            <AiFillPlayCircle
              size={50}
              className="hide absolute -top-1 -left-1"
            />
          </div> */}
        </div>
        {/* <div className="overlay absolute bottom-0 right-0 text-secondary">
          <div className="flex p-3">
            <AiOutlineHeart size={22} className="mx-3" />
            <BsThreeDots size={22} />
          </div>
        </div> */}
        <div className="text" style={{ marginLeft: "10px" }}>
          <h3 className="name-card-big-h">{name}</h3>
          <span className="name-card-big-hi" style={{ fontSize: "small" }}>
            {tag}
          </span>
        </div>
      </div>
    </>
  );
};

export default CardSmall;
