import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import "./MusicContent.css";
import {
  MusicDownloadCountApi,
  getMusicDetailsApi,
  musicAllApi,
} from "../../data/Apis";
import { Typewriter } from "react-simple-typewriter";
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
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = mp3Data?.filepath;
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
  // const handleDownloads = () => {
  //   if (mp3Data.filepath) {
  //     const url = URL.createObjectURL(mp3Data?.filepath);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = renamedFileName;
  //     link.click();
  //   }
  // };

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
                  <h6 className="mt-2">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: formatDescription(
                          mp3Data.description,
                          mp3Data.title
                        ),
                      }}
                    ></p>
                  </h6>{" "}
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
            {displayLyrics ? (
              <div
                style={{
                  color: "green",
                  fontFamily: "cursive",
                  fontStyle: "oblique",
                }}
              >
                <span style={{ color: "black", marginRight: "10px" }}>
                  <strong>Song Lyrics:</strong>
                </span>
                <span>
                  <pre>
                    <Typewriter
                      words={[formattedLyrics]}
                      cursor
                      deleteSpeed={10}
                      typeSpeed={70}
                      delaySpeed={1000}
                      loop={false}
                    />
                  </pre>
                </span>
              </div>
            ) : null}

            <>
              {!mp3Data?.lyrics ? null : (
                <div
                  onClick={Lyricshow}
                  type="button"
                  style={{
                    color: "red",
                    textDecorationLine: "underline",
                    textDecorationColor: "brown",
                    textAlign: "center",
                  }}
                >
                  Show song lyrics
                </div>
              )}
            </>

            <div
              className="d-flex mt-5 mb-5 "
              style={{ justifyContent: "center" }}
            >
              {" "}
              <audio
                src={mp3Data?.filepath.replace(
                  `${mp3Data?.artist}-${mp3Data?.title}`
                )}
                name={mp3Data?.title}
                controls
              ></audio>
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
            <div className="text-center">
              <p>
                Total Number of Downloads:{" "}
                <strong style={{ color: "darkblue" }}>
                  {mp3Data?.downloadCount}
                </strong>
              </p>
            </div>
          </div>
        ) : (
          <p>{loading && <Loader />}</p>
        )}
      </div>
      {/* {!mp3Data?.downloadCount.length == 0 ? (
        <div className="text-center">
          <p>
            Total Number of Downloads:{" "}
            <strong style={{ color: "darkblue" }}>
              {mp3Data?.downloadCount}
            </strong>
          </p>
        </div>
      ) : null} */}
    </>
  );
};

export default MusicContent;
