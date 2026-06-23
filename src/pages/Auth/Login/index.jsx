import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "@/context/Auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

const initialState = { email: "", password: "" };

const Login = () => {

  const { dispatch } = useAuth();

  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = state;

    if (!email) { return window.toastify("Please enter your email", "error"); }
    if (!password) { return window.toastify("Please enter your password", "error"); }

    setIsProcessing(true);

    // Firebase Sign In
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const firebaseUser = userCredential.user;

        window.toastify("Logged In Successfully", "success");

        // Jaise pehle pure object pass ho raha tha, ab Firebase user object pass hoga
        dispatch({ isAuth: true, user: firebaseUser });

        // State reset aur guaranteed navigation
        setState(initialState);
        setShowPassword(false);

        // Yeh line user ko dashboard par le jayegi jaise localStorage mein le ja rahi thi
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login Error: ", error);

        if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          window.toastify("Invalid email or password! Please try again.", "error");
        } else {
          window.toastify("Something went wrong during login", "error");
        }
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <main>

      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f4f6f8", padding: "20px" }}>

        <form className="login-card" onSubmit={handleLogin}>
          <div className="login-image">
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80" alt="login" />
          </div>

          <div className="login-form">
            <h2 style={{ color: "#198754", textAlign: "center", margin: "0 0 5px 0" }}>Saylani Welfare</h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>Forgot Password
              <Link
              to="/auth/forgot-password"
              style={{ color: "#198754", marginLeft:"5px", fontSize: "0.85rem", textDecoration: "none", fontWeight: "500" }}
              onMouseEnter={(e) => e.target.style.textDecoration = "none"}
              onMouseLeave={(e) => e.target.style.textDecoration = "none"}
            >
              Reset Password
            </Link></p>

            <label htmlFor="email">Email</label>
            <div className="input-box">
              <span className="icon-span"><FaEnvelope /></span>
              <input type="email" id="email" name="email" placeholder="Enter email" value={state.email} onChange={handleChange} />
            </div>

            <label htmlFor="password">Password</label>
            <div className="input-box relative-box">
              <span className="icon-span"><FaLock /></span>
              <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter password" value={state.password} onChange={handleChange} style={{ paddingRight: "45px" }} />
              <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button type="submit" className="login-btn" disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Login"}
            </button>

            <p style={{ textAlign: "center", marginTop: "15px", marginBottom: "0" }}>
              Don’t have account?{" "}
              <Link to="/auth/register" style={{ color: "#198754", fontWeight: "600", textDecoration: "none" }}>Register</Link>
            </p>

          </div>

        </form>

        <style>{`
          .login-card { width: 100%; max-width: 900px; height: 500px; display: flex; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); background: #fff;}
          .login-image { width: 50%; height: 100%;}
          .login-image img { width: 100%; height: 100%; object-fit: cover;}
          .login-form { width: 50%; padding: 40px; display: flex; flex-direction: column; justify-content: center;}
          .login-form label { font-size: 0.9rem; font-weight: 600; color: #444; margin-bottom: 4px;}
          .input-box { display: flex; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; background: #fff;}
          .relative-box { position: relative;}
          .icon-span { padding: 10px 14px; background: #f8f9fa; border-right: 1px solid #ddd; color: #666; display: flex; align-items: center; justify-content: center;}
          .input-box input { flex: 1; padding: 10px 12px; border: none; outline: none; font-size: 0.95rem;}
          .eye-btn { position: absolute; right: 0; top: 0; height: 100%; width: 45px; background: none; border: none; cursor: pointer; color: #777; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: color 0.2s ease;}
          .eye-btn:hover { color: #198754;}
          .login-btn { background: #198754; color: #fff; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1rem; margin-top: 10px; transition: background 0.2s ease;}
          .login-btn:hover { background: #146c43;}
          .login-btn:disabled { background: #a3cfbb; cursor: not-allowed;}
          @media (max-width: 768px) { .login-card { flex-direction: column; height: auto; max-width: 450px;} .login-image { width: 100%; height: 200px;} .login-form { width: 100%; padding: 25px;} }
        `}</style>
      </div>
    </main>
  );
};

export default Login;