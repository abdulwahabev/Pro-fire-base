<div className="content-body">
  
  {/* 🔹 ٹوڈو اسکرینز کے اندر کوئک نیویگیشن بٹنز (صرف تب دیکھیں گے جب یوزر ٹوڈو سیکشن میں ہو) */}
  {(location.pathname.includes("/dashboard/todos/add") || location.pathname.includes("/dashboard/todos/all")) && (
    <div className="d-flex flex-wrap gap-2 mb-4 p-3 bg-white rounded-3 shadow-sm align-items-center justify-content-between fade-in">
      {/* لیفٹ سائیڈ: اندرونی پیجز پر سوئچ کرنے کے لنکس */}
      <div className="d-flex gap-2">
        <Link to="/dashboard/todos/add" className={`btn btn-sm ${location.pathname === "/dashboard/todos/add" ? "btn-success" : "btn-outline-success"}`}>
          <FaPlus /> Add New
        </Link>
        <Link to="/dashboard/todos/all" className={`btn btn-sm ${location.pathname === "/dashboard/todos/all" ? "btn-success" : "btn-outline-success"}`}>
          <FaThList /> View All
        </Link>
      </div>

      {/* رائٹ سائیڈ: واپس ڈیش بورڈ ہوم یا مین ہوم پر جانے کے ایکشن بٹنز */}
      <div className="d-flex gap-2">
        <button className="btn btn-sm btn-light border text-dark fw-semibold" onClick={() => navigate("/dashboard")}>
          <FaTasks className="text-success" /> Go to Dashboard Home
        </button>
        <button className="btn btn-sm btn-dark fw-semibold" onClick={() => navigate("/")}>
          <FaHome /> Go to Main Website (/)
        </button>
      </div>
    </div>
  )}

  {/* 🛠️ یہاں اندر نیسٹڈ راؤٹس کام کریں گے */}
  <Routes>
    {/* جب یوزر /dashboard/todos/add پر جائے */}
    <Route path="todos/add" element={<Add />} />
    
    {/* جب یوزر /dashboard/todos/all پر جائے */}
    <Route path="todos/all" element={<All />} />
  </Routes>

  {/* اگر یوزر صرف مین ڈیش بورڈ یو آر ایل پر ہے تو ہوم کارڈ دیکھے گا */}
  {location.pathname === "/dashboard" && (
    <div className="fade-in">
      <div className="view-header">
        <div>
          <h1>Welcome Dashboard</h1>
          <p>Manage your tasks, view logs, and track your code assignments.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card status-blue" onClick={() => navigate("/dashboard/todos/all")} style={{ cursor: "pointer" }}>
          <h3>View Assignments</h3>
          <p style={{ fontSize: "1.1rem", marginTop: "10px", color: "#0d6efd", fontWeight: "bold" }}>Check All Todos →</p>
        </div>
      </div>
    </div>
  )}
</div>