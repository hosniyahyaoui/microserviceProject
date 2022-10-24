import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
 
  const [user, setUser] = useState({
    nom: "",
    duration: "",
    topic: "",
    status:""
  });
 
  const { nom, duration, topic,status,employees } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };




  const onSubmit = async (e) => {
    e.preventDefault();
    //user: this.state.user,
    await axios.post("http://localhost:9090/project/save", user) .then((response) => console.log("success",response))
    .catch((error) => console.log("error",error));
    console.log("dataUser",user._id);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Project</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">
                duration
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your duration"
                name="duration"
                value={duration}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="topic" className="form-label">
                Topic
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your topic"
                name="topic"
                value={topic}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your status"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
              />
            </div>

           


            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
