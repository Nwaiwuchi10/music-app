import React from "react";

import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="text-center mb-4 ">
          <h3 style={{ paddingTop: "50px" }}>Contact Us </h3>
          <div>
            For Song Promotion and Enquiries, please kindly mail
            <strong style={{ color: "#e94560" }}> djnchrys@gmail.com</strong> or
            Call us with this Phone number{" "}
            <strong style={{ color: "#e94560" }}>08136757488</strong>
          </div>
          <div>
            Note <strong style={{ color: "#e94560" }}>*</strong> that our target
            is to make your music trend globally.
          </div>

          <p className="mb-5">Thanks</p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
