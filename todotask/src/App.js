import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [originalTodos, setOriginalTodos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [todoFilter, setTodoFilter] = useState("All");
  const [editIndex, setEditIndex] = useState(null);
  const nameInputRef = useRef(null);

  const changeName = (event) => setName(event.target.value);
  const changeDescription = (event) => setDescription(event.target.value);

  const addItem = (newItem) => {
    setOriginalTodos((prevItems) => [...prevItems, newItem]);
    setTodos((prevItems) => [...prevItems, newItem]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedTodos = originalTodos.map((todo, index) =>
        index === editIndex ? { ...todo, name, description } : todo
      );
      setOriginalTodos(updatedTodos);
      setTodos(
        updatedTodos.filter((todo) =>
          todoFilter === "All" || (todoFilter === "Completed" ? todo.status === "Completed" : todo.status !== "Completed")
        )
      );
      setEditIndex(null);
    } else {
      const status = "Not";
      addItem({ name, description, status });
    }
    setName("");
    setDescription("");
  };

  const handleFilter = (event) => {
    const selectedFilter = event.target.value;
    setTodoFilter(selectedFilter);

    if (selectedFilter === "All") {
      setTodos(originalTodos);
    } else {
      const filteredTodos = originalTodos.filter((todo) =>
        selectedFilter === "Completed" ? todo.status === "Completed" : todo.status !== "Completed"
      );
      setTodos(filteredTodos);
    }
  };

  const updateStatus = (index, newStatus) => {
    const updatedTodos = originalTodos.map((todo, i) =>
      i === index ? { ...todo, status: newStatus } : todo
    );
    setOriginalTodos(updatedTodos);

    if (todoFilter === "All") {
      setTodos(updatedTodos);
    } else {
      const filteredTodos = updatedTodos.filter((todo) =>
        todoFilter === "Completed" ? todo.status === "Completed" : todo.status !== "Completed"
      );
      setTodos(filteredTodos);
    }
  };

  const handleEdit = (index) => {
    const todo = todos[index];
    setName(todo.name);
    setDescription(todo.description);
    setEditIndex(index);
    nameInputRef.current.focus();
  };

  const handleDelete = (index) => {
    const updatedTodos = originalTodos.filter((_, i) => i !== index);
    setOriginalTodos(updatedTodos);

    if (todoFilter === "All") {
      setTodos(updatedTodos);
    } else {
      const filteredTodos = updatedTodos.filter((todo) =>
        todoFilter === "Completed" ? todo.status === "Completed" : todo.status !== "Completed"
      );
      setTodos(filteredTodos);
    }
  };

  return (
    <div className="container">
      <h1 className="text-success mt-3 text-center">Todo Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mt-5">
          <div className="col-sm-5">
            <input type="text" id="name" value={name} onChange={changeName} className="form-control" placeholder="Todo Name" ref={nameInputRef} />
          </div>
          <div className="col-sm-5">
            <input type="text" id="description" value={description} onChange={changeDescription} className="form-control" placeholder="Todo Description" />
          </div>
          <div className="col-sm-2">
            <input type="submit" className="btn btn-success" value={editIndex !== null ? "Update" : "Add"} />
          </div>
        </div>
      </form>
      <div className="mt-5">
        <span>My Todos</span>
        <select value={todoFilter} onChange={handleFilter} className="float-end bg-danger">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not">Not Completed</option>
        </select>
        <span className="float-end mx-4">Status Filter :</span>
      </div>
      <div className="mt-5">
        <div className="row" style={{ justifyContent: "center" }}>
          {todos.map((item, index) => (
            <div key={index} className="col-sm-4 mb-3">
              <div className="card" style={{ width: "24rem" }}>
                <div className="card-body">
                  <label>Name: {item.name}</label>
                  <p>Description: {item.description}</p>
                  <p>
                    Status:{" "}
                    <select className="bg-danger" value={item.status} onChange={(e) => updateStatus(index, e.target.value)}>
                      <option value="Not">Not Completed</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </p>
                  <a href="#" onClick={() => handleDelete(index)} className="btn btn-danger btn-sm float-end mx-3">Delete</a>
                  <a href="#" onClick={() => handleEdit(index)} className="btn btn-primary btn-sm float-end">Edit</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
