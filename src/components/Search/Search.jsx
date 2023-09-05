import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getMusicsVideoApi, musicAllApi } from "../../data/Apis";
import { CardLarge } from "../Cards/CardLarge";
import { CardVideoLarge } from "../Cards/CardVideoLarge";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LayoutSideBar from "../SideBar/LayoutSideBar";
import { Container } from "react-bootstrap";
import Latest from "../Latest/Latest";
import Trends from "../TrendingPage/Trends";
import Recomend from "../Recomend/Recomend";
import SocialHandles from "../Socialhandles/SocialHandles";

const Search = ({ i, show }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [poster, setPoster] = useState([]);
  const [posters, setPosters] = useState([]);
  const [filtered, setFiltered] = useState([]);
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
    <div>
      <Header />
      <SocialHandles />
      <LayoutSideBar>
        <Container>
          <div className="pt-5 pb-5">
            <TextField
              id="outlined-basic"
              label="search song by artist or title"
              variant="outlined"
              type="text"
              onChange={(e) => setSearchTitle(e.target.value)}
              style={{ width: "99%" }}
            />
          </div>
          {poster
            ?.filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
                value.artist.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => (
              <div className="" key={i}>
                <div className="mb-4">
                  <Link
                    to={`/mp3-download/${item.artist.replace(
                      /\s+/g,
                      "_"
                    )}/${item.title.replace(/\s+/g, "_")}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardLarge
                      cover={item.image}
                      name={item.artist.replace(/_/g, " ")}
                      // tag={item.title}
                      tag={item.title.replace(/_/g, " ")}
                      style={{ color: "inherit" }}
                    />
                  </Link>
                </div>
              </div>
            ))}
          {posters
            ?.filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
                value.artist.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => (
              <div>
                {searchTitle ? (
                  <>
                    <div className="" key={i}>
                      <div className="mb-4">
                        <Link
                          to={`/mp4-download/${item.artist.replace(
                            /\s+/g,
                            "_"
                          )}/${item.title.replace(/\s+/g, "_")}`}
                          style={{ textDecoration: "none" }}
                        >
                          <CardVideoLarge
                            cover={item.image}
                            name={item.artist}
                            tag={item.title.replace(/_/g, " ")}
                            // tag={item.title}
                            style={{ color: "inherit" }}
                          />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            ))}

          <div style={{ paddingTop: "50px" }}>
            <Latest />
            <Trends />
            <Recomend />
          </div>
        </Container>
      </LayoutSideBar>

      <Footer />
    </div>
  );
};

export default Search;
