import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tests = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const subjects = ["Math", "Physics", "Chemistry", "Biology"];
  const classes = selectedSubject
    ? ["Class9", "Class10", "Class11", "Class12"]
    : [];
  const navigate = useNavigate();

  return (
    <div className="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <img src="/Banner.png" className="brand-logo" />

          <span className="navbar-brand">Tests</span>

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
                  style={{ cursor: "pointer" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  onClick={() => navigate("/gallery")}
                >
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  onClick={() => navigate("/about")}
                >
                  About us
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

      <div className="filters d-flex flex-column flex-sm-row align-items-center justify-content-center">
        <label>
          Subject:
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedClass(""); // Reset class when subject changes
            }}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>

        <label>
          Class:
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            disabled={!selectedSubject} // Disable if no subject selected
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="content-section">
        {selectedSubject === "Chemistry" && selectedClass === "Class10" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
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
        )}
        {selectedSubject === "Chemistry" && selectedClass === "Class12" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://drive.google.com/file/d/1fcE4phvX0U1xHHKcl1UGFBGdOTLY8pX7/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Objective Type Questions</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Math" && selectedClass === "Class12" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
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
        )}
        {selectedSubject === "Math" && selectedClass === "Class10" && (
          <div className="topicwisenotes d-flex flex-column">
            <span className="topich">Chapter 1</span>
            <div className="topicwise-contentnotes  d-flex justify-content-around flex-wrap">
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
            <span className="topich">Chapter 2</span>
            <div className="topicwise-contentnotes  d-flex justify-content-around flex-wrap">
              <div>
                <a
                  href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                  className="pdf-tile"
                  target="_blank"
                >
                  <span>Topic 2</span> <br />
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
        )}
        {selectedSubject === "Science" && selectedClass === "Class10" && (
          <div className="topicwise-contentnotes  d-flex justify-content-around flex-wrap">
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
        )}
        {selectedSubject === "Physics" && selectedClass === "Class12" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://drive.google.com/file/d/15AjdCaqJ89zxoHKkXn5M0klUF2qhWFd9/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Miscellaneous Questions</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {(!selectedSubject || !selectedClass) && (
          <span className="WARNING">
            Please select a subject and class to view the content.
          </span>
        )}
      </div>

      <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
        <div>
          <a
            href="https://drive.google.com/file/d/1OH9Vrs6A-ARNu7X40TmmTl8hBp_hhx1w/view?usp=sharing"
            className="pdf-tile"
            target="_blank"
          >
            <span>IIT JEE</span> <br />
            click to open PDF
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1ZGF2XK5uaqAOiy5FtnK85iE4Dsxkbz7a/view?usp=sharing"
            className="pdf-tile"
            target="_blank"
          >
            <span>MAT</span> <br />
            click to open PDF
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1JkuCPZ7T4gzUkfixmXtONP1xVvibHh7g/view"
            className="pdf-tile"
            target="_blank"
          >
            <span>SAT</span> <br />
            click to open PDF
          </a>
        </div>
      </div>
      <br />
      <div className="contact">
        <span className="headp">Contact Us:</span>
        <div className="d-flex flex-column justify-content-around">
          <span>
            <i className="fas fa-phone"> &nbsp;</i> +918709984665
          </span>
          <span>
            <i className="bi bi-envelope"></i> &nbsp;Manjeetclasses@gmail.com
          </span>
          <span>
            <i className="bi bi-geo-alt"></i> &nbsp;MANJEET CLASSES, S. K.
            Amashta 35/A Jhunjhun Mahal Road New Yarpur Patna 800001
          </span>
        </div>
        <hr />
        <span className="headp">Connect With Us:</span>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/share/1EbecSDDha/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://x.com/ManjeetClasses?t=ksr9KY_rIpQdXpZ9gVts6A&s=08"
            target="_blank"
            aria-label="Twitter"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/manjeetclasses2025/"
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
            href="hhttps://www.youtube.com/@MANJEETCLASSES2025"
            target="_blank"
            aria-label="YouTube"
          >
            <i className="bi bi-youtube"></i>
          </a>
          <a
            href="https://t.me/manjeetclasses2025"
            target="_blank"
            aria-label="YouTube"
          >
            <i className="bi bi-telegram"></i>
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbB5fE3AO7RHp9uxEn3j"
            target="_blank"
            aria-label="YouTube"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tests;
