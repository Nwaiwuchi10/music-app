import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
// import qala from "../assets/qala.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
import { ImDownload } from "react-icons/im";
import "./MusicPlayer.css";
import { Typewriter } from "react-simple-typewriter";
const MusicPlayer = ({ sounds }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(sounds?.filepath);
  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
      setStartRotating(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
      setStartRotating(true);
    }
    Lyricshow();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);
  //   useEffect(() => {
  //     const sec = duration / 1000;
  //     const min = Math.floor(sec / 60);
  //     const secRemain = Math.floor(sec % 60);
  //     const time = {
  //       min: min,
  //       sec: secRemain,
  //     };
  //   }, []);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in secon
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = sounds?.filepath;
    downloadLink.dataType = "blob";
    downloadLink.download = `${sounds.artist}-${sounds.title}.mp3`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const [displayLyrics, setDisplayLyrics] = useState(false);
  const Lyricshow = () => {
    setDisplayLyrics(true);
  };
  const formattedLyrics = sounds?.lyrics;
  const [startRotating, setStartRotating] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const rotatePicture = () => {
    setRotationAngle((prevAngle) => prevAngle + 1); // Increase rotation angle by 1 degree
    requestAnimationFrame(rotatePicture); // Request the next animation frame
  };

  useEffect(() => {
    const animationId = requestAnimationFrame(rotatePicture);

    return () => {
      cancelAnimationFrame(animationId); // Clean up animation when component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const pictureStyle = {
    transform: `rotate(${rotationAngle}deg)`,
    transition: "transform 0.1s ease-in-out", // Optional smooth transition effect
  };
  return (
    <>
      <div>
        <>
          {!sounds?.lyrics ? null : (
            <div>
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
            </div>
          )}
        </>
      </div>
      <div className="musicPlayer">
        <div className="component">
          <h6 className="mt-5 mb-4 text-center">Music Player</h6>
          {startRotating ? (
            <div className="div-music-img-rotate">
              <img
                src={sounds?.image}
                alt="pix"
                className="left-div-img-rotate"
                style={pictureStyle}
              />
            </div>
          ) : (
            <div className="div-musicCover">
              <img
                className="musicCover"
                src="https://ik.imagekit.io/wgbw0oopk2/imagecover/_DJ_Limbo-TRAP_GOSPEL_MIX__TPM_Vol.51__Hd4gHx5qB.jpg?updatedAt=1690655232097"
              />
            </div>
          )}

          {/* image rotate */}

          {/* image rotate */}
          <div>
            <h6 className="title mt-2 mb-2 text-center">
              {sounds?.artist.replace(/_/g, " ")}
            </h6>
            <p className="subTitle mt-2 mb-2 text-center">
              {sounds?.title.replace(/_/g, " ")}{" "}
            </p>
          </div>
          {/* /// */}
          <div>
            <div className="time">
              <p>
                {currTime.min}:{currTime.sec}
              </p>
              {/* <p>{time.min}:{time.sec}</p> */}
            </div>
            <div className="mp3-length">
              <input
                type="range"
                min="0"
                max={duration / 1000}
                default="0"
                value={seconds}
                className="timeline"
                onChange={(e) => {
                  sound.seek([e.target.value]);
                }}
              />
            </div>
          </div>
          {/* /// */}
          <div className="mp3-play">
            <button className="playButton">
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipPrevious />
              </IconContext.Provider>
            </button>
            {!isPlaying ? (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </button>
            ) : (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <AiFillPauseCircle />
                </IconContext.Provider>
              </button>
            )}
            <button className="playButton">
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipNext />
              </IconContext.Provider>
            </button>
            {/* <div type="button" onClick={handleDownload}>
            <ImDownload className="playButton" />{" "}
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
