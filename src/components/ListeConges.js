import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import DashboardPaymentsNav from "./DashboardNav";
import DashboardPaymentsSide from "./DashboardSide";

export default function ListeConges() {
    const [listConges,setListConges]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8082/conges/api/retrieve-all-conges")
        .then((getData)=>{
            setListConges(getData.data);
        })
    },[])
   
  return (
    <div>
    <DashboardPaymentsNav></DashboardPaymentsNav>
    <div className="content-wrapper">
    <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Leaves</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Leaves</li>
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
                            <h3 className="card-title">Leaves management</h3>
                        </div>
                        <div className="card-body">
                            <table id="dataTable" className="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Motif</th>
                                    <th>start date</th>
                                    <th>number of days</th>
                                    <th>status</th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        listConges.map((e,key)=>(
                                            <tr key={key}>
                                            <td>{e.idConges}</td>
                                            <td>{e.motif}</td>
                                            <td>{e.dateDebut}</td>
                                            <td>{e.nbr_jours}</td>
                                            <td>{e.etat}</td>
                            
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <a href="/HR/conges/EnAttente" style={{color: "white"}}>
                            <button className="btn btn-success" style={{marginLeft: "30em", marginTop: "20px"}}  > 
                            Validate Leaves
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
