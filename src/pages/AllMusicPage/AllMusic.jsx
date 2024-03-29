import React from "react";
import Header from "../../components/Header/Header";
import LayoutSideBar from "../../components/SideBar/LayoutSideBar";
import { Container } from "react-bootstrap";
import Latest from "../../components/Latest/Latest";
import Recomend from "../../components/Recomend/Recomend";
import Footer from "../../components/Footer/Footer";
import SocialHandles from "../../components/Socialhandles/SocialHandles";

const AllMusic = () => {
  return (
    <div>
      <Header />
      <SocialHandles />
      <LayoutSideBar>
        <Container>
          <div style={{ paddingTop: "50px" }}>
            <Latest />

            <Recomend />
          </div>
        </Container>
      </LayoutSideBar>

      <Footer />
    </div>
  );
};

export default AllMusic;
