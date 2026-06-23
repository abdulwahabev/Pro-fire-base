import { useState, useEffect } from "react";
import { useAuth } from "@/context/Auth";
import { FaEdit, FaTrash, FaExclamationTriangle, FaTimes, FaSave } from "react-icons/fa";

const All = () => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const loadTodos = () => {
    const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const myTodos = allTodos.filter(todo => todo.createdBy === user?.email);
    setTodos(myTodos);
  };

  useEffect(() => {
    if (user?.email) {
      loadTodos();
    }
  }, [user]);

  const handleDelete = (id) => {
    const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = allTodos.filter(todo => todo.id !== id);
    
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos.filter(todo => todo.createdBy === user?.email));

    if (window.toastify) {
      window.toastify("Task Deleted Successfully!", "success");
    }
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = allTodos.map(todo => todo.id === editingTodo.id ? editingTodo : todo);
    
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setEditingTodo(null);
    
    if (window.toastify) {
      window.toastify("Task Updated Successfully!", "success");
    }
    loadTodos();
  };

  const getPriorityClass = (priority) => {
    if (priority === "High") return "badge bg-danger text-white";
    if (priority === "Medium") return "badge bg-warning text-dark";
    return "badge bg-success text-white";
  };

  return (
    <div className="container py-2 fade-in">
      <div className="mb-4">
        <h2 className="text-success fw-bold m-0">Todo Management Board</h2>
        <p className="text-muted small">Edit, delete, and monitor your records in real-time.</p>
      </div>

      {todos.length === 0 ? (
        <div className="card border-0 shadow-sm text-center p-5 rounded-3">
          <div className="text-muted mb-3"><FaExclamationTriangle size={40} className="text-warning" /></div>
          <h5 className="fw-bold text-secondary">No Tasks Records Available</h5>
        </div>
      ) : (
        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0 text-nowrap">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Priority</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>
                      <div className="fw-bold text-dark">{todo.title}</div>
                      <small className="text-muted text-truncate d-inline-block" style={{ maxWidth: "200px" }}>
                        {todo.description || "No description"}
                      </small>
                    </td>
                    <td><span className={getPriorityClass(todo.priority)}>{todo.priority}</span></td>
                    <td>{todo.dueDate}</td>
                    <td>
                      <span className={`badge ${todo.status === "pending" ? "bg-light text-warning border border-warning" : "bg-light text-success border border-success"}`}>
                        {todo.status}
                      </span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center gap-2">
                        <button className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1" onClick={() => setEditingTodo({ ...todo })}>
                          <FaEdit /> Edit
                        </button>
                        <button className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1" onClick={() => handleDelete(todo.id)}>
                          <FaTrash /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {editingTodo && (
        <div 
          style={{ 
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999, 
            backdropFilter: "blur(4px)" 
          }}
        >
          <div 
            className="card border-0 shadow-lg rounded-3 w-100 m-3" 
            style={{ 
              maxWidth: "500px", 
              backgroundColor: "#ffffff", 
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              zIndex: 100000 
            }}
          >

            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center py-3 border-0">
              <h5 className="card-title fw-bold m-0 text-white">Edit Task Assignment</h5>
              <button 
                type="button" 
                className="btn text-white p-0 border-0 m-0 shadow-none" 
                onClick={() => setEditingTodo(null)}
                style={{ cursor: "pointer", background: "none" }}
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <form onSubmit={handleEditSave} className="card-body p-4 bg-white rounded-bottom-3" style={{ backgroundColor: "#ffffff" }}>
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">Task Title</label>
                <input type="text" className="form-control" value={editingTodo.title} onChange={e => setEditingTodo(prev => ({ ...prev, title: e.target.value }))} required />
              </div>
              
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">Due Date</label>
                <input type="date" className="form-control" value={editingTodo.dueDate} onChange={e => setEditingTodo(prev => ({ ...prev, dueDate: e.target.value }))} required />
              </div>
              
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold text-dark">Priority</label>
                  <select className="form-select" value={editingTodo.priority} onChange={e => setEditingTodo(prev => ({ ...prev, priority: e.target.value }))}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold text-dark">Status</label>
                  <select className="form-select" value={editingTodo.status} onChange={e => setEditingTodo(prev => ({ ...prev, status: e.target.value }))}>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">Description</label>
                <textarea className="form-control" rows="3" value={editingTodo.description || ""} onChange={e => setEditingTodo(prev => ({ ...prev, description: e.target.value }))}></textarea>
              </div>
              
              <div className="d-flex gap-2 justify-content-end mt-4">
                <button type="button" className="btn btn-light border px-4 fw-semibold" onClick={() => setEditingTodo(null)}>Cancel</button>
                <button type="submit" className="btn btn-success px-4 fw-semibold d-flex align-items-center gap-2"><FaSave /> Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default All;