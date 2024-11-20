import { useState, useEffect } from "react";
import { Modal } from "bootstrap";
import { Routes, Link, Route } from "react-router-dom";
import UserCard from "./UserCard";
import CreateUser from "./CreateUser";
import loader from "../loader.gif";
import { useNavigate } from "react-router-dom";

import axiosUsers from "../api/axiosUsers";

function UserList() {
    const[users, setUsers] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[selectedUser, setSelectedUser] = useState(null);

    const handleViewClick = (user) => {
        setSelectedUser(user);
        const modal = new Modal(document.getElementById("userDetailsModal")).show();
    }
    const navigate = useNavigate();

    const handleClickNavigation = (page) => {
        navigate(page);
    };

    const handleEditClick = (user) => {
        setSelectedUser(user);
        handleClickNavigation("/CreateUser");
    }

    const loadUsers = async () => {
        setLoading(true);
        setError(null);

        try{
            // const data = await fetchUsers();
            const response = await axiosUsers.get();
            setUsers(response.data);
        }catch(err){
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }

    const addUser = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    }

    const [responseMessage, setResponseMessage] = useState(""); // State to store feedback messages

    const deleteUser = async (id) => {
        try {
            const response = await axiosUsers.delete(`/${id}`);
            console.log(response);
            setResponseMessage(`User with ID ${id} deleted successfully!`);
            alert(`User with ID ${id} deleted successfully!`);
            setUsers(users.filter((user) => user.id !== id));
        } catch (error) {
            setResponseMessage(`Error deleting user: ${error.message}`);
            alert(`Error deleting user: ${error.message}`);
        }
    };    

    useEffect(() => {
        loadUsers();
    },[])

    if(loading) return <p className="text-center"><img src={loader} alt="loader" /></p>
    if(error) return <p>Error: {error}</p>


    return(
        <div className="user-list">
            <div className="container mt-4 users">
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <Link to="/"><a className="nav-link active" id="userList">Users List</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/CreateUser"><a className="nav-link" id="createUser">Create User</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body row">
                        <Routes>
                            <Route path="/" element={<UserCard users={users} handleViewClick={handleViewClick} deleteUser={deleteUser} handleEditClick={handleEditClick} />} />
                            <Route path="/CreateUser" element={<CreateUser addUser={addUser} selectedUser={selectedUser} setSelectedUser={setSelectedUser} users={users} setUsers={setUsers} handleClickNavigation={handleClickNavigation} />} />
                        </Routes>
                        {
                            
                        }
                    </div>
                </div>
                 {/* Bootstrap Modal */}
                <div
                    className="modal fade"
                    id="userDetailsModal"
                    tabIndex="-1"
                    aria-labelledby="userDetailsModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="userDetailsModalLabel">
                            {selectedUser ? selectedUser.name : "User Details"}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        </div>
                        <div className="modal-body">
                        {selectedUser && (
                            <>
                            <p><strong>Name:</strong> {selectedUser.name}</p>
                            <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}</p>
                            <p><strong>Email:</strong> {selectedUser.email || "N/A"}</p>
                            <p><strong>Phone:</strong> {selectedUser.phone || "N/A"}</p>
                            </>
                        )}
                        </div>
                        <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList;