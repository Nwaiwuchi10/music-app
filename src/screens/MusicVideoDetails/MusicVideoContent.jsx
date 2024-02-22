import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
// import "./MusicContent.css";
const MusicVideoContent = () => {
  const { artist, title } = useParams();

  const data = JSON.parse(localStorage.getItem("PostVideoId"));
  const [mp3Data, setMp3Data] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `https://todaysmuziks.todaysmuzik.com.ng/api/mp4/mp4/${title}`,
        { dataType: "blob" }
      );
      console.log(data);
      setMp3Data(data);
      setLoading(false);
      setError(false);
    };

    fetchPosts();
  }, []);
  // if (mp3Data?.videoDownload.length === 0) {
  //   return <div></div>;
  // }
  const handleDownload = () => {
    // You can use the HTML5 `download` attribute to download the MP3 file
    const downloadLink = document.createElement("a");
    downloadLink.href = mp3Data?.videoDownload;
    downloadLink.download = `$${mp3Data.artist}-${mp3Data.title}.mp4`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const handleDownloads = async () => {
    try {
      const response = await axios.get(mp3Data?.videoDownload, {
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
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <>
      <div className="Music-content-main-div">
        {mp3Data ? (
          <div>
            <div className="text-center mt-5 mb-5">
              <h4 className="ity">
                {mp3Data.artist.replace(/_/g, " ")}-
                {mp3Data.title.replace(/_/g, " ")}{" "}
              </h4>
            </div>
            <div className="w-div-img">
              <img
                src={mp3Data.image}
                alt="music video cover"
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
                <span>{mp3Data.artist.replace(/_/g, " ")} </span>
                <span>{mp3Data.title.replace(/_/g, " ")} </span>:{" "}
                <span>
                  <p>{mp3Data.description}</p>
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
              <h5>Watch Video & Download Video</h5>
            </div>
            {mp3Data?.filepath ? (
              <div
                className="d-flex mt-5 mb-5 "
                style={{ justifyContent: "center" }}
              >
                {" "}
                <iframe
                  width="460"
                  height="215"
                  src={mp3Data.filepath}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            ) : null}
            {mp3Data?.videoDownload ? (
              <div
                className="d-flex mt-5 mb-5 "
                style={{ justifyContent: "center" }}
              >
                <video width="310" height="215" controls>
                  <source src={mp3Data?.videoDownload} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : null}
            <div
              className="d-flex mt-5 mb-5 "
              style={{ justifyContent: "center" }}
            >
              {" "}
              <Button
                variant="contained"
                onClick={handleDownloads}
                style={{ height: "7vh" }}
              >
                {" "}
                Download Mp4
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

export default MusicVideoContent;
