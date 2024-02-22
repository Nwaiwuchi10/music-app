import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "../../common/Title";
import { getMusicApi, getMusicVideoApi, musicAllApi } from "../../data/Apis";
import { news } from "../../data/data";
import { CardLarge } from "../Cards/CardLarge";
import Message from "../Messages/Message";
import Loader from "../../components/Loading/Loader";
import { Link, useLocation } from "react-router-dom";
import "../Pagination/Pagination.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Button } from "@mui/material";
import "./Latest.css";
import SocialHandles from "../Socialhandles/SocialHandles";
import LazyLoad from "react-lazy-load";
const Latest = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [poster, setPoster] = useState([]);
  const [posters, setPosters] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [viewPost, setViewPost] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(musicAllApi);
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const posts = poster?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section className="treading hero">
        <div className="mg-latest">
          <Title title="Latest Music" />
        </div>

        {/* <Slider {...settings}> */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="trends-div-plus">
            <>
              {posts?.map((item, i) => (
                <LazyLoad>
                  <div className="" key={i}>
                    <div className="mb-4">
                      <Link
                        to={`/mp3-download/${item.artist.replace(
                          /\s+/g,
                          "_"
                        )}/${item.title.replace(/\s+/g, "_")}/`}
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
                </LazyLoad>
              ))}
              {/* </LazyLoad> */}
            </>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "5px",
          }}
        >
          <Button
            style={{ marginRight: "15px" }}
            variant="outlined"
            onClick={() => handlePageChange(currentPage - 1, scrollToTop())}
          >
            <GoArrowLeft />
          </Button>

          <Button
            style={{ marginLeft: "15px" }}
            variant="outlined"
            onClick={() => handlePageChange(currentPage + 1, scrollToTop())}
          >
            <GoArrowRight />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Latest;
