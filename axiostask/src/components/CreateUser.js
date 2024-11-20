import { useState, useEffect } from "react";
import axiosUsers from "../api/axiosUsers";

const CreateUser = ({addUser, selectedUser, setSelectedUser, users, setUsers, handleClickNavigation}) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    username: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      companyName: "",
      catchPhrase: "",
      bs: ""
    }
  });

  useEffect(() =>{
    if(selectedUser){
      setFormData(selectedUser)
    }
  },[selectedUser])

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setFormData((prev) => {
      let updated = { ...prev };
      let current = updated;

      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          current[key] = value;
        } else {
          current = current[key];
        }
      });

      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let response;
  
      if (selectedUser) {
        // Update existing user (PUT request)
        response = await axiosUsers.put(`/${selectedUser.id}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setFormData(response.data);
        setUsers(users.map((u) => (u.id === selectedUser.id ? response.data : u)));
        setSelectedUser(null)
      } else {
        response = await axiosUsers.post("/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        addUser(response.data);
      }
  
      if (response.status === 200 || response.status === 201) {
        console.log("Response Data:", response.data);
        alert("User submitted successfully!");
        setSubmittedData(response.data);
  
        setFormData({
          id: "",
          name: "",
          email: "",
          username: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
              lat: "",
              lng: ""
            }
          },
          phone: "",
          website: "",
          company: {
            companyName: "",
            catchPhrase: "",
            bs: ""
          }
        });
        handleClickNavigation("/")
      } else {
        console.error("Failed to submit user:", response.statusText);
        alert("Failed to submit user.");
      }
    } catch (error) {
      console.error("Error submitting user:", error);
      alert("Error submitting user.");
    }
  };

  return (
    <div id="createUser">
      <h1 className="mb-4">User Information Form</h1>
      <form onSubmit={handleSubmit}>
        {/* User Info */}
        <div className="row mb-3">
          <div className="col-md-6 text-start">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name"
            />
          </div>
          <div className="col-md-6 text-start">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 text-start">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Enter Username"
            />
          </div>
        </div>

        {/* Address */}
        <h4 className="mt-4 text-start">Address</h4>
        <div className="row mb-3">
          <div className="col-md-6 text-start">
            <label htmlFor="street" className="form-label">Street</label>
            <input type="text" className="form-control" id="street" name="address.street" value={formData.address.street} onChange={handleChange} placeholder="Enter Street"
            />
          </div>
          <div className="col-md-6 text-start">
            <label htmlFor="suite" className="form-label">Suite</label>
            <input type="text" className="form-control" id="suite" name="address.suite" value={formData.address.suite} onChange={handleChange} placeholder="Enter Suite"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 text-start">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" name="address.city" value={formData.address.city} onChange={handleChange} placeholder="Enter City"
            />
          </div>
          <div className="col-md-6 text-start">
            <label htmlFor="zipcode" className="form-label">Zipcode</label>
            <input type="text" className="form-control" id="zipcode" name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} placeholder="Enter Zipcode"
            />
          </div>
        </div>

        {/* Geo Coordinates */}
        <h5 className="mt-4 text-start">Geo Coordinates</h5>
        <div className="row mb-3">
          <div className="col-md-6 text-start">
            <label htmlFor="lat" className="form-label">Latitude</label>
            <input type="text" className="form-control" id="lat" name="address.geo.lat" value={formData.address.geo.lat} onChange={handleChange} placeholder="Enter Latitude"
            />
          </div>
          <div className="col-md-6 text-start">
            <label htmlFor="lng" className="form-label">Longitude</label>
            <input type="text" className="form-control" id="lng" name="address.geo.lng" value={formData.address.geo.lng} onChange={handleChange} placeholder="Enter Longitude"
            />
          </div>
        </div>

        {/* Company */}
        <h4 className="mt-4 text-start">Company</h4>
        <div className="row mb-3">
          <div className="col-md-6 text-start">
            <label htmlFor="companyName" className="form-label">Company Name</label>
            <input type="text" className="form-control" id="companyName" name="company.companyName" value={formData.company.companyName} onChange={handleChange} placeholder="Enter Company Name"
            />
          </div>
          <div className="col-md-6 text-start">
            <label htmlFor="catchPhrase" className="form-label">Catch Phrase</label>
            <input type="text" className="form-control" id="catchPhrase" name="company.catchPhrase" value={formData.company.catchPhrase} onChange={handleChange} placeholder="Enter Catch Phrase"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 text-start">
            <label htmlFor="bs" className="form-label">BS</label>
            <input type="text" className="form-control" id="bs" name="company.bs" value={formData.company.bs} onChange={handleChange} placeholder="Enter BS"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-3 float-end">
          {selectedUser ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
