import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../config/firebase"; // Apne firebase config ka sahi path dein

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    // Basic Validation
    if (!trimmedEmail) { 
      return window.toastify ? window.toastify("Please enter your email address", "error") : alert("Please enter your email"); 
    }
    if (window.isValidEmail && !window.isValidEmail(trimmedEmail)) { 
      return window.toastify ? window.toastify("Please enter a valid email address", "error") : alert("Invalid email"); 
    }

    setIsProcessing(true);

    // Firebase Password Reset Logic
    sendPasswordResetEmail(auth, trimmedEmail)
      .then(() => {
        if (typeof window.toastify === "function") {
          window.toastify("Password reset link sent to your email!", "success");
        } else {
          alert("Password reset link sent to your email!");
        }
        
        // Success ke baad user ko vapas login page par bhej dein
        navigate("/auth/login");
      })
      .catch((error) => {
        console.error("Reset Password Error: ", error);
        
        // Firebase specific errors handle karein
        if (error.code === "auth/user-not-found") {
          window.toastify?.("This email is not registered with us!", "error");
        } else if (error.code === "auth/invalid-email") {
          window.toastify?.("Invalid email format!", "error");
        } else {
          window.toastify?.("Something went wrong. Please try again.", "error");
        }
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <main>
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f4f6f8", padding: "20px" }}>
        
        <form className="forgot-card" onSubmit={handleResetPassword}>
          <div className="forgot-image">
            <img src="https://images.unsplash.com/photo-1600695268275-1a6468700bd5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="forgot password" />
          </div>

          <div className="forgot-form">
            <h2 style={{ color: "#198754", textAlign: "center", margin: "0 0 5px 0" }}>Saylani Welfare</h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "25px" }}>Reset your account password</p>

            <div className="alert alert-info text-center py-2" style={{ fontSize: "0.85rem", borderRadius: "6px" }}>
              Enter your email and we'll send you a link to reset your password.
            </div>

            <label htmlFor="email" style={{ fontSize: "0.9rem", fontWeight: "600", color: "#444", marginBottom: "4px" }}>Email Address</label>
            <div className="input-box">
              <span className="icon-span"><FaEnvelope /></span>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter registered email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            <button type="submit" className="forgot-btn" disabled={isProcessing}>
              {isProcessing ? "Sending Link..." : "Reset Password"}
            </button>

            <p style={{ textAlign: "center", marginTop: "20px", marginBottom: "0" }}>
              <Link to="/auth/login" style={{ color: "#198754", fontWeight: "600", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <FaArrowLeft style={{ fontSize: "0.85rem" }} /> Back to Login
              </Link>
            </p>
          </div>
        </form>

        {/* Existing Styling scoped to this component */}
        <style>{`
          .forgot-card { width: 100%; max-width: 900px; height: 500px; display: flex; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); background: #fff;}
          .forgot-image { width: 50%; height: 100%;}
          .forgot-image img { width: 100%; height: 100%; object-fit: cover;}
          .forgot-form { width: 50%; padding: 40px; display: flex; flex-direction: column; justify-content: center;}
          .input-box { display: flex; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; background: #fff;}
          .icon-span { padding: 10px 14px; background: #f8f9fa; border-right: 1px solid #ddd; color: #666; display: flex; align-items: center; justify-content: center;}
          .input-box input { flex: 1; padding: 10px 12px; border: none; outline: none; font-size: 0.95rem;}
          .forgot-btn { background: #198754; color: #fff; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1rem; margin-top: 5px; transition: background 0.2s ease;}
          .forgot-btn:hover { background: #146c43;}
          .forgot-btn:disabled { background: #a3cfbb; cursor: not-allowed;}
          @media (max-width: 768px) { .forgot-card { flex-direction: column; height: auto; max-width: 450px;} .forgot-image { width: 100%; height: 180px;} .forgot-form { width: 100%; padding: 25px;} }
        `}</style>
      </div>
    </main>
  );
};

export default ForgotPassword;