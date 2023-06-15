import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import "./MusicContent.css";
import { MusicDownloadCountApi, musicAllApi } from "../../data/Apis";

const MusicContent = () => {
  const navigate = useNavigate();
  const { title } = useParams();

  const data = JSON.parse(localStorage.getItem("PostId"));
  const [mp3Data, setMp3Data] = useState(null);
  // const [downloadCounts, setDownloadCounts] = useState(
  //   parseInt(localStorage.getItem("downloadCount")) || 0
  // );
  const [downloadCount, setDownloadCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `https://todaysmusic.onrender.com/api/music/mp3/${title}`
      );
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setMp3Data(data);
      setLoading(false);
      setError(false);
    };

    fetchPosts();
  }, []);
  // useEffect(() => {
  //   // Update localStorage whenever the download count changes
  //   localStorage.setItem("downloadCounts", downloadCounts.toString());
  // }, [downloadCounts]);

  const handleUpdateCount = async () => {
    const data = {
      downloadCount: downloadCount,
    };
    await axios
      .put(MusicDownloadCountApi + title, data)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setDownloadCount("");
  };

  const handleDownload = () => {
    // You can use the HTML5 `download` attribute to download the MP3 file
    const downloadLink = document.createElement("a");
    downloadLink.href = mp3Data?.filepath;
    downloadLink.download = `${mp3Data.title}.mp3`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    // setDownloadCounts((prevCount) => prevCount + 1);
    handleUpdateCount();
    // localStorage.setItem("downloadCount", downloadCount.toString());
  };

  return (
    <>
      <div className="Music-content-main-div">
        {mp3Data ? (
          <div>
            <div className="text-center mt-5 mb-5">
              <h4 className="ity">
                {mp3Data.artist}-{mp3Data.title.replace(/_/g, " ")}{" "}
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
              <span>{mp3Data.title.replace(/_/g, " ")} </span>
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
      {/* {!mp3Data?.downloadCount.length === 0 ? (
        <div className="text-center">
          <p>
            Total Number of Downloads:{" "}
            <strong style={{ color: "darkblue" }}>
              {mp3Data?.downloadCount}
            </strong>
          </p>
        </div>
      ) : null} */}
      <div className="text-center">
        <p>
          Total Number of Downloads:{" "}
          <strong style={{ color: "darkblue" }}>
            {mp3Data?.downloadCount}
          </strong>
        </p>
      </div>
    </>
  );
};

export default MusicContent;
