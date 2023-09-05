import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import Axios from "axios";
import FileDownload from "js-file-download";
import ReactAudioPlayer from "react-audio-player";
import "./MusicContent.css";
import advert from "../../assets/Images/avert.jpeg";
// import FileDownload from "js-file-download";
import {
  MusicDownloadCountApi,
  getMusicDetailsApi,
  musicAllApi,
} from "../../data/Apis";

import Message from "../../components/Messages/Message";
import CardSmall from "../../components/Cards/CardSmall";
import Sitemap from "../../sitemap";
import { Helmet } from "react-helmet";
import ShareMusic from "../../components/ShareMusic/ShareMusic";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

const MusicContent = () => {
  const navigate = useNavigate();
  const { artist, title } = useParams();

  const data = JSON.parse(localStorage.getItem("PostId"));
  const [mp3Data, setMp3Data] = useState(null);
  const [displayLyrics, setDisplayLyrics] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `https://todaysmusic.onrender.com/api/music/mp3/${title}`,

        { dataType: "blob" } // Set the response type to 'blob'
      );
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setMp3Data(data);
      setLoading(false);

      setError(false);
    };

    fetchPosts();
  }, [title]);

  // useEffect(() => {
  //   // Update localStorage whenever the download count changes
  //   localStorage.setItem("downloadCounts", downloadCounts.toString());
  // }, [downloadCounts]);
  const formattedLyrics = mp3Data?.lyrics;
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
  const downloads = (e) => {
    e.preventDefault();
    Axios({
      url: `https://todaysmusic.onrender.com/api/music/mp3/${title}`,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      const downloadLink = document.createElement("a");
      FileDownload(
        (downloadLink.href = mp3Data?.filepath),
        `${mp3Data.artist}-${mp3Data.title}.mp3`
      );
    });
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = mp3Data?.filepath;
    downloadLink.dataType = "blob";
    downloadLink.download = `${mp3Data.artist}-${mp3Data.title}.mp3`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // setDownloadCounts((prevCount) => prevCount + 1);
    handleUpdateCount();
  };

  const formatDescription = (description, title) => {
    const regex = new RegExp(title, "gi");
    return description.replace(
      regex,
      `<span class="title-highlights">${title}</span>`
    );
  };
  const Lyricshow = () => {
    setDisplayLyrics(true);
  };

  return (
    <>
      {/* <Helmet>
        <title>
          {mp3Data.artist}-{mp3Data.title}{" "}
        </title>
      </Helmet> */}
      <div className="Music-content-main-div">
        {mp3Data ? (
          <div>
            <div className="text-center mt-5 mb-5">
              <h4 className="ity">
                {mp3Data.artist.replace(/_/g, " ")}-
                {mp3Data.title.replace(/_/g, " ")}{" "}
              </h4>
            </div>
            <div>
              <ShareMusic share={mp3Data} />
            </div>
            <div className="w-div-img">
              <img
                src={mp3Data.image}
                alt="music cover"
                className="img-content-div"
              />
            </div>
            <div
              className="text-center color-grey mb-5"
              style={{ color: "grey", fontSize: "large" }}
            >
              <span>{mp3Data.artist.replace(/_/g, " ")} </span>
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
                <span>{mp3Data.artist.replace(/_/g, " ")} </span> -
                <span>{mp3Data.title.replace(/_/g, " ")} </span>:{" "}
                <span>
                  <div className="mt-2">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: formatDescription(
                          mp3Data.description,
                          mp3Data.title
                        ),
                      }}
                    ></p>
                  </div>{" "}
                </span>
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

            <div>
              <MusicPlayer sounds={mp3Data} />
            </div>
            {mp3Data?.audiofile ? (
              <div
                className="d-flex mt-5 mb-5 "
                style={{ justifyContent: "center" }}
              >
                {/* <ReactAudioPlayer
                src={mp3Data?.filepath.replace(
                  `${mp3Data?.artist}-${mp3Data?.title}`
                )}
                name={mp3Data?.title}
                // autoPlay
                controls
                type="audio/mpeg/MP3/MP4"
              /> */}
                <audio
                  src={mp3Data?.audiofile.replace(
                    `${mp3Data?.artist}-${mp3Data?.title}`
                  )}
                  type="audio/mp3"
                  // type="audio/mpeg"
                  // name={mp3Data?.title}
                  controls
                />
              </div>
            ) : null}
            {/* {mp3Data?.filepath ? (
              <div
                className="d-flex mt-5 mb-5 "
                style={{ justifyContent: "center" }}
              >
               
                <audio
                  src={mp3Data?.filepath.replace(
                    `${mp3Data?.artist}-${mp3Data?.title}`
                  )}
                  type="audio/mp3"
                
                  controls
                />
              </div>
            ) : null} */}
            {mp3Data?.filepath ? (
              <div
                className="d-flex mb-5 "
                style={{ justifyContent: "center" }}
              >
                <video controls>
                  <source src={mp3Data?.filepath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
            <div className="mt-5 mb-5 advert-div">
              <img src={advert} alt="img" className="advert-img" />
            </div>
            <div
              className="d-flex mt-5 mb-5 "
              style={{ justifyContent: "center" }}
            >
              {" "}
              <Button
                variant="contained"
                // onClick={(e) => downloads(e)}
                onClick={handleDownload}
                style={{ height: "7vh" }}
              >
                {" "}
                Download Mp3
              </Button>
            </div>
            {/* <div className="text-center">
              <p>
                Total Number of Downloads:{" "}
                <strong style={{ color: "darkblue" }}>
                  {mp3Data?.downloadCount}
                </strong>
              </p>
            </div> */}
          </div>
        ) : (
          <p>{loading && <Loader />}</p>
        )}
      </div>
    </>
  );
};

export default MusicContent;
