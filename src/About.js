import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="content">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <img src="/Banner.png" className="brand-logo" alt="Logo" />

          <span className="navbar-brand fw-bold">About Us</span>

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
                  href="/"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
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
                  onClick={() => navigate("/gallery")}
                  style={{ cursor: "pointer" }}
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => navigate("/about")}
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    });
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #e0f7ff 50%, #b3e5fc 50%)",
          minHeight: "100vh",
          width: "100%",
          padding: "6rem 5% 3rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 pt-4">
          {/* Left Text Content */}
          <div style={{ flex: 1, color: "#000", lineHeight: "1.6" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              About Us
            </h2>

            <h4 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              About Manjeet Classes
            </h4>
            <p>
              Located in New Yarpur, Patna, Manjeet Classes is a dedicated
              coaching institute specializing in JEE and competitive exam
              preparation. Founded by Mr. Manjeet, an experienced educator, the
              institution is built on a foundation of academic excellence and
              student-centric learning.
            </p>

            <h4 style={{ fontSize: "1.5rem", margin: "1.5rem 0 0.75rem" }}>
              Our Mission
            </h4>
            <p>
              To guide and empower students with deep subject knowledge,
              strategic exam techniques, and personalized support — helping them
              confidently reach their academic goals.
            </p>

            <h4 style={{ fontSize: "1.5rem", margin: "1.5rem 0 0.75rem" }}>
              What We Offer
            </h4>
            <p>
              <b>Expert JEE Coaching:</b> Well-structured programs designed to
              excel in engineering entrance exams.
              <br />
              <b>Comprehensive Exam Prep:</b> Sharp focus on key strategies,
              rigorous practice sessions, and vital doubt-clearing support.
              <br />
              <b>Strong Local Roots:</b> Conveniently located at S. K. Amashta,
              35/A, Jhunjhun Mahal Road, making us accessible to students across
              Patna.
            </p>
          </div>

          {/* Right Side Highlight Text */}
          <div
            style={{
              flex: 1,
              color: "white",
              fontWeight: "bold",
              fontSize: "10vw", // scales with screen size
              textAlign: "center",
              padding: "4rem 2rem",
              borderRadius: "1rem",
            }}
          >
            MANJEET CLASSES
          </div>
        </div>
      </section>

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
            <i className="bi bi-x"></i>
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

export default About;
