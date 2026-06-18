import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  return (
   <main>
     <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8",
        padding: "20px",
      }}
    >
      {/* MAIN CARD */}
      <div className="register-card">
        {/* IMAGE SIDE */}
        <div className="register-image">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww"
            alt="register"
          />
        </div>

        {/* FORM SIDE */}
        <div className="register-form">
          <h2 style={{ color: "#198754", textAlign: "center" }}>
            Saylani Welfare
          </h2>

          <p style={{ textAlign: "center", color: "#666" }}>
            Create your account
          </p>

          {/* FULL NAME */}
          <label>Full Name</label>
          <div className="input-box">
            <span>
              <FaUser />
            </span>
            <input type="text" placeholder="Enter name" />
          </div>

          {/* EMAIL */}
          <label>Email</label>
          <div className="input-box">
            <span>
              <FaEnvelope />
            </span>
            <input type="email" placeholder="Enter email" />
          </div>

          {/* PASSWORD */}
          <label>Password</label>
          <div className="input-box">
            <span>
              <FaLock />
            </span>
            <input type="password" placeholder="Enter password" />
          </div>

          {/* CONFIRM PASSWORD */}
          <label>Confirm Password</label>
          <div className="input-box">
            <span>
              <FaLock />
            </span>
            <input type="password" placeholder="Confirm password" />
          </div>

          <button className="register-btn">Register</button>

          <p style={{ textAlign: "center", marginTop: "15px" }}>
            Already have account?{" "}
            <Link to="/auth/login" style={{ color: "#198754" }}>
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .register-card {
          width: 100%;
          max-width: 900px;
          height: 550px;
          display: flex;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          background: #fff;
        }

        .register-image {
          width: 50%;
          height: 100%;
        }

        .register-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .register-form {
          width: 50%;
          padding: 35px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .input-box {
          display: flex;
          margin-bottom: 12px;
        }

        .input-box span {
          padding: 10px;
          background: #eee;
        }

        .input-box input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ddd;
          outline: none;
        }

        .register-btn {
          background: #198754;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }

        /* ✅ MOBILE RESPONSIVE */
        @media (max-width: 600px) {
          .register-card {
            flex-direction: column;
            height: auto;
          }

          .register-image {
            width: 100%;
            height: 220px;
          }

          .register-form {
            width: 100%;
            padding: 20px;
          }
        }
      `}</style>
    </div>
   </main>
  );
};

export default Register;