import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample gallery images (replace with your own image paths)
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <div className="content">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <img src="/Banner.png" className="brand-logo" alt="Logo" />
          <span className="navbar-brand fw-bold">Gallery</span>

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
                  className="nav-link active"
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
                  href="#contact"
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

      {/* Gallery Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #e0f7ff 50%, #b3e5fc 50%)",
          minHeight: "100vh",
          padding: "6rem 5% 3rem",
        }}
      >
        <div className="container pt-5">
          <h2 className="text-center mb-5">Our Gallery</h2>
          <div className="row g-4">
            {images.map((src, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="card shadow-sm border-0">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="card-img-top rounded"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                </div>
              </div>
            ))}
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

export default Gallery;
