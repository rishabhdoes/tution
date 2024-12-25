import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Teko classes
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      document.getElementById("resources").scrollIntoView({
                        behavior: "smooth", // Enables smooth scrolling
                        block: "start", // Align to the top of the section
                      });
                    }}
                  >
                    Resources
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      window.scrollTo({
                        top: document.body.scrollHeight, // Scroll to the bottom of the page
                        behavior: "smooth", // Smooth scrolling
                      });
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="desc d-flex">
          <div className="row d-flex flex-sm-column flex-md-row">
            <div className="col-sm-12 col-md-8  d-flex flex-column justify-content-around align-items-center">
              <span id="heading">
                Crack <span>JEE Exams</span> with Expert <br /> Guidance and
                Study Resources!
              </span>
              <span id="afterpiece">
                Master every concept with in-depth video lessons,
                <br /> comprehensive study materials to help you ace <br />
                the JEE Exam.
              </span>
              <span className="button">Start Learning Today</span>
            </div>
            <div className="col-sm-12 col-md-4  d-flex justify-content-center align-items-center">
              <img src="image.jpeg" alt="student photo" className="img-fluid" />
            </div>
          </div>
        </div>

        <div
          id="resources"
          className="Resources d-flex flex-column justify-content-around"
        >
          <div className="text-align-center">
            <span className="headp">Resources</span>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-around">
            <button
              className="image-button"
              onClick={() => navigate("/videos")}
            >
              <div className="d-flex justify-content-around align-items-center">
                <img
                  src="image1.jpeg"
                  alt=""
                  srcSet=""
                  height="10vh"
                  width="10vh"
                />
                <span>Video Lectures</span>
              </div>
            </button>
            <button className="image-button" onClick={() => navigate("/notes")}>
              <div className="d-flex justify-content-around align-items-center">
                <img
                  src="image2.jpeg"
                  alt=""
                  srcSet=""
                  height="10vh"
                  width="10vh"
                />
                <span>Study material</span>
              </div>
            </button>
            <button
              className="image-button"
              onClick={() => navigate("/solutions")}
            >
              <div className="d-flex justify-content-around align-items-center">
                <img
                  src="image3.jpeg"
                  alt=""
                  srcSet=""
                  height="10vh"
                  width="10vh"
                />
                <span>Solutions of JEE</span>
              </div>
            </button>
            <button className="image-button" onClick={() => navigate("/test")}>
              <div className="d-flex justify-content-around align-items-center">
                <img
                  src="image4.jpeg"
                  alt=""
                  srcSet=""
                  height="10vh"
                  width="10vh"
                />
                <span>Test Series</span>
              </div>
            </button>
          </div>
        </div>
        <div className="video">
          <span className="headp">Chemistry Lectures:</span>
          <div className="par d-flex flex-column justify-content-around">
            <div className="topics">
              <button onClick={() => navigate("/videos")}>Topic 1</button>
              <button onClick={() => navigate("/videos")}>Topic 2</button>
              <button onClick={() => navigate("/videos")}>Topic 3</button>
              <button onClick={() => navigate("/videos")}>Show more ...</button>
            </div>
            <div className="vids d-flex flex-column flex-md-row">
              <iframe
                className="vid"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/e36s_nZCD94"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/e36s_nZCD94"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/e36s_nZCD94"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="buttons d-flex flex-column justify-content-end align-items-end">
              <button className="showMore" onClick={() => navigate("/videos")}>
                View All Videos <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="Result">
          <span className="headp">Our Results</span>
          <div className="photo d-flex flex-column flex-md-row justify-content-around align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1682096200654-2f3297b0e9bd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                srcSet=""
                className="img-fluid"
              />
              <span>name1 rop</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1682096200654-2f3297b0e9bd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                srcSet=""
              />
              <span>name1 rop</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1682096200654-2f3297b0e9bd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                srcSet=""
              />
              <span>name1 rop</span>
            </div>
          </div>
        </div>

        <div className="contact">
          <span className="headp">Contact Us:</span>
          <div className="d-flex flex-column justify-content-around">
            <span>
              <i className="fas fa-phone"> &nbsp;</i> +91-2893820381
            </span>
            <span>
              <i className="bi bi-envelope"></i> &nbsp;tekoclasses@gmail.com
            </span>
            <span>
              <i className="bi bi-geo-alt"></i> &nbsp;Plot no.27, III-Floor,
              Near Patidar Studio, Above Bond classNamees, M.P.Nagar, Zone-2,
              Bhopal-11
            </span>
          </div>
          <hr />
          <span className="headp">Connect With Us:</span>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
