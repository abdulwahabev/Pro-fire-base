import { useNavigate, Link, useLocation, Routes, Route } from "react-router-dom";
import { useAuth } from "@/context/Auth";
import { FaHome, FaPlus, FaSignOutAlt, FaTasks, FaThList, FaArrowRight } from "react-icons/fa";
import Add from "./Todos/Add";
import All from "./Todos/All";

const Dashboard = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onLogoutClick = () => {
    handleLogout();
    navigate("/auth/login");
  };

  const isTodoSection = location.pathname.includes("/dashboard/todos/add") || location.pathname.includes("/dashboard/todos/all");

  return (
    <div className="dashboard-container">
      
      {/* 1. سائیڈ بار سلائیڈر */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h2>Saylani Welfare</h2>
          <p>Welcome, <span>{user?.name || "User"}</span></p>
        </div>
        
        <nav className="sidebar-menu">
          <Link to="/dashboard" className={`menu-link ${location.pathname === "/dashboard" ? "active" : ""}`}>
            <FaTasks /> Dashboard Home
          </Link>

          <Link to="/dashboard/todos/add" className={`menu-link ${location.pathname === "/dashboard/todos/add" ? "active" : ""}`}>
            <FaPlus /> Add New Todo
          </Link>

          <Link to="/dashboard/todos/all" className={`menu-link ${location.pathname === "/dashboard/todos/all" ? "active" : ""}`}>
            <FaThList /> All Todos List
          </Link>
          
          <hr style={{ border: "0.5px solid #248a58", margin: "15px 0" }} />
          
          <button className="home-link-btn" onClick={() => navigate("/")}>
            <FaHome /> Back to Main Website
          </button>
        </nav>

        <button className="logout-btn" onClick={onLogoutClick}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* 2. مین باڈی کنٹینٹ */}
      <main className="main-content">
        <header className="topbar">
          <div className="user-info">
            <span className="badge">Saylani Portal</span>
            <strong>{user?.email}</strong>
          </div>
        </header>

        <div className="content-body">
          
          {/* 🔹 ٹاپ نیویگیشن بار (صرف ٹوڈو سیکشنز میں نظر آئے گی) */}
          {isTodoSection && (
            <div className="d-flex flex-wrap gap-2 mb-4 p-3 bg-white rounded-3 shadow-sm align-items-center justify-content-between fade-in">
              <div className="d-flex gap-2">
                <Link to="/dashboard/todos/add" className={`btn btn-sm ${location.pathname === "/dashboard/todos/add" ? "btn-success" : "btn-outline-success"}`}>
                  <FaPlus /> Add Todo
                </Link>
                <Link to="/dashboard/todos/all" className={`btn btn-sm ${location.pathname === "/dashboard/todos/all" ? "btn-success" : "btn-outline-success"}`}>
                  <FaThList /> View Table List
                </Link>
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-light border fw-semibold" onClick={() => navigate("/dashboard")}>
                  <FaTasks className="text-success" /> Go to Dashboard Home
                </button>
                <button className="btn btn-sm btn-dark fw-semibold" onClick={() => navigate("/")}>
                  <FaHome /> Main Website (/)
                </button>
              </div>
            </div>
          )}

          <Routes>
            <Route path="todos/add" element={<Add />} />
            <Route path="todos/all" element={<All />} />
          </Routes>

          {/* 🎨 ڈیزائنر مین ڈیش بورڈ ہوم پیج */}
          {location.pathname === "/dashboard" && (
            <div className="fade-in container py-4">
              <div className="bg-white p-5 rounded-4 shadow-sm text-center border-top border-5 border-success">
                <div className="mb-4">
                  <span className="p-3 bg-success-subtle rounded-circle d-inline-block text-success">
                    <FaTasks size={50} />
                  </span>
                </div>
                <h1 className="fw-bold text-dark mb-2">Welcome to Saylani Task Portal</h1>
                <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                  یہ آپ کا پرسنل ڈیش بورڈ ہے۔ یہاں آپ اپنے تمام اسائنمنٹس، روزمرہ کے ٹوڈوز مینیج کر سکتے ہیں، ان کا اسٹیٹس ٹریک کر سکتے ہیں اور ان میں تبدیلیاں کر سکتے ہیں۔
                </p>
                <div className="mt-4">
                  <button className="btn btn-success btn-lg px-5 fw-bold shadow-sm d-inline-flex align-items-center gap-3" onClick={() => navigate("/dashboard/todos/all")}>
                    Manage Your Todos <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 🎨 سی ایس ایس */}
      <style>{`
        .dashboard-container { display: flex; min-height: 100vh; background: #f8f9fa; font-family: sans-serif; }
        .sidebar { width: 280px; background: #198754; color: #fff; padding: 25px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 4px 0 10px rgba(0,0,0,0.05); }
        .sidebar-brand h2 { font-size: 1.4rem; margin: 0 0 5px 0; font-weight: bold; }
        .sidebar-brand p { font-size: 0.85rem; color: #a3cfbb; margin: 0; }
        .sidebar-brand span { color: #fff; font-weight: bold; }
        .sidebar-menu { margin-top: 40px; flex: 1; display: flex; flex-direction: column; gap: 8px; }
        .menu-link { text-decoration: none; background: none; border: none; color: #c3e6cb; padding: 12px 15px; text-align: left; font-size: 1rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.2s ease; }
        .menu-link:hover, .menu-link.active { background: #146c43; color: #fff; font-weight: 600; }
        .sidebar-menu button.home-link-btn { background: rgba(255,255,255,0.15); color: #fff; font-weight: 500; margin-top: 10px; border: none; padding: 12px 15px; text-align: left; font-size: 1rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; }
        .sidebar-menu button.home-link-btn:hover { background: #fff; color: #198754; font-weight: bold; }
        .logout-btn { background: #dc3545; color: #fff; border: none; padding: 12px; border-radius: 6px; cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; }
        .logout-btn:hover { background: #bd2130; }
        .main-content { flex: 1; display: flex; flex-direction: column; }
        .topbar { background: #fff; padding: 15px 30px; display: flex; justify-content: flex-end; align-items: center; border-bottom: 1px solid #e9ecef; }
        .user-info { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: #495057; }
        .badge { background: #e8f5e9; color: #198754; padding: 4px 10px; border-radius: 20px; font-weight: 600; }
        .content-body { padding: 40px; flex: 1; }
        .fade-in { animation: fadeIn 0.3s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .dashboard-container { flex-direction: column; }
          .sidebar { width: 100%; height: auto; padding: 15px 20px; gap: 15px; }
          .sidebar-menu { margin-top: 0; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 10px; }
          .menu-link { flex: 1; min-width: 130px; justify-content: center; }
          .sidebar-menu button.home-link-btn { margin-top: 0; }
          .sidebar-menu hr { display: none; }
          .content-body { padding: 20px; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;