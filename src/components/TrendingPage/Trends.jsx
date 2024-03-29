import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Title from "../../common/Title";

import { treading } from "../../data/data";
import { CardLarge } from "../Cards/CardLarge";
import Message from "../Messages/Message";
import "./Trends.css";
import Loader from "../../components/Loading/Loader";
import { Link } from "react-router-dom";
import { Button, Pagination } from "@mui/material";
import { CardVideoLarge } from "../Cards/CardVideoLarge";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { getMusicsVideoApi } from "../../data/Apis";
import LazyLoad from "react-lazy-load";
const Trends = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [poster, setPoster] = useState([]);
  const [posters, setPosters] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  function handlePageChanges(newPages) {
    setCurrentPage(newPages);
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(getMusicsVideoApi);
      console.log(data);
      setPosters(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostVideoId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const posts = posters?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section className="treading hero">
        <Title title="Music Videos" />
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
                </LazyLoad>
              ))}
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

        {/* </Slider> */}
      </section>
    </>
  );
};

export default Trends;
