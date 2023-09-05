import React from "react";
import Header from "../../components/Header/Header";
import SocialHandles from "../../components/Socialhandles/SocialHandles";
import LayoutSideBar from "../../components/SideBar/LayoutSideBar";
import { Container } from "react-bootstrap";
import Recomend from "../../components/Recomend/Recomend";
import Footer from "../../components/Footer/Footer";
import Latest from "../../components/Latest/Latest";
import Mixtape from "./Mixtape";

const DJMix = () => {
  return (
    <div>
      <Header />
      <SocialHandles />
      <LayoutSideBar>
        <Container>
          <div style={{ paddingTop: "50px" }}>
            <Mixtape />

            <Recomend />
          </div>
        </Container>
      </LayoutSideBar>

      <Footer />
    </div>
  );
};

export default DJMix;
