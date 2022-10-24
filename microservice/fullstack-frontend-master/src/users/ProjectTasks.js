import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4444/api/group");
    console.log(result.data.newData);
    setUsers(result.data.newData);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4444/api/${id}`);
    loadUsers();
  };

 

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Project</th>
              <th scope="col">tasks</th>
           
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td><tr><td>  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.projectId}`}
                  >
                    View detais Project
                  </Link></td></tr></td>
              <td>  {user.taskss.map((task,index)=>(<div className="container"><div className="py-4"><table className="table border shadow">
                <thead>
                <th scope="col">S.N</th>
                <th scope="col">Name</th>
              <th scope="col">State</th>
              <th scope="col">dateOfPosting</th>
              <th scope="col">deadline</th>
              <th scope="col">Actions</th>
                </thead>
                <tbody>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
<td>{task.msg}</td>
<td>{task.state}</td>
<td>{task.dateOfPosting}</td>
<td>{task.deadline}</td>
<td> 
<Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edittask/${task._id}`}
                  >
                    Edit
                  </Link>
  
  
    <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(task._id)}
                  >
                    Delete
                  </button></td>

</tbody>
             </table></div></div>))}
             </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
      </div>
    </div>
  );
}
