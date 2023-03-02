import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import "./MusicContent.css";
const MusicContent = () => {
  const { id } = useParams();

  const data = JSON.parse(localStorage.getItem("PostId"));
  const [mp3Data, setMp3Data] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/music/${id}`);
      console.log(data);
      setMp3Data(data);
      setLoading(false);
      setError(false);
    };

    fetchPosts();
  }, [id]);

  const handleDownload = () => {
    // You can use the HTML5 `download` attribute to download the MP3 file
    const downloadLink = document.createElement("a");
    downloadLink.href = mp3Data?.filepath;
    downloadLink.download = `${mp3Data.title}.mp3`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="Music-content-main-div">
        {mp3Data ? (
          <div>
            <div className="text-center mt-5 mb-5">
              <h4>
                {mp3Data.artist}-{mp3Data.title}{" "}
              </h4>
            </div>
            <div className="w-div-img">
              <img src={mp3Data.image} alt="dddj" className="img-content-div" />
            </div>
            <div
              className="text-center color-grey mb-5"
              style={{ color: "grey", fontSize: "large" }}
            >
              <span>{mp3Data.artist} </span>
              <span>{mp3Data.title} </span>
              <span>MP3 Download</span>
            </div>
            <div
              className="mt-5 mb-4   "
              style={{
                color: "gray",
                fontSize: "medium",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <div
                style={{
                  display: "block",
                  //   justifyContent: "flex-start",
                  height: "auto",
                  textAlign: "center",
                }}
              >
                <span>{mp3Data.artist} </span>
                <span>{mp3Data.title} </span>:{" "}
                <span>{mp3Data.description}</span>
              </div>
            </div>
            <div
              className="mt-5 mb-4 d-flex  "
              style={{
                color: "gray",
                fontSize: "medium",
                justifyContent: "center",
              }}
            >
              <h5>Donwload & Listen below</h5>
            </div>
            <div
              className="d-flex mt-5 mb-5 "
              style={{ justifyContent: "center" }}
            >
              {" "}
              <audio src={mp3Data?.filepath} controls />
            </div>
            <div
              className="d-flex mt-5 mb-5 "
              style={{ justifyContent: "center" }}
            >
              {" "}
              <Button
                variant="contained"
                onClick={handleDownload}
                style={{ height: "7vh" }}
              >
                {" "}
                Download Mp3
              </Button>
            </div>
          </div>
        ) : (
          <p>{loading && <Loader />}</p>
        )}
      </div>
    </>
  );
};

export default MusicContent;
