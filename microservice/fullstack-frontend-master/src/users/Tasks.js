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

  
  const [tasks,setTasks]=useState({task:"",project:null})
  const { id } = useParams();

  useEffect(() => {
    loadUser();
   
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9090/project/users/${id}`);
    setUser(result.data);
    const projets = {
      title:result.data.nom,
      idProject:id,
    }
    console.log("data222",proje);

    setTimeout(
      AddProject(projets),1000);
  };
//add project when load page
  const AddProject = async (pro) => {



     console.log("projet",pro);
setProject(pro);
console.log("projec",projec);


    const result = await axios.post("http://localhost:4444/api/proj",pro).then(res => {
      console.log("res",res.data);
     
    }) .catch(err => alert('Something went wrong',err));
   


  };

  //add tasks
  function  Add() {

    const finalst = {
     task :tasks.task,
    project:projec
 
 
   }
     console.log("fin",finalst);
     axios.post("http://localhost:4444/api/tasks",finalst).then(res => {
       console.log(res);
      
     })
     .catch(err => alert('Something went wrong',err))
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


          <div className="mb-3">
              <label htmlFor="task" className="form-label">
                Task
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="task"
                value={tasks.task} onChange={e =>setTasks({...tasks,task:e.target.value})}
               
              />
            </div>
            <button type="submit"  onClick={() => Add()} className="btn btn-outline-primary">
              Submit
            </button>
<br/>

          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
