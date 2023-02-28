import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Title from "../../common/Title";
import { getMusicApi } from "../../data/Apis";
import { treading } from "../../data/data";
import { CardLarge } from "../Cards/CardLarge";
import Message from "../Messages/Message";
import "./Trends.css";
import Loader from "../../components/Loading/Loader";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
const Trends = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [poster, setPoster] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const post = poster
    ?.filter((value) => {
      if (filtered === "Team Player") {
        return value;
      } else if (value.category === "TRENDING") {
        return value;
      }
    })
    .slice(indexOfFirstItem, indexOfLastItem);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(getMusicApi);
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
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
  return (
    <>
      <section className="treading hero">
        <Title title="Trending" />
        {/* <Slider {...settings}> */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="trends-div-plus">
            {post.map((item, i) => (
              <div className="" key={i}>
                <div className="mb-4">
                  <Link
                    to={`/mp3-download/${item._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardLarge
                      cover={item.image}
                      name={item.artist}
                      tag={item.title}
                    />
                  </Link>
                </div>
              </div>
            ))}
            <div>
              <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                onClick={() => handlePageChange(currentPage - 1 && +1)}
              />
              {/* <button onClick={() => handlePageChange(currentPage - 1)}>
                Previous
              </button>
              <button onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </button> */}
            </div>
          </div>
        )}
        {/* </Slider> */}
      </section>
    </>
  );
};

export default Trends;
