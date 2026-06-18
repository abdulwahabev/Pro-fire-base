import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };

const Register = () => {

  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => setState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleRegister = (e) => {
    e.preventDefault(); 

    let { name, email, password, confirmPassword } = state;

    name = name.trim();
    if (name.length < 3) { return window.toastify("Please enter a valid name", "error"); }
    if (!window.isValidEmail(email)) { return window.toastify("Please enter a valid email address", "error"); }
    if (password.length < 6) { return window.toastify("Please enter a strong password", "error"); }
    if (password !== confirmPassword) { return window.toastify("Passwords do not match", "error"); }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExist = users.some(user => user.email.toLowerCase() === email.toLowerCase());

    if (isUserExist) { return window.toastify("This email is already registered! Please Login.", "error"); }

    setIsProcessing(true);

    setTimeout(() => {
      const newUser = { id: window.getRandomId(), name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      setIsProcessing(false);
      window.toastify("User Registered Successfully", "success");

      setState(initialState);

      setShowPassword(false);
      setShowConfirmPassword(false);
      
      navigate("/auth/login");
    }, 2000);

  };

  return (
    <main>

      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f4f6f8", padding: "20px" }}>
        
        <form className="register-card" onSubmit={handleRegister}>
          <div className="register-image">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww" alt="register" />
          </div>

          <div className="register-form">
            <h2 style={{ color: "#198754", textAlign: "center", margin: "0 0 5px 0" }}>Saylani Welfare</h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>Create your account</p>

            <label htmlFor="name">Name</label>
            <div className="input-box">
              <span className="icon-span"><FaUser /></span>
              <input type="text" id="name" name="name" placeholder="Enter your name" value={state.name} onChange={handleChange} />
            </div>

            <label htmlFor="email">Email</label>
            <div className="input-box">
              <span className="icon-span"><FaEnvelope /></span>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={state.email} onChange={handleChange} />
            </div>

            <label htmlFor="password">Password</label>
            <div className="input-box relative-box">
              <span className="icon-span"><FaLock /></span>
              <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter strong password" value={state.password} onChange={handleChange} style={{ paddingRight: "45px" }} />
              <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-box relative-box">
              <span className="icon-span"><FaLock /></span>
              <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" placeholder="Enter confirm password" value={state.confirmPassword} onChange={handleChange} style={{ paddingRight: "45px" }} />
              <button type="button" className="eye-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button type="submit" className="register-btn" disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Register"}
            </button>

            <p style={{ textAlign: "center", marginTop: "15px", marginBottom: "0" }}>
              Already have account?{" "}
              <Link to="/auth/login" style={{ color: "#198754", fontWeight: "600", textDecoration: "none" }}>Login</Link>
            </p>
          </div>
        </form>

        <style>{`
          .register-card { width: 100%; max-width: 900px; height: 580px; display: flex; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); background: #fff; }
          .register-image { width: 50%; height: 100%; }
          .register-image img { width: 100%; height: 100%; object-fit: cover; }
          .register-form { width: 50%; padding: 35px; display: flex; flex-direction: column; justify-content: center; }
          .register-form label { font-size: 0.9rem; font-weight: 600; color: #444; margin-bottom: 4px; }
          .input-box { display: flex; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; background: #fff; }
          .relative-box { position: relative; }
          .icon-span { padding: 10px 14px; background: #f8f9fa; border-right: 1px solid #ddd; color: #666; display: flex; align-items: center; justify-content: center; }
          .input-box input { flex: 1; padding: 10px 12px; border: none; outline: none; font-size: 0.95rem; }
          .eye-btn { position: absolute; right: 0; top: 0; height: 100%; width: 45px; background: none; border: none; cursor: pointer; color: #777; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: color 0.2s ease; }
          .eye-btn:hover { color: #198754; }
          .register-btn { background: #198754; color: #fff; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1rem; margin-top: 10px; transition: background 0.2s ease; }
          .register-btn:hover { background: #146c43; }
          .register-btn:disabled { background: #a3cfbb; cursor: not-allowed; }
          @media (max-width: 768px) { .register-card { flex-direction: column; height: auto; max-width: 450px; } .register-image { width: 100%; height: 180px; } .register-form { width: 100%; padding: 25px; } }
        `}</style>
      </div>
    </main>
  );
};

export default Register;