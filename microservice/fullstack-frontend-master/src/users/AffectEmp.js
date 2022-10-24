import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [employe, setEmploye] = useState([]);
  const [user, setUser] = useState({
    nom: "",
    duration: "",
    topic: "",
    status:""
  });
  let arrayids = [];
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);





  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9090/project/users/${id}`);
    setUser(result.data);
    console.log("data",result.data);
  };



  //test empl affect
//test get employees
useEffect(() => {
  loadDataEmp();
  console.log("list",arrayids);
}, []);

const loadDataEmp = async () => {
  const result = await axios.get("http://localhost:9090/employee/listemployees");
  console.log(result.data);
  setEmploye(result.data);
};



function getEmployee(arr){
  //arr.forEach(element => {
   // console.log("function",element);
    const result =  axios.put(`http://localhost:9090/project/affectmultiple/${id}/${arr}`);
    console.log("test",result.data);

 // });

}
//end test affect

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
              <label htmlFor="employees" className="form-label">
                Employees
              </label>
              <Multiselect
  displayValue="key"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={(event)=>{
    event.forEach(element => {
      console.log(element);

if (!arrayids.includes(element.cat)) {
  arrayids.push(element.cat)

}
    });
    console.log("arrayIds",arrayids.toString());
    console.log("event",event);
  
    getEmployee(arrayids);
  }
  
  //try to find each employee and affect in project.setEmployee 
 
  
  }
  options={
 /*    [
    {
      cat: 'Group 1',
      key: 'Option 1'
    },
   
  ] */

employe.map((user, index) => ( {
  cat: user.id,
  key: user.firstname
}))
}
  showCheckbox
/>
             
            </div>





          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
