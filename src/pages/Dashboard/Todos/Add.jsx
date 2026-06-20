import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/Auth";
import { FaCheckCircle, FaHeading, FaCalendarAlt, FaListUl, FaRegFileAlt } from "react-icons/fa";

const initialState = { title: "", dueDate: "", description: "", priority: "Medium" };

const Add = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, dueDate, description, priority } = state;

    if (!title.trim() || !dueDate) {
      return window.toastify ? window.toastify("Please fill all required fields", "error") : alert("Required fields missing");
    }

    const newTodo = {
      id: Date.now().toString(),
      title: title.trim(),
      dueDate,
      description: description.trim(),
      priority,
      status: "pending",
      createdBy: user?.email || "anonymous"
    };

    const currentTodos = JSON.parse(localStorage.getItem("todos")) || [];
    currentTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(currentTodos));

    if (window.toastify) window.toastify("Task Added Successfully!", "success");
    setState(initialState);
    navigate("/dashboard/todos/all"); // 👈 ایڈ ہونے کے بعد ٹیبل پر نیویگیٹ
  };

  return (
    <div className="container py-2 fade-in">
      <div className="mb-4">
        <h2 className="text-success fw-bold m-0">Add New Assignment</h2>
        <p className="text-muted small">Create a new task for your portal.</p>
      </div>

      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Task Title *</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FaHeading /></span>
                  <input type="text" className="form-control" name="title" placeholder="Title" value={state.title} onChange={handleChange} />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Due Date *</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FaCalendarAlt /></span>
                  <input type="date" className="form-control" name="dueDate" value={state.dueDate} onChange={handleChange} />
                </div>
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold">Priority *</label>
                <div className="input-group">
                  <span className="input-group-text bg-light"><FaListUl /></span>
                  <select className="form-select" name="priority" value={state.priority} onChange={handleChange}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold">Description</label>
                <textarea className="form-control" name="description" rows="3" placeholder="Details..." value={state.description} onChange={handleChange}></textarea>
              </div>

              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-success w-100 py-2 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2">
                  <FaCheckCircle /> Save Task
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;