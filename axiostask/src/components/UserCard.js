import userImg from '../user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
function UserCard({users, handleViewClick, deleteUser, handleEditClick}) {

    return(
        <div id="userList" className="row">
           { users.map((user) => (
                <div key={user.id} className="card mx-auto mt-3" style={{width: "18rem", gap:"2%"}}>
                    <div className="card-body">
                        <div
                            className="user-image"
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                marginRight: "10px",
                                border: "2px solid #ccc",
                            }}
                            >
                            <img
                                src={userImg || "https://via.placeholder.com/50"}
                                alt={`${user.name}'s avatar`}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.address.street} , {user.address.city}</p>
                        <FontAwesomeIcon
                            className="text-success mx-3"
                            icon={faEye}
                            onClick={() => handleViewClick(user)}
                            style={{ cursor: "pointer" }}
                            />
                        <FontAwesomeIcon onClick={() => handleEditClick(user)} style={{ cursor: "pointer" }} className="text-primary" icon={faEdit} />
                        <FontAwesomeIcon style={{ cursor: "pointer" }} className="text-danger mx-3" onClick={() => deleteUser(user.id)} icon={faTrash} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserCard;