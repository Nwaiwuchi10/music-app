import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "../../common/Title";
import { getMusicApi } from "../../data/Apis";
import { news } from "../../data/data";
import { CardLarge } from "../Cards/CardLarge";
import Message from "../Messages/Message";
import Loader from "../../components/Loading/Loader";
import { Link } from "react-router-dom";
import "../Pagination/Pagination.css";
import Pagination from "../Pagination/Pagination";
// import { Pagination } from "@mui/material";

const Latest = ({ totalPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [poster, setPoster] = useState([]);
  const [filtered, setFiltered] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

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

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const posts = poster?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section className="treading hero">
        <Title title="Latest" />
        {/* <Slider {...settings}> */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="trends-div-plus">
            {poster
              ?.filter((value) => {
                if (filtered === "Team Player") {
                  return value;
                } else if (value.category === "LATEST") {
                  return value;
                }
              })
              .map((item, i) => (
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
                        style={{ color: "inherit" }}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            {/* <buton onClick={() => handlePageChange(currentPage - 1)}>
              previous
            </buton>
            <Pagination
              totalPosts={poster?.length}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            <button onClick={() => handlePageChange(currentPage + 1)}>
              next
            </button> */}
          </div>
        )}

        {/* </Slider> */}
      </section>
    </>
  );
};

export default Latest;
