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
// import fs from "fs";
// import NodeID3 from "node-id3";
// import FileDownload from "js-file-download";
import {
  MusicDownloadCountApi,
  getMusicDetailsApi,
  musicAllApi,
  musicSongArtistTitle,
} from "../../data/Apis";

import Message from "../../components/Messages/Message";
import CardSmall from "../../components/Cards/CardSmall";
import Sitemap from "../../sitemap";
import { Helmet } from "react-helmet";
import ShareMusic from "../../components/ShareMusic/ShareMusic";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import TelegramLink from "../../components/TelegramGroup/TelegramLink";

const MusicContent = ({ location }) => {
  const paramValue = new URLSearchParams(location.search).get(
    `https://todaysmuzik.com.ng/mp3-download/${artist}/${title}`
  );
  const navigate = useNavigate();
  const { artist, title } = useParams();
  // const mp3Urls = mp3Data?.filepath;
  const metadataImageCover =
    "https://ik.imagekit.io/wgbw0oopk2/imagecover/Portable-Fear_Woman_MhJ-2UgII.jpg?updatedAt=1701106158594";
  const data = JSON.parse(localStorage.getItem("PostId"));
  const [mp3, setMp3] = useState(null);
  const [albumArt, setAlbumArt] = useState(null);
  const [mp3Data, setMp3Data] = useState(null);
  const [displayLyrics, setDisplayLyrics] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `https://todaysmuziks.todaysmuzik.com.ng/api/music/songDetails/${artist}/${title}/`,

        { dataType: "blob" } // Set the response type to 'blob'
      );
      setMp3Data(data);

      setLoading(false);

      setError(false);
    };

    fetchPosts();
  }, [title]);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const { dataId } = await axios.get(
  //       `https://todaysmuziks.todaysmuzik.com.ng/api/music/mp3/${mp3._id}`,

  //       { dataType: "blob" } // Set the response type to 'blob'
  //     );

  //     console.log(data);
  //     // const foundData = data.find((item) => item.artist === artist);
  //     setMp3Data(dataId);
  //     setLoading(false);

  //     setError(false);
  //   };

  //   fetchPosts();
  // }, [title]);
  // useEffect(() => {
  //   // Fetch details based on title
  //   axios
  //     .get(musicSongArtistTitle + artist + title)
  //     .then((response) => {
  //       // Assuming the response contains an ID
  //       const itemId = response.data._id;
  //       console.log(response);
  //       // Fetch more details based on ID
  //       axios
  //         .get(`https://todaysmuziks.todaysmuzik.com.ng/api/music/${itemId}`)
  //         .then((detailsResponse) => {
  //           setMp3Data(detailsResponse.data);
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching details by ID", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching details by title", error);
  //     });
  // }, [title]);

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
      url: `https://todaysmuziks.todaysmuzik.com.ng/api/music/mp3/${title}`,
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
  const handleDownloadExt = async () => {
    try {
      const response = await axios.get(mp3Data?.extDownloadPath, {
        responseType: "blob", // Important for binary data like audio files
      });

      // Create a temporary anchor element
      const downloadLink = document.createElement("a");

      // Create a Blob object from the binary data
      const blob = new Blob([response.data], { type: "audio/mpeg" }); // Adjust the MIME type based on your audio file type

      // Set the download link's href to the Blob object
      downloadLink.href = window.URL.createObjectURL(blob);

      // Set the download attribute to the desired file name
      downloadLink.download = `${mp3Data.artist}-${mp3Data.title}.mp3`; // Adjust the file name accordingly

      // Append the download link to the document
      document.body.appendChild(downloadLink);

      // Trigger a click on the download link
      downloadLink.click();

      // Remove the download link from the document
      document.body.removeChild(downloadLink);
      handleUpdateCount();
      const mergedBlob = new Blob(
        [response.data, mp3Data?.filepath],
        metadataImageCover
      );
      const mergedAudioUrl = URL.createObjectURL(mergedBlob);

      // Now you can use mergedAudioUrl as the source for an audio element
      console.log("Merged audio URL:", mergedAudioUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
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
    // handleDownloadExt();
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

  const handleDownloads = async () => {
    try {
      const response = await axios.get(mp3Data?.filepath, {
        responseType: "blob", // Important for binary data like audio files
      });
      ////Imageartcover
      const albumArtUrl =
        "https://ik.imagekit.io/wgbw0oopk2/imagecover/Portable-Fear_Woman_MhJ-2UgII.jpg?updatedAt=1701106158594";
      const albumArtResponse = await axios.get(albumArtUrl, {
        responseType: "arraybuffer",
      });
      // Create a temporary anchor element
      const downloadLink = document.createElement("a");

      // Create a Blob object from the binary data
      const blob = new Blob([response.data], { type: "audio/mpeg" }); // Adjust the MIME type based on your audio file type
      // Set the album art
      setAlbumArt(
        URL.createObjectURL(
          new Blob([albumArtResponse.data], { type: "image/jpeg" })
        )
      );
      // Set the download link's href to the Blob object
      downloadLink.href = window.URL.createObjectURL(blob);

      // Set the download attribute to the desired file name
      downloadLink.download = `${mp3Data.artist}-${mp3Data.title}.mp3`; // Adjust the file name accordingly

      // Append the download link to the document
      document.body.appendChild(downloadLink);

      // Trigger a click on the download link
      downloadLink.click();

      // Remove the download link from the document
      document.body.removeChild(downloadLink);
      handleUpdateCount();
      downloadMp3WithCover(mp3Data?.filepath, metadataImageCover);
      // embedArtwork("audio.mp3", "artwork.jpg");
      const mergedBlob = new Blob(
        [response.data, mp3Data?.filepath],
        metadataImageCover
      );
      const mergedAudioUrl = URL.createObjectURL(mergedBlob);

      // Now you can use mergedAudioUrl as the source for an audio element
      console.log("Merged audio URL:", mergedAudioUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  const mp3Urls = mp3Data?.filepath;
  // Example: Display cover image and save MP3 to local storage
  const downloadMp3WithCover = async (
    mp3Urls = mp3Data?.filepath,
    metadataImageCover
  ) => {
    // const mp3Urls = mp3Data?.filepath;
    try {
      const mp3Response = await axios.get(mp3Urls, { responseType: "blob" });
      const coverResponse = await axios.get(metadataImageCover, {
        responseType: "blob",
      });
      // Display cover image
      const coverImageUrl = URL.createObjectURL(coverResponse.data);
      // Use coverImageUrl to display the image in your UI
      // Save MP3 file to local storage
      const mp3Blob = new Blob([mp3Response.data], { type: "audio/mpeg" });
      const mp3Urls = URL.createObjectURL(mp3Blob);
      // Save mp3Url to local storage or use it as needed
    } catch (error) {
      console.error("Error downloading MP3 or cover picture", error);
    }
  };
  // const artworkAudio=mp3Data?.filepath
  // const embedArtwork = (artworkAudio, metadataImageCover) => {
  //   const tags = {
  //     title: `${mp3Data.title}`,
  //     artist: `${mp3Data.artist}`,
  //     album: `${mp3Data.album}`,
  //     image: {
  //       mime: "image/jpeg", // Change mime type accordingly (image/jpeg, image/png, etc.)
  //       type: {
  //         id: 3, // Cover (front) image
  //       },
  //       description: "Your description",
  //       imageBuffer: fs.readFileSync(metadataImageCover),
  //     },
  //   };

  //   NodeID3.write(tags, artworkAudio);
  // };
  return (
    <>
      <Helmet>
        <title>{paramValue} </title>
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
              <div>
                <TelegramLink />{" "}
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
              ) : mp3Data?.extDownloadPath ? (
                <div
                  className="d-flex mt-5 mb-5 "
                  style={{ justifyContent: "center" }}
                >
                  <audio
                    src={mp3Data?.extDownloadPath.replace(
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
              ) : mp3Data?.extDownloadPath ? (
                <div
                  className="d-flex mb-5 "
                  style={{ justifyContent: "center" }}
                >
                  <video controls>
                    <source src={mp3Data?.extDownloadPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : null}
              {!mp3Data.audiomacklink ? null : (
                <div className="mb-5 mt-5">
                  {" "}
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src={mp3Data?.audiomacklink}
                    // src='https://audiomack.com/embed/song/audiomack-1791738/cool-demo?background=1'
                  ></iframe>
                </div>
              )}

              <div
                className="d-flex mt-5 mb-5 "
                style={{ justifyContent: "center" }}
              >
                {" "}
                {mp3Data?.filepath ? (
                  <>
                    <Button
                      variant="contained"
                      // onClick={(e) => downloads(e)}
                      onClick={handleDownloads}
                      style={{ height: "7vh" }}
                    >
                      Download Mp3
                    </Button>
                    {/* {albumArt && <img src={albumArt} alt="Album Art" />} */}
                  </>
                ) : mp3Data?.extDownloadPath ? (
                  <>
                    <Button
                      variant="contained"
                      // onClick={(e) => downloads(e)}
                      onClick={handleDownloadExt}
                      style={{ height: "7vh" }}
                    >
                      Download Mp3
                    </Button>
                  </>
                ) : null}
              </div>
              {/* <div className="text-center">
              <p>
                Total Number of Downloads:{" "}
                <strong style={{ color: "darkblue" }}>
                  {mp3Data?.downloadCount}
                </strong>
              </p>
            </div> */}
              <div className="mt-5 mb-5 advert-div">
                <img src={advert} alt="img" className="advert-img" />
              </div>
            </div>
          ) : (
            <p>{loading && <Loader />}</p>
          )}
        </div>
      </Helmet>
    </>
  );
};

export default MusicContent;
