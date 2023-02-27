import React, { useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import "./Hero.css";
import Loader from "../Loading/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { hero1, hero2 } from "../../data/data";
import { getMusicApi } from "../../data/Apis";
import Message from "../Messages/Message";
import axios from "axios";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="nextArrow">
      <MdKeyboardArrowLeft style={{ fontSize: "50px" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="prevArrow">
      <MdKeyboardArrowRight style={{ fontSize: "50px" }} />
    </div>
  );
}

export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [poster, setPoster] = useState([]);

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
    <section className="hero">
      <div className="hero-div-main">
        <div className="hero-div-min">
          <Slider {...settings}>
            {hero1.map((item) => (
              <div className="box div-hero-img">
                <img src={item.cover} alt="cover" className="img-hero " />
                <div className="hero-page " style={{ marginLeft: "5px" }}>
                  <h3 className="hero-min-text">{item.name}</h3>
                  <span className="hero-min-text-span">{item.tag}</span>
                </div>
                <div className="icon-overlaye">
                  <BsPlayCircle size={45} className="show" />
                  {/* <AiFillPlayCircle
                    size={50}
                    className="hide icon-circle-play"
                  /> */}
                </div>
                {/* <div className="icon-over">
                  <div className="flex p-3">
                    <AiOutlineHeart size={22} className="ml-3 mr-3" />
                    <BsThreeDots size={22} />
                  </div>
                </div> */}
              </div>
            ))}
          </Slider>
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="hero-div-min-sec">
            {poster?.slice(0, 4).map((item) => (
              <div className="box hero-min2-div " key={item.id}>
                <Link
                  to={`/mp3-download/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img src={item.image} alt="cover" className="img-min2-div" />
                  <div className="hero-page">
                    <h3 className="hero-min-text">{item.artist}</h3>
                    <span className="hero-min-text-span">{item.title}</span>
                  </div>
                  <div className="icon-overlaye ">
                    <BsPlayCircle size={45} className="show" />
                    {/* <AiFillPlayCircle size={50} className="hide icon-circle-play" /> */}
                  </div>
                  {/* <div className="overlay absolute bottom-0 right-0 text-white">
                <div className="flex p-3">
                  <AiOutlineHeart size={22} className="mx-3" />
                  <BsThreeDots size={22} />
                </div>
              </div> */}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
