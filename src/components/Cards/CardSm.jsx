import React from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import "./CardSm.css";
const CardSm = ({ cover, name, tag, i, show }) => {
  return (
    <>
      <div className="sm-card-small-main-div" key={i}>
        {show && <div className="sm-show-card-small">{i + 1}</div>}
        <div className="img sm-img-img-card-small">
          <img src={cover} alt="cover" className="sm-img-card-sm" />
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

export default CardSm;
