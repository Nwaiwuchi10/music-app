import { Container } from "@mui/system";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Recomend from "../../components/Recomend/Recomend";
import LayoutSideBar from "../../components/SideBar/LayoutSideBar";
import MusicContent from "./MusicContent";

const MusicDetails = () => {
  return (
    <>
      <Header />

      <LayoutSideBar>
        <MusicContent />
        <Recomend />
      </LayoutSideBar>

      <Footer />
    </>
  );
};

export default MusicDetails;
