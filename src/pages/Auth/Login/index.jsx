import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
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
                <div className="login-card">
                    {/* IMAGE SIDE */}
                    <div className="login-image">
                        <img
                            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80"
                            alt="login"
                        />
                    </div>

                    {/* FORM SIDE */}
                    <div className="login-form">
                        <h2 style={{ color: "#198754", textAlign: "center" }}>
                            Saylani Welfare
                        </h2>

                        <p style={{ textAlign: "center", color: "#666" }}>
                            Login to your account
                        </p>

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

                        <button className="login-btn">Login</button>

                        <p style={{ textAlign: "center", marginTop: "15px" }}>
                            Don’t have account?{" "}
                            <Link to="/auth/register" style={{ color: "#198754" }}>
                                Register
                            </Link>
                        </p>
                    </div>
                </div>

                {/* CSS */}
                <style>{`
        .login-card {
          width: 100%;
          max-width: 900px;
          height: 500px;
          display: flex;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          background: #fff;
        }

        .login-image {
          width: 50%;
          height: 100%;
        }

        .login-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .login-form {
          width: 50%;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .input-box {
          display: flex;
          margin-bottom: 15px;
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

        .login-btn {
          background: #198754;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }

        /* ✅ MOBILE RESPONSIVE */
        @media (max-width: 600px) {
          .login-card {
            flex-direction: column;
            height: auto;
          }

          .login-image {
            width: 100%;
            height: 220px;
          }

          .login-form {
            width: 100%;
            padding: 20px;
          }
        }
      `}</style>
            </div>
        </main>
    );
};

export default Login;