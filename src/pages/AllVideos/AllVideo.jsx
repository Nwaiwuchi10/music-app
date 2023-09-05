import React from "react";
import Header from "../../components/Header/Header";
import LayoutSideBar from "../../components/SideBar/LayoutSideBar";
import { Container } from "react-bootstrap";
import Trends from "../../components/TrendingPage/Trends";
import Footer from "../../components/Footer/Footer";
import Recomend from "../../components/Recomend/Recomend";
import SocialHandles from "../../components/Socialhandles/SocialHandles";

const AllVideo = () => {
  return (
    <div>
      <Header />
      <SocialHandles />
      <LayoutSideBar>
        <Container>
          <div style={{ paddingTop: "50px" }}>
            <Trends />
            <Recomend />
          </div>
        </Container>
      </LayoutSideBar>

      <Footer />
    </div>
  );
};

export default AllVideo;
