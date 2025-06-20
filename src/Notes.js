import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
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
          <span className="navbar-brand">Notes</span>

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
        {selectedSubject === "Chemistry" && selectedClass === "Class10" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://drive.google.com/file/d/140ZePWIUPhEk53_CwtjfpmpIdPY79jgd/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Chemical reaction and equation</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1PaRgGoRgSumVOURhyVtZjrKBJD_zXycy/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Acid ,base and salt </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/19KM1aTqkXZ_4gpPdWlc_c2MZo9HkJmw5/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Metal and non metal</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1HfGnp8q-3lPqxSdW360RkZwMYELopdS2/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Carbon and its compound </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1ZQWQI_cO2A3h_aHsipKdGlO6j_3HAPZH/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Periodic table</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Chemistry" && selectedClass === "Class12" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://drive.google.com/file/d/1OrcrQRy0kTVDh0FTX0RYyynKC0MfkFuX/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Solid state</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1RaoJ6U0bOiohRz9CqC5hXF2MKLAMMHFW/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Periodic table</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Solution </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1t6MlQRD8NzbiUPiN6MbE2vjuyTxCiCPh/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Electrochemistry</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1PPzUK9pIQ7xm80fsNyBL9oHP_Xx5AZDk/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Chemical kinetics</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Surface chemistry </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>P block part -2 </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>d anf f block</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1qrY9X8-hbACYM2YpoztzAs7j3CxEP5CD/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Cordination chemistry</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Alkyl halide and aryl halide </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1E6VHpe6O5Zb-Jnq48bpTjBU_7VBGFAVf/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Alcohol ,ether and phenol</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1Gy70yRtVOu04iV-he9yoDAH7r_7Br6DQ/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Aldehyde and ketone</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1bpExcNuR5xN1WVntr4lsQf_2ABebdfph/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Carboxylic acid and its derivatives</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1NLlw0G8AOocNTfBuOVURF-DuZ_T4Rvyv/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Amine </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/19174lH5SOLkxG5WEEl2gNcRFnCCtoyFA/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span> Chemistry Olympiad question</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Biomolecules</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1PtK51EN2NC6F67Hs1EBo5PtYDVzJGGs3/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Polymer </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Chemistry used in everyday life</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/10HzzkEq7kYTr4QmDHXzaTd6loG0DJg_z/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Liquid Solution</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1zGAHFrKUme4zHkgi6BQVsM64_gm3xmKv/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Boron Family</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1S3wq7U7FMqnbUDYyUBBDK2Bk5hmKyIsw/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Carbon Family</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/14zSdZIWoOiNk4_df8ez2tUQXhfY0DjEj/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Halogen Family</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1vNL82RTvDwZLPMpq-Oq9238R707Dlo2e/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Inert Family</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Chemistry" && selectedClass === "Class9" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Matter in our surrounding </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Is matter around us pure?</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Atoms and molecules</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Structure of atom </span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Chemistry" && selectedClass === "Class11" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Mole concept</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1rk61S79H9YPD3Eg6bUlxIrtpRTyQ5vJP/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Atomic structure </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1G0ixOaY6SOgeuXzpatPB567qg0EMyWAc/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Periodic properties </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1qYJ7hmWZD1cHfzMeLc3E9qKNUQRBfVDK/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Chemical bonding</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1tqP1aNHN3lIWL6stUC414zB27eqSSB5p/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Classification & Nomenclature</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1zSdgJTCdvWD3ugAuwvwdjBiwnngvcaRP/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>General Organic Chemistry & Isomerism Chemistry</span>{" "}
                <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/18vUV6aA-3FaiqHtN7pO-4z_T0CMnjClv/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Electroflic aromatic Substitution</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1dJIPkgM7zwrTg4dGL2KrFdqwwjtZnAr-/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Alkyl Halides and Aryl Halides </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/18Jb3pw4BQfN2WR8C-KVFhYs4ZmGHIGSB/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Hydrocarbon </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1eR3UILZeO7oKqkbA0lkVRmwFEt8MUa9d/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Volumetric Analysis </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1H8mt6K3cAlHptK4x2nJqk8gnlnuI4dFc/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span> **Chemistry Olympiad**</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1b12UsvpgI8KGKkDHMZ-kWTBSi7Oid3uD/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span> **Basic Concepts Of Chemistry**</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1bHU2AnontT805u-YsODR2-34KoBS5pzy/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Gaseous state </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1QyaYTEc1DEJ3F0HwTCnmqxowMqepQpXB/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Thermodynamics </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1LX-BtSAiJ5HUoIZeDVy-GUm9c41-r2Yj/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Chemical equilibrium </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/18MDL6RRzCCy92uKqmFCStoJPnh6WJAsZ/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span> Ionic equilibrium </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Redox reaction </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Hydrogen and its compound </span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>S –block </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>P block part -1 </span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>General organic chemistry</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1vzpKz5fjZabAEq1o2P9FX21nwtvwIoEfHmi0jzXSRdA/edit?usp=drive_link"
                className="pdf-tile"
                target="_blank"
              >
                <span>Environmental chemistry </span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}

        {selectedSubject === "Math" && selectedClass === "Class9" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-1"
                className="pdf-tile"
                target="_blank"
              >
                <span>Number System</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-2"
                className="pdf-tile"
                target="_blank"
              >
                <span>Polynomial</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-3"
                className="pdf-tile"
                target="_blank"
              >
                <span>Coordinate Geometry</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-4"
                className="pdf-tile"
                target="_blank"
              >
                <span>Linear Equations in Two Variables</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-5"
                className="pdf-tile"
                target="_blank"
              >
                <span>Introduction to Euclid’s Geometry</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-6"
                className="pdf-tile"
                target="_blank"
              >
                <span>Lines and Angles</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-7"
                className="pdf-tile"
                target="_blank"
              >
                <span>Triangles</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-8"
                className="pdf-tile"
                target="_blank"
              >
                <span>Quadrilaterals</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-9"
                className="pdf-tile"
                target="_blank"
              >
                <span>Circles</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-10"
                className="pdf-tile"
                target="_blank"
              >
                <span>Heron’s Formula</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-11"
                className="pdf-tile"
                target="_blank"
              >
                <span>Surface Areas and Volumes</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-12"
                className="pdf-tile"
                target="_blank"
              >
                <span>Statistics</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Math" && selectedClass === "Class10" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-1"
                className="pdf-tile"
                target="_blank"
              >
                <span>Real Numbers</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-2"
                className="pdf-tile"
                target="_blank"
              >
                <span>Polynomials</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-3"
                className="pdf-tile"
                target="_blank"
              >
                <span>Pair of Linear Equations in Two Variables</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-4"
                className="pdf-tile"
                target="_blank"
              >
                <span>Quadratic Equations</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-5"
                className="pdf-tile"
                target="_blank"
              >
                <span>Arithmetic Progressions</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-6"
                className="pdf-tile"
                target="_blank"
              >
                <span>Triangles</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-7"
                className="pdf-tile"
                target="_blank"
              >
                <span>Coordinate Geometry</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-8"
                className="pdf-tile"
                target="_blank"
              >
                <span>Introduction to Trigonometry</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-9"
                className="pdf-tile"
                target="_blank"
              >
                <span>Height and Distances</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-10"
                className="pdf-tile"
                target="_blank"
              >
                <span>Circles</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-11"
                className="pdf-tile"
                target="_blank"
              >
                <span>Area Related to Circles</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-12"
                className="pdf-tile"
                target="_blank"
              >
                <span>Surface Areas and Volumes</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-13"
                className="pdf-tile"
                target="_blank"
              >
                <span>Statistics</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-14"
                className="pdf-tile"
                target="_blank"
              >
                <span>Probability</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Math" && selectedClass === "Class11" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-1"
                className="pdf-tile"
                target="_blank"
              >
                <span>Sets</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1ZciSa-bHbai2FOF23DYQqeJRtRJmH74k/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Basic Math</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1FmhbjGUn4ItFr6aDvzjkX2tzy2f5pV9r/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Relations and Functions</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/107snSg-K_ZdYRcrRmbWRjlESgEwumnAY/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Trigonometric Equations</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1vsCZWPhiDujVnu_41c6vD-MFPepTSNwp/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Trigonometric ratios and identities</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1ATZKXokV8QH8R6jmx5Dl9zcbZ4KfKtmk/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Complex Numbers</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1oQS_nd1FdxT7ABQMjM42L4rdMoGXJV5i/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Quadratic Equations</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1lcd_Y4JeDljE0SHK9f78n_Dh_ujWnDZf/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Linear inequations</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1lcd_Y4JeDljE0SHK9f78n_Dh_ujWnDZf/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Principle of Mathematical Induction</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1epDVvoFOIsL0_6dlkPhEe2RWzSd_CnPz/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Permutations and Combinations</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1Vb22ddxkQdlHPFvTF1lbKHSvJysHIaF3/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Binomial Theorem</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1EgiOu723DxjDzxG9suEwtl6VVbUsOsh4/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Sequences and Series</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1LbRO3ieOKYaIkKlyiUSvVhd28D_O_jd3/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Straight Lines</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/14u2HtA0-Do-PK7byxbARun5e7zxhrYK4/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Circles</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/12wPT-UV5HD0-2C5z5JUnw961oV1BOjoB/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Parabola</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1QNatXi6CZbBuIvrD6kuxKdjJpI_dkZKO/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Ellipse</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1XhkBpjkYFDL5TZZBhZqbvYxrjyw0Iiob/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Hyperbola</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1RcNSZUnMBxCGTmECyA_AowwNLUTQjKKl/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>3-D Geometry</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1LprffpTlg21ygYwWPPPNDMjjI2RwKnmQ/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Limits and Derivatives</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-17"
                className="pdf-tile"
                target="_blank"
              >
                <span>Statics</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1PwBOQwTR8oFC92cl9BPNCsbbzgMoYKOl/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Probability</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Math" && selectedClass === "Class12" && (
          <div className="topicwise-contentnotes d-flex justify-content-around flex-wrap">
            <div>
              <a
                href="https://drive.google.com/file/d/1CJMrmOxfnfjyXKjd_AmQ8yP2YaHmgG19/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Relations and Functions</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1Tr29ByLAyiZ6Dmfl4OPQxPnM3vbXNhSj/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Inverse Trigonometric Functions</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1o3liz6oLJf33_FF6jQmhGN0mdnhsQHUq/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Matrices and Determinants</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1FWibLqnqhJfNBJdh26brpzvACMNA3Nml/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Continuity and Differentiability</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1oOOIwcmoUjOrXdmzzRQKhAQV7oOg4OFU/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Application of Derivatives</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1sjgScAj4bkucM2huD-aRwYGrOJHECBP-/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span> Definite Integrals</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1sjgScAj4bkucM2huD-aRwYGrOJHECBP-/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span> Indefinite Integrals</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1a_a1yc5IVlfOw_5CmvSy-hDau7W3Ndo2/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Area Under Curves</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1a_a1yc5IVlfOw_5CmvSy-hDau7W3Ndo2/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Properties and Solutions of triangle</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1a7b16j2kMmM6Wzo65VncKaClbATOjVZT/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Differential Equations</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1QkakMZcXRdkprTvNmEuSplNF6dc1-t1Y/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Vector Algebra</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1TLz9fnPCY6X1OdP7IZJjpBhe-AAP0Ry_/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Three Dimensional Geometry</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-12"
                className="pdf-tile"
                target="_blank"
              >
                <span>Linear Programming</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1KWE5HFpuwWmA6tZIKtQMFA1PpPWMkN4L/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Probability</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}

        {selectedSubject === "Physics" && selectedClass === "Class9" && (
          <div className="topicwise-contentnotes  d-flex  justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-16/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Basic Maths & Vector</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-17/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Force and laws of motion</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-18/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Gravitation and fluid</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-19/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Work, energy and power</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-20/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Wave motion and sound</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Physics" && selectedClass === "Class10" && (
          <div className="topicwise-contentnotes d-flex justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-21/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Light</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-22/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Electricity</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-23/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Magnetism and EMI</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-24/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Sources of Energy, Nuclear Fission and Fusion</span>{" "}
                <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Physics" && selectedClass === "Class11" && (
          <div className="topicwise-contentnotes d-flex justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-1/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Units and measurements</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-2/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Motion in straight line</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-3/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Motion in a plane</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1YY-bi8fTG2eJGJE6mWW60bxjv_MN33hL/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Impulse and Momentum</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1qAVLSM-5ULleBZ8f8tCJd7Fd5Z4220jb/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Laws of motion</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1ZSOp_kItTXK5S4Fu7lt_ahH8f0y4Z_t3/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Work, energy and power</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/12ZwZ8uBzaXHz4fY7twy87ZGvlgSxeGFv/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>System of particles & Rotational motion</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://drive.google.com/file/d/1WWkUqKk7S9DO7LVRSgDYY-37ST61LOxZ/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Gravitation</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-9/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Mechanical properties of solids</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-10/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Mechanical properties of fluids</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-11/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Thermal properties of matter</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-12/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Thermodynamics</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1B20QVslLRza2QbjAiu4_ZESs7cL0TQLh/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Kinetic theory</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-14/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Oscillation</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-15/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Waves</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Physics" && selectedClass === "Class12" && (
          <div className="topicwise-contentnotes d-flex justify-content-around flex-wrap">
            <div>
              <a
                href="https://drive.google.com/file/d/1hMOjGVnpBgAsioVYu4GcpXMgYVssEwDa/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Transient current circuit & AC Current circuit</span>{" "}
                <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/18fOh4552wOYwz-mHaxrZCVv81MdMKrNZ/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Electrostatic potential and capacitance</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1zOc2GQnEqtFvAiyeou9hlm9z8dedeuDl/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Current electricity</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1PoQsZjTHgsIDjMBYtY5tVDgrDxTygLRk/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Magnetism</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1Y66GgeWkcp34T77n6Ugu2l9PRFYhk7vr/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Electro magnetic induction</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-31/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Alternating current</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-32/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Electromagnetic waves</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1LDRn_fTkB6_D7onj66xDNB7PP3AlH1XF/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Optics Physics</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-35/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Dual nature of radiation and matter</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1Ply_PIceAKxrZwZh7W9X7QiPBKsMLzG_/view?usp=sharing"
                className="pdf-tile"
                target="_blank"
              >
                <span>Modern Physics</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-37/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>Nuclei</span> <br />
                click to open PDF
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/unique-link-38/edit"
                className="pdf-tile"
                target="_blank"
              >
                <span>
                  Semiconductor electronics: Materials, Devices and Simple
                  Circuits
                </span>{" "}
                <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}

        {selectedSubject === "Biology" && selectedClass === "Class9" && (
          <div className="topicwise-contentnotes d-flex justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-1"
                className="pdf-tile"
                target="_blank"
              >
                <span>The Fundamental Unit of Life</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-2"
                className="pdf-tile"
                target="_blank"
              >
                <span>Tissue</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-3"
                className="pdf-tile"
                target="_blank"
              >
                <span>Improvement in Food Resources</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Biology" && selectedClass === "Class10" && (
          <div className="topicwise-contentnotes d-flex justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-1"
                className="pdf-tile"
                target="_blank"
              >
                <span>Life Processes</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-2"
                className="pdf-tile"
                target="_blank"
              >
                <span>Control and Coordination</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-3"
                className="pdf-tile"
                target="_blank"
              >
                <span>How Do Organisms Reproduce</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-4"
                className="pdf-tile"
                target="_blank"
              >
                <span>Heredity</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-5"
                className="pdf-tile"
                target="_blank"
              >
                <span>Our Environment</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Biology" && selectedClass === "Class11" && (
          <div className="topicwise-contentnotes d-flex justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-1"
                className="pdf-tile"
                target="_blank"
              >
                <span>The Living World</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-2"
                className="pdf-tile"
                target="_blank"
              >
                <span>Biological Classification</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-3"
                className="pdf-tile"
                target="_blank"
              >
                <span>Plant Kingdom</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-4"
                className="pdf-tile"
                target="_blank"
              >
                <span>Animal Kingdom</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-5"
                className="pdf-tile"
                target="_blank"
              >
                <span>Morphology of Flowering Plants</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-6"
                className="pdf-tile"
                target="_blank"
              >
                <span>Anatomy of Flowering Plants</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-7"
                className="pdf-tile"
                target="_blank"
              >
                <span>Structural Organization in Animals</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-8"
                className="pdf-tile"
                target="_blank"
              >
                <span>Cell: The Unit of Life</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-9"
                className="pdf-tile"
                target="_blank"
              >
                <span>Biomolecules</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-10"
                className="pdf-tile"
                target="_blank"
              >
                <span>Cell Cycle and Cell Division</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-11"
                className="pdf-tile"
                target="_blank"
              >
                <span>Photosynthesis in Higher Plants</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-12"
                className="pdf-tile"
                target="_blank"
              >
                <span>Respiration in Plants</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-13"
                className="pdf-tile"
                target="_blank"
              >
                <span>Plant Growth and Development</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-14"
                className="pdf-tile"
                target="_blank"
              >
                <span>Breathing and Exchange of Gases</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-15"
                className="pdf-tile"
                target="_blank"
              >
                <span>Body Fluids and Circulation</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-16"
                className="pdf-tile"
                target="_blank"
              >
                <span>Excretory Products and Movement</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-17"
                className="pdf-tile"
                target="_blank"
              >
                <span>Locomotion and Movement</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-18"
                className="pdf-tile"
                target="_blank"
              >
                <span>Neural Control and Coordination</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-19"
                className="pdf-tile"
                target="_blank"
              >
                <span>Chemical Coordination and Integration</span> <br />
                click to open PDF
              </a>
            </div>
          </div>
        )}
        {selectedSubject === "Biology" && selectedClass === "Class12" && (
          <div className="topicwise-contentnotes d-flex justify-content-around flex-wrap">
            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-1"
                className="pdf-tile"
                target="_blank"
              >
                <span>Sexual Reproduction in Flowering Plants</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-2"
                className="pdf-tile"
                target="_blank"
              >
                <span>Human Reproduction</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-3"
                className="pdf-tile"
                target="_blank"
              >
                <span>Reproductive Health</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-4"
                className="pdf-tile"
                target="_blank"
              >
                <span>Principles of Inheritance and Variation</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-5"
                className="pdf-tile"
                target="_blank"
              >
                <span>Molecular Basis of Inheritance</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-6"
                className="pdf-tile"
                target="_blank"
              >
                <span>Evolution</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-7"
                className="pdf-tile"
                target="_blank"
              >
                <span>Human Health and Disease</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-8"
                className="pdf-tile"
                target="_blank"
              >
                <span>Microbes in Human Welfare</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-9"
                className="pdf-tile"
                target="_blank"
              >
                <span>Biotechnology: Principles and Processes</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-10"
                className="pdf-tile"
                target="_blank"
              >
                <span>Biotechnology and Its Application</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-11"
                className="pdf-tile"
                target="_blank"
              >
                <span>Organisms and Populations</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-12"
                className="pdf-tile"
                target="_blank"
              >
                <span>Ecosystem</span> <br />
                click to open PDF
              </a>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/your-doc-id-13"
                className="pdf-tile"
                target="_blank"
              >
                <span>Biodiversity and Conservation</span> <br />
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

export default Notes;
