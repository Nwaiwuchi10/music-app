import React, { useEffect, useState } from "react";
import advert from "../../assets/Images/avert.jpeg";
import { FaTimes } from "react-icons/fa";
import "./Popunder.css";
const PopUnder = () => {
  const [popunder, setPopunder] = useState(false);
  useEffect(() => {
    setPopunder(true);
  }, []);
  document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to a specific link or button
    document
      .getElementById("trigger-button")
      .addEventListener("click", function () {
        // Display the popunder ad after a delay (e.g., 1 second)
        setTimeout(function () {
          document.getElementById("popunder-ad").style.display = "block";
        }, 1000);
      });

    // Close the popunder ad when the close button is clicked
    document
      .getElementById("close-button")
      .addEventListener("click", function () {
        document.getElementById("popunder-ad").style.display = "none";
      });
  });
  return (
    <div>
      <div className="popunder-div" id="popunder-ad">
        <a href="https://www.example.com" target="_blank">
          <img src={advert} alt="img" className="popunder-img" />
        </a>
        <FaTimes id="close-button-pop" />
      </div>
    </div>
  );
};

export default PopUnder;
