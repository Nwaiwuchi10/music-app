import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import { recommand } from "../../data/data";
import CardSm from "../Cards/CardSm";
import CardSmall from "../Cards/CardSmall";
import CardSmData from "../Cards/CardSmData";
import "../Cards/CardSm.css";
import "./Layout.css";
import "./Sidebar.css";
import { getMusicApi, getMusicsVideoApi, musicAllApi } from "../../data/Apis";

const Sidebar = ({ i, show }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [poster, setPoster] = useState([]);
  const [posters, setPosters] = useState([]);
  const [filtered, setFiltered] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(musicAllApi);
      console.log(data);
      setPoster(data);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(getMusicsVideoApi);
      console.log(data);
      setPosters(data);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  return (
    <>
      <section
        className="div-sibebar-start"
        // className="sidebar hero "
      >
        <div className="div-side-h5 mt-4 mb-4">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            type="text"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        {poster
          ?.filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.artist.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((usery) => (
            <div>
              {searchTitle ? (
                <>
                  <div>
                    <Link
                      to={`/mp3-download/${usery?.title.replace(/\s+/g, "_")}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="img sm-img-img-card-small">
                        <img
                          src={usery.image}
                          alt="cover"
                          className="sm-img-card-sm"
                        />
                      </div>

                      <div className="text" style={{ marginLeft: "10px" }}>
                        <h3 className="name-card-big-h">{usery.artist}</h3>
                        <span
                          className="name-card-big-hi"
                          style={{ fontSize: "small" }}
                        >
                          {usery.title.replace(/_/g, " ")}
                        </span>
                      </div>
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        {posters
          ?.filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.artist.toLowerCase().includes(searchTitle.toLowerCase()) &&
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((usery) => (
            <div>
              {searchTitle ? (
                <>
                  <div>
                    <Link
                      to={`/mp4-download/${usery?.title.replace(/\s+/g, "_")}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="img sm-img-img-card-small">
                        <img
                          src={usery.image}
                          alt="cover"
                          className="sm-img-card-sm"
                        />
                      </div>

                      <div className="text" style={{ marginLeft: "10px" }}>
                        <h3 className="name-card-big-h">{usery.artist}</h3>
                        <span
                          className="name-card-big-hi"
                          style={{ fontSize: "small" }}
                        >
                          {usery.title.replace(/_/g, " ")}
                        </span>
                      </div>
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        <h5 className=" mb-4 ">Trending Songs</h5>
        {poster
          ?.slice(0, 6)
          .filter((value) => {
            if (filtered === "puyol") {
              return value;
            } else if (value.category === "TRENDING") {
              return value;
            }
          })
          .slice(0, 10)
          .map((item, i) => (
            <div className="mb-3">
              <Link
                to={`/mp3-download/${item.title.replace(/\s+/g, "_")}`}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <CardSm
                  cover={item.image}
                  name={item.artist.replace(/_/g, " ")}
                  tag={item.title.replace(/_/g, " ")}
                  i={i}
                />
              </Link>
            </div>
          ))}
        {/* <h1 className="mb-5 text-lg font-semibold text-gray-600 mt-5">
          Go Mobile
        </h1> */}

        {/* <div className="flex justify-between">
          <div className="bg-secondary text-white flex center px-2 py-0.5 rounded-md">
            <div>
              <AiFillApple size={30} />
            </div>
            <div className="">
              <span className="text-gray-300 text-[12px]">Download on the</span>
              <h1 className="text-md font-semibold">App Store</h1>
            </div>
          </div>
          <div className="bg-secondary text-white flex center px-2 py-0.5 rounded-md">
            <div>
              <IoPlaySharp size={30} />
            </div>
            <div className="">
              <span className="text-gray-300 text-[12px]">Download on the</span>
              <h1 className="text-md font-semibold">Google Play</h1>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Sidebar;
