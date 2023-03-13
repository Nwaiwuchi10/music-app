import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import LayoutSideBar from "../../components/SideBar/LayoutSideBar";
import Trends from "../../components/TrendingPage/Trends";
import Container from "react-bootstrap/Container";
import Latest from "../../components/Latest/Latest";
import Recomend from "../../components/Recomend/Recomend";

const HomePage = () => {
  return (
    <div>
      <Header />
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
