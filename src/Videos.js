import React from "react";
import { useNavigate } from "react-router-dom";

const Videos = () => {
  const navigate = useNavigate();

  return (
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
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default browser behavior
                    navigate("/");
                  }}
                >
                  Home
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
      <span className="headp">
        {" "}
        <span>&#8594;</span> Video Lectures
      </span>

      <div className="topicwise d-flex flex-column justify-content-around">
        <span className="topich">Topic 2</span>
        <div className="topicwise-content d-flex">
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="topicwise d-flex flex-column justify-content-around">
        <span className="topich">Topic 2</span>
        <div className="topicwise-content d-flex">
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="topicwise d-flex flex-column justify-content-around">
        <span className="topich">Topic 2</span>
        <div className="topicwise-content d-flex">
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="vid"
            src="https://www.youtube.com/embed/e36s_nZCD94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="contact">
        <span className="headp">Contact Us:</span>
        <div className="d-flex flex-column justify-content-around">
          <span>
            <i className="fas fa-phone"> &nbsp;</i> +91-2893820381
          </span>
          <span>
            <i className="bi bi-envelope"></i> &nbsp;tekoclassNamees@gmail.com
          </span>
          <span>
            <i className="bi bi-geo-alt"></i> &nbsp;Plot no.27, III-Floor, Near
            Patidar Studio, Above Bond classNamees, M.P.Nagar, Zone-2, Bhopal-11
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
  );
};

export default Videos;
