import axios from "axios";
import React, { useEffect, useState } from "react";

import Loader from "../../components/Loading/Loader";

import { Link, useLocation } from "react-router-dom";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Button } from "@mui/material";

import LazyLoad from "react-lazy-load";
import { musicAllApi } from "../../data/Apis";
import Title from "../../common/Title";
import Message from "../../components/Messages/Message";
import { CardLarge } from "../../components/Cards/CardLarge";
const Mixtape = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [poster, setPoster] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [viewPost, setViewPost] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(musicAllApi);
      console.log(data);

      setPoster(data);
    };
    setLoading(false);
    setError(false);
    fetchPosts();
  }, []);
  useEffect(() => {
    // Filter the data based on genre "afrobeat"
    const filtered = poster.filter((item) => item.category === "DJMIX");
    setFilteredData(filtered);
    console.log(filtered);
  }, [poster]);
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
          <Title title="DJ Mixtapes" />
        </div>

        {/* <Slider {...settings}> */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="trends-div-plus">
            <>
              {/* <LazyLoad> */}
              {filteredData.map((item, i) => (
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
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <GoArrowLeft />
          </Button>

          <Button
            style={{ marginLeft: "15px" }}
            variant="outlined"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <GoArrowRight />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Mixtape;
