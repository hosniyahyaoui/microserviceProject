import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    nom: "",
    duration: "",
    topic: "",
    status:""
  });

  const { nom, duration, topic,status } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9090/project/edit`, user).then((response) => console.log("success",response))
    .catch((error) => console.log("error",error));
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9090/project/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>












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
              <label htmlFor="Username" className="form-label">
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
                placeholder="Enter your Topic"
                name="topic"
                value={topic}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="topic" className="form-label">
              Status
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Status"
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
