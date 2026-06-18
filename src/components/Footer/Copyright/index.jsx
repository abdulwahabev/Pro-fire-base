import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Copyright = () => {
    
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-white pt-5 pb-3"
      style={{ backgroundColor: "#0b5d35" }}
    >
      <div className="container">
        <div className="row g-4">
          {/* About */}
          <div className="col-lg-4 col-md-6">
            <h4
              className="fw-bold mb-3"
              style={{ color: "#ffc107" }}
            >
              Saylani Welfare
            </h4>

            <p className="mb-4 text-light">
              Serving humanity through education, healthcare, food
              distribution, vocational training, and welfare programs.
              Together we can build a better future for everyone.
            </p>

            <div className="d-flex gap-3">
              <a
                href="#"
                className="text-white fs-5"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="text-white fs-5"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="text-white fs-5"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="text-white fs-5"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6">
            <h5
              className="fw-semibold mb-3"
              style={{ color: "#ffc107" }}
            >
              Links
            </h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-decoration-none text-light"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-decoration-none text-light"
                >
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-decoration-none text-light"
                >
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-decoration-none text-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Courses */}
          <div className="col-lg-3 col-md-6">
            <h5
              className="fw-semibold mb-3"
              style={{ color: "#ffc107" }}
            >
              IT Courses
            </h5>

            <ul className="list-unstyled">
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Graphic Design</li>
              <li className="mb-2">Digital Marketing</li>
              <li className="mb-2">AI & Data Science</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5
              className="fw-semibold mb-3"
              style={{ color: "#ffc107" }}
            >
              Contact
            </h5>

            <p className="mb-3 d-flex align-items-start">
              <FaMapMarkerAlt className="me-2 mt-1" />
              <span>Lal Mills Chowk, Faisalabad</span>
            </p>

            <p className="mb-3 d-flex align-items-center">
              <FaPhoneAlt className="me-2" />
              <span>+92 21 111 729 526</span>
            </p>

            <p className="mb-4 d-flex align-items-center">
              <FaEnvelope className="me-2" />
              <span>info@saylaniwelfare.com</span>
            </p>

          </div>
        </div>

        <hr
          className="my-4"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
          }}
        />

        <div className="row align-items-center gy-2">
          <div className="col-md-6 text-center text-md-start">
            © {year} Saylani Welfare. All Rights Reserved.
          </div>

          <div className="col-md-6 text-center text-md-end">
            Designed & Developed by Wahab
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;