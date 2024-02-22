import React from "react";
import "./NavUnder.css";
import { Link } from "react-router-dom";
const NavUnder = () => {
  return (
    <div className="NavUnder-main-div">
      <div>
        <Link
          to="/music-upload"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Upload Your Song
        </Link>{" "}
      </div>
      <div>
        <Link to="/musics" style={{ textDecoration: "none", color: "inherit" }}>
          Music
        </Link>
      </div>
      <div>
        <Link to="/videos" style={{ textDecoration: "none", color: "inherit" }}>
          Videos
        </Link>{" "}
      </div>
      <div>
        <Link
          to="/dj-mixtape"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          DJ Mix
        </Link>
      </div>
      {/* <div>
        <Link
          to="/upload-music"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          Upload Music
        </Link>
      </div> */}
    </div>
  );
};

export default NavUnder;
