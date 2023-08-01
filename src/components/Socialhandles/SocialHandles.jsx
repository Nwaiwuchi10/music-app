import React from "react";
import fb from "../../assets/Images/fb.png";
import twitter from "../../assets/Images/tw.png";
import inst from "../../assets/Images/inst.png";
import "./Socials.css";
const SocialHandles = () => {
  const instangram = () => {
    window.location.href = "https://www.instagram.com/todaysmuzik.com.ng/";
  };
  const facebook = () => {
    window.location.href =
      "https://web.facebook.com/profile.php?id=100095016606283";
  };
  const twitters = () => {
    window.location.href = "https://twitter.com/todaysmuzi88954";
  };
  return (
    <div className="centered-icon-container">
      <div className="centered-icon-div" onClick={facebook}>
        <img src={fb} alt="icons" className="centered-icon" />
      </div>
      <div className="centered-icon-divss" onClick={twitters}>
        <img src={twitter} alt="icons" className="centered-icon" />
      </div>
      <div className="centered-icon-divs" onClick={instangram}>
        <img src={inst} alt="icons" className="centered-icon" />
      </div>
    </div>
  );
};

export default SocialHandles;
