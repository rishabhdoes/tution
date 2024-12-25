import React from "react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
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
        <span>&#8594;</span>Notes
      </span>

      <div className="topicwisenotes d-flex flex-column">
        <span className="topich">Chapter 1</span>
        <div className="topicwise-contentnotes  d-flex flex-column flex-md-row justify-content-around">
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
        </div>
      </div>
      <div className="topicwisenotes d-flex flex-column">
        <span className="topich">Chapter 1</span>
        <div className="topicwise-contentnotes  d-flex flex-column flex-md-row justify-content-around">
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
        </div>
      </div>
      <div className="topicwisenotes d-flex flex-column">
        <span className="topich">Chapter 1</span>
        <div className="topicwise-contentnotes  d-flex flex-column flex-md-row justify-content-around">
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
          </div>
          <div>
            <a
              href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
              className="pdf-tile"
              target="_blank"
            >
              <span>Topic 1</span> <br />
              click to open PDF
            </a>
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

export default Notes;
