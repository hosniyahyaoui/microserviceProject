import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import DashboardPaymentsNav from "./DashboardNav";
import DashboardPaymentsSide from "./DashboardSide";

export default function ListeMissions() {
    const [listMission,setListMission]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8082/mission/api/retrieve-all-missions")
        .then((getData)=>{
            setListMission(getData.data);
        })
    },[])
    const setIdMission =(idMission,motif,dateDebut,dateFinPrevu)=>{
        console.log(idMission);
        localStorage.setItem('idMission',idMission);
        localStorage.setItem('motif',motif);
        localStorage.setItem('dateDebut',dateDebut);
        localStorage.setItem('dateFinPrevu',dateFinPrevu);
    }
    const DeleteMission = (id) => {
        axios.delete(`http://localhost:8082/mission/api/remove-mission/${id}`)
        .then(()=>{
            axios.get("http://localhost:8082/mission/api/retrieve-all-missions")
            .then((getData)=>{
                setListMission(getData.data);
            })
        })
    }
  return (
    <div>
    <DashboardPaymentsNav></DashboardPaymentsNav>
    <div className="content-wrapper">
    <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Missions</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Missions</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
   
    <section className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Missions management</h3>
                        </div>
                        <div className="card-body">
                            <table id="dataTable" className="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Motif</th>
                                    <th>Date début</th>
                                    <th>Date fin prévue</th>
                                    <th>Date fin</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        listMission.map((e,key)=>(
                                            <tr key={key}>
                                            <td>{e.idMission}</td>
                                            <td>{e.motif}</td>
                                            <td>{e.dateDebut}</td>
                                            <td>{e.dateFinPrevu}</td>
                                            <td>{e.dateFin}</td>
                                            <td>
                                            <a href="/HR/mission/update" style={{color: "white"}}>
                                                <button className='btn btn-primary' onClick={()=>setIdMission(e.idMission,e.motif,e.dateDebut,e.dateFinPrevu)}>Update</button>
                                            </a>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={()=>DeleteMission(e.idMission)} >delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <a href="/HR/mission/affect" style={{color: "white"}}>
                            <button className="btn btn-success" style={{marginLeft: "30em", marginTop: "20px"}}  > 
                            Affect mission
                                </button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script>
    
    </script>
</div>
<DashboardPaymentsSide></DashboardPaymentsSide>
</div>
  )
}
