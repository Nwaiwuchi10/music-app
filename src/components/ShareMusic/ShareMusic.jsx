import React, { useState } from "react";
import "./Share.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FcShare } from "react-icons/fc";
import fb from "../../assets/Images/fb.png";
import inst from "../../assets/Images/inst.png";
import wht from "../../assets/Images/wht.png";
import twitter from "../../assets/Images/twitters.png";
import copy from "clipboard-copy";
const ShareMusic = ({ share }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const copyLinkToClipboard = () => {
    const linkToCopy = `https://todaysmuzik.com.ng/mp3-download/${share?.artist.replace(
      /\s+/g,
      "_"
    )}/${share?.title.replace(/\s+/g, "_")}/`; // Replace with your actual link
    navigator.clipboard.writeText(linkToCopy);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 2000); // Reset the copied state after 2 seconds
  };
  const handleCopyClick = () => {
    const shareUrllink = `https://todaysmuzik.com.ng/mp3-download/${share?.artist.replace(
      /\s+/g,
      "_"
    )}/${share?.title.replace(/\s+/g, "_")}/`;
    copy(shareUrllink)
      .then(() => {
        console.log("Link copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying link: ", err);
      });
  };
  const handleShare = () => {
    const shareUrl = share?.image;
    const shareUrllink = `https://todaysmuzik.com.ng/mp3-download/${share?.artist.replace(
      /\s+/g,
      "_"
    )}/${share?.title.replace(/\s+/g, "_")}/`;
    // URL to share, could be your app's URL or the image's URL
    console.log(shareUrl);
    // Share on Facebook
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrllink
    )}`;
    window.open(facebookShareUrl, "_blank");
  };
  const handleShares = () => {
    const shareUrl = share?.image;
    const shareUrllink = `https://todaysmuzik.com.ng/mp3-download/${share?.artist}/${share?.title}`;
    // URL to share, could be your app's URL or the image's URL
    console.log(shareUrl);

    // Share on Twitter
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrllink
    )}`;
    window.open(twitterShareUrl, "_blank");
  };
  const handleShareInstagram = () => {
    // Define the content you want to share
    const shareContent = {
      imageUrl: share?.image,
      captionlink: `https://todaysmuzik.com.ng/mp3-download/${share?.artist}/${share?.title}`,
    };

    // Construct the Instagram share URL
    const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(
      shareContent.imageUrl
    )}&caption=${encodeURIComponent(shareContent.captionlink)}`;

    // Open the Instagram app with the pre-filled content
    window.open(instagramUrl, "_blank");
  };

  const shareToWhatsApp = () => {
    const shareUrllink = `https://todaysmuzik.com.ng/mp3-download/${share?.artist}/${share?.title}`;
    const message = encodeURIComponent(shareUrllink);
    const url = `https://api.whatsapp.com/send?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="share-border">
        <div
          className="text-center"
          type="button"
          onClick={copyLinkToClipboard}
        >
          <span>
            {" "}
            Share <FcShare />
          </span>
          <span>
            {linkCopied && (
              <span style={{ color: "green", fontSize: "small" }}>
                Link copied to clipboard!
              </span>
            )}
          </span>
        </div>

        <div className="socialmedia">
          <img
            src={fb}
            alt="icons"
            className="socialmedia-icon"
            onClick={handleShare}
          />{" "}
        </div>
        <div className="socialmedia">
          <img
            src={twitter}
            alt="icons"
            className="socialmedia-icon"
            onClick={handleShares}
          />{" "}
        </div>
        <div className="socialmedia">
          <img
            src={inst}
            alt="icons"
            className="socialmedia-icon"
            onClick={handleShareInstagram}
          />
        </div>
        <div className="socialmedia">
          <img
            src={wht}
            alt="icons"
            className="socialmedia-icon"
            onClick={shareToWhatsApp}
          />
        </div>
      </div>
    </div>
  );
};

export default ShareMusic;
