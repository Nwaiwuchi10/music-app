import { Container } from "@mui/system";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Recomend from "../../components/Recomend/Recomend";
import LayoutSideBar from "../../components/SideBar/LayoutSideBar";
import MusicVideoContent from "./MusicVideoContent";

// import Container from "react-bootstrap/Container";

const MusicVideoDetails = () => {
  return (
    <>
      <Header />

      <LayoutSideBar>
        <Container>
          <MusicVideoContent />

          <Recomend />
        </Container>
      </LayoutSideBar>

      <Footer />
    </>
  );
};

export default MusicVideoDetails;
