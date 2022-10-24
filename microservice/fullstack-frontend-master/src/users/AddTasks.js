import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    nom: "",
    duration: "",
    topic: "",
    status:""
  });
  const [tasks,setTasks]=useState({projectId:"",msg:"",state:"",dateOfPosting:"",deadline:""})

  const { id } = useParams();
  const states=["NotDoneYet","progress","done"]

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9090/project/users/${id}`);
    setUser(result.data);
    console.log("data",result.data);
  };

  function  Add() {
 
    const classaa = document.querySelector('#lang').value;
  const finalst={
    projectId:id,
    msg:tasks.msg,
    state:classaa,
    
    deadline:tasks.deadline,
  }
  console.log("calssa",classaa);
  console.log("tasks",tasks);
  axios.post('http://localhost:4444/api/tasks',finalst).then(res => {
    console.log(finalst);
   
  })
  .catch(err => alert('Something went wrong'))
  
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user._id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.nom}
                </li>
                <li className="list-group-item">
                  <b>Duration:</b>
                  {user.duration}
                </li>
                <li className="list-group-item">
                  <b>Topic:</b>
                  {user.topic}
                </li>
                <li className="list-group-item">
                  <b>Status:</b>
                  {user.status}
                </li>
              </ul>
            </div>
          </div>
     
        
        </div>


        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add Tasks</h2>
        <div className="card">

<div className="mb-3">
    <label htmlFor="msg" className="form-label">
      Message
    </label>
    <input
      type={"text"}
      className="form-control"
      placeholder="Enter your message"
      name="msg"
      value={tasks.msg} onChange={e =>setTasks({...tasks,msg:e.target.value})}
     
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
      name="msg"
      value={tasks.deadline} onChange={e =>setTasks({...tasks,deadline:e.target.value})}
     
    />
  </div>
  <div className="mb-3">
    <label htmlFor="deadline" className="form-label">
      progress
    </label>
 
<select  className="form-select form-select-sm"required id="lang" aria-label=".form-select-sm example" >
                 {
                  states.map(obj=>(
                   <option value={obj} onChange={e =>setTasks({...tasks,state:e.target.value})}  >{obj}</option>
                  ))
            
                  }
            </select>
</div>

</div>
<button type="submit" onClick={() => Add()} className="btn btn-outline-primary" >AddTask</button><br/>
<div>

</div>
</div>

      </div>
      <div>
      <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link></div>  
    </div>
  );
}
