import React from "react";
import Title from "../../common/Title";
import { recommend } from "../../data/data";
import CardSmall from "../Cards/CardSmall";
import "./Recomend.css";
const Recomend = () => {
  return (
    <>
      <section className="treading hero ">
        <Title title="Recommend Songs" />

        <div className="recomend-main-div">
          {recommend.map((item, i) => (
            <CardSmall
              cover={item.cover}
              name={item.name}
              tag={item.tag}
              i={i}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Recomend;
