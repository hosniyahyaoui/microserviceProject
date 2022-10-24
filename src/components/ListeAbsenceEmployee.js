import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import DashboardPaymentsNav from "./DashboardNav";
import DashboardPaymentsSide from "./DashboardSide";

export default function ListeAbsenceEmployee() {
    const [listabsences,setListabsences]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8083/absence/api/retrieve-all-absences")
        .then((getData)=>{
            setListabsences(getData.data);
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
                    <h1>Absences</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Absences</li>
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
                            <h3 className="card-title">Absences management</h3>
                        </div>
                        <div className="card-body">
                            <table id="dataTable" className="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Absence Date</th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        listabsences.map((e,key)=>(
                                            <tr key={key}>
                                            <td>{e.idAbsence}</td>
                                            <td>{e.dateAbsence}</td>
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
<DashboardPaymentsSide></DashboardPaymentsSide>
</div>
  )
}
