import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "../../common/Title";
import { getMusicApi } from "../../data/Apis";
import { recommend } from "../../data/data";
import CardSmall from "../Cards/CardSmall";
import Message from "../Messages/Message";
import Loader from "../../components/Loading/Loader";
import "./Recomend.css";
const Recomend = () => {
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
  return (
    <>
      <section className="treading hero ">
        <h3 className="mb-4">Recomended Songs</h3>
        {/* <Title title="Recommend Songs" style={{ fontSize: "25px" }} /> */}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="recomend-main-div">
            {poster
              ?.filter((value) => {
                if (filtered === "") {
                  return value;
                } else if (value?.recommendSong === "true") {
                  return value;
                }
              })
              .slice(0, 10)
              .map((item, i) => (
                <CardSmall
                  cover={item.image}
                  name={item.artist}
                  tag={item.title}
                  i={i}
                />
              ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Recomend;
