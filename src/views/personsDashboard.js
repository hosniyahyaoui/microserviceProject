import { useEffect, useState } from "react";

import DashboardSide from "../components/DashboardSide";

import axios from 'axios'
const $ = require('jquery')
export default function PersonManager()
{
    const [list,setlist]=useState([])
   
    const [qr,qrs]=useState("")
   
    useEffect(() => {
       

        axios.get("http://localhost:8082/retrieve-all-persons").then((res)=>{
                console.log(res.data);
                setlist(res.data)
               })
      },[]);

const onDelete = e=> event =>{
    axios.get("http://localhost:8082/remove-person/"+e.idPerson).then((res)=>{
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
                        <h1>Persons</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">person</li>
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
                                Person Manager</h3>
                            </div>
                            <div class="card-body">
                                <table id="dataTable" class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Person_full_name</th>
                                        <th>Person_gender</th>
                                        <th>Person_Email</th>
                                        <th>Delete Person</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            list.map(e=>(
                                                <tr>
                                                <td>{e.full_name}</td>
                                                <td>{e.gender}</td>
                                                <td>{e.Email}</td>
                                            
                                               
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