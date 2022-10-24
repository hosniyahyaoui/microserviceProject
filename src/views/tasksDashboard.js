import { useEffect, useState } from "react";

import DashboardSide from "../components/DashboardSide";

import axios from 'axios'
const $ = require('jquery')
export default function TaskManager()
{
    const [list,setlist]=useState([])
   
    const [qr,qrs]=useState("")
   
    useEffect(() => {
       

        axios.get("http://localhost:8082/retrieve-all-tasks").then((res)=>{
                console.log(res.data);
                setlist(res.data)
               })
      },[]);

const onDelete = e=> event =>{
    axios.get("http://localhost:8082/remove-task/"+e.idTask).then((res)=>{
        console.log(res)
        qrs(res.data)
    })
}

console.log(qr)
      return (<>

  
        <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>tasks</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">tasks</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
       
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                Task Manager</h3>
                            </div>
                            <div class="card-body">
                                <table id="dataTable" class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Task_title</th>
                                        <th>Task_date</th>
                                        <th>Task_deadline</th>
                                        <th>Task_personal</th>
                                        <th>Task_state</th>
                                        <th>Delete task</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            list.map(e=>(
                                                <tr>
                                                <td>{e.title}</td>
                                                <td>{e.date}</td>
                                                <td>{e.deadline}</td>
                                                <td>{e.personal}</td>
                                                <td>{e.state}</td>
                                               
                                                <td><button className="btn btn-danger" onClick={onDelete(e)}>delete</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <script>
        
        </script>
    </div>
        <DashboardSide></DashboardSide>
        <footer class="main-footer">
        <div class="float-right d-none d-sm-block">
            <b>Version</b> 3.2.0
        </div>
        <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
    <aside class="control-sidebar control-sidebar-dark">
    </aside>       
        </>
        
      )
     
}