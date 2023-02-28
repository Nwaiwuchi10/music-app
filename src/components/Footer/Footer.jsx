import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div class=" my-5">
        {/* <!-- Footer --> */}
        <footer
          class="text-center text-lg-start text-dark"
          style={{ backgroundColor: "white" }}
        >
          {/* <!-- Section: Social media --> */}
          <section
            class="d-flex justify-content-between p-4 text-white userD-div "
            style={{ backgroundColor: "#0000CD" }}
          >
            {/* <!-- Left --> */}
            <div class="me-5 shake">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <a href="" class="text-white me-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="text-white me-4">
                <i class="fab fa-github"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section class="">
            <div class="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div class="c-rw-div">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold">Company name</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <div className="jbi-foot">
                    NowMusic is your home for African Music
                  </div>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Products</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <Link to="/" class="text-dark text-decoration-none">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to="/" class="text-dark text-decoration-none">
                      News
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" class="text-dark text-decoration-none">
                      About Us
                    </Link>
                  </p>
                  <p>
                    <Link to class="text-dark text-decoration-none">
                      Genre
                    </Link>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold">Contact Us</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i class="fas fa-home mr-3"></i> NowMusic Secretariate:
                    Owerri Imo State
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> djnchrys@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> +234816757488
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> +234 (818) 518-3179
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div class="text-center p-3" style={{ backgroundColor: "white" }}>
            © 2023 Copyright:
            <Link to="/" class="text-dark text-decoration-none">
              NowMusic
            </Link>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </div>
  );
};

export default Footer;
