import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import LayoutSideBar from "../../components/SideBar/LayoutSideBar";
import Trends from "../../components/TrendingPage/Trends";
import Container from "react-bootstrap/Container";
import Latest from "../../components/Latest/Latest";
import Recomend from "../../components/Recomend/Recomend";
import PopUnder from "../../components/Popunder/PopUnder";
import NavUnder from "../../components/NavUnder/NavUnder";

const HomePage = () => {
  return (
    <div>
      {/* <!-- Ezoic - top_of_page - top_of_page --> */}
      <div id="ezoic-pub-ad-placeholder-104"> </div>
      {/* <!-- End Ezoic - top_of_page - top_of_page --> */}
      <Header />
      <NavUnder />
      <Hero />

      {/* <Trends /> */}

      <LayoutSideBar>
        <Container>
          <Latest />
          <Trends />
          <Recomend />
        </Container>
      </LayoutSideBar>

      <Footer />
    </div>
  );
};

export default HomePage;
