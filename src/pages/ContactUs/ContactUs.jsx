import React from "react";
import advert from "../../assets/Images/avert.jpeg";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SocialHandles from "../../components/Socialhandles/SocialHandles";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <SocialHandles />
      <Container>
        <div className="text-center mb-4 ">
          <h3 style={{ paddingTop: "50px" }}>Contact Us </h3>
          <div>
            For Song Promotion and Enquiries, please kindly mail
            <strong style={{ color: "#e94560" }}>
              {" "}
              todaysmuziksite@gmail.com
            </strong>{" "}
            or Call us with this Phone number{" "}
            <strong style={{ color: "#e94560" }}>+2348136757488</strong>
          </div>
          <div>
            Note <strong style={{ color: "#e94560" }}>*</strong> that our target
            is to make your music trend globally.
          </div>

          <p className="mb-5">Thanks</p>
        </div>
        <div className="mt-5 mb-5 advert-div">
          <img src={advert} alt="img" className="advert-img" />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
