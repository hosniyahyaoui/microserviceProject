import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    
    msg: "",
    dateOfPosting: "",
    deadline: "",
    status:"NotDoneYet"
  });
  const states=["NotDoneYet","progress","done"]

  const { projectId, msg, dateOfPosting,deadline,status } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4444/api/${id}`, user).then((response) => console.log("success",response))
    .catch((error) => console.log("error",error));
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4444/api/${id}`);
    setUser(result.data);
    console.log("user",user);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Task</h2>












          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="msg" className="form-label">
                Message
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="msg"
                value={msg}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dateposting" className="form-label">
                dateOfPosting
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your dateof posting"
                name="dateposting"
                value={dateOfPosting}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="deadline" className="form-label">
              deadline
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your deadline"
                name="deadline"
                value={deadline}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="topic" className="form-label">
              Status
              </label>
              <div className="mb-3">
    <label htmlFor="deadline" className="form-label">
      progress
    </label>
 
<select  className="form-select form-select-sm"required id="lang" aria-label=".form-select-sm example" >
                 {
                  states.map(status=>(
                   <option value={status} name="status" onChange={(e) => onInputChange(e)}  >{status}</option>
                  ))
            
                  }
            </select>
</div>
            
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
