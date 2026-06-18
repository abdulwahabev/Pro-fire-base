import { useAuth } from "@/context/Auth";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { isAuth, handleLogout } = useAuth()

  return (

    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: "#0d6b3c" }}>

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          Saylani Welfare
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/services">Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/contact">Contact</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle active" to="/programs" role="button" data-bs-toggle="dropdown">
                Programs
              </Link>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/web-development">Web development</Link></li>
                <li><Link className="dropdown-item" to="/graphic-designing">Graphic Designing</Link></li>
                <li><Link className="dropdown-item" to="/video-editing">Video Editing</Link></li>
                <li><Link className="dropdown-item" to="/digital-marketing">Digital Marketing</Link></li>
                <li><Link className="dropdown-item" to="/e-commerce">E-commerce Management</Link></li>
              </ul>

            </li>

          </ul>

          <div className="d-flex align-items-center gap-3 flex-wrap">

            {isAuth
              ? <div className="d-flex gap-2">
                <Link to="/dashboard" className="btn btn-light fw-semibold">
                  Dashboard
                </Link>

                <button className="btn btn-danger fw-semibold" onClick={handleLogout}>
                  Logout
                </button>
              </div>
              : <div className="d-flex gap-2">
                <Link to="/auth/login" className="btn btn-warning fw-semibold">
                  Login
                </Link>

                <Link to="/auth/register" className="btn btn-outline-light">
                  Register
                </Link>
              </div>
            }

          </div>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;