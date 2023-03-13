import React from "react";
import advert from "../../assets/Images/advert.jpg";
import advert2 from "../../assets/Images/whopper.jpg";
import "./Advert.css";
const Advert = () => {
  return (
    <div>
      <div className="advert-img-div">
        <img src={advert2} alt="hfj" className="advert-img2" />
      </div>
      <br />
      <div className="advert-img-div">
        <img src={advert} alt="hfj" className="advert-img" />
      </div>
    </div>
  );
};

export default Advert;
