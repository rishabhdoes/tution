import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Videos = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const subjects = ["Math", "Physics", "Chemistry", "Biology"];
  const classes = selectedSubject
    ? ["Class9", "Class10", "Class11", "Class12"]
    : [];
  const navigate = useNavigate();
  return (
    <div className="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            className="navbar-bran"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default browser behavior
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          >
            Manjeet classes
          </a>
          <span className="navbar-brand">Tutorials</span>

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
        {selectedSubject === "Chemistry" && selectedClass === "Class11" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            <span className="topich">Mole Concept</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Atomic structures</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Periodic Properties</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Chemical bonding</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich"> Gaseous state</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Thermodynamics </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Chemical equilibrium </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Ionic equilibrium </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich"> Redox reaction</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Hydrogen and its compound </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich"> S –block</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">P block part -1</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">General organic chemistry</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Hydrocarbon </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Environmental chemistry</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Chemistry" && selectedClass === "Class9" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            <span className="topich">Matter in our surrounding</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Is matter around us pure?</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Atoms and molecules</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Structure of atom </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Chemistry 10 th</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Chemistry" && selectedClass === "Class10" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            <span className="topich">Chemical reaction and equation </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Acid ,base and salt</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Metal and non metal</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Carbon and its compound</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Periodic table</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Chemistry" && selectedClass === "Class12" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            <span className="topich">Solid state </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Solution </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Electrochemistry </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Chemical kinetics </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Surface chemistry</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">P block part -2</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">d anf f block </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Cordination chemistry </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Alkyl halide and aryl halide </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Alcohol ,Ether and phenol</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Aldehyde and ketone</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Carboxylic acid and its derivatives</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Amine</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Biomolecules</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Polymer </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Chemistry used in everyday life</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Math" && selectedClass === "Class9" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            <span className="topich">Number system</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Polynomial</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Coordinate geometry</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Linear equations by two variables</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Introduction to Euclid’ s geometry </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Lines and angles </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Triangles</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Quadrilaterals </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Circles</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Heron’ formula</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Surface areas and volumes</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Statics</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Math" && selectedClass === "Class10" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            <span className="topich">Real numbers </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Polynomials </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">
              Pair of linear equation in two variables{" "}
            </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Quadratic equations</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Arithmetic progressions</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Triangles</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Coordinate geometry </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Introduction in trigonometry </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Height and distances</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Circles</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Area related to circles </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Surface areas and volumes</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Statistics</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Probability </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Math" && selectedClass === "Class11" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            <span className="topich">Sets</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Relations and functions</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Trigonometric functions</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Complex numbers</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Quadratic Equations</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Linear Inequalities</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Permutations and Combinations</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Binomial theorem</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">sequences and series </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Straight lines</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Circles</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Parabola</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Ellipse</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Hyperbola</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">3-D geometry </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Limits and derivatives</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Statistics</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="topich">Probability</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Math" && selectedClass === "Class12" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. Relations and functions */}
            <span className="topich">Relations and functions</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Inverse trigonometric functions */}
            <span className="topich">Inverse trigonometric functions</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. Matrices */}
            <span className="topich">Matrices</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 4. Determinants */}
            <span className="topich">Determinants</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 5. Continuity and differentiability */}
            <span className="topich">Continuity and differentiability</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 6. Application of derivatives */}
            <span className="topich">Application of derivatives</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 7. Integrals */}
            <span className="topich">Integrals</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 8. Area under curves */}
            <span className="topich">Area under curves</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 9. Differential Equations */}
            <span className="topich">Differential Equations</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 10. Vector algebra */}
            <span className="topich">Vector algebra</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 11. Three dimensional geometry */}
            <span className="topich">Three dimensional geometry</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 12. Linear programming */}
            <span className="topich">Linear programming</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 13. Probability */}
            <span className="topich">Probability</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {selectedSubject === "Physics" && selectedClass === "Class9" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. Basic Maths & Vector */}
            <span className="topich">Basic Maths & Vector</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Basic Maths & Vector - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Basic Maths & Vector - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              {/* Random extra duplicate */}
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Basic Maths & Vector - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Force and laws of motion */}
            <span className="topich">Force and laws of motion</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Force and laws of motion - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Force and laws of motion - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. Gravitation and fluid */}
            <span className="topich">Gravitation and fluid</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Gravitation and fluid - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Gravitation and fluid - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              {/* Random extra duplicates */}
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Gravitation and fluid - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Gravitation and fluid - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 4. Work, energy and power */}
            <span className="topich">Work, energy and power</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Work, energy and power - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Work, energy and power - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 5. Wave motion and sound */}
            <span className="topich">Wave motion and sound</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Wave motion and sound - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Wave motion and sound - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              {/* Random extra duplicate */}
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Wave motion and sound - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {selectedSubject === "Physics" && selectedClass === "Class10" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. Light */}
            <span className="topich">Light</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Light - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Light - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              {/* Random extra duplicate */}
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Light - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Electricity */}
            <span className="topich">Electricity</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electricity - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electricity - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. Magnetism and EMI */}
            <span className="topich">Magnetism and EMI</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and EMI - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and EMI - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              {/* Random extra duplicates */}
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and EMI - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and EMI - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 4. Sources of Energy, nuclear fusion and fission */}
            <span className="topich">
              Sources of Energy, nuclear fusion and fission
            </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Sources of Energy - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Sources of Energy - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              {/* Random extra duplicate */}
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Sources of Energy - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Physics" && selectedClass === "Class11" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. Units and measurements */}
            <span className="topich">Units and measurements</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Units and measurements - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Units and measurements - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Units and measurements - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Motion in straight line */}
            <span className="topich">Motion in straight line</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Motion in straight line - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Motion in straight line - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. Motion in a plane */}
            <span className="topich">Motion in a plane</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Motion in a plane - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Motion in a plane - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Motion in a plane - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Motion in a plane - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 4. Laws of motion */}
            <span className="topich">Laws of motion</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Laws of motion - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Laws of motion - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 5. Work, energy and power */}
            <span className="topich">Work, energy and power</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Work, energy and power - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Work, energy and power - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Work, energy and power - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 6. System of particles */}
            <span className="topich">System of particles</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="System of particles - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="System of particles - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 7. Rotational motion */}
            <span className="topich">Rotational motion</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Rotational motion - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Rotational motion - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Rotational motion - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 8. Gravitation */}
            <span className="topich">Gravitation</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Gravitation - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Gravitation - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 9. Mechanical properties of solids */}
            <span className="topich">Mechanical properties of solids</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Mechanical properties of solids - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Mechanical properties of solids - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Mechanical properties of solids - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Mechanical properties of solids - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 10. Mechanical properties of fluids */}
            <span className="topich">Mechanical properties of fluids</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Mechanical properties of fluids - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Mechanical properties of fluids - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 11. Thermal properties of matter */}
            <span className="topich">Thermal properties of matter</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Thermal properties of matter - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Thermal properties of matter - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Thermal properties of matter - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 12. Thermodynamics */}
            <span className="topich">Thermodynamics</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Thermodynamics - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Thermodynamics - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 13. Kinetic theory */}
            <span className="topich">Kinetic theory</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Kinetic theory - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Kinetic theory - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Kinetic theory - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 14. Oscillation */}
            <span className="topich">Oscillation</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Oscillation - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Oscillation - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 15. Waves */}
            <span className="topich">Waves</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Waves - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Waves - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Waves - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Waves - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Physics" && selectedClass === "Class12" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. Electric charges and fields */}
            <span className="topich">Electric charges and fields</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electric charges and fields - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electric charges and fields - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electric charges and fields - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Electrostatics potential and capacitance */}
            <span className="topich">
              Electrostatics potential and capacitance
            </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electrostatics potential - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electrostatics potential - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. Current electricity */}
            <span className="topich">Current electricity</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Current electricity - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Current electricity - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Current electricity - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Current electricity - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 4. Moving charges and magnetism */}
            <span className="topich">Moving charges and magnetism</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Moving charges - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Moving charges - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 5. Magnetism and matter */}
            <span className="topich">Magnetism and matter</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and matter - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and matter - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and matter - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 6. Electromagnetic induction */}
            <span className="topich">Electromagnetic induction</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electromagnetic induction - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electromagnetic induction - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 7. Alternating current */}
            <span className="topich">Alternating current</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Alternating current - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Alternating current - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Alternating current - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 8. Electromagnetic waves */}
            <span className="topich">Electromagnetic waves</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electromagnetic waves - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electromagnetic waves - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 9. Ray optics and optical instruments */}
            <span className="topich">Ray optics and optical instruments</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ray optics - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ray optics - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ray optics - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ray optics - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 10. Wave optics */}
            <span className="topich">Wave optics</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Wave optics - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Wave optics - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 11. Dual nature of radiation and matter */}
            <span className="topich">Dual nature of radiation and matter</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Dual nature - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Dual nature - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Dual nature - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 12. Atoms */}
            <span className="topich">Atoms</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Atoms - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Atoms - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 13. Nuclei */}
            <span className="topich">Nuclei</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Nuclei - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Nuclei - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Nuclei - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 14. Semiconductor electronics */}
            <span className="topich">Semiconductor electronics</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Semiconductors - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Semiconductors - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Semiconductors - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Semiconductors - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {selectedSubject === "Biology" && selectedClass === "Class9" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. Electric charges and fields */}
            <span className="topich">Electric charges and fields</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electric charges and fields - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electric charges and fields - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electric charges and fields - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Electrostatics potential and capacitance */}
            <span className="topich">
              Electrostatics potential and capacitance
            </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electrostatics potential - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electrostatics potential - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. Current electricity */}
            <span className="topich">Current electricity</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Current electricity - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Current electricity - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Current electricity - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Current electricity - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 4. Moving charges and magnetism */}
            <span className="topich">Moving charges and magnetism</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Moving charges - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Moving charges - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 5. Magnetism and matter */}
            <span className="topich">Magnetism and matter</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and matter - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and matter - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Magnetism and matter - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 6. Electromagnetic induction */}
            <span className="topich">Electromagnetic induction</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electromagnetic induction - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electromagnetic induction - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 7. Alternating current */}
            <span className="topich">Alternating current</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Alternating current - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Alternating current - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Alternating current - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 8. Electromagnetic waves */}
            <span className="topich">Electromagnetic waves</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electromagnetic waves - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Electromagnetic waves - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 9. Ray optics and optical instruments */}
            <span className="topich">Ray optics and optical instruments</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ray optics - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ray optics - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ray optics - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ray optics - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 10. Wave optics */}
            <span className="topich">Wave optics</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Wave optics - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Wave optics - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 11. Dual nature of radiation and matter */}
            <span className="topich">Dual nature of radiation and matter</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Dual nature - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Dual nature - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Dual nature - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 12. Atoms */}
            <span className="topich">Atoms</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Atoms - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Atoms - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 13. Nuclei */}
            <span className="topich">Nuclei</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Nuclei - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Nuclei - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Nuclei - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 14. Semiconductor electronics */}
            <span className="topich">Semiconductor electronics</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Semiconductors - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Semiconductors - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Semiconductors - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Semiconductors - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Biology" && selectedClass === "Class9" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. The fundamental unit of life */}
            <span className="topich">The fundamental unit of life</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="The fundamental unit of life - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="The fundamental unit of life - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="The fundamental unit of life - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Tissue */}
            <span className="topich">Tissue</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Tissue - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Tissue - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. Improvement in food resources */}
            <span className="topich">Improvement in food resources</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Improvement in food resources - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Improvement in food resources - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Improvement in food resources - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Improvement in food resources - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Biology" && selectedClass === "Class10" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. Life processes */}
            <span className="topich">Life processes</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Life processes - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Life processes - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Life processes - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Control and coordination */}
            <span className="topich">Control and coordination</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Control and coordination - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Control and coordination - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. How do organisms reproduce */}
            <span className="topich">How do organisms reproduce</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="How do organisms reproduce - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="How do organisms reproduce - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="How do organisms reproduce - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="How do organisms reproduce - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 4. Heredity */}
            <span className="topich">Heredity</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Heredity - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Heredity - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Heredity - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 5. Our environment */}
            <span className="topich">Our environment</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Our environment - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Our environment - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Biology" && selectedClass === "Class11" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. The living world */}
            <span className="topich">The living world</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="The living world - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="The living world - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="The living world - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Biological classification */}
            <span className="topich">Biological classification</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biological classification - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biological classification - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. Plant kingdom */}
            <span className="topich">Plant kingdom</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Plant kingdom - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Plant kingdom - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Plant kingdom - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 4. Animal kingdom */}
            <span className="topich">Animal kingdom</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Animal kingdom - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Animal kingdom - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 5. Morphology of flowering plants */}
            <span className="topich">Morphology of flowering plants</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Morphology of flowering plants - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Morphology of flowering plants - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Morphology of flowering plants - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Morphology of flowering plants - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 6. Anatomy of flowering plants */}
            <span className="topich">Anatomy of flowering plants</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Anatomy of flowering plants - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Anatomy of flowering plants - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 7. Structural organization in animals */}
            <span className="topich">Structural organization in animals</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Structural organization in animals - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Structural organization in animals - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Structural organization in animals - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 8. Cell: the unit of life */}
            <span className="topich">Cell: the unit of life</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Cell: the unit of life - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Cell: the unit of life - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 9. Biomolecules */}
            <span className="topich">Biomolecules</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biomolecules - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biomolecules - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biomolecules - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 10. Cell cycle and cell division */}
            <span className="topich">Cell cycle and cell division</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Cell cycle and cell division - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Cell cycle and cell division - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 11. Photosynthesis in higher plants */}
            <span className="topich">Photosynthesis in higher plants</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Photosynthesis in higher plants - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Photosynthesis in higher plants - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Photosynthesis in higher plants - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 12. Respiration in plants */}
            <span className="topich">Respiration in plants</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Respiration in plants - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Respiration in plants - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 13. Plant growth and development */}
            <span className="topich">Plant growth and development</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Plant growth and development - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Plant growth and development - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Plant growth and development - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 14. Breathing and exchange of gases */}
            <span className="topich">Breathing and exchange of gases</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Breathing and exchange of gases - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Breathing and exchange of gases - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 15. Body fluids and circulation */}
            <span className="topich">Body fluids and circulation</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Body fluids and circulation - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Body fluids and circulation - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Body fluids and circulation - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 16. Excretory products and movement */}
            <span className="topich">Excretory products and movement</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Excretory products and movement - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Excretory products and movement - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 17. Locomotion and movement */}
            <span className="topich">Locomotion and movement</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Locomotion and movement - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Locomotion and movement - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Locomotion and movement - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 18. Neural control and coordination */}
            <span className="topich">Neural control and coordination</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Neural control and coordination - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Neural control and coordination - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 19. Chemical coordination and integration */}
            <span className="topich">
              Chemical coordination and integration
            </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Chemical coordination and integration - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Chemical coordination and integration - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Chemical coordination and integration - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {selectedSubject === "Biology" && selectedClass === "Class12" && (
          <div className="topicwise d-flex flex-column justify-content-around">
            {/* 1. Sexual reproduction in flowering plants */}
            <span className="topich">
              Sexual reproduction in flowering plants
            </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Sexual reproduction in flowering plants - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Sexual reproduction in flowering plants - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Sexual reproduction in flowering plants - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Human reproduction */}
            <span className="topich">Human reproduction</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Human reproduction - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Human reproduction - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 3. Reproductive health */}
            <span className="topich">Reproductive health</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Reproductive health - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Reproductive health - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Reproductive health - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Reproductive health - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 4. Principles of inheritance and variation */}
            <span className="topich">
              Principles of inheritance and variation
            </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Principles of inheritance - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Principles of inheritance - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 5. Molecular basis of inheritance */}
            <span className="topich">Molecular basis of inheritance</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Molecular basis of inheritance - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Molecular basis of inheritance - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Molecular basis of inheritance - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 6. Evolution */}
            <span className="topich">Evolution</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Evolution - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Evolution - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 7. Human health and disease */}
            <span className="topich">Human health and disease</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Human health and disease - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Human health and disease - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Human health and disease - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 8. Microbes in human welfare */}
            <span className="topich">Microbes in human welfare</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Microbes in human welfare - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Microbes in human welfare - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 9. Biotechnology: principles and processes */}
            <span className="topich">
              Biotechnology: principles and processes
            </span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biotechnology principles - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biotechnology principles - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biotechnology principles - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biotechnology principles - Video 4 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 10. Biotechnology and its application */}
            <span className="topich">Biotechnology and its application</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biotechnology applications - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biotechnology applications - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 11. Organisms and populations */}
            <span className="topich">Organisms and populations</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Organisms and populations - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Organisms and populations - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Organisms and populations - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 12. Ecosystem */}
            <span className="topich">Ecosystem</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ecosystem - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Ecosystem - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* 13. Biodiversity and conservation */}
            <span className="topich">Biodiversity and conservation</span>
            <div className="topicwise-content d-flex">
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biodiversity and conservation - Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biodiversity and conservation - Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <iframe
                className="vid"
                src="https://www.youtube.com/embed/Iqr3XIhSnUQ"
                title="Biodiversity and conservation - Video 3 (Extra)"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {(!selectedSubject || !selectedClass) && (
          <span className="WARNING">
            Please select a subject and class to view the content.
          </span>
        )}
      </div>
      <br />
      <br />
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
            href="https://www.youtube.com"
            target="_blank"
            aria-label="YouTube"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videos;
