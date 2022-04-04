import React from "react";
import { Nav } from "react-bootstrap";
import bannerImg from "../../Images/Image-removebg-preview.png";
import { HashLink } from "react-router-hash-link";
import Typical from "react-typical";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container  mb-5" id="home">
      <div className="row gy-5">
        <div className="col-lg-6  d-flex align-items-center">
          <span className="ps-5">
            <h1>
              𝓗𝓲 𝓣𝓱𝓮𝓻𝓮 🙋‍♂️ ! 𝓘'𝓶 <br />
              <span style={{ color: "tomato" }}>𝓐𝓼𝓪𝓭𝓾𝓵𝓵𝓪𝓱 𝓚𝓱𝓪𝓷 𝓙𝓪𝓱𝓲𝓭</span>{" "}
              <br />
            </h1>
            <h3>
              𝓐{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={["𝐹𝓇𝑜𝓃𝓉𝑒𝓃𝒹 𝒟𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇", 1000, "𝑅𝑒𝒶𝒸𝓉 𝒥𝓈 𝒟𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇", 1000]}
              />
              <br />
            </h3>
            <div className="d-flex">
              <Nav.Link as={HashLink} to="#contact">
                <div className="btn btn-dark text-white px-4 ms-0">HIRE ME</div>
              </Nav.Link>
              <Nav.Link>
                <div className="btn btn-dark text-white px-3">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://drive.google.com/file/d/1D9EBUNhO2DsoduTrpq9fapeUS3e3e3_E/view?usp=sharing"
                    target="blank">
                    <i class="fa-solid fa-download"></i> RESUME
                  </a>
                </div>
              </Nav.Link>
            </div>
          </span>
        </div>

        <div className="col-lg-5">
          <img className="img-fluid" src={bannerImg} alt="" />
        </div>
        {/* social icon  */}
        <div className="col-lg-1 d-flex align-items-center">
          <div className="social-icon">
            <div className="col-lg-12 gy-5 icon-style">
              <a href="https://www.instagram.com/md_asadullah_khan_jahid/" target="blank">
                <i className="fab fa-instagram-square"></i>
              </a>
            </div>
            <div className="col-lg-12 py-3 icon-style">
              <a
                href="https://www.facebook.com/mdasadullah.khan.94/"
                target="blank">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <div className="col-lg-12 icon-style">
              <a
                href="https://www.linkedin.com/in/md-asadullah-khan-jahid-363990233/"
                target="blank">
                <i className="fab fa-linkedin"> </i>
              </a>
            </div>
            <div className="col-lg-12  pt-3 icon-style">
              <a href="https://github.com/asadullahkhanjahid" target="blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
